import { resolve } from 'node:path'

import { defineConfig } from 'vitest/config'

const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
  test: {
    include: ['./unit/**/*.test.ts'],
  },
  resolve: {
    alias: {
      '~': r('../src'),
      '~~': r('../src'),
      '#src': r('../src'),
    },
  },
  // matches the Nitro/server build's values, since all unit tests here exercise server-side code
  define: {
    'import.meta.server': 'true',
    'import.meta.client': 'false',
  },
})
