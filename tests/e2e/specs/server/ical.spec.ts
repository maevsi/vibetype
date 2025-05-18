import { test, expect } from '@playwright/test'

test.describe('api load', () => {
  // TODO: fix linting
  // test('only allows POST requests', async ({ request }) => {
  //   const disallowedMethods = ['get', 'put', 'delete', 'patch']

  //   for (const disallowedMethod of disallowedMethods) {
  //     const resp = await (
  //       request[disallowedMethod] as (url: string) => Promise<APIResponse>
  //     )('/api/model/event/ical')
  //     expect(resp.status()).toEqual(405)
  //     expect(resp.statusText()).toEqual('Only POST requests are allowed!')
  //   }
  // })

  test('validates input data', async ({ request }) => {
    const inputData = [
      { data: undefined, message: 'Validation Error' },
      {
        data: { contact: {}, invitation: {} },
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
})
