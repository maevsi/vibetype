import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const authenticateMutation = graphql(`
  mutation Authenticate($password: String!, $username: String!) {
    authenticate(input: { password: $password, username: $username }) {
      clientMutationId
      jwt
    }
  }
`)

export const useAuthenticateMutation = () => useMutation(authenticateMutation)
