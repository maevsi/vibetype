<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">
        {{ title }}
      </span>
    </LayoutTopBar>
    <CardStateInfo v-if="to" class="rounded-none">
      {{ t('accountRequired') }}
    </CardStateInfo>
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <LayoutPage v-bind="attributes">
        <FormAccountSignIn v-model:error="error" @signed-in="onSignIn" />
        <ContentLegalFooter />
      </LayoutPage>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'error'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="error">
          <span v-if="error && error.message">
            {{ error.message }}
          </span>
          <template #description>
            {{ t('globalTryAgain') }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <ButtonColored
            :aria-label="t('contactSupport')"
            class="w-full max-w-md"
            :to="
              localePath({
                name: 'support-contact',
              })
            "
            variant="secondary"
          >
            {{ t('contactSupport') }}
          </ButtonColored>
          <ButtonColored
            :aria-label="t('backToLogin')"
            class="w-full max-w-md"
            variant="primary"
            @click="restart"
          >
            {{ t('backToLogin') }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </AppStep>
  </section>
</template>

<script setup lang="ts">
//compiler
definePageMeta({
  layout: 'plain',
})

// head
const { t } = useI18n()
const { error, restart, step, title } = useStepperPage<'default'>({
  steps: {
    default: {
      title: t('title'),
    },
    error: {
      title: t('errorTitle'),
    },
  },
})
useHeadDefault({ title })

// template
const templateIdTitle = useId()

// sign in
const route = useRoute()
const localePath = useLocalePath()
const store = useStore()
const to = computed(() =>
  route.query.to && !Array.isArray(route.query.to) ? route.query.to : undefined,
)
const onSignIn = async () => {
  // A link that allows users to delete their account is required by the Google Play Store (https://support.google.com/googleplay/android-developer/answer/13316080#account_deletion)
  // TODO: generalize, potentially whitelist valid redirection targets
  if (to.value === 'account-deletion') {
    return await navigateTo(
      localePath({
        name: 'account-edit-username',
        params: { username: store.jwtDecoded?.account_username },
      }),
    )
  }

  if (to.value) return await navigateTo(to.value)

  return await navigateTo(localePath(`dashboard`))
}
</script>

<i18n lang="yaml">
de:
  accountRequired: Melde dich an, um fortzufahren.
  backToLogin: Zurück zur Anmeldung
  contactSupport: Support kontaktieren
  title: Einloggen
  errorTitle: Anmeldefehler
en:
  accountRequired: Log in to continue.
  backToLogin: Back to Login
  contactSupport: Contact support
  title: Log in
  errorTitle: Login Error
</i18n>
