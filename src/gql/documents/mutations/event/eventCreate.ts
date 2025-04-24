import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated/gql'

export const useCreateEventMutation = () =>
  useMutation(
    graphql(`
      mutation createEvent($createEventInput: CreateEventInput!) {
        createEvent(input: $createEventInput) {
          event {
            ...EventItem
          }
        }
      }
    `),
  )
