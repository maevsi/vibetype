import type { CodegenConfig } from '@graphql-codegen/cli'

export const codegenConfigBase: CodegenConfig = {
  documents: [
    'gql/documents/**/*.ts',
    'app/**/*.ts',
    'app/**/*.vue',
    'server/**/*.ts',
  ], // ignoreNoDocuments: true,
  hooks: { afterAllFileWrite: ['prettier --write', 'eslint --fix'] },
  config: {
    useTypeImports: true,
    scalars: {
      BigInt: 'number',
      Cursor: 'string',
      Date: 'string',
      Datetime: 'string',
      GeoJSON: 'GeoJSON',
      Jwt: 'string',
      RegConfig: 'unknown', // explicitly set to `unknown` as this should not be used directly in client code
      UUID: 'string',
    },
  },
  generates: {
    './gql/generated/': {
      plugins: [
        {
          add: {
            content: `import type { GeoJSON } from 'geojson'`,
          },
        },
      ],
      preset: 'client',
    },
    'gql/generated/graphcache.ts': {
      plugins: [
        {
          add: {
            content: `/* eslint-disable @typescript-eslint/no-explicit-any */\nimport type { GeoJSON } from 'geojson'`,
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
