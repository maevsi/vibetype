import { stringifyVariables } from '@urql/core'
import type { Cache, ResolveInfo, Variables } from '@urql/exchange-graphcache'

const PAGINATION_ARGUMENTS = new Set(['after', 'before', 'first', 'last'])

const getFilterKey = (args: Variables | null) =>
  stringifyVariables(
    Object.fromEntries(
      Object.entries(args ?? {}).filter(
        ([name]) => !PAGINATION_ARGUMENTS.has(name),
      ),
    ),
  )

// `relayPagination` merges every cached page that shares a list's filters,
// including pages restored from the persisted cache, which no response for the
// first page refreshes. Their entities can then lack fields a newer query
// selects, so the merged list fails to read and the query yields no data at
// all, even right after the network answered it. A fetched first page starts
// the list over, so this updater drops the list's other pages.
export const removeRelayPaginationPagesStale = (
  _result: unknown,
  args: Variables,
  cache: Cache,
  info: ResolveInfo,
) => {
  if (args.after || args.before) return

  const filterKey = getFilterKey(args)

  for (const field of cache.inspectFields(info.parentKey)) {
    if (
      field.fieldName === info.fieldName &&
      field.fieldKey !== info.parentFieldKey &&
      getFilterKey(field.arguments) === filterKey
    )
      cache.invalidate(info.parentKey, field.fieldKey)
  }
}
