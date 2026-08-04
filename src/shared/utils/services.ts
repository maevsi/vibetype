import { SITE_NAME } from '~~/node/static'

// single source of truth for every service `getServiceHref` can address:
// - `port` is only used for the internal (docker network) address
// - `hasSubdomain: false` means the service has no public `<name>.<host>`
//   address and can only be reached, from frontend-only development, by
//   proxying through production's own `/api/service/<name>` route
export const SERVICES = {
  postgraphile: { hasSubdomain: true, port: 5678 },
  reccoom: { hasSubdomain: false, port: 5245 },
  tusd: { hasSubdomain: true, port: 8080 },
  [SITE_NAME]: { hasSubdomain: true, port: 3000 },
} as const satisfies Record<string, { hasSubdomain: boolean; port: number }>

export type ServiceName = keyof typeof SERVICES
