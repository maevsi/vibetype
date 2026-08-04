import { graphql } from '~~/gql/generated'

// Shared between the client registration form and the server's auth proxy,
// which matches on this mutation's operation name to decide when to
// require Turnstile verification (see server/api/internal/service/postgraphile/authentication.ts).
export const accountRegistrationMutation = graphql(`
  mutation AccountRegistration($input: AccountRegistrationInput!) {
    accountRegistration(input: $input) {
      clientMutationId
    }
  }
`)
