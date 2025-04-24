import type { RouteNamedMapI18n } from 'vue-router/auto-routes'

export const usePageDeprecation = async ({
  name,
}: {
  name: keyof RouteNamedMapI18n
}) => {
  const { ssrContext } = useNuxtApp()
  const route = useRoute()

  if (ssrContext) {
    console.warn(
      `Deprecated link to ${route.name} used on ${ssrContext.event.node.req.headers.referer}`,
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
