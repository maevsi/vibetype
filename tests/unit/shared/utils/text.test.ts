import { describe, expect, test } from 'vitest'

import { getHtmlFromText } from '#src/shared/utils/text'

describe('getHtmlFromText', () => {
  test('escapes markup and keeps line breaks', () => {
    expect(getHtmlFromText('Bring <snacks> & drinks\nand friends')).toBe(
      '<p>Bring &#60;snacks&#62; &#38; drinks</p><p>and friends</p>',
    )
  })
})
