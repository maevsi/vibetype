import { expect, test } from 'vitest'

import { getJpegSize, getPdfFromJpeg } from '#src/server/utils/pdf'

// SOI, an APP0 segment, then a baseline SOF0 for 3 x 2 pixels, then EOI
const JPEG = new Uint8Array([
  0xff, 0xd8, 0xff, 0xe0, 0x00, 0x04, 0x00, 0x00, 0xff, 0xc0, 0x00, 0x11, 0x08,
  0x00, 0x02, 0x00, 0x03, 0x03, 0xff, 0xd9,
])

test('gets jpeg size', () => {
  expect(getJpegSize(JPEG)).toStrictEqual({ height: 2, width: 3 })
})

test('gets pdf with a consistent cross reference table', () => {
  const pdf = getPdfFromJpeg({ jpeg: JPEG, title: 'Café 🎉' })
  const text = new TextDecoder('latin1').decode(pdf)

  expect(text.startsWith('%PDF-1.4\n')).toBe(true)
  expect(text.endsWith('%%EOF\n')).toBe(true)
  expect(text).toContain('/Width 3 /Height 2')

  const startXref = Number(text.match(/startxref\n(\d+)\n/)?.[1])
  expect(text.slice(startXref, startXref + 4)).toBe('xref')

  const offsets = [...text.slice(startXref).matchAll(/(\d{10}) 00000 n /g)].map(
    (match) => Number(match[1]),
  )
  expect(offsets).toHaveLength(6)
  offsets.forEach((offset, index) => {
    expect(text.slice(offset).startsWith(`${index + 1} 0 obj\n`)).toBe(true)
  })

  expect(text).toContain('/Title <feff00430061006600e90020d83cdf89>')
})
