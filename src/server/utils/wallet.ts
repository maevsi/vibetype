import { importPKCS8, SignJWT } from 'jose'
import { PKPass } from 'passkit-generator'
import { z } from 'zod'

import { SITE_NAME, SITE_URL } from '~~/node/static'

// imported explicitly instead of auto imported, so unit tests can load this file
import { LOGO } from './assets'
import { AppLocale } from './i18n'

export type WalletTicket = {
  end?: Date
  eventId: string
  eventName: string
  guestId: string
  guestName?: string
  location?: { latitude?: number; longitude?: number; name: string }
  organizer?: string
  start: Date
  url: string
}

export type WalletConfigApple = {
  certificates: {
    signerCert: string
    signerKey: string
    signerKeyPassphrase?: string
    wwdr: string
  }
  passTypeIdentifier: string
  teamIdentifier: string
}

export type WalletConfigGoogle = {
  clientEmail: string
  issuerId: string
  privateKey: string
}

const WALLET_LABELS = {
  de: {
    date: 'Datum',
    event: 'Veranstaltung',
    guest: 'Gast',
    location: 'Ort',
    organizer: 'Veranstaltet von',
  },
  en: {
    date: 'Date',
    event: 'Event',
    guest: 'Guest',
    location: 'Location',
    organizer: 'Organized by',
  },
} satisfies Record<AppLocale, Record<string, string>>

const COLOR_BACKGROUND = '#ffffff'
const COLOR_FOREGROUND = 'rgb(28, 28, 26)'
const COLOR_LABEL = 'rgb(107, 107, 102)'

const getCoordinates = (location: WalletTicket['location']) =>
  location?.latitude !== undefined && location.longitude !== undefined
    ? { latitude: location.latitude, longitude: location.longitude }
    : undefined

export const getWalletPassApple = ({
  config,
  icon,
  ticket,
}: {
  config: WalletConfigApple
  icon: Buffer
  ticket: WalletTicket
}) => {
  const pass = new PKPass(
    {
      'icon.png': icon,
      'icon@2x.png': icon,
      'logo.png': LOGO,
      'logo@2x.png': LOGO,
    },
    config.certificates,
    {
      backgroundColor: COLOR_BACKGROUND,
      description: ticket.eventName,
      foregroundColor: COLOR_FOREGROUND,
      formatVersion: 1,
      labelColor: COLOR_LABEL,
      organizationName: SITE_NAME,
      passTypeIdentifier: config.passTypeIdentifier,
      // the guest id stays the same, so a later pass update replaces this pass
      serialNumber: ticket.guestId,
      teamIdentifier: config.teamIdentifier,
    },
  )
  const coordinates = getCoordinates(ticket.location)

  pass.type = 'eventTicket'
  pass.primaryFields.push({
    key: 'event',
    label: 'event',
    value: ticket.eventName,
  })
  pass.secondaryFields.push({
    dateStyle: 'PKDateStyleMedium',
    key: 'date',
    label: 'date',
    timeStyle: 'PKDateStyleShort',
    value: ticket.start,
  })

  if (ticket.location) {
    pass.secondaryFields.push({
      key: 'location',
      label: 'location',
      value: ticket.location.name,
    })
  }

  if (ticket.guestName) {
    pass.auxiliaryFields.push({
      key: 'guest',
      label: 'guest',
      value: ticket.guestName,
    })
  }

  if (ticket.organizer) {
    pass.auxiliaryFields.push({
      key: 'organizer',
      label: 'organizer',
      value: ticket.organizer,
    })
  }

  pass.backFields.push({ key: 'url', value: ticket.url })
  pass.setBarcodes({
    altText: ticket.guestId,
    format: 'PKBarcodeFormatQR',
    message: ticket.guestId,
    messageEncoding: 'iso-8859-1',
  })
  pass.setRelevantDate(ticket.start)

  if (coordinates) pass.setLocations(coordinates)

  for (const [language, labels] of Object.entries(WALLET_LABELS)) {
    pass.localize(language, labels)
  }

  return pass
}

const getLabel = (key: keyof (typeof WALLET_LABELS)[AppLocale]) => ({
  defaultValue: { language: AppLocale.EN, value: WALLET_LABELS.en[key] },
  translatedValues: [{ language: AppLocale.DE, value: WALLET_LABELS.de[key] }],
})

const GOOGLE_WALLET_API_URL =
  'https://walletobjects.googleapis.com/walletobjects/v1'

