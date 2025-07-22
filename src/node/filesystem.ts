import { promises as fs } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { compareColors, stringToColor } from '@iconify/utils/lib/colors'
import {
  SVG,
  cleanupSVG,
  parseColors,
  runSVGO,
  deOptimisePaths,
} from '@iconify/tools'

const currentDir = dirname(fileURLToPath(import.meta.url))

export const iconCollectionOptimization =
  ({ isColored }: { isColored?: boolean }) =>
  async (name: string) => {
    const filePath = join(
      currentDir,
      `../app/assets/icons/${isColored ? 'colored/' : ''}${name}.svg`,
    )
    const content = await fs.readFile(filePath, 'utf8')
    const svg = new SVG(content)
    const blackColor = stringToColor('black')

    cleanupSVG(svg)
    parseColors(svg, {
      defaultColor: 'currentColor',
      callback: (attr, colorStr, color) => {
        if (!color) return colorStr

        if (!isColored) {
          if (blackColor && compareColors(color, blackColor))
            return 'currentColor'

          if (['none', 'current'].includes(color.type)) {
            return color
          }

          throw new Error(`Unexpected color "${colorStr}" in attribute ${attr}`)
        }

        return color
      },
    })
    runSVGO(svg)
    deOptimisePaths(svg)

    return svg.toMinifiedString({}) // first parameter must be set to change height to `1em`
  }
