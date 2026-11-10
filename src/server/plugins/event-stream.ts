const TOPICS_OUTBOX = ['account', 'guest', 'upload'].map(
  (aggregateType) => `${SITE_NAME}.outbox.${aggregateType}`,
)

export default defineNitroPlugin(async (nitroApp) => {
  if (!IS_IN_STACK) return

  const runtimeConfig = useRuntimeConfig()
  const { siteUrl } = useSiteUrl()
  const tusdFilesUrl = useTusdFilesUrl()

  const isTesting = getIsTesting({ runtimeConfig })
  if (isTesting) return

  const redis = getRedisClient()
  const kafka = await createKafkaClient()

  // The event router SMT still goes through Kafka Connect's schema-enveloping JSON converter,
  // so the value arrives wrapped in `{ schema, payload }`, with the outbox row's `payload`
  // column itself still a JSON string, since Debezium maps jsonb columns to strings.
  // TODO: verify this against the actual connector output in redpanda-console once deployed.
  const processRoutedOutboxMessage = async (
    _key: Buffer | null,
    value: Buffer | null,
  ) => {
    const valueOutbox = parseJsonBuffer<{ payload: string }>(value)

    if (!valueOutbox) {
      throw new PermanentProcessingError('Missing value for outbox message')
    }

    await processOutboxMessage({
      payload: JSON.parse(valueOutbox.payload),
      redis,
      runtimeConfig,
      siteUrl,
      tusdFilesUrl,
    })
  }

  const reliableConsumer = await createReliableConsumer({
    groupId: SITE_NAME,
    handlers: Object.fromEntries(
      TOPICS_OUTBOX.map((topic) => [topic, processRoutedOutboxMessage]),
    ),
    kafka,
    topics: TOPICS_OUTBOX,
  })

  nitroApp.hooks.hookOnce('close', reliableConsumer.close)
})
