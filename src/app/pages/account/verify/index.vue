<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'

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
if (
  !route.query.code ||
  Array.isArray(route.query.code) ||
  !REGEX_UUID.test(route.query.code)
) {
  throw createError({
    fatal: true,
    status: 400,
  })
}

// api data
const accountEmailAddressVerificationMutation = useMutation(
  graphql(`
    mutation AccountEmailAddressVerification($code: UUID!) {
      accountEmailAddressVerification(input: { code: $code }) {
        clientMutationId
      }
    }
  `),
)
const result = await accountEmailAddressVerificationMutation.executeMutation({
  code: route.query.code,
})
if (result.error) {
  throw createError({
    data: {
      vibetype: getCombinedErrorMessages([result.error], {
        postgres55000: t('postgres55000'),
        postgresP0002: t('postgresP0002'),
      }).join('\n'),
    },
    fatal: true,
  })
}

const localePath = useLocalePath()
await navigateTo(
  localePath({ name: 'session-create', query: { verified: null } }),
)
</script>

<i18n lang="yaml">
de:
  postgres55000: Der Verifizierungscode ist abgelaufen!
  postgresP0002: Unbekannter Verifizierungscode! Hast du deine E-Mail-Adresse vielleicht schon verifiziert?
  title: Verifizierung
en:
  postgres55000: The verification code has expired!
  postgresP0002: Invalid verification code! Have you perhaps already verified your email address?
  title: Verification
</i18n>
