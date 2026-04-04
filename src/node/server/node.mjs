import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '../..')

const certSuffix = process.env.CI ? '-ci' : '-dev'
const certPath = path.join(root, `.config/certificates/ssl${certSuffix}.crt`)
const keyPath = path.join(root, `.config/certificates/ssl${certSuffix}.key`)

if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
  console.log('Using SSL certificate:', certPath)
  process.env.NITRO_SSL_CERT = fs.readFileSync(certPath, 'utf8')
  process.env.NITRO_SSL_KEY = fs.readFileSync(keyPath, 'utf8')
}

await import(path.join(root, '.output/server/sentry.server.config.mjs'))
await import(path.join(root, '.output/server/index.mjs'))
