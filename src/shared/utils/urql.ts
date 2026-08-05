import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core'
import {
  createClient,
  ssrExchange as getSsrExchange,
  fetchExchange,
} from '@urql/core'
import type { ClientOptions } from '@urql/core'
import { offlineExchange as getOfflineExchange } from '@urql/exchange-graphcache'
import type { Cache } from '@urql/exchange-graphcache'
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

// Postgraphile's `...ByRowId` delete mutations only ever supply `rowId`,
// never the Relay `id` graphcache keys by default, so any type reachable
// through one of those mutations has to be keyed by `rowId` too, or
// `invalidateCache` below can't resolve a key and `cache.invalidate` throws.
const keyByRowId = (data: { rowId?: string | null }) => data.rowId ?? null

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
      Contact: (data) => keyByRowId(data),
      EventFavorite: (data) => keyByRowId(data),
      Guest: (data) => keyByRowId(data),
      ProfilePicture: (data) => keyByRowId(data),
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
        createEvent: (_result, _args, cache, _info) => {
          invalidateCache(cache, 'allEvents')
          invalidateCache(cache, 'eventSearch')
        },
        createGuests: (_result, _args, cache, _info) =>
          invalidateCache(cache, 'allGuests'),
        createEventFavorite: (result, _args, cache, _info) => {
          const newNode = result.createEventFavorite?.eventFavorite
          if (!newNode?.eventByEventId?.id) return

          cache.invalidate(
            { __typename: 'Event', id: newNode.eventByEventId.id },
            'eventFavoritesByEventId',
            { first: 1 },
          )
        },
        createEventCategoryMapping: (result, _args, cache, _info) => {
          const eventId =
            result.createEventCategoryMapping?.eventCategoryMapping
              ?.eventByEventId?.id
          if (!eventId) return

          cache.invalidate(
            { __typename: 'Event', id: eventId },
            'eventCategoryMappingsByEventId',
          )
        },
        createEventFormatMapping: (result, _args, cache, _info) => {
          const eventId =
            result.createEventFormatMapping?.eventFormatMapping?.eventByEventId
              ?.id
          if (!eventId) return

          cache.invalidate(
            { __typename: 'Event', id: eventId },
            'eventFormatMappingsByEventId',
          )
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
        eventDelete: (_result, _args, cache, _info) => {
          invalidateCache(cache, 'allEvents')
          invalidateCache(cache, 'eventSearch')
        },
        deleteGuestByRowId: (_result, args, cache, _info) =>
          invalidateCache(cache, 'Guest', args),
        deleteEventFavoriteByRowId: (_result, args, cache, _info) =>
          invalidateCache(cache, 'EventFavorite', args),
        deleteEventCategoryMappingByEventIdAndCategoryId: (
          result,
          _args,
          cache,
          _info,
        ) => {
          const deletedId =
            result.deleteEventCategoryMappingByEventIdAndCategoryId
              ?.deletedEventCategoryMappingId
          if (deletedId)
            cache.invalidate({
              __typename: 'EventCategoryMapping',
              id: deletedId,
            })
        },
        deleteEventFormatMappingByEventIdAndFormatId: (
          result,
          _args,
          cache,
          _info,
        ) => {
          const deletedId =
            result.deleteEventFormatMappingByEventIdAndFormatId
              ?.deletedEventFormatMappingId
          if (deletedId)
            cache.invalidate({
              __typename: 'EventFormatMapping',
              id: deletedId,
            })
        },
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
