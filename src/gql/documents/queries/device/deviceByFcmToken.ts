import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { DeviceByCreatedByAndFcmTokenQueryVariables } from '~~/gql/generated/graphql'

export const useDeviceByFcmTokenQuery = (
  variables: DeviceByCreatedByAndFcmTokenQueryVariables,
) =>
  useQuery({
    query: deviceByCreatedByAndFcmTokenQuery,
    variables,
  })

export const deviceByCreatedByAndFcmTokenQuery = graphql(`
  query deviceByCreatedByAndFcmToken($createdBy: UUID!, $fcmToken: String!) {
    deviceByCreatedByAndFcmToken(createdBy: $createdBy, fcmToken: $fcmToken) {
      id
    }
  }
`)
