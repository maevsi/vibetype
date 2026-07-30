const TOPICS = {
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

  const reliableConsumer = await createReliableConsumer({
    groupId: SITE_NAME,
    handlers: {
      [TOPICS.notification]: (key, value) =>
        processRawNotification({
          key: parseJsonBuffer<NotificationMessageKey>(key),
          redis,
          runtimeConfig,
          siteUrl,
          tusdFilesUrl,
          value: parseJsonBuffer<NotificationMessageValue>(value),
        }),
      [TOPICS.upload]: (key, value) =>
        processRawUpload({
          key: parseJsonBuffer<UploadMessageKey>(key),
          redis,
          value: parseJsonBuffer<UploadMessageValue>(value),
        }),
    },
    kafka,
    topics: [TOPICS.notification, TOPICS.upload],
  })

  nitroApp.hooks.hookOnce('close', reliableConsumer.close)
})
