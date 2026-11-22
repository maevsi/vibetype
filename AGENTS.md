---
applyTo: '**'
---
# Project Instructions

Nuxt v4 client of `vibetype`, an event community platform.
One of the services of the `stack` repository, closely tied to `postgraphile` and `sqitch`.
Detail and rationale live in [CONTRIBUTING.md](CONTRIBUTING.md): read the named section before working in its area.

## code
- no abbreviations in names, except where spelling it out would be odd
- descriptive names over comments; comment only where context is missing
- prose (comments, commit titles) says "the event's name", not "the `event.name`", unless the code reference is needed; code in prose goes in backticks
- sort elements lexicographically where the order carries no meaning
- TypeScript: `const` over `let`; no typecasts unless there is no other way
- Vue and Tailwind: CONTRIBUTING.md, "Vue" and "Tailwind CSS"
- Prettier formats

## git
- branch `<type>/<scope>/<description>`, never the default branch
- commit titles: Conventional Commits, lowercase
  - type by whether the change is worth a release: `feat` (minor) and `fix` (patch) release, so take `chore` or another non-releasing type when users notice nothing
  - scope, by priority: model object (`event`), simplified dependency name (`i18n`, `urql`), technology (`docker`)
  - no scope repeated in the description: `feat(event): add name`
  - body only for what the title cannot carry
- needing something new from another service of the stack is a breaking change: `!` and `beta`, even when users notice nothing; steps in CONTRIBUTING.md, "Breaking changes"
  - breaking changes wait on `beta` until the stack releases the majors of its services together: [`stack`'s release bundle document](https://github.com/maevsi/stack/blob/main/docs/release-bundle.md)
- after merging the target into a branch stacked on a squash-merged pull request, compare the branch against the target, as that merge can silently restore what the branch removed

## verification
- before calling work done: `pnpm run lint` and `pnpm --dir tests run test`, then push and watch CI, whose Docker build runs lint, tests, build, and e2e
- run `pnpm run test:e2e:docker:server:node:update` locally only when a change alters visual snapshots, as CI compares them but cannot regenerate them
  - fetch the Git LFS snapshots first in a fresh worktree, as pointer files fail to decode as images
- `pnpm --dir tests run test` checks every template tag against the component registry, as an unresolved tag renders nothing without failing lint or build
- e2e pages get their GraphQL data from fixed responses per operation name: CONTRIBUTING.md, "Playwright"

## dependencies
- proposing changes to dependencies is allowed
- pin development dependencies to an exact version
- holding one back: CONTRIBUTING.md, "Dependencies"

## nuxt
- auto-imports are active: `pnpm exec nuxt prepare` updates them, no manual imports of components, composables or Vue APIs
- no hardcoded translatable strings, use the i18n module
- `pnpm --dir src run gql:codegen` after any change to a GraphQL query or mutation
- the `Dockerfile` holds the whole build pipeline in stages

## i18n
- a url that names a locale keeps it, for everyone, signed in or not
- a url that names none (the root, or a link marked with the `language=auto` query) resolves to the account's language, then the stored i18n cookie, the browser language, the default locale
- links sent to a specific person carry that person's locale prefix or `language=auto`, as an English url cannot be told apart from one that names no locale

## components
- generic components without domain logic: `src/app/components/app/`, `App` prefix; migrate one that lives elsewhere instead of extending it in place
- domain components stay in their domain folder and compose `App` components
- write `App` components like the shadcn-vue ones in `src/app/components/scn/`: CONTRIBUTING.md, "Components"
- apply the type scale utilities from `src/app/assets/css/vibetype.css` on the element itself, no wrapper component
- add or update `scn/` components with the shadcn-vue CLI, as Nuxt registers each name their `index.ts` exports

## agents
- add what agents need and this file lacks: the rule here, its detail in CONTRIBUTING.md