export const getWalletTicketGoogle = ({
  config,
  ticket,
}: {
  config: WalletConfigGoogle
  ticket: WalletTicket
}) => {
  const classId = `${config.issuerId}.event-${ticket.eventId}`
  const coordinates = getCoordinates(ticket.location)
  const textModulesData = [
    ...(ticket.location
      ? [
          {
            body: ticket.location.name,
            id: 'location',
            localizedHeader: getLabel('location'),
          },
        ]
      : []),
    ...(ticket.organizer
      ? [
          {
            body: ticket.organizer,
            id: 'organizer',
            localizedHeader: getLabel('organizer'),
          },
        ]
      : []),
  ]

  return {
    eventTicketClass: {
      dateTime: {
        start: ticket.start.toISOString(),
        ...(ticket.end ? { end: ticket.end.toISOString() } : {}),
      },
      eventName: {
        defaultValue: { language: AppLocale.EN, value: ticket.eventName },
      },
      hexBackgroundColor: COLOR_BACKGROUND,
      id: classId,
      issuerName: SITE_NAME,
      logo: {
        sourceUri: {
          uri: `${SITE_URL}/assets/static/favicon/pwa-512x512.png`,
        },
      },
      reviewStatus: 'UNDER_REVIEW',
    },
    eventTicketObject: {
      barcode: {
        alternateText: ticket.guestId,
        type: 'QR_CODE',
        value: ticket.guestId,
      },
      classId,
      // the guest id stays the same, so a later pass update reaches this pass
      id: `${config.issuerId}.guest-${ticket.guestId}`,
      linksModuleData: { uris: [{ id: 'guest', uri: ticket.url }] },
      state: 'ACTIVE',
      ...(coordinates ? { locations: [coordinates] } : {}),
      ...(textModulesData.length ? { textModulesData } : {}),
      ...(ticket.guestName ? { ticketHolderName: ticket.guestName } : {}),
    },
  }
}

const signJwtGoogle = async ({
  claims,
  config,
}: {
  claims: Record<string, unknown>
  config: WalletConfigGoogle
}) =>
  new SignJWT(claims)
    .setIssuedAt()
    .setIssuer(config.clientEmail)
    .setProtectedHeader({ alg: 'RS256', typ: 'JWT' })
    .sign(await importPKCS8(config.privateKey, 'RS256'))

const getAccessTokenGoogle = async ({
  config,
  fetch,
}: {
  config: WalletConfigGoogle
  fetch: typeof globalThis.fetch
}) => {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    body: new URLSearchParams({
      assertion: await signJwtGoogle({
        claims: {
          aud: 'https://oauth2.googleapis.com/token',
          exp: Math.floor(Date.now() / 1000) + 3600,
          scope: 'https://www.googleapis.com/auth/wallet_object.issuer',
        },
        config,
      }),
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    }),
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error(`Google Wallet token request failed: ${response.status}`)
  }

  return z.object({ access_token: z.string() }).parse(await response.json())
    .access_token
}

// inserts the resource or replaces an existing one, so the pass shows the
// event as it is when the guest saves it
const putWalletResourceGoogle = async ({
  accessToken,
  body,
  fetch,
  resource,
}: {
  accessToken: string
  body: { id: string }
  fetch: typeof globalThis.fetch
  resource: 'eventTicketClass' | 'eventTicketObject'
}) => {
  const request = (url: string, method: string) =>
    fetch(url, {
      body: JSON.stringify(body),
      headers: {
        authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
      method,
    })

  let response = await request(`${GOOGLE_WALLET_API_URL}/${resource}`, 'POST')

  if (response.status === 409) {
    response = await request(
      `${GOOGLE_WALLET_API_URL}/${resource}/${encodeURIComponent(body.id)}`,
      'PUT',
    )
  }

  if (!response.ok) {
    throw new Error(
      `Google Wallet ${resource} request failed: ${response.status} ${await response.text()}`,
    )
  }
}

// The class and object are stored through the API first, as embedding them
// makes the save link longer than the 1800 characters that browsers reliably
// keep (https://developers.google.com/wallet/generic/web).
export const getWalletSaveUrlGoogle = async ({
  config,
  fetch = globalThis.fetch,
  ticket,
}: {
  config: WalletConfigGoogle
  fetch?: typeof globalThis.fetch
  ticket: WalletTicket
}) => {
  const { eventTicketClass, eventTicketObject } = getWalletTicketGoogle({
    config,
    ticket,
  })
  // a new token per save, which is fine while saves are rare; cache it until
  // its expiry once they are not
  const accessToken = await getAccessTokenGoogle({ config, fetch })

  await putWalletResourceGoogle({
    accessToken,
    body: eventTicketClass,
    fetch,
    resource: 'eventTicketClass',
  })
  await putWalletResourceGoogle({
    accessToken,
    body: eventTicketObject,
    fetch,
    resource: 'eventTicketObject',
  })

  const jwt = await signJwtGoogle({
    claims: {
      aud: 'google',
      origins: [SITE_URL],
      payload: { eventTicketObjects: [{ id: eventTicketObject.id }] },
      typ: 'savetowallet',
    },
    config,
  })

  return `https://pay.google.com/gp/v/save/${jwt}`
}
