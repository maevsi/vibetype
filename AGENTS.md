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
- Run `pnpm --dir src run build:analyze` (`nuxt analyze`, built into the Nuxt CLI, no extra dependency needed) to build the app and generate an interactive treemap of the client and server bundles. The command prints the report location as "Build location" when the build finishes (it lands under the build directory's `analyze` folder, e.g. `.nuxt/analyze/client.html`, though it may resolve elsewhere under `node_modules` depending on the environment); it then serves the report on `http://localhost:3000` and blocks until stopped with <kbd>Ctrl</kbd>+<kbd>C</kbd>. To skip the server entirely (e.g. for scripting), run `nuxi analyze --no-serve` directly instead – the command then exits on its own once the report is written. This is the recommended way to verify bundle-size changes, replacing manual grepping through built output in `.output/public/_nuxt/*.js` for library-identifying strings
- The `Bundle Size` GitHub Actions workflow (`.github/workflows/bundle-size.yml`) comments on pull requests with a per-chunk client bundle size comparison (base branch vs. PR branch), built from `test/bundle-size/measure.sh`, `test/bundle-size/extract-chunks.mjs`, and `test/bundle-size/compare.sh`. A normal production build's chunk filenames are content-hashed and not stable across commits – even logically-unrelated chunks get a new hash whenever any upstream module in their dependency graph changes – so `measure.sh` instead builds in `nuxt analyze` mode (`nuxi analyze --no-serve`), whose chunks keep a readable, stable name (e.g. `_nuxt/AppTipTap.js`). This makes it possible to match chunks by name across a base and a PR build, the same way `sqitch`'s benchmark workflow matches rows by query name. `extract-chunks.mjs` pulls the per-chunk rendered/gzip byte sizes out of the analyze report's embedded module graph (`client.html`'s `const data = {...}` script, in rollup-plugin-visualizer's schema); those figures come from the visualizer's pre-minification per-module accounting, so they run higher than the final minified production bytes, but base and PR are measured identically so the deltas between them stay meaningful. One remaining instability: a chunk whose source has a generic basename colliding with another module's (many packages ship `dist/index.js`) gets a numbered fallback name like `_nuxt/dist6.js`, and that number depends on module-graph encounter order, which can shift across commits even for unrelated changes – `compare.sh` calls this out in its report footnote

## Docker
- The `Dockerfile` contains the full build pipeline, divided into multiple stages

## Typescript
- Do not use typecasts, except when there is no other way
- Use `const` over `let`

## GraphQL
- Run `pnpm --dir src run gql:codegen` after any changes to GraphQL queries or mutations to update the generated types

## Sentry
- The `nuxt-security` module enforces a content security policy, so client-side Sentry must not switch to CDN-based lazy loading via `Sentry.lazyLoadIntegration`, since it inserts a `browser.sentry-cdn.com` script tag and would require relaxing `script-src`/`connect-src` to an external host
- To defer a heavy client-side Sentry integration, such as `browserProfilingIntegration` or `replayIntegration`, without the CDN loader, place its usage in a sibling module outside Nuxt's auto-import scan directories, next to `sentry.client.config.ts`, that statically imports only that integration from `@sentry/nuxt`. Reach the sibling module from `sentry.client.config.ts` through a dynamic `import()` and attach the integration with `Sentry.addIntegration()`. Referencing the integration through the already-eagerly-imported `Sentry` namespace object instead, e.g. `Sentry.replayIntegration()`, would keep its code in the eager bundle even though the call itself runs later, since the whole `@sentry/nuxt` module is already reachable statically

## Agents
- If information that is relevant for agentic instructions is not yet covered in `AGENTS.md`, add it.
