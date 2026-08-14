const TOPICS = {
  upload: `${SITE_NAME}.${SITE_NAME}.upload`,
} as const

// The outbox event router SMT routes each channel to its own topic instead of a single table topic.
const TOPICS_OUTBOX = {
  [CHANNEL_NAME_ACCOUNT_PASSWORD_RESET]: `${SITE_NAME}.outbox.${CHANNEL_NAME_ACCOUNT_PASSWORD_RESET}`,
  [CHANNEL_NAME_ACCOUNT_REGISTRATION]: `${SITE_NAME}.outbox.${CHANNEL_NAME_ACCOUNT_REGISTRATION}`,
  [CHANNEL_NAME_EVENT_INVITATION]: `${SITE_NAME}.outbox.${CHANNEL_NAME_EVENT_INVITATION}`,
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
    channel: keyof typeof TOPICS_OUTBOX,
    key: Buffer | null,
    value: Buffer | null,
  ) => {
    const keyOutbox = parseJsonBuffer<{ payload: string }>(key)
    const valueOutbox = parseJsonBuffer<{ payload: string }>(value)

    if (!keyOutbox || !valueOutbox) {
      throw new PermanentProcessingError(
        `Missing key or value for outbox channel: ${channel}`,
      )
    }

    await processNotification({
      channelEvent: { channel, payload: JSON.parse(valueOutbox.payload) },
      id: keyOutbox.payload,
      redis,
      runtimeConfig,
      siteUrl,
      tusdFilesUrl,
    })
  }

  const reliableConsumer = await createReliableConsumer({
    groupId: SITE_NAME,
    handlers: {
      [TOPICS.upload]: (key, value) =>
        processRawUpload({
          key: parseJsonBuffer<UploadMessageKey>(key),
          redis,
          value: parseJsonBuffer<UploadMessageValue>(value),
        }),
      [TOPICS_OUTBOX[CHANNEL_NAME_ACCOUNT_PASSWORD_RESET]]: (key, value) =>
        processRoutedOutboxMessage(
          CHANNEL_NAME_ACCOUNT_PASSWORD_RESET,
          key,
          value,
        ),
      [TOPICS_OUTBOX[CHANNEL_NAME_ACCOUNT_REGISTRATION]]: (key, value) =>
        processRoutedOutboxMessage(
          CHANNEL_NAME_ACCOUNT_REGISTRATION,
          key,
          value,
        ),
      [TOPICS_OUTBOX[CHANNEL_NAME_EVENT_INVITATION]]: (key, value) =>
        processRoutedOutboxMessage(CHANNEL_NAME_EVENT_INVITATION, key, value),
    },
    kafka,
    topics: [TOPICS.upload, ...Object.values(TOPICS_OUTBOX)],
  })

  nitroApp.hooks.hookOnce('close', reliableConsumer.close)
})
