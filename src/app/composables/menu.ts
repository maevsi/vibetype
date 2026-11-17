import { isEqual } from 'ufo'

/** The pages the menu leads to, which depend on whether an account is signed in. */
export const useMenuTargets = () => {
  const localePath = useLocalePath()
  const store = useStore()

  return computed(() => {
    const username = store.signedInUsername

    return {
      account: username
        ? localePath({ name: 'account-view-username', params: { username } })
        : undefined,
      discover: localePath('event'),
      events: username
        ? localePath({ name: 'event-view-username', params: { username } })
        : undefined,
      home: localePath(username ? 'dashboard' : 'index'),
      // signed in, the profile links to the settings
      settings: username ? undefined : localePath('session-edit'),
    }
  })
}

/** Whether the current page is one the menu leads to. Those pages show the menu on small screens and have no back button, all others have a back button instead. */
export const useIsMenuRoute = () => {
  const menuTargets = useMenuTargets()
  const route = useRoute()

  return computed(() =>
    Object.values(menuTargets.value).some(
      (target) => target && isEqual(route.path, target),
    ),
  )
}
