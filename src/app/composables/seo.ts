import type { RouteNamedMapI18n } from 'vue-router/auto-routes'

export const usePageDeprecation = async ({
  name,
}: {
  name: keyof RouteNamedMapI18n
}) => {
  const route = useRoute()

  if (import.meta.server) {
    console.warn(
      `Deprecated link to ${route.name} used on ${useRequestHeader('referer')}`,
    )
  }

  const localePath = useLocalePath()
  return await navigateTo(
    localePath({
      name,
    }),
    {
      redirectCode: 301,
    },
  )
}
