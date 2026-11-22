// the toggle lives in the URL as `?map`, so a reload or shared link keeps it
export const useEventMapVisible = () => {
  const route = useRoute()
  const router = useRouter()

  return computed({
    get: () => 'map' in route.query,
    set: (value) => {
      const { map: _map, ...queryRest } = route.query
      router.replace({ query: value ? { ...queryRest, map: null } : queryRest })
    },
  })
}
