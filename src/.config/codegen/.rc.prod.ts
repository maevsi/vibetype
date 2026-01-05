import type { CodegenConfig } from '@graphql-codegen/cli'

import { codegenConfigBase } from './.rc'

const codegenConfig: CodegenConfig = {
  ...codegenConfigBase,
  schema: 'https://postgraphile.vibetype.app/graphql',
}

export default codegenConfig
