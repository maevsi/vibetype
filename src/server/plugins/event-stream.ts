// The outbox event router SMT routes by aggregate_type, so account.registered and
// account.password_reset_requested share one topic; the specific type travels in the payload.
const AGGREGATE_TYPE_ACCOUNT = 'account'
const AGGREGATE_TYPE_EMAIL_ADDRESS = 'email_address'
const AGGREGATE_TYPE_GUEST = 'guest'

// Debezium substitutes this placeholder when a TOASTed column's value isn't available in a change event, e.g. an UPDATE that leaves `payload` untouched, as `outboxAcknowledge` does.
// Without REPLICA IDENTITY FULL, pgoutput only decodes columns that actually changed, so an unchanged TOASTed column has no value to decode rather than merely being marked unchanged.
// `outbox.payload` is capped at 16,000 bytes (see `table_outbox.sql`), well past Postgres' default TOAST threshold, so this is expected to occur regularly rather than being an edge case.
const DEBEZIUM_UNAVAILABLE_VALUE_PLACEHOLDER = '__debezium_unavailable_value'

const TOPICS_OUTBOX = {
  [AGGREGATE_TYPE_ACCOUNT]: `${SITE_NAME}.outbox.${AGGREGATE_TYPE_ACCOUNT}`,
  [AGGREGATE_TYPE_EMAIL_ADDRESS]: `${SITE_NAME}.outbox.${AGGREGATE_TYPE_EMAIL_ADDRESS}`,
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
  //
  // `id` comes from the value's payload.id (the outbox row's own pk, used for ack), not from the
  // Kafka message key: the key carries aggregate_id instead (stack's EventRouter partitions by
  // aggregate_id to keep events about the same entity ordered), which is a different id entirely.
  const processRoutedOutboxMessage = async (
    aggregateType: keyof typeof TOPICS_OUTBOX,
    key: Buffer | null,
    value: Buffer | null,
  ) => {
    const valueOutbox = parseJsonBuffer<{ payload: string }>(value)

    if (!valueOutbox) {
      throw new PermanentProcessingError(
        `Missing value for outbox aggregate type: ${aggregateType}`,
      )
    }

    // Not new information: the outbox row still has its original payload, only this particular change event doesn't carry it.
    // Skip instead of attempting to parse the placeholder as JSON.
    if (valueOutbox.payload === DEBEZIUM_UNAVAILABLE_VALUE_PLACEHOLDER) {
      console.debug(
        `Skipping outbox message with unavailable TOASTed payload for aggregate type: ${aggregateType}`,
      )
      return
    }

    const payload = JSON.parse(valueOutbox.payload)
    const id = payload.id as string

    if (aggregateType === CHANNEL_NAME_UPLOAD) {
      await processUpload({
        id,
        storageKey: payload.storage_key,
        type: payload.type,
      })
      return
    }

    // The account, email_address, and guest topics each carry more than one type, so the
    // specific channel comes from the payload rather than the topic.
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
      [TOPICS_OUTBOX[AGGREGATE_TYPE_EMAIL_ADDRESS]]: (key, value) =>
        processRoutedOutboxMessage(AGGREGATE_TYPE_EMAIL_ADDRESS, key, value),
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
