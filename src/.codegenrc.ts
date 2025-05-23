import type { CodegenConfig } from '@graphql-codegen/cli'

export default {
  schema: 'https://postgraphile.localhost/graphql',
  documents: ['gql/documents/**/*.ts'], // ignoreNoDocuments: true,
  hooks: { afterAllFileWrite: ['prettier --write', 'eslint --fix'] },
  config: {
    useTypeImports: true,
  },
  generates: {
    './gql/generated/': {
      preset: 'client',
    },
    'gql/generated/graphcache.ts': {
      plugins: [
        { add: { content: '/* eslint-disable no-use-before-define */' } },
        'typescript',
        'typescript-urql-graphcache',
      ],
    },
    'gql/generated/introspection.ts': {
      plugins: ['urql-introspection'],
    },
  },
} as CodegenConfig
