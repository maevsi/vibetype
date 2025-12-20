import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const jwtUpdateMutation = graphql(`
  mutation JwtUpdate($id: UUID!) {
    jwtUpdate(input: { jwtId: $id }) {
      clientMutationId
      jwt
    }
  }
`)

export const useJwtUpdateMutation = () => useMutation(jwtUpdateMutation)
