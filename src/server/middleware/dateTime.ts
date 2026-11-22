import { defineEventHandler } from 'nuxt/server'

export default defineEventHandler(async (event) => {
  event.context.$timeZone = await getTimeZone({
    event,
    isTesting: useIsTesting(),
  })
})

// h3 handlers and the app's `ssrContext.event` still see h3's context
declare module 'h3' {
  interface H3EventContext {
    $timeZone?: string
  }
}
