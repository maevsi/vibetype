<template>
  <LayoutProse v-if="data?.ast">
    <MarkdownDocument :value="data.ast" />
  </LayoutProse>
  <LoaderPlaceholder v-else-if="pending" />
</template>

<script setup lang="ts">
import { parseMarkdown } from 'comark'
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
const legalTermsQuery = useApiQuery({
  query: allLegalTermsQuery,
  variables: {
    language: locale.value,
  },
})

const {
  data,
  error: loadError,
  pending,
} = useAsyncData('content-legal-terms', async () => {
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
})

watch(
  loadError,
  (current) => {
    modelError.value = current ?? undefined
  },
  { immediate: true },
)

if (data.value?.legalTerm) {
  emit('id', data.value.legalTerm.rowId)
}
</script>
