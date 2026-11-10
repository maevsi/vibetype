// answers unknown api paths and methods here instead of letting them fall through to the page renderer
export default defineEventHandler((event) => {
  throw createAppError({
    status: 404,
    statusText: `Page not found: ${getRequestURL(event).pathname}`,
  })
})
