import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const inviteMutation = graphql(`
  mutation Invite($guestId: UUID!, $language: String!) {
    invite(input: { guestId: $guestId, language: $language }) {
      clientMutationId
    }
  }
`)

export const useInviteMutation = () => useMutation(inviteMutation)
