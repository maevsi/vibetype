import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// the design system's scales from `vibetype.css`, so that e.g. `text-body` is not merged away as a color by `text-fg-2`
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      radius: ['large', 'medium', 'pill', 'small'],
      shadow: ['bubble'],
      text: [
        'body',
        'body-small',
        'caption',
        'heading-large',
        'heading-medium',
        'headline',
        'title3',
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
