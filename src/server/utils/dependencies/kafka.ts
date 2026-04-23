export const createKafkaClient = async () => {
  const runtimeConfig = useRuntimeConfig()
  const { Kafka } = await import('kafkajs')
  return new Kafka({
    brokers: runtimeConfig[SITE_NAME].kafka.brokers
      .split(',')
      .map((broker) => broker.trim())
      .filter((broker) => broker.length > 0),
    clientId: SITE_NAME,
    retry: {
      factor: 0,
      initialRetryTime: 30000,
      maxRetryTime: 30000,
      multiplier: 1,
      retries: Number.POSITIVE_INFINITY,
    },
  })
}
