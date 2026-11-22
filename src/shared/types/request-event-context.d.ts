// in `shared/` because typed `$fetch` also type-checks server handlers in the app context
declare module '@nuxt/schema' {
  interface RequestEventContext {
    $platform?: string
    $timeZone?: string
  }
}

export {}
