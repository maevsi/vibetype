import type { StyleValue } from 'vue'

// Raleway's extrabold glyphs average about this share of the font size
const GLYPH_WIDTH_RATIO = 0.62

// Shorter titles get bigger type so the card never looks empty, and the
// longest word must fit the column so compound words don't break mid-word.
export const getOgImageTitleSize = ({
  max = 104,
  min = 44,
  text = '',
  width,
}: {
  max?: number
  min?: number
  text?: string
  width: number
}) => {
  const byLength =
    text.length <= 16
      ? 104
      : text.length <= 32
        ? 84
        : text.length <= 56
          ? 68
          : 56
  const longestWord = Math.max(...text.split(/\s+/).map((word) => word.length))
  const byWord = Math.floor(width / (longestWord * GLYPH_WIDTH_RATIO))

  return Math.max(min, Math.min(max, byLength, byWord))
}

export const getOgImageLineClamp = (lines: number): StyleValue => ({
  display: 'block',
  lineClamp: lines,
  overflowWrap: 'anywhere',
  textOverflow: 'ellipsis',
})
