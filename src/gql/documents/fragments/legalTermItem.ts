import {
  useFragment,
  type FragmentType,
} from '~~/gql/generated/fragment-masking'
import { graphql } from '~~/gql/generated/gql'

export const LegalTermItem = graphql(`
  fragment LegalTermItem on LegalTerm {
    id
    term
  }
`)

export const getLegalTermItem = (
  fragment?: FragmentType<typeof LegalTermItem> | null,
) => useFragment(LegalTermItem, fragment)
