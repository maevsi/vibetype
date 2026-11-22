import { defineNuxtModule } from 'nuxt/kit'

import { RELEASE_NAME } from '../node'

export default defineNuxtModule({
  meta: {
    name: 'release',
  },
  async setup(_moduleOptions, nuxt) {
    const releaseName = await RELEASE_NAME()
    if (!releaseName) return

    nuxt.options.runtimeConfig.public.vio.releaseName = releaseName
  },
})
