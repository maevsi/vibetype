import { Renderer } from '@takumi-rs/core'
import {
  container,
  image,
  prepareImages,
  text,
  type FetchedImage,
} from '@takumi-rs/helpers'
import { extractEmojis } from '@takumi-rs/helpers/emoji'
import { renderSVG } from 'uqr'

import { LOGO } from './assets'
import { getPdfFromJpeg, PDF_PAGE_A5 } from './pdf'

// rendered at three times the page's point size, about 216 dpi
const TICKET_SCALE = 3
const COLOR_SECONDARY = '#6b6b66'

let rendererPromise: Promise<Renderer> | undefined

const getRenderer = () => {
  rendererPromise ||= (async () => {
    const renderer = new Renderer()
    const storage = useStorage('assets:raleway')

    for (const key of await storage.getKeys()) {
      const data = await storage.getItemRaw<Buffer>(key)

      if (data) await renderer.registerFont({ data, name: 'Raleway' })
    }

    return renderer
  })().catch((error) => {
    rendererPromise = undefined
    throw error
  })

  return rendererPromise
}

export const getTicketNode = ({
  details,
  guestId,
  hint,
  title,
}: {
  details: { label: string; value: string }[]
  guestId: string
  hint: string
  title: string
}) =>
  // emojis have no glyphs in Raleway, so they become images
  extractEmojis(
    container({
      children: [
        image({ src: 'logo.png', style: { height: 28 } }),
        container({
          children: [
            text(title, {
              fontSize: 26,
              fontWeight: 700,
              textAlign: 'center',
            }),
            container({
              children: details.map(({ label, value }) =>
                container({
                  children: [
                    text(label, {
                      color: COLOR_SECONDARY,
                      fontSize: 9,
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                    }),
                    text(value, { fontSize: 13 }),
                  ],
                  style: { display: 'flex', flexDirection: 'column' },
                }),
              ),
              style: {
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                width: '100%',
              },
            }),
          ],
          style: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            width: '100%',
          },
        }),
        container({
          children: [
            image({ src: 'qr.svg', style: { height: 200, width: 200 } }),
            text(guestId, { color: COLOR_SECONDARY, fontSize: 9 }),
            text(hint, { fontSize: 11, textAlign: 'center' }),
          ],
          style: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          },
        }),
      ],
      style: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        color: '#1c1c1a',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Raleway',
        height: '100%',
        justifyContent: 'space-between',
        padding: 32,
        width: '100%',
      },
    }),
    'twemoji',
  )

export const getTicketPdf = async (
  ticket: Parameters<typeof getTicketNode>[0],
) => {
  const renderer = await getRenderer()
  const node = getTicketNode(ticket)
  let emojiImages: FetchedImage[] = []

  try {
    emojiImages = await prepareImages({ node })
  } catch (error) {
    // the ticket stays usable with emojis left blank
    console.warn(`Ticket emoji images unavailable: ${error}`)
  }

  const jpeg = await renderer.render(node, {
    devicePixelRatio: TICKET_SCALE,
    format: 'jpeg',
    height: PDF_PAGE_A5.height * TICKET_SCALE,
    images: [
      ...emojiImages,
      { data: LOGO, src: 'logo.png' },
      {
        data: new TextEncoder().encode(
          renderSVG(ticket.guestId, { border: 4 }),
        ),
        src: 'qr.svg',
      },
    ],
    quality: 92,
    width: PDF_PAGE_A5.width * TICKET_SCALE,
  })

  return getPdfFromJpeg({ jpeg, title: ticket.title })
}
