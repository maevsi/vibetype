<template>
  <div>
    <LayoutPageTitle :title />
    <FormRadioGroup
      :default-value="locale"
      :items="languages"
      @update:model-value="onI18nChange"
    />
  </div>
</template>

<script setup lang="ts">
import type { I18N_LOCALE_CODE } from '@dargmuesli/nuxt-vio/shared/types/i18n'

// page
const { t } = useI18n()
const title = t('title')

// i18n – get
const { locale, locales } = useI18n()
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
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()
const onI18nChange = async (value: string) =>
  await router.push({
    path: switchLocalePath(value as I18N_LOCALE_CODE),
  })
</script>

<i18n lang="yaml">
de:
  title: Sprache
en:
  title: Language
</i18n>
