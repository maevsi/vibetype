<template>
  <div>
    <LayoutPageTitle :title />
    <AppRadioGroup
      :default-value="locale"
      :items="languages"
      @update:model-value="onI18nChange"
    />
  </div>
</template>

<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'

import type { Language } from '~~/gql/generated/graphql'

// page
const { t, locale, locales } = useI18n()
const title = t('title')
useHeadDefault({ title })

// i18n – get
const languages = locales.value
  .map((locale) =>
    locale.name
      ? {
          label: locale.name,
          value: locale.code,
        }
      : undefined,
  )
  .filter(isNeitherNullNorUndefined)

// i18n – set
const nuxtApp = useNuxtApp()
const router = useRouter()
const store = useStore()
const switchLocalePath = useSwitchLocalePath()
const onI18nChange = async (value: AcceptableValue) => {
  const language = value as Language
  await router.push({
    path: switchLocalePath(language),
  })
  await persistOwnContactLanguage({ language, nuxtApp, store })
}
</script>

<i18n lang="yaml">
de:
  title: Sprache
en:
  title: Language
</i18n>
