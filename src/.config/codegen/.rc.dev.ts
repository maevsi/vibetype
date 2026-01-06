import type { CodegenConfig } from '@graphql-codegen/cli'

import { codegenConfigBase } from './.rc'

const codegenConfig: CodegenConfig = {
  ...codegenConfigBase,
  schema: 'https://postgraphile.app.localhost/graphql',
}

export default codegenConfig
