import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const jwtRefreshMutation = graphql(`
  mutation JwtRefresh($id: UUID!) {
    jwtRefresh(input: { jwtId: $id }) {
      clientMutationId
      jwt
    }
  }
`)

export const useJwtRefreshMutation = () => useMutation(jwtRefreshMutation)
