import { expect } from '@playwright/test'

import { appTest } from '#tests/e2e/fixtures/appTest'

appTest('rejects a tile outside its zoom level', async ({ request }) => {
  const response = await request.get(
    '/api/service/openstreetmap/tile/1/2/0.png',
  )

  expect(response.status()).toBe(400)
})
