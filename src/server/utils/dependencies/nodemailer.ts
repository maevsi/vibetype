import { SendEmailCommand } from '@aws-sdk/client-sesv2'
import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  SES: { sesClient, SendEmailCommand },
})
