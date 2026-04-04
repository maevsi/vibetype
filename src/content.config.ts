import { defineContentConfig, defineCollection } from '@nuxt/content'
import { defineOgImageSchema } from 'nuxt-og-image/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      source: '**/*.md',
      type: 'page',
      schema: z.object({
        ogImage: defineOgImageSchema(),
      }),
    }),
  },
})
