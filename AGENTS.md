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
- Ensure CI is green before completing work with the following commands:
  - `pnpm run lint` for formatting and type checks
  - `pnpm run build` as preparation for end-to-end testing
  - `pnpm run test:e2e:docker:server:node:update` for end-to-end testing with snapshot updates
- Proposal of changes to installed dependencies are allowed
- Pin development dependencies to an exact version, don't use caret-versioning

## Nuxt
- Nuxt auto-imports are active, so there is no need to import Nuxt components, composables and Vue.js APIs – run `pnpm exec nuxt prepare` instead to update the barrel files
- Do not hardcode translatable strings, but use the i18n module instead
- Run `pnpm --dir src run build:analyze` to build the app and generate an interactive treemap of the client and server bundles.
  - `nuxt analyze` is built into the Nuxt CLI, so this needs no extra dependency.
  - The command prints the report location as "Build location" when the build finishes.
  - That location is the build directory's `analyze` folder, which in this project resolves to `src/node_modules/.cache/nuxt/.nuxt/analyze/client.html` rather than to `src/.nuxt/analyze/client.html`.
  - The command then serves the report on `http://localhost:3000` and blocks until stopped with <kbd>Ctrl</kbd>+<kbd>C</kbd>.
  - Pass `--no-serve` to skip that server and let the command exit on its own, which is what the scripts below do and what the CLI already does when `CI` is set.
  - Prefer this over grepping built output in `.output/public/_nuxt/*.js` for library-identifying strings.
- The `Bundle Size` GitHub Actions workflow (`.github/workflows/bundle-size.yml`) comments on pull requests with a client bundle size comparison between the base branch and the pull request branch.
  - It is built from `tests/scripts/bundle-size/measure.sh`, `tests/scripts/bundle-size/extract-chunks.mjs` and `tests/scripts/bundle-size/compare.sh`.
  - `measure.sh` builds in `nuxt analyze` mode because a normal production build content-hashes every chunk filename, which leaves nothing to match across two builds.
  - `extract-chunks.mjs` reads the analyze report's embedded module graph, the `const data = {...}` script in `client.html` that follows rollup-plugin-visualizer's schema.
  - The headline metric is the initial size, meaning the modules reachable from the app entry without crossing a dynamic `import()`.
  - That is the number code splitting is supposed to move, so it is the one the verdict is based on.
  - A sum over every chunk is reported alongside it, but it cannot measure code splitting, because deferring a component moves bytes between chunks without removing any.
  - Chunks are matched on the normalized module id of their largest module rather than on their displayed name.
  - A chunk whose source has a generic basename gets a numbered name such as `_nuxt/dist6.js`, assigned in module-graph encounter order, which shifts whenever unrelated dependencies change.
  - Module ids are absolute paths and the base branch is measured from a separate checkout directory, so they are normalized by dropping everything up to the last `node_modules` segment for a dependency, and up to `src` for a project file.
  - Sizes are computed per module and compressed individually rather than across the whole chunk, so the figures run higher than the bytes a production build ships.
  - Both sides are measured identically, so the deltas between them stay meaningful even though the absolute numbers do not match production.

## Docker
- The `Dockerfile` contains the full build pipeline, divided into multiple stages

## Typescript
- Do not use typecasts, except when there is no other way
- Use `const` over `let`

## GraphQL
- Run `pnpm --dir src run gql:codegen` after any changes to GraphQL queries or mutations to update the generated types

## Sentry
- The `nuxt-security` module enforces a content security policy, so client-side Sentry must not switch to CDN-based lazy loading via `Sentry.lazyLoadIntegration`.
  - That loader inserts a `browser.sentry-cdn.com` script tag, which would require relaxing `script-src` and `connect-src` to an external host.
- To defer a heavy client-side Sentry integration such as `browserProfilingIntegration` or `replayIntegration` without the CDN loader, put its usage in a sibling module next to `sentry.client.config.ts`, outside Nuxt's auto-import scan directories, that statically imports only that integration from `@sentry/nuxt`.
  - Reach that sibling module from `sentry.client.config.ts` through a dynamic `import()` and attach the integration with `Sentry.addIntegration()`.
  - Referencing the integration through the already eagerly imported `Sentry` namespace object instead, for example `Sentry.replayIntegration()`, would keep its code in the eager bundle even though the call itself runs later, because the whole `@sentry/nuxt` module is already reachable statically.

## Agents
- If information that is relevant for agentic instructions is not yet covered in `AGENTS.md`, add it.
