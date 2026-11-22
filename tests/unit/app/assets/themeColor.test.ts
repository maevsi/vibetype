import { readFileSync } from 'node:fs'

import { expect, test } from 'vitest'

import { THEME_COLOR } from '#src/node/static/index'
import { THEME_COLOR_DARK } from '#src/shared/utils/constants'

const css = readFileSync(
  new URL('../../../../src/app/assets/css/vibetype.css', import.meta.url),
  'utf8',
)

// expands shorthand hex like `#fff` so it compares equal to `#ffffff`
const getSurface = (selector: string) =>
  css
    .match(
      new RegExp(
        `^${selector.replace('.', '\\.')} \\{[^}]*?\\n  --surface: (#[0-9a-f]+);`,
        'm',
      ),
    )?.[1]
    ?.replace(/^#(.)(.)(.)$/, '#$1$1$2$2$3$3')

test('theme colors match the surface tokens', () => {
  expect(THEME_COLOR).toBe(getSurface(':root'))
  expect(THEME_COLOR_DARK).toBe(getSurface('.dark'))
})
