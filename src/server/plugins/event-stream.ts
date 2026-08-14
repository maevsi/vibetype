// The outbox event router SMT routes by aggregate_type, so account_registration and
// account_password_reset_request share one topic; the specific type travels in the payload.
const AGGREGATE_TYPE_ACCOUNT = 'account'
const AGGREGATE_TYPE_GUEST = 'guest'

const TOPICS_OUTBOX = {
  [AGGREGATE_TYPE_ACCOUNT]: `${SITE_NAME}.outbox.${AGGREGATE_TYPE_ACCOUNT}`,
  [AGGREGATE_TYPE_GUEST]: `${SITE_NAME}.outbox.${AGGREGATE_TYPE_GUEST}`,
  // upload's channel name doubles as its aggregate_type, since it's the only type on that topic.
  [CHANNEL_NAME_UPLOAD]: `${SITE_NAME}.outbox.${CHANNEL_NAME_UPLOAD}`,
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

  // The event router SMT still goes through Kafka Connect's schema-enveloping JSON converter,
  // so key and value arrive the same way the raw table topics always have: wrapped in
  // `{ schema, payload }`, with the outbox row's `payload` column itself still a JSON string,
  // since Debezium maps jsonb columns to strings.
  // TODO: verify this against the actual connector output in redpanda-console once deployed.
  const processRoutedOutboxMessage = async (
    aggregateType: keyof typeof TOPICS_OUTBOX,
    key: Buffer | null,
    value: Buffer | null,
  ) => {
    const keyOutbox = parseJsonBuffer<{ payload: string }>(key)
    const valueOutbox = parseJsonBuffer<{ payload: string }>(value)

    if (!keyOutbox || !valueOutbox) {
      throw new PermanentProcessingError(
        `Missing key or value for outbox aggregate type: ${aggregateType}`,
      )
    }

    const id = keyOutbox.payload
    const payload = JSON.parse(valueOutbox.payload)

    if (aggregateType === CHANNEL_NAME_UPLOAD) {
      await processUpload({ id, storageKey: payload.storage_key })
      return
    }

    // The account and guest topics each carry more than one type, so the specific channel
    // comes from the payload rather than the topic.
    await processMessage({
      channelEvent: { channel: payload.type, payload },
      id,
      redis,
      runtimeConfig,
      siteUrl,
      tusdFilesUrl,
    })
  }

  const reliableConsumer = await createReliableConsumer({
    groupId: SITE_NAME,
    handlers: {
      [TOPICS_OUTBOX[AGGREGATE_TYPE_ACCOUNT]]: (key, value) =>
        processRoutedOutboxMessage(AGGREGATE_TYPE_ACCOUNT, key, value),
      [TOPICS_OUTBOX[AGGREGATE_TYPE_GUEST]]: (key, value) =>
        processRoutedOutboxMessage(AGGREGATE_TYPE_GUEST, key, value),
      [TOPICS_OUTBOX[CHANNEL_NAME_UPLOAD]]: (key, value) =>
        processRoutedOutboxMessage(CHANNEL_NAME_UPLOAD, key, value),
    },
    kafka,
    topics: Object.values(TOPICS_OUTBOX),
  })

  nitroApp.hooks.hookOnce('close', reliableConsumer.close)
})
