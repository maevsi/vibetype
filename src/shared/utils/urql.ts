import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core'
import {
  createClient,
  ssrExchange as getSsrExchange,
  fetchExchange,
} from '@urql/core'
import type { ClientOptions } from '@urql/core'
import { offlineExchange as getOfflineExchange } from '@urql/exchange-graphcache'
import type { Cache, Entity, FieldArgs } from '@urql/exchange-graphcache'
import { makeDefaultStorage } from '@urql/exchange-graphcache/default-storage'
import { relayPagination } from '@urql/exchange-graphcache/extras'
import { requestPolicyExchange } from '@urql/exchange-request-policy'
import { devtoolsExchange } from '@urql/devtools'
import type { DocumentNode } from 'graphql'
import type { useRuntimeConfig } from 'nuxt/app'
import { ref } from 'vue'

import type { FragmentType } from '~~/gql/generated'
import type { GraphCacheConfig, Maybe } from '~~/gql/generated/graphcache'
import schema from '~~/gql/generated/introspection'
import {
  allPreferenceEventCategoriesQuery,
  getPreferenceEventCategoryItem,
} from '~~/shared/utils/preference/eventCategory'
import {
  allPreferenceEventFormatsQuery,
  getPreferenceEventFormatItem,
} from '~~/shared/utils/preference/eventFormat'
import {
  allPreferenceEventLocationsQuery,
  getPreferenceEventLocationItem,
} from '~~/shared/utils/preference/eventLocation'

type RelayConnection<T> = {
  nodes: T[]
  // ... TODO: add other pagination fields on demand
}

type QueryData<T> = {
  [listKey: string]: RelayConnection<T>
}

const invalidateCache = (
  cache: Cache,
  name: string,
  args?: {
    input: { rowId: string | number | null } | { id: string | number | null }
  },
) =>
  args
    ? cache.invalidate({
        __typename: name,
        ...('rowId' in args.input
          ? { rowId: args.input.rowId }
          : { id: args.input.id }),
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

export const getUrqlClient = async ({
  clientOptions,
  runtimeConfig,
  baseUrl,
}: {
  clientOptions?: Partial<ClientOptions>
  runtimeConfig: ReturnType<typeof useRuntimeConfig>
  baseUrl: string
}) => {
  const ssrExchange = getSsrExchange({
    isClient: import.meta.client,
  })

  const graphCacheConfig: GraphCacheConfig = {
    keys: {
      EventFavorite: (data) => data.rowId ?? null,
      PreferenceEventCategory: (data) => data.id ?? null, // TODO: remove
      PreferenceEventFormat: (data) => data.id ?? null, // TODO: remove
      PreferenceEventSize: (data) => data.id ?? null, // TODO: remove
      // GeographyPoint: (_data) => null,
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
        createEventFavorite: (result, _args, cache, _info) => {
          const newNode = result.createEventFavorite?.eventFavorite
          if (!newNode || !newNode.__typename || !newNode.eventByEventId?.id)
            return

          const parentKey = cache.keyOfEntity({
            __typename: 'Event',
            id: newNode.eventByEventId.id,
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
        deleteContactByRowId: (_result, args, cache, _info) =>
          invalidateCache(cache, 'Contact', args),
        deleteGuestByRowId: (_result, args, cache, _info) =>
          invalidateCache(cache, 'Guest', args),
        deleteEventFavoriteByRowId: (_result, args, cache, _info) =>
          invalidateCache(cache, 'EventFavorite', args),
        deletePreferenceEventCategoryByAccountIdAndCategoryId: (
          result,
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
          result,
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
        deletePreferenceEventLocationByRowId: (result, _args, cache, _info) =>
          cacheListRemove({
            cache,
            getItemDeletedId: (result) =>
              result.deletePreferenceEventLocationByRowId
                ?.deletedPreferenceEventLocationId,
            getItemOfList: getPreferenceEventLocationItem,
            listKey: 'allPreferenceEventLocations',
            query: allPreferenceEventLocationsQuery,
            result,
          }),
        deleteProfilePictureByRowId: (_result, args, cache, _info) =>
          invalidateCache(cache, 'ProfilePicture', args),
      },
    },
  }

  const cacheStorage = import.meta.client ? makeDefaultStorage() : undefined

  // `getOfflineExchange` binds a fresh in-memory store to whichever `storage`
  // it's given at call time, so this has to be re-invoked (not just reused)
  // whenever the client is rebuilt - otherwise `urqlReset` recreates the
  // `Client`s but keeps serving normalized entities from the old store.
  const buildClientOptions = () => {
    const cacheExchange =
      import.meta.client && cacheStorage
        ? getOfflineExchange({
            ...graphCacheConfig,
            schema,
            storage: cacheStorage,
          })
        : undefined

    const clientOpts: ClientOptions = {
      ...clientOptions,
      exchanges: [
        ...(runtimeConfig.public.vio.isInProduction ? [] : [devtoolsExchange]),
        requestPolicyExchange({}),
        ...(cacheExchange ? [cacheExchange] : []),
        ssrExchange, // `ssrExchange` must be before `fetchExchange`
        fetchExchange,
      ],
      url: `${baseUrl}/api/service/postgraphile/graphql`,
    }

    return {
      clientOptions: clientOpts,
      clientOptionsTesting: {
        ...clientOpts,
        url: `${baseUrl}/api/test/service/postgraphile/graphql`,
      },
    }
  }

  const initial = buildClientOptions()
  const client = ref(createClient(initial.clientOptions))
  const clientTesting = ref(createClient(initial.clientOptionsTesting))

  const urqlReset = async () => {
    // Drop persisted entities first so the rebuilt exchange below starts
    // from an empty store instead of rehydrating the previous session's data.
    await cacheStorage?.clear()

    const next = buildClientOptions()
    client.value = createClient(next.clientOptions)
    clientTesting.value = createClient(next.clientOptionsTesting)
  }

  return {
    ssrExchange,
    urql: client,
    urqlTesting: clientTesting,
    urqlCache: cacheStorage,
    urqlReset,
  }
}
