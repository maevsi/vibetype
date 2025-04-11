<template>
  <section :aria-labelledby="templateIdTitle">
    <h1 :id="templateIdTitle">
      {{ title }}
    </h1>
    <Loader
      :api="api"
      :error-pg-ids="{
        postgres55000: t('postgres55000'),
        postgresP0002: t('postgresP0002'),
      }"
    />
  </section>
</template>

<script setup lang="ts">
import { useAccountEmailAddressVerificationMutation } from '~~/gql/documents/mutations/account/accountEmailAddressVerification'

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
  throw createError({ statusCode: 400 })
}

// accessibility
const templateIdTitle = useId()

// api data
const accountEmailAddressVerificationMutation =
  useAccountEmailAddressVerificationMutation()
const api = getApiData([accountEmailAddressVerificationMutation])

// lifecycle
const fireAlert = useFireAlert()
const localePath = useLocalePath()
onMounted(async () => {
  // run on client side only
  // verifying on server side first leads to an error on client side: "code already used"
  const result = await accountEmailAddressVerificationMutation.executeMutation({
    code: route.query.code,
  })

  if (
    result.error ||
    !result.data?.accountEmailAddressVerification?.clientMutationId
  )
    return

  await fireAlert({
    level: 'success',
    text: t('verifiedBody'),
    title: t('verified'),
  })
  navigateTo(localePath('session-create'))
})
</script>

<i18n lang="yaml">
de:
  postgres55000: Der Verifizierungscode ist abgelaufen!
  postgresP0002: Unbekannter Verifizierungscode! Hast du deine E-Mail-Adresse vielleicht schon verifiziert?
  title: Verifizierung
  verified: E-Mail-Adresse verifiziert.
  verifiedBody: Du kannst dich nun anmelden.
en:
  postgres55000: The verification code has expired!
  postgresP0002: Invalid verification code! Have you perhaps already verified your email address?
  title: Verification
  verified: Email address verified.
  verifiedBody: You may sign in now.
</i18n>
