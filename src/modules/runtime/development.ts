/**
 * Development middleware that redirects requests from "localhost" to "app.localhost".
 *
 * Only runs in the intended development scenario (checked via runtime config) and only for requests
 * whose hostname is exactly "localhost". The redirect preserves the original protocol and request path.
 *
 * Purpose:
 * - Allow cookies set on "app.localhost" to be valid for subdomains (for example, "postgraphile.app.localhost").
 * - Plain "localhost" cannot reliably serve domain-scoped cookies for subdomains because browsers treat
 *   "localhost" as a special host and do not allow setting a cookie domain that covers subdomains.
 */
export default defineEventHandler((event) => {
  const runtimeConfig = useRuntimeConfig(event)
  if (!runtimeConfig.public.vio.stagingHost) return // only redirect in frontend-only development

  const host = getRequestHost(event)
  if (host?.split(':')[0] !== 'localhost') return // only redirect hostname `localhost`

  const protocol = getRequestProtocol(event)
  const newHost = host.replace('localhost', 'app.localhost')
  const url = event.node.req.url || ''
  const newUrl = `${protocol}://${newHost}${url}`

  return sendRedirect(event, newUrl)
})
