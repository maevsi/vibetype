import type { CodegenConfig } from '@graphql-codegen/cli'

export const codegenConfigBase: CodegenConfig = {
  documents: ['gql/documents/**/*.ts', 'app/**/*.vue', 'server/**/*.ts'], // ignoreNoDocuments: true,
  hooks: { afterAllFileWrite: ['prettier --write', 'eslint --fix'] },
  config: {
    useTypeImports: true,
    scalars: {
      Cursor: 'string',
      Jwt: 'string',
      UUID: 'string',
    },
  },
  generates: {
    './gql/generated/': {
      preset: 'client',
    },
    'gql/generated/graphcache.ts': {
      plugins: [
        {
          add: {
            content: `/* eslint-disable @typescript-eslint/no-empty-object-type */\n/* eslint-disable @typescript-eslint/no-explicit-any */\n/* eslint-disable import/no-duplicates */`,
          },
        },
        'typescript',
        'typescript-urql-graphcache',
      ],
    },
    'gql/generated/introspection.ts': {
      plugins: ['urql-introspection'],
    },
  },
}
