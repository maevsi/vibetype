import { setCookie, getCookie, setHeader } from 'h3'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const isTestingFromConfig = runtimeConfig.public.vio.isTesting
  const isTestingFromEnv = process.env.NUXT_PUBLIC_VIO_IS_TESTING === 'true'
  const isTestingFromCookie = getCookie(event, 'VIO_TESTING') === 'true'

  const isTesting =
    isTestingFromConfig || isTestingFromEnv || isTestingFromCookie

  if (!isTesting) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Testing endpoint only available in test mode',
    })
  }

  setHeader(event, 'Content-Type', 'application/json')
  setHeader(event, 'Access-Control-Allow-Origin', '*')
  setHeader(event, 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  setHeader(
    event,
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization',
  )

  let body
  try {
    body = await readBody(event)
  } catch {
    body = null
  }

  if (event.node.req.method === 'GET') {
    return {
      message: 'Test endpoint is working',
      isTesting,
      timestamp: new Date().toISOString(),
    }
  }

  if (event.node.req.method === 'POST' && !body) {
    return {
      errors: [{ message: 'No request body provided' }],
      data: null,
    }
  }

  if (body?.query) {
    if (
      body.query.includes('authenticate') ||
      body.query.includes('mutation Authenticate')
    ) {
      const variables = body.variables || {}
      const { username, password } = variables

      if (username === 'test@example.com' && password === 'validpassword123') {
        const jwtPayload = {
          role: `${process.env.SITE_NAME || 'vibetype'}_account`,
          account_id: '123',
          account_username: 'testuser',
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
          iat: Math.floor(Date.now() / 1000),
        }

        const header = Buffer.from(
          JSON.stringify({ typ: 'JWT', alg: 'HS256' }),
        ).toString('base64url')
        const payload = Buffer.from(JSON.stringify(jwtPayload)).toString(
          'base64url',
        )
        const mockJWT = `${header}.${payload}.mock-signature`

        setCookie(event, 'auth_token', mockJWT, {
          path: '/',
          httpOnly: true,
          sameSite: 'lax',
          secure: false,
          maxAge: 60 * 60 * 24,
        })

        return {
          data: {
            authenticate: {
              jwt: mockJWT,
              __typename: 'AuthenticatePayload',
            },
          },
        }
      }

      return {
        errors: [
          {
            message: 'Invalid credentials',
            extensions: { code: 'AUTHENTICATION_ERROR' },
          },
        ],
        data: { authenticate: null },
      }
    }
  }

  return {
    errors: [{ message: 'Unknown GraphQL operation' }],
    data: null,
  }
})
