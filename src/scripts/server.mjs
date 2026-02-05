import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname)

process.env.NITRO_SSL_CERT = fs.readFileSync(
  path.join(
    root,
    `../.config/certificates/ssl${process.env.CI ? '-ci' : '-dev'}.crt`,
  ),
  'utf8',
)

process.env.NITRO_SSL_KEY = fs.readFileSync(
  path.join(
    root,
    `../.config/certificates/ssl${process.env.CI ? '-ci' : '-dev'}.key`,
  ),
  'utf8',
)

await import('../.output/server/sentry.server.config.mjs')
await import('../.output/server/index.mjs')
