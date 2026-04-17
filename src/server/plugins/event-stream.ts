const RETRY = {
  deadLetterQueue: { attempts: 3, initialDelayMs: 30_000 },
  main: { attempts: 3, initialDelayMs: 1_000 },
} as const

const TOPICS = {
  deadLetterQueue: `${SITE_NAME}.dead-letter-queue`,
  notification: `${SITE_NAME}.${SITE_NAME}_private.notification`,
  upload: `${SITE_NAME}.${SITE_NAME}.upload`,
} as const

export default defineNitroPlugin(async (nitroApp) => {
  if (!IS_IN_STACK) return

  const runtimeConfig = useRuntimeConfig()
  const { siteUrl } = useSiteUrl()
  const tusdFilesUrl = useTusdFilesUrl()

  const isTesting = getIsTesting({ runtimeConfig })
  if (isTesting) return

  const redis = getRedisClient()

  const kafka = await createKafkaClient()
  const consumer = kafka.consumer({ groupId: SITE_NAME })
  const consumerDeadLetterQueue = kafka.consumer({
    groupId: `${SITE_NAME}-dead-letter-queue`,
  })
  const producer = kafka.producer()
  await consumer.connect()
  await consumerDeadLetterQueue.connect()
  await producer.connect()

  consumer.on(consumer.events.CRASH, ({ payload: { error, restart } }) =>
    console[restart ? 'warn' : 'error'](
      `Main consumer crashed${restart ? ', restarting' : ''}: ${error.message}`,
    ),
  )
  consumerDeadLetterQueue.on(
    consumerDeadLetterQueue.events.CRASH,
    ({ payload: { error, restart } }) =>
      console[restart ? 'warn' : 'error'](
        `Dead letter queue consumer crashed${restart ? ', restarting' : ''}: ${error.message}`,
      ),
  )

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
      topic: TOPICS.deadLetterQueue,
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

  const topicHandlers: Record<
    string,
    (key: Buffer | null, value: Buffer | null) => Promise<void>
  > = {
    [TOPICS.notification]: (keyBuffer, valueBuffer) =>
      processRawNotification({
        key: keyBuffer
          ? (JSON.parse(keyBuffer.toString()) as NotificationMessageKey)
          : null,
        redis,
        runtimeConfig,
        siteUrl,
        tusdFilesUrl,
        value: valueBuffer
          ? (JSON.parse(valueBuffer.toString()) as NotificationMessageValue)
          : null,
      }),
    [TOPICS.upload]: (keyBuffer, valueBuffer) =>
      processRawUpload({
        key: keyBuffer
          ? (JSON.parse(keyBuffer.toString()) as UploadMessageKey)
          : null,
        value: valueBuffer
          ? (JSON.parse(valueBuffer.toString()) as UploadMessageValue)
          : null,
      }),
  }

  const withRetryOrDeadLetterQueue = async (
    fn: () => Promise<void>,
    messageKey: Buffer | null,
    messageValue: Buffer | null,
    topic: string,
  ) => {
    try {
      await retryWithBackoff(fn, RETRY.main.attempts, RETRY.main.initialDelayMs)
    } catch (error) {
      console.error(
        `Failed to process topic ${topic} after all retry attempts: ${error}`,
      )
      await publishToDeadLetterQueue({ error, messageKey, messageValue, topic })
    }
  }

  await consumerDeadLetterQueue.subscribe({
    topics: [TOPICS.deadLetterQueue],
    fromBeginning: false,
  })
  await consumerDeadLetterQueue.run({
    eachMessage: async ({ message }) => {
      type DeadLetterQueueValue = {
        error: string
        originalTopic: string
        originalValue: string | undefined
      }

      let deadLetterQueueValue: DeadLetterQueueValue | null = null

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

      const handler = topicHandlers[deadLetterQueueValue.originalTopic]
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
          RETRY.deadLetterQueue.attempts,
          RETRY.deadLetterQueue.initialDelayMs,
        )
      } catch (error) {
        console.error(
          `Dead letter queue processing permanently failed for topic ${deadLetterQueueValue.originalTopic}: ${error}`,
        )
      }
    },
  })

  await consumer.subscribe({
    topics: [TOPICS.notification, TOPICS.upload],
    fromBeginning: true,
  })
  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      const key = message.key
      const value = message.value

      const handler = topicHandlers[topic]
      if (handler) {
        await withRetryOrDeadLetterQueue(
          () => handler(key, value),
          message.key,
          message.value,
          topic,
        )
      } else {
        console.error(`Unexpected topic: ${topic}`)
      }
    },
  })

  nitroApp.hooks.hookOnce('close', async () => {
    await consumer.disconnect()
    await consumerDeadLetterQueue.disconnect()
    await producer.disconnect()
  })
})
