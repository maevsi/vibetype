import { SESv2Client, GetAccountCommand } from '@aws-sdk/client-sesv2'
import { fromIni } from '@aws-sdk/credential-providers'

export const sesClient = new SESv2Client({
  credentials: fromIni({ profile: 'stomper' }),
  region: process.env.AWS_REGION || 'eu-central-1',
})

export const getMailsSentLast24Hours = async () => {
  const getAccountCommand = new GetAccountCommand({})
  const { SendQuota } = await sesClient.send(getAccountCommand)

  return SendQuota?.SentLast24Hours
}
