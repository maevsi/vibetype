import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core'
import {
  createClient,
  ssrExchange as getSsrExchange,
  fetchExchange,
} from '@urql/core'
import type { ClientOptions, SSRData } from '@urql/core'
import { offlineExchange as getOfflineExchange } from '@urql/exchange-graphcache'
import type { Cache, Entity, FieldArgs } from '@urql/exchange-graphcache'
import {
  makeDefaultStorage,
  type DefaultStorage,
} from '@urql/exchange-graphcache/default-storage'
import { relayPagination } from '@urql/exchange-graphcache/extras'
import { devtoolsExchange } from '@urql/devtools'
import { provideClient } from '@urql/vue'
import type { Client } from '@urql/vue'
import type { DocumentNode } from 'graphql'
import { ref } from 'vue'

import type { FragmentType } from '~~/gql/generated'
import type { GraphCacheConfig, Maybe } from '~~/gql/generated/graphcache'
import type {
  CreateEventFavoriteMutation,
  DeletePreferenceEventCategoryByAccountIdAndCategoryIdMutation,
  DeletePreferenceEventFormatByAccountIdAndFormatIdMutation,
  DeletePreferenceEventLocationByIdMutation,
} from '~~/gql/generated/graphql'
import schema from '~~/gql/generated/introspection'
import { allPreferenceEventCategoriesQuery } from '~~/gql/documents/queries/preference/preferenceEventCategoriesAll'
import { allPreferenceEventFormatsQuery } from '~~/gql/documents/queries/preference/preferenceEventFormatsAll'
import { getPreferenceEventFormatItem } from '~~/gql/documents/fragments/preferenceEventFormatItem'
import { getPreferenceEventCategoryItem } from '~~/gql/documents/fragments/preferenceEventCategoryItem'
import { allPreferenceEventLocationsQuery } from '~~/gql/documents/queries/preference/preferenceEventLocationsAll'
import { getPreferenceEventLocationItem } from '~~/gql/documents/fragments/preferenceEventLocationItem'

type RelayConnection<T> = {
  nodes: T[]
  // ... TODO: add other pagination fields on demand
}

type QueryData<T> = {
  [listKey: string]: RelayConnection<T>
}

const SSR_KEY = '__URQL_DATA__'
const invalidateCache = (
  cache: Cache,
  name: string,
  args?: {
    input: { id: string | number | null } | { nodeId: string | number | null }
  },
) =>
  args
    ? cache.invalidate({
        __typename: name,
        ...('id' in args.input
          ? { id: args.input.id }
          : { nodeId: args.input.nodeId }),
      })
    : cache
        .inspectFields('Query')
        .filter((field) => field.fieldName === name)
        .forEach((field) => {
          cache.invalidate('Query', field.fieldKey)
        })

const cacheNodesAppend = ({
  cache,
  newNode,
  parentKey,
  parentProperty,
  parentPropertyArguments,
}: {
  cache: Cache
  newNode: Entity
  parentKey: string
  parentProperty: string
  parentPropertyArguments: FieldArgs
}) => {
  const newNodeKey = cache.keyOfEntity(newNode)
  if (!newNodeKey) return

  const property = cache.resolve(
    parentKey,
    parentProperty,
    parentPropertyArguments,
  )
  if (!property) return

  const nodes = cache.resolve(property as string, 'nodes')
  if (!nodes || !Array.isArray(nodes)) return

  cache.link(property as string, 'nodes', [...nodes, newNodeKey])
}

const cacheListAppend = <
  Fragment,
  FragmentRaw,
  Query extends QueryData<FragmentRaw>,
  Result,
>({
  cache,
  getItemCreated,
  listKey,
  query,
  result,
}: {
  cache: Cache
  getItemCreated: (result: Result) => Maybe<Fragment> | undefined
  listKey: keyof Query & string
  query: DocumentNode
  result: Result
}) => {
  const newNode = getItemCreated(result)
  if (!newNode) return

  cache.updateQuery<Query>({ query }, (data) => {
    if (!data?.[listKey]) return data

    return {
      ...data,
      [listKey]: {
        ...data[listKey],
        nodes: [newNode, ...data[listKey].nodes],
      },
    }
  })
}

