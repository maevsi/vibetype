import { H3Event } from 'h3'

export default defineEventHandler(function (event: H3Event) {
  const { res } = event.node

  res.setHeader('Content-Type', 'text/plain')
  res.end('OK')
})
