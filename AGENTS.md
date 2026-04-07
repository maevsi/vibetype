---
applyTo: '**'
---
# Project Instructions

This project is a Nuxt v4 application that serves as the client for `vibetype`, an event community platform. It is one of many services defined in the `stack` repository and is closely related to the `postgraphile` and `sqitch` repositories.

## Code style
- Do not use abbreviations in naming, except for instances where it would be weird not to abbreviate
- Prefer descriptive syntax for naming and only add comments where additional context is necessary
- Use natural language in any non-code text (code comments, git commit titles, ...) instead of referring to code, e.g. "the event's name" instead of "the `event.name`", except when a code reference is needed
- Use backticks in any non-code text to refer to code, e.g. "`eventName`" instead of "eventName"
- Sort elements lexicographically except where it does not make sense
- Code formatting is done using Prettier

## Git
- Work on branches other than the default branch
  - Use this branch naming pattern: `<type>/<scope>/<description>`
- Git commit titles must follow the Conventional Commits specification and be lowercase only
  - The commit scope should not be repeated in the commit description, e.g. `feat(event): add name` instead of `feat(event): add event name`
- Git commit scopes must be chosen as follows (ordered by priority):
  1. model object name, e.g. `event`, `account`, `recommendation`
  2. simplified dependency name, e.g. `security` or `i18n` for Nuxt modules (`nuxt-security`, `@nuxtjs/i18n`); `sentry`, `urql` for libraries (`@sentry/nuxt`, `@urql/core`)
  3. technology, e.g. `typescript`, `docker`, `nuxt`
- Commit bodies are only to be filled in when necessary, e.g. to mention a resolved issue link

## NPM
- Proposal of changes to installed dependencies are allowed
- Use scripts from `package.json` to verify that the project's requirements are met
  - `pnpm run lint` for formatting and type checks
  - `pnpm run build` as preparation for end-to-end testing
  - `pnpm run test:e2e:docker:server:node:update` for end-to-end testing with snapshot updates

## Nuxt
- Nuxt auto-imports are active, so there is no need to import Nuxt components, composables and Vue.js APIs
- Do not hardcode translatable strings, but use the i18n module instead

## Docker
- The `Dockerfile` contains the full build pipeline, divided into multiple stages

## Typescript
- Do not use typecasts, except when there is no other way

## GraphQL
- Run `pnpm --dir src run gql:codegen` after any changes to GraphQL queries or mutations to update the generated types