const cacheListRemove = <
  T extends { id: string } | { nodeId: string } | undefined | null,
  ListQuery extends QueryData<FragmentType<DocumentTypeDecoration<T, unknown>>>,
  MutationResult,
>({
  cache,
  getItemDeletedId,
  getItemOfList,
  listKey,
  query,
  result,
}: {
  cache: Cache
  getItemDeletedId: (result: MutationResult) => Maybe<string> | undefined
  getItemOfList: (
    fragment?: FragmentType<DocumentTypeDecoration<T, unknown>>,
  ) => { id: string } | { nodeId: string } | undefined | null
  listKey: keyof ListQuery & string
  query: DocumentNode
  result: MutationResult
}) => {
  const deletedId = getItemDeletedId(result)
  if (!deletedId) return

  cache.updateQuery<ListQuery>({ query }, (data) => {
    if (!data?.[listKey]) return data

    return {
      ...data,
      [listKey]: {
        ...data[listKey],
        nodes: data[listKey].nodes.filter((el) => {
          const unwrapped = getItemOfList(el)
          if (!unwrapped) return true
          if ('id' in unwrapped && unwrapped.id === deletedId) return false
          if ('nodeId' in unwrapped && unwrapped.nodeId === deletedId)
            return false
          return true
        }),
      },
    }
  })
}

