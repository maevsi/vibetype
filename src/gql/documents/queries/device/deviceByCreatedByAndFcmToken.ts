import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const deviceByCreatedByAndFcmTokenQuery = graphql(`
  query DeviceByCreatedByAndFcmToken($createdBy: UUID!, $fcmToken: String!) {
    deviceByCreatedByAndFcmToken(createdBy: $createdBy, fcmToken: $fcmToken) {
      id
    }
  }
`)

export const useDeviceByCreatedByAndFcmTokenQuery = (variables: {
  createdBy: string
  fcmToken: string
}) =>
  useQuery({
    query: deviceByCreatedByAndFcmTokenQuery,
    variables,
  })
