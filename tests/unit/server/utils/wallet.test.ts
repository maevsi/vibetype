import { execFileSync } from 'node:child_process'
import { createHash, generateKeyPairSync } from 'node:crypto'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

import { decodeJwt } from 'jose'
import { afterAll, beforeAll, expect, test } from 'vitest'

import { LOGO } from '#src/server/utils/assets'
import {
  getWalletPassApple,
  getWalletSaveUrlGoogle,
  type WalletTicket,
} from '#src/server/utils/wallet'

const TICKET: WalletTicket = {
  end: new Date('2030-01-01T22:00:00Z'),
  eventId: '00000000-0000-4000-8000-000000000001',
  eventName: 'Café 🎉',
  guestId: '00000000-0000-4000-8000-000000000002',
  guestName: 'Jane Doe',
  location: { latitude: 51.3, longitude: 9.5, name: 'Kassel' },
  organizer: 'organizer',
  start: new Date('2030-01-01T18:00:00Z'),
  url: 'https://localhost/guest/view/00000000-0000-4000-8000-000000000002',
}

let directory: string
let certificate: string
let key: string

beforeAll(() => {
  // a throwaway self-signed certificate, as signing needs a certificate but
  // not one that Apple issued
  directory = mkdtempSync(join(tmpdir(), 'wallet-'))
  execFileSync(
    'openssl',
    [
      'req',
      '-x509',
      '-newkey',
      'rsa:2048',
      '-nodes',
      '-subj',
      '/CN=test',
      '-days',
      '1',
      '-keyout',
      join(directory, 'key.pem'),
      '-out',
      join(directory, 'certificate.pem'),
    ],
    { stdio: 'ignore' },
  )
  certificate = readFileSync(join(directory, 'certificate.pem'), 'utf8')
  key = readFileSync(join(directory, 'key.pem'), 'utf8')
})

afterAll(() => {
  rmSync(directory, { force: true, recursive: true })
})

test('gets apple pass with a manifest matching its files', () => {
  const files = getWalletPassApple({
    config: {
      certificates: {
        signerCert: certificate,
        signerKey: key,
        wwdr: certificate,
      },
      passTypeIdentifier: 'pass.test',
      teamIdentifier: 'TEAM',
    },
    icon: LOGO,
    ticket: TICKET,
  }).getAsRaw()

  const manifest = JSON.parse(files['manifest.json']!.toString())

  for (const [name, hash] of Object.entries(manifest)) {
    expect(createHash('sha1').update(files[name]!).digest('hex')).toBe(hash)
  }

  expect(files['signature']?.length).toBeGreaterThan(0)
  expect(files['de.lproj/pass.strings']?.toString()).toContain(
    '"date" = "Datum";',
  )

  const pass = JSON.parse(files['pass.json']!.toString())

  expect(pass.serialNumber).toBe(TICKET.guestId)
  expect(pass.barcodes[0]).toMatchObject({
    format: 'PKBarcodeFormatQR',
    message: TICKET.guestId,
  })
  expect(pass.eventTicket.primaryFields[0].value).toBe(TICKET.eventName)
  expect(pass.locations[0]).toMatchObject({ latitude: 51.3, longitude: 9.5 })
})

test('gets google save url after storing the ticket', async () => {
  const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048 })
  const requests: { body: string; method: string; url: string }[] = []
  // the class already exists, so it is replaced instead of inserted
  const fetch: typeof globalThis.fetch = async (url, init) => {
    requests.push({
      body: String(init?.body),
      method: String(init?.method),
      url: String(url),
    })

    if (String(url).endsWith('/token'))
      return Response.json({ access_token: 'token' })

    return new Response(null, {
      status:
        init?.method === 'POST' && String(url).endsWith('/eventTicketClass')
          ? 409
          : 200,
    })
  }
  const url = await getWalletSaveUrlGoogle({
    config: {
      clientEmail: 'wallet@test.iam.gserviceaccount.com',
      issuerId: '3388000000012345678',
      privateKey: privateKey
        .export({ format: 'pem', type: 'pkcs8' })
        .toString(),
    },
    fetch,
    ticket: {
      ...TICKET,
      eventName: 'x'.repeat(100),
      location: { name: 'x'.repeat(300) },
    },
  })

  expect(requests.map(({ method, url }) => `${method} ${url}`)).toStrictEqual([
    'POST https://oauth2.googleapis.com/token',
    'POST https://walletobjects.googleapis.com/walletobjects/v1/eventTicketClass',
    `PUT https://walletobjects.googleapis.com/walletobjects/v1/eventTicketClass/3388000000012345678.event-${TICKET.eventId}`,
    'POST https://walletobjects.googleapis.com/walletobjects/v1/eventTicketObject',
  ])
  expect(JSON.parse(requests[3]!.body)).toMatchObject({
    barcode: { value: TICKET.guestId },
    classId: `3388000000012345678.event-${TICKET.eventId}`,
  })

  const jwt = url.replace('https://pay.google.com/gp/v/save/', '')

  // browsers may truncate longer save links
  expect(jwt.length).toBeLessThan(1800)
  expect(decodeJwt(jwt)).toMatchObject({
    aud: 'google',
    iss: 'wallet@test.iam.gserviceaccount.com',
    payload: {
      eventTicketObjects: [
        { id: `3388000000012345678.guest-${TICKET.guestId}` },
      ],
    },
    typ: 'savetowallet',
  })
})
