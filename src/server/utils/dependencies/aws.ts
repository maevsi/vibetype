import { GetSendQuotaCommand } from '@aws-sdk/client-ses' // TODO: use v2 api once quota tracking is available there
import { SESv2Client } from '@aws-sdk/client-sesv2'
import { fromIni } from '@aws-sdk/credential-providers'

export const sesClient = new SESv2Client({
  credentials: fromIni({ profile: 'stomper' }),
  region: process.env.AWS_REGION || 'eu-central-1',
})

export const getMailsSentLast24Hours = async () => {
  const getSendQuotaCommand = new GetSendQuotaCommand({})
  const { SentLast24Hours } = await sesClient.send(getSendQuotaCommand)

  return SentLast24Hours
}
