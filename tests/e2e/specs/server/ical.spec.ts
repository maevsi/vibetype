import { test, expect, type APIResponse } from '@playwright/test'

test.describe('api load', () => {
  test('only allows POST requests', async ({ request }) => {
    const disallowedMethods = ['get', 'put', 'delete', 'patch'] as const

    for (const disallowedMethod of disallowedMethods) {
      const resp = await (
        request[disallowedMethod] as (url: string) => Promise<APIResponse>
      )('/api/model/event/ical')
      expect(resp.status()).toEqual(404)
      expect(resp.statusText()).toEqual('Page not found: /api/model/event/ical')
    }
  })

  test('validates input data', async ({ request }) => {
    const inputData = [
      { data: undefined, message: 'Validation Error' },
      {
        data: { contact: {}, guest: {} },
        message: 'Validation Error',
      },
    ]

    for (const inputDataElement of inputData) {
      const resp = await request.post('/api/model/event/ical', {
        data: inputDataElement.data,
      })

      expect(resp.status()).toEqual(400)
      expect(resp.statusText()).toEqual(inputDataElement.message)
    }
  })

  // regression test: both real callers of this endpoint (the event invitation
  // email in `src/server/utils/notification.ts` and the manual download button
  // on `src/app/pages/guest/view/[id]/index.vue`) have repeatedly drifted out
  // of sync with `icalPostBodySchema`, only surfacing as a runtime 400 once
  // deployed. This asserts both shapes keep validating and producing a usable
  // `.ics` response.
  test('accepts a payload shaped like the event invitation email', async ({
    request,
  }) => {
    const resp = await request.post('/api/model/event/ical', {
      data: {
        event: {
          accountByCreatedBy: { username: 'eventAuthor' },
          description: 'description',
          end: '2024-10-15T16:00:00Z',
          name: 'name',
          rowId: '00000000-0000-0000-0000-000000000000',
          slug: 'slug',
          start: '2024-10-15T14:00:00Z',
          visibility: 'public',
        },
        guest: { rowId: '00000000-0000-0000-0000-000000000001' },
      },
    })

    expect(resp.status()).toEqual(200)
    expect(resp.headers()['content-type']).toEqual('text/calendar')

    const body = await resp.text()
    expect(body).toContain('SUMMARY:name')
    expect(body).toContain('UID:00000000-0000-0000-0000-000000000000')
  })

  test('accepts a payload shaped like the guest view manual download', async ({
    request,
  }) => {
    const resp = await request.post('/api/model/event/ical', {
      data: {
        contact: { firstName: 'firstName', lastName: 'lastName' },
        event: {
          accountByCreatedBy: { username: 'eventAuthor' },
          description: null,
          end: null,
          name: 'name',
          rowId: '00000000-0000-0000-0000-000000000000',
          slug: 'slug',
          start: '2024-10-15T14:00:00Z',
          visibility: 'public',
        },
        guest: { rowId: '00000000-0000-0000-0000-000000000001' },
      },
    })

    expect(resp.status()).toEqual(200)
    expect(resp.headers()['content-type']).toEqual('text/calendar')

    const body = await resp.text()
    expect(body).toContain('SUMMARY:name')
    expect(body).toContain('UID:00000000-0000-0000-0000-000000000000')
  })
})
