import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const jwtCreateMutation = graphql(`
  mutation Authenticate($password: String!, $username: String!) {
    jwtCreate(input: { password: $password, username: $username }) {
      clientMutationId
      jwt
    }
  }
`)

export const useJwtCreateMutation = () => useMutation(jwtCreateMutation)
