import {
  createClient,
  ssrExchange,
  dedupExchange,
  fetchExchange,
} from '@urql/core'
import { cacheExchange } from '@urql/exchange-graphcache'
import { relayPagination } from '@urql/exchange-graphcache/extras'
// import schema from '../gql/introspection';
// import { GraphCacheConfig } from '~/gql/schema';
import { provideClient } from '@urql/vue'

import { defineNuxtPlugin, useNuxtApp } from '#app'

const ssrKey = '__URQL_DATA__'

export default defineNuxtPlugin((nuxt) => {
  // const { vueApp } = nuxt

  const ssr = ssrExchange({
    isClient: process.client,
  })

  if (process.client) {
    nuxt.hook('app:created', () => {
      ssr.restoreData(nuxt.payload[ssrKey])
    })
  }

  if (process.server) {
    nuxt.hook('app:rendered', () => {
      nuxt.payload[ssrKey] = ssr.extractData()
    })
  }

  // // use urql graphcache
  // const cacheConfig: GraphCacheConfig = {
  //   schema,
  //   keys: {
  //     Country: (data) => data.code || null
  //   },
  //   resolvers: {
  //     Query: {
  //       country: (_, args) => ({__typename: "Country", code: args.code})
  //     }
  //   }
  //   // storage: process.client ? makeDefaultStorage() : undefined
  // }
  // const cache = graphCacheExchange(cacheConfig)
  const cache = cacheExchange({
    resolvers: {
      Query: {
        allContacts: relayPagination(),
        allEvents: relayPagination(),
        allUploads: relayPagination(),
      },
    },
  })

  const client = createClient({
    //   fetchOptions: () => {
    //     const token = 123
    //     return {
    //       headers: { authorization: token ? `Bearer ${token}` : '' },
    //     }
    //   },
    url: process.server
      ? 'http://postgraphile:5000/graphql'
      : 'https://postgraphile.' +
        (process.env.NUXT_ENV_STACK_DOMAIN || 'maevsi.test') +
        '/graphql',
    exchanges: [
      dedupExchange,
      cache,
      ssr, // add `ssr` before `fetchExchange`
      fetchExchange,
    ],
  })

  nuxt.provide('urql', client)
  // vueApp.provide('$urql', ref(client))

  nuxt.hook('vue:setup', () => {
    const { $urql } = useNuxtApp()
    provideClient($urql)
  })
})

// declare module '#app' {
//   interface NuxtApp {
//     $urql: Client
//   }
// }
