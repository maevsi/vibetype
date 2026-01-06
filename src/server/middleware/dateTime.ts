export default defineEventHandler(async (event) => {
  const timeZone = await useTimeZone()

  event.context.$timeZone = timeZone
})

declare module 'h3' {
  interface H3EventContext {
    $timeZone?: string
  }
}
