import { z } from 'zod'
import { de, en } from 'zod/locales'

const localeErrors = {
  de: de().localeError,
  en: en().localeError,
}

export default defineNuxtPlugin({
  name: 'zodI18n:plugin',
  dependsOn: ['i18n:plugin'],
  setup(nuxtApp) {
    const { locale } = nuxtApp.$i18n

    z.config({
      localeError: (issue) =>
        (
          localeErrors[locale.value as keyof typeof localeErrors] ??
          localeErrors.en
        )(issue),
    })
  },
})
