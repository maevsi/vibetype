<template>
  <LayoutProse v-if="legalTermFirst">
    <MDCRenderer v-if="ast" :body="ast.body" :data="ast.data" />
  </LayoutProse>
  <AppError v-else :description="t('errorUnavailable')" :status-code="500" />
</template>

<script setup lang="ts">
import { parseMarkdown } from '@nuxtjs/mdc/runtime'

import { getLegalTermItem } from '~~/gql/documents/fragments/legalTermItem'
import { useAllLegalTermsQuery } from '~~/gql/documents/queries/legalTerms/allLegalTerms'

const { t, locale } = useI18n()

const emit = defineEmits<{
  id: [string]
}>()

// legal terms
const legalTermsQuery = useAllLegalTermsQuery({
  language: locale.value,
})
const api = await useApiData([legalTermsQuery])

const legalTermFirst = computed(
  () =>
    api.value.data.allLegalTerms?.nodes
      ?.map(getLegalTermItem)
      .filter(isNeitherNullNorUndefined)[0],
)
if (!legalTermFirst.value) {
  console.error('No legal terms available')
} else {
  emit('id', legalTermFirst.value.id)
}

const { data: ast } = await useAsyncData('markdown', () =>
  parseMarkdown(legalTermFirst.value?.term.replace(/\r\n|\r/g, '\n') || ''),
)
</script>

<i18n lang="yaml">
de:
  errorUnavailable: Die Allgemeinen Geschäftsbedingungen sind nicht verfügbar. Bitte melde dies unserem Support.
en:
  errorUnavailable: The General Terms and Conditions are unavailable. Please report this to our support.
</i18n>
