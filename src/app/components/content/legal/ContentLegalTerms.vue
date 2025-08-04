<template>
  <LoaderIndicatorPing v-if="pending" />
  <AppError
    v-else-if="!data?.legalTerm"
    :error="{ message: t('errorUnavailable'), statusCode: 500 }"
  />
  <LayoutProse v-else>
    <MDCRenderer v-if="data.ast" :body="data.ast.body" :data="data.ast.data" />
  </LayoutProse>
</template>

<script setup lang="ts">
import { parseMarkdown } from '@nuxtjs/mdc/runtime'
import { useQuery } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import type { AllLegalTermsQueryVariables } from '~~/gql/generated/graphql'

// compiler
const emit = defineEmits<{
  id: [string]
}>()

// async data
const { t, locale } = useI18n()

const allLegalTermsQuery = graphql(`
  query AllLegalTerms($language: String) {
    allLegalTerms(condition: { language: $language }) {
      nodes {
        id
        term
      }
    }
  }
`)
const legalTermsQuery = useQuery({
  query: allLegalTermsQuery,
  variables: {
    language: locale.value,
  } satisfies MaybeRefObj<AllLegalTermsQueryVariables>,
})

const { data, error, pending } = await useAsyncData(
  'content-legal-terms',
  async () => {
    const legalTermsQueryResolved = await legalTermsQuery
    const legalTermFirst =
      legalTermsQueryResolved.data.value?.allLegalTerms?.nodes[0]

    if (!legalTermFirst) throw new Error('No legal terms available')

    return {
      ast: await parseMarkdown(legalTermFirst.term.replace(/\r\n|\r/g, '\n')),
      legalTerm: legalTermFirst,
    }
  },
)

if (error.value) {
  console.error(error.value)
}

if (data.value?.legalTerm) {
  emit('id', data.value.legalTerm.id)
}
</script>

<i18n lang="yaml">
de:
  errorUnavailable: Die Allgemeinen Geschäftsbedingungen sind nicht verfügbar. Bitte melde dies unserem Support.
en:
  errorUnavailable: The General Terms and Conditions are unavailable. Please report this to our support.
</i18n>