export default defineNuxtPlugin(async (nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  const isTesting = useIsTesting()
  const getServiceHref = useGetServiceHref()
  const { siteUrl } = useSiteUrl()

  const ssrExchange = getSsrExchange({
    isClient: import.meta.client,
  })

  if (import.meta.client) {
    nuxtApp.hook('app:created', () => {
      ssrExchange.restoreData(nuxtApp.payload[SSR_KEY] as SSRData)
    })
  }

  if (import.meta.server) {
    nuxtApp.hook('app:rendered', () => {
      nuxtApp.payload[SSR_KEY] = ssrExchange.extractData()
    })
  }

  const graphCacheConfig: GraphCacheConfig = {
    keys: {
      PreferenceEventCategory: (data) => data.nodeId ?? null, // TODO: remove
      PreferenceEventFormat: (data) => data.nodeId ?? null, // TODO: remove
      PreferenceEventSize: (data) => data.nodeId ?? null, // TODO: remove
      GeographyPoint: (_data) => null,
    },
    schema,
    resolvers: {
      Query: {
        allAccounts: relayPagination(),
        allContacts: relayPagination(),
        allEvents: relayPagination(),
        allGuests: relayPagination(),
        allUploads: relayPagination(),
      },
    },
    updates: {
      Mutation: {
        // create
        createContact: (_result, _args, cache, _info) =>
          invalidateCache(cache, 'allContacts'),
        createGuest: (_result, _args, cache, _info) =>
          invalidateCache(cache, 'allGuests'),
        createEventFavorite: (
          result: CreateEventFavoriteMutation,
          _args,
          cache,
          _info,
        ) => {
          const newNode = result.createEventFavorite?.eventFavorite
          if (!newNode || !newNode.__typename) return

          const parentKey = cache.keyOfEntity({
            __typename: 'Event',
            id: newNode.eventId,
          })
          if (!parentKey) return

          cacheNodesAppend({
            cache,
            // @ts-expect-error typechecked above
            newNode,
            parentKey,
            parentProperty: 'eventFavoritesByEventId',
            parentPropertyArguments: { first: 1 },
          })
        },
        createPreferenceEventCategory: (result, _args, cache, _info) =>
          cacheListAppend({
            cache,
            getItemCreated: (result) =>
              result.createPreferenceEventCategory?.preferenceEventCategory,
            listKey: 'allPreferenceEventCategories',
            query: allPreferenceEventCategoriesQuery,
            result,
          }),
        createPreferenceEventFormat: (result, _args, cache, _info) =>
          cacheListAppend({
            cache,
            getItemCreated: (result) =>
              result.createPreferenceEventFormat?.preferenceEventFormat,
            listKey: 'allPreferenceEventFormats',
            query: allPreferenceEventFormatsQuery,
            result,
          }),
        createPreferenceEventLocation: (result, _args, cache, _info) =>
          cacheListAppend({
            cache,
            getItemCreated: (result) =>
              result.createPreferenceEventLocation?.preferenceEventLocation,
            listKey: 'allPreferenceEventLocations',
            query: allPreferenceEventLocationsQuery,
            result,
          }),

        // delete
        deleteContactById: (_result, args, cache, _info) =>
          invalidateCache(cache, 'Contact', args),
        deleteGuestById: (_result, args, cache, _info) =>
          invalidateCache(cache, 'Guest', args),
        deletePreferenceEventCategoryByAccountIdAndCategoryId: (
          result: DeletePreferenceEventCategoryByAccountIdAndCategoryIdMutation,
          _args,
          cache,
          _info,
        ) =>
          cacheListRemove({
            cache,
            getItemDeletedId: (result) =>
              result.deletePreferenceEventCategoryByAccountIdAndCategoryId
                ?.deletedPreferenceEventCategoryId,
            getItemOfList: getPreferenceEventCategoryItem,
            listKey: 'allPreferenceEventCategories',
            query: allPreferenceEventCategoriesQuery,
            result,
          }),
        deletePreferenceEventFormatByAccountIdAndFormatId: (
          result: DeletePreferenceEventFormatByAccountIdAndFormatIdMutation,
          _args,
          cache,
          _info,
        ) =>
          cacheListRemove({
            cache,
            getItemDeletedId: (result) =>
              result.deletePreferenceEventFormatByAccountIdAndFormatId
                ?.deletedPreferenceEventFormatId,
            getItemOfList: getPreferenceEventFormatItem,
            listKey: 'allPreferenceEventFormats',
            query: allPreferenceEventFormatsQuery,
            result,
          }),
        deletePreferenceEventLocationById: (
          result: DeletePreferenceEventLocationByIdMutation,
          _args,
          cache,
          _info,
        ) =>
          cacheListRemove({
            cache,
            getItemDeletedId: (result) =>
              result.deletePreferenceEventLocationById
                ?.deletedPreferenceEventLocationId,
            getItemOfList: getPreferenceEventLocationItem,
            listKey: 'allPreferenceEventLocations',
            query: allPreferenceEventLocationsQuery,
            result,
          }),
        deleteEventFavoriteById: (_result, args, cache, _info) =>
          invalidateCache(cache, 'EventFavorite', args),
        deleteProfilePictureById: (_result, args, cache, _info) =>
          invalidateCache(cache, 'ProfilePicture', args),
      },
    },
  }

  const cacheStorage = import.meta.client ? makeDefaultStorage() : undefined
  const cacheExchange =
    import.meta.client && cacheStorage
      ? getOfflineExchange({
          ...graphCacheConfig,
          schema,
          storage: cacheStorage,
        })
      : undefined

  const clientOptions: ClientOptions = {
    exchanges: [
      ...(runtimeConfig.public.vio.isInProduction ? [] : [devtoolsExchange]),
      ...(cacheExchange ? [cacheExchange] : []),
      ssrExchange, // `ssrExchange` must be before `fetchExchange`
      fetchExchange,
    ],
    fetchOptions: {
      credentials: 'include',
    },
    preferGetMethod: false, // TODO: remove with Postgraphile v5
    requestPolicy: 'cache-and-network',
    url: isTesting
      ? `${siteUrl}/api/test/graphql`
      : getServiceHref({ name: 'postgraphile', port: 5000 }) + '/graphql',
  }
  const client = ref(createClient(clientOptions))

  const urqlReset = () => (client.value = createClient(clientOptions))

  nuxtApp.hook('vue:setup', () => {
    const { $urql } = useNuxtApp()
    provideClient($urql)
  })

  return {
    provide: {
      urql: client,
      urqlCache: cacheStorage,
      urqlReset,
    },
  }
})

declare module '#app' {
  interface NuxtApp {
    $urql: Ref<Client>
    $urqlCache?: DefaultStorage
    $urqlReset: () => Client
  }
}
