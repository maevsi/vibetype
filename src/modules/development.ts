import { addServerHandler, createResolver, defineNuxtModule } from 'nuxt/kit'

import { IS_IN_FRONTEND_DEVELOPMENT } from '../node/static'

export default defineNuxtModule({
  meta: {
    name: 'development',
  },
  setup() {
    const resolver = createResolver(import.meta.url)

    if (IS_IN_FRONTEND_DEVELOPMENT) {
      addServerHandler({
        handler: resolver.resolve('./runtime/development.ts'),
      })
    }
  },
})
