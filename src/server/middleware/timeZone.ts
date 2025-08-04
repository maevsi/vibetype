export default defineEventHandler(async (event) => {
  const timeZone = await useTimeZone()

  event.context.$timeZone = timeZone
})
