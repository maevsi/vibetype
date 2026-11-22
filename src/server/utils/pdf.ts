// A5 in PDF points (1/72 inch)
export const PDF_PAGE_A5 = { height: 595, width: 420 }

export const getJpegSize = (jpeg: Uint8Array) => {
  let offset = 2

  while (offset + 9 < jpeg.length) {
    if (jpeg[offset] !== 0xff) break

    const marker = jpeg[offset + 1]
    const length = ((jpeg[offset + 2] || 0) << 8) | (jpeg[offset + 3] || 0)

    // start of frame markers, excluding DHT (C4), JPG (C8) and DAC (CC)
    if (
      marker !== undefined &&
      marker >= 0xc0 &&
      marker <= 0xcf &&
      ![0xc4, 0xc8, 0xcc].includes(marker)
    ) {
      return {
        height: ((jpeg[offset + 5] || 0) << 8) | (jpeg[offset + 6] || 0),
        width: ((jpeg[offset + 7] || 0) << 8) | (jpeg[offset + 8] || 0),
      }
    }

    offset += 2 + length
  }

  throw new Error('JPEG size not found')
}

// Wraps one RGB JPEG into a single page PDF that it fills completely, so any
// text drawn into the JPEG is not selectable.
export const getPdfFromJpeg = ({
  jpeg,
  page = PDF_PAGE_A5,
  title,
}: {
  jpeg: Uint8Array
  page?: { height: number; width: number }
  title?: string
}) => {
  const encoder = new TextEncoder()
  const { height, width } = getJpegSize(jpeg)
  const content = `q ${page.width} 0 0 ${page.height} 0 0 cm /I Do Q`
  const objects: (string | [string, Uint8Array, string])[] = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${page.width} ${page.height}] /Resources << /XObject << /I 4 0 R >> >> /Contents 5 0 R >>`,
    [
      `<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n`,
      jpeg,
      '\nendstream',
    ],
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
    // hex encoded UTF-16BE with byte order mark, so any title survives
    `<< /Title <feff${Array.from({ length: title?.length || 0 }, (_, index) => (title || '').charCodeAt(index).toString(16).padStart(4, '0')).join('')}> >>`,
  ]

  const chunks: Uint8Array[] = []
  const offsets: number[] = []
  let length = 0
  const push = (chunk: string | Uint8Array) => {
    const bytes = typeof chunk === 'string' ? encoder.encode(chunk) : chunk
    chunks.push(bytes)
    length += bytes.length
  }

  // the binary comment marks the file as binary for transfer tools
  push('%PDF-1.4\n%\xff\xff\xff\xff\n')

  objects.forEach((object, index) => {
    offsets.push(length)
    push(`${index + 1} 0 obj\n`)
    ;(Array.isArray(object) ? object : [object]).forEach(push)
    push('\nendobj\n')
  })

  const xrefOffset = length
  push(
    `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${offsets.map((offset) => `${String(offset).padStart(10, '0')} 00000 n \n`).join('')}trailer\n<< /Size ${objects.length + 1} /Root 1 0 R /Info ${objects.length} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`,
  )

  const pdf = new Uint8Array(length)
  let position = 0

  for (const chunk of chunks) {
    pdf.set(chunk, position)
    position += chunk.length
  }

  return pdf
}
