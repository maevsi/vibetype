import type { Kafka } from 'kafkajs'

export const parseJsonBuffer = <T>(buffer: Buffer | null): T | null => {
  if (!buffer) return null

  try {
    return JSON.parse(buffer.toString()) as T
  } catch (error) {
    throw new PermanentProcessingError(
      `Failed to parse message as JSON: ${error}`,
    )
  }
}

type RetryConfig = { attempts: number; initialDelayMs: number }
type TopicHandler = (key: Buffer | null, value: Buffer | null) => Promise<void>

// kafkajs consumers only heartbeat between eachMessage calls, so a retry loop
// that blocks eachMessage for longer than the session timeout gets the
// consumer evicted from its group mid-retry
const maxBackoffDelayMs = ({ attempts, initialDelayMs }: RetryConfig) => {
  let total = 0
  for (let attempt = 1; attempt < attempts; attempt++) {
    total += initialDelayMs * Math.pow(2, attempt - 1)
  }
  return total
}

const registerCrashLogger = (
  consumer: ReturnType<Kafka['consumer']>,
  label: string,
) =>
  consumer.on(consumer.events.CRASH, ({ payload: { error, restart } }) =>
    console[restart ? 'warn' : 'error'](
      `${label} consumer crashed${restart ? ', restarting' : ''}: ${error.message}`,
    ),
  )

// consumes `topics` with retry-then-dead-letter-queue semantics: a failing
// message is retried with exponential backoff, and if it still fails, it's
// published to a "<groupId>.dead-letter-queue" topic (consumed by its own,
// more patient, retry loop) instead of blocking or dropping the partition
export const createReliableConsumer = async ({
  deadLetterRetry = { attempts: 3, initialDelayMs: 30_000 },
  // A brand-new consumer group (e.g. after a redeploy that changes the group id) starts from the latest offset rather than replaying the topic's entire retention window, which, combined with the fail-closed processed-state check in `outbox.ts`, closes off the main practical trigger for a mass email resend.
  // A genuinely fresh environment can still miss messages published before it first connects; callers that need the old backfill behavior can pass `true`.
  fromBeginning = false,
  groupId,
  handlers,
  kafka,
  retry = { attempts: 3, initialDelayMs: 1_000 },
  topics,
}: {
  deadLetterRetry?: RetryConfig
  fromBeginning?: boolean
  groupId: string
  handlers: Record<string, TopicHandler>
  kafka: Kafka
  retry?: RetryConfig
  topics: string[]
}) => {
  const deadLetterTopic = `${groupId}.dead-letter-queue`

  const consumer = kafka.consumer({ groupId })
  const consumerDeadLetterQueue = kafka.consumer({
    groupId: `${groupId}-dead-letter-queue`,
    sessionTimeout: Math.max(30_000, maxBackoffDelayMs(deadLetterRetry) * 2),
  })
  const producer = kafka.producer()

  await consumer.connect()
  await consumerDeadLetterQueue.connect()
  await producer.connect()

  registerCrashLogger(consumer, 'Main')
  registerCrashLogger(consumerDeadLetterQueue, 'Dead letter queue')

  const publishToDeadLetterQueue = async ({
    error,
    messageKey,
    messageValue,
    topic,
  }: {
    error: unknown
    messageKey: Buffer | null
    messageValue: Buffer | null
    topic: string
  }) => {
    await producer.send({
      topic: deadLetterTopic,
      messages: [
        {
          key: messageKey,
          value: JSON.stringify({
            error: String(error),
            originalTopic: topic,
            originalValue: messageValue?.toString(),
          }),
        },
      ],
    })
  }

  const withRetryOrDeadLetterQueue = async (
    fn: () => Promise<void>,
    messageKey: Buffer | null,
    messageValue: Buffer | null,
    topic: string,
    retryConfig: RetryConfig,
  ) => {
    try {
      await retryWithBackoff(
        fn,
        retryConfig.attempts,
        retryConfig.initialDelayMs,
      )
    } catch (error) {
      // the dead letter queue retries with the same handler, so a permanent
      // error would just fail there again on its first attempt; publishing
      // it would only add noise, not another chance to succeed
      if (error instanceof PermanentProcessingError) {
        console.error(
          `Permanently failed to process topic ${topic}, skipping retries and dead letter queue: ${error.message}`,
        )
        return
      }

      console.error(
        `Failed to process topic ${topic} after all retry attempts: ${error}`,
      )

      try {
        await publishToDeadLetterQueue({
          error,
          messageKey,
          messageValue,
          topic,
        })
      } catch (dlqError) {
        console.error(
          `Failed to publish to dead letter queue for topic ${topic}: ${dlqError}`,
        )
      }
    }
  }

  await consumerDeadLetterQueue.subscribe({
    topics: [deadLetterTopic],
    fromBeginning: false,
  })
  await consumerDeadLetterQueue.run({
    eachMessage: async ({ message }) => {
      type DeadLetterQueueValue = {
        error: string
        originalTopic: string
        originalValue: string | undefined
      }

      let deadLetterQueueValue: DeadLetterQueueValue | null

      try {
        deadLetterQueueValue = message.value
          ? (JSON.parse(message.value.toString()) as DeadLetterQueueValue)
          : null
      } catch (error) {
        console.error(
          `Failed to parse dead letter queue message, skipping: ${error}`,
        )
        return
      }

      if (!deadLetterQueueValue) return

      const handler = handlers[deadLetterQueueValue.originalTopic]
      if (!handler) {
        console.error(
          `Unexpected original topic in dead letter queue: ${deadLetterQueueValue.originalTopic}`,
        )
        return
      }

      const originalValueBuffer =
        deadLetterQueueValue.originalValue != null
          ? Buffer.from(deadLetterQueueValue.originalValue)
          : null

      try {
        await retryWithBackoff(
          () => handler(message.key, originalValueBuffer),
          deadLetterRetry.attempts,
          deadLetterRetry.initialDelayMs,
        )
      } catch (error) {
        console.error(
          `Dead letter queue processing permanently failed for topic ${deadLetterQueueValue.originalTopic}: ${error}`,
        )
      }
    },
  })

  await consumer.subscribe({ topics, fromBeginning })
  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      const handler = handlers[topic]
      if (!handler) {
        console.error(`Unexpected topic: ${topic}`)
        return
      }

      await withRetryOrDeadLetterQueue(
        () => handler(message.key, message.value),
        message.key,
        message.value,
        topic,
        retry,
      )
    },
  })

  return {
    close: async () => {
      await consumer.disconnect()
      await consumerDeadLetterQueue.disconnect()
      await producer.disconnect()
    },
  }
}
