<template>
  <LoaderIndicatorPing v-if="pending" />
  <LayoutProse v-else-if="data?.ast">
    <MDCRenderer :body="data.ast.body" :data="data.ast.data" />
  </LayoutProse>
</template>

<script setup lang="ts">
import { parseMarkdown } from '@nuxtjs/mdc/runtime'
import { useQuery } from '@urql/vue'

import { graphql } from '~~/gql/generated'

// compiler
const emit = defineEmits<{
  id: [string]
}>()

const modelError = defineModel<Error>('error')

// async data
const { locale } = useI18n()

const allLegalTermsQuery = graphql(`
  query AllLegalTerms($language: String) {
    allLegalTerms(condition: { language: $language }) {
      nodes {
        id
        rowId
        term
      }
    }
  }
`)
const legalTermsQuery = useQuery({
  query: allLegalTermsQuery,
  variables: {
    language: locale.value,
  },
})

const { data, error, pending } = await useAsyncData(
  'content-legal-terms',
  async () => {
    const legalTermsQueryResolved = await legalTermsQuery

    if (legalTermsQueryResolved.error.value) {
      throw legalTermsQueryResolved.error.value
    }

    const legalTermFirst =
      legalTermsQueryResolved.data.value?.allLegalTerms?.nodes[0]

    if (!legalTermFirst) throw new Error('No legal terms available')

    return {
      ast: await parseMarkdown(legalTermFirst.term.replace(/\r\n|\r/g, '\n')),
      legalTerm: legalTermFirst,
    }
  },
)

watch(
  error,
  (current) => {
    modelError.value = current ?? undefined
  },
  { immediate: true },
)

if (data.value?.legalTerm) {
  emit('id', data.value.legalTerm.rowId)
}
</script>
