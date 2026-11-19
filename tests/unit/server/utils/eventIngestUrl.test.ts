import { describe, expect, test } from 'vitest'

import {
  getEventFromJsonLd,
  getResolvedUrl,
} from '#src/server/utils/eventIngest'

const PAGE_URL = 'https://example.com/events/1'
const getHtml = (...blocks: string[]) =>
  blocks
    .map((block) => `<script type="application/ld+json">${block}</script>`)
    .join('')

describe('getEventFromJsonLd', () => {
  test('maps an event', () => {
    expect(
      getEventFromJsonLd(
        getHtml(
          JSON.stringify({
            '@type': 'Event',
            description: '<p>Bring <b>friends</b></p>',
            endDate: '2026-12-24T20:00:00+01:00',
            location: {
              '@type': 'Place',
              address: {
                addressLocality: 'Kassel',
                postalCode: '34117',
                streetAddress: 'Main 1',
              },
              name: 'Club',
            },
            name: 'Party',
            startDate: '2026-12-24T18:00:00+01:00',
            url: '/e/1',
          }),
        ),
        PAGE_URL,
      ),
    ).toEqual({
      description: 'Bring friends',
      end: '2026-12-24T20:00:00+01:00',
      is_event: true,
      location: 'Club, Main 1, 34117 Kassel',
      name: 'Party',
      start: '2026-12-24T18:00:00+01:00',
      url: 'https://example.com/e/1',
    })
  })

  test('accepts subtypes of event', () => {
    expect(
      getEventFromJsonLd(
        getHtml('{"@type":"MusicEvent","name":"Gig","startDate":"2026-01-01"}'),
        PAGE_URL,
      ),
    ).toMatchObject({ name: 'Gig', url: PAGE_URL })
  })

  test('finds an event in a graph', () => {
    expect(
      getEventFromJsonLd(
        getHtml(
          '{"@graph":[{"@type":"WebSite","name":"Site"},{"@type":["Thing","Event"],"name":"Graph","startDate":"2026-01-01","location":"Kassel"}]}',
        ),
        PAGE_URL,
      ),
    ).toMatchObject({ location: 'Kassel', name: 'Graph' })
  })

  test('finds an event in an array', () => {
    expect(
      getEventFromJsonLd(
        getHtml(
          '[{"@type":"Organization","name":"Org"},{"@type":"Event","name":"Listed","startDate":"2026-01-01"}]',
        ),
        PAGE_URL,
      ),
    ).toMatchObject({ name: 'Listed' })
  })

  test('skips invalid blocks', () => {
    expect(
      getEventFromJsonLd(
        getHtml(
          '{broken',
          '{"@type":"Event","name":"Valid","startDate":"2026-01-01"}',
        ),
        PAGE_URL,
      ),
    ).toMatchObject({ name: 'Valid' })
  })

  test.each([
    ['no event', getHtml('{"@type":"Organization","name":"Org"}')],
    ['no start date', getHtml('{"@type":"Event","name":"Undated"}')],
    ['no name', getHtml('{"@type":"Event","startDate":"2026-01-01"}')],
    ['no block', '<p>Hello</p>'],
  ])('finds nothing for %s', (_, html) => {
    expect(getEventFromJsonLd(html, PAGE_URL)).toBeUndefined()
  })
})

describe('getResolvedUrl', () => {
  test.each([
    ['/next', 'https://example.com/next'],
    ['next', 'https://example.com/events/next'],
    ['//other.example/x', 'https://other.example/x'],
    ['http://other.example/', 'http://other.example/'],
  ])('resolves %s', (location, expected) => {
    expect(getResolvedUrl(location, PAGE_URL)).toBe(expected)
  })

  test('returns nothing for an invalid location', () => {
    expect(getResolvedUrl('http://', PAGE_URL)).toBeUndefined()
  })
})
