<template>
  <div v-if="codeIsUnknown" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span>{{ title }}</span>
    </LayoutTopBar>
    <LayoutPage>
      <LayoutPageResult type="warning">
        <template #description>
          {{ t('postgresP0002') }}
        </template>
      </LayoutPageResult>
      <template #bottom>
        <ButtonList>
          <ButtonSignIn />
          <ButtonHome />
        </ButtonList>
      </template>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import type { AppCombinedError } from '#shared/types/api'

// compiler
defineRouteRules({
  robots: false,
})

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// validation
const route = useRoute()
const { createA11yError } = useA11yError()
if (
  !route.query.code ||
  Array.isArray(route.query.code) ||
  !REGEX_UUID.test(route.query.code)
) {
  throw createA11yError({
    status: 400,
  })
}

// api data
const accountEmailAddressVerificationMutation = useMutation(
  graphql(`
    mutation AccountEmailAddressVerification(
      $input: AccountEmailAddressVerificationInput!
    ) {
      accountEmailAddressVerification(input: $input) {
        clientMutationId
      }
    }
  `),
)
const result = await accountEmailAddressVerificationMutation.executeMutation({
  input: { code: route.query.code },
})

// an unknown code is indistinguishable from one that was already consumed by
// a previous verification, so this case gets a dedicated, less alarming
// result instead of the generic error page
const combinedError: AppCombinedError | undefined = result.error
const codeIsUnknown = combinedError?.graphQLErrors.some(
  (graphqlError) => graphqlError.errcode === 'P0002',
)

if (!getResultData(result) && !codeIsUnknown) {
  throw createA11yError({
    data: {
      vibetype: result.error
        ? getCombinedErrorMessages([result.error], {
            postgres55000: t('postgres55000'),
          }).join('\n')
        : t('globalErrorNoData'),
    },
    status: 400,
  })
}

const localePath = useLocalePath()
if (!codeIsUnknown) {
  await navigateTo(
    localePath({ name: 'session-create', query: { verified: null } }),
  )
}
</script>

<i18n lang="yaml">
de:
  postgres55000: Der Verifizierungscode ist abgelaufen!
  postgresP0002: Dieser Verifizierungslink ist nicht mehr gültig. Falls du deine E-Mail-Adresse bereits verifiziert hast, ist alles in Ordnung. Melde dich einfach an. Andernfalls fordere einen neuen Verifizierungslink an.
  title: Verifizierung
en:
  postgres55000: The verification code has expired!
  postgresP0002: This verification link isn't valid anymore. If you already verified your email address, you're all set. Just sign in. Otherwise, request a new verification link.
  title: Verification
</i18n>
