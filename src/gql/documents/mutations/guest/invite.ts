import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const inviteMutation = graphql(`
  mutation Invite($input: InviteInput!) {
    invite(input: $input) {
      clientMutationId
    }
  }
`)

export const useInviteMutation = () => useMutation(inviteMutation)
