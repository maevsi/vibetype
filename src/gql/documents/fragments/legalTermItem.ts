import { type FragmentType, graphql, useFragment } from '~~/gql/generated'

export const LegalTermItem = graphql(`
  fragment LegalTermItem on LegalTerm {
    id
    term
  }
`)

export const getLegalTermItem = (
  fragment?: FragmentType<typeof LegalTermItem> | null,
) => useFragment(LegalTermItem, fragment)
