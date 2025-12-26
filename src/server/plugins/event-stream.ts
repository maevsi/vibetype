const TOPIC_NOTIFICATION = `${SITE_NAME}.${SITE_NAME}_private.notification`
const TOPIC_UPLOAD = `${SITE_NAME}.${SITE_NAME}.upload`

export default defineNitroPlugin(async (nitroApp) => {
  if (!IS_IN_STACK) return

  const runtimeConfig = useRuntimeConfig()
  const { siteUrl } = useSiteUrl()
  const tusdFilesUrl = useTusdFilesUrl()

  const { Kafka } = await import('kafkajs')
  const kafka = new Kafka({
    clientId: SITE_NAME,
    brokers: ['redpanda:9092'],
    retry: {
      retries: Number.POSITIVE_INFINITY,
      initialRetryTime: 30000,
      factor: 0,
      multiplier: 1,
      maxRetryTime: 30000,
    },
  })

  const consumer = kafka.consumer({ groupId: SITE_NAME })

  await consumer.connect()
  await consumer.subscribe({
    topics: [TOPIC_NOTIFICATION, TOPIC_UPLOAD],
    fromBeginning: true,
  })

  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      const key = message.key
        ? (JSON.parse(message.key.toString()) as unknown)
        : null
      const value = message.value
        ? (JSON.parse(message.value.toString()) as unknown)
        : null

      switch (topic) {
        case TOPIC_NOTIFICATION: {
          const keyNotification = key as { payload: { id: string } }
          const valueNotification = value as {
            payload: {
              after: {
                channel:
                  | 'account_password_reset_request'
                  | 'account_registration'
                  | 'event_invitation'
                is_acknowledged: boolean | null
                payload: string
              }
            }
          } | null

          if (
            !valueNotification ||
            valueNotification.payload.after.payload ===
              '__debezium_unavailable_value'
          )
            break

          try {
            await processNotification({
              channelEvent: {
                channel: valueNotification.payload.after.channel,
                payload: JSON.parse(valueNotification.payload.after.payload),
              },
              id: keyNotification.payload.id,
              isAcknowledged: !!valueNotification.payload.after.is_acknowledged,
              runtimeConfig,
              siteUrl,
              tusdFilesUrl,
            })
          } catch (error) {
            console.error(`Failed to process notification: ${error}`)
          }

          break
        }
        case TOPIC_UPLOAD: {
          const keyUpload = key as { payload: { id: string } }
          const valueUpload = value as {
            payload: Parameters<typeof processUpload>[0]['payload']
          } | null

          if (!valueUpload) break

          try {
            await processUpload({
              id: keyUpload.payload.id,
              payload: valueUpload.payload,
            })
          } catch (error) {
            console.error(`Failed to process notification: ${error}`)
          }

          break
        }
        default:
          console.error(`Unexpected topic: ${topic}`)
      }
    },
  })

  nitroApp.hooks.hookOnce('close', async () => {
    await consumer.disconnect()
  })
})
