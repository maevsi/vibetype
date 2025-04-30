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
    <LayoutPage>
      <AppStep v-slot="formAttrs" :is-active="step === 'default'">
        <div v-bind="formAttrs">
          <FormAccountSignIn v-model:error="error" @signed-in="onSignIn" />
          <ContentLegalFooter />
        </div>
      </AppStep>
      <AppStep v-slot="errorAttrs" :is-active="step === 'error'">
        <div v-bind="errorAttrs">
          <LayoutPageResult type="error">
            {{ error }}
            <template #description>
              {{ t('errorDescription') }}
            </template>
          </LayoutPageResult>
        </div>
      </AppStep>
      <template #bottom>
        <AppStep v-slot="buttonAttrs" :is-active="step === 'error'">
          <div v-bind="buttonAttrs" class="flex w-full justify-center">
            <ButtonColored
              :aria-label="t('backToLogin')"
              class="w-full max-w-md"
              variant="primary-critical"
              @click="error = undefined"
            >
              {{ t('backToLogin') }}
            </ButtonColored>
          </div>
        </AppStep>
      </template>
    </LayoutPage>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'plain',
})

// page
const { t } = useI18n()

// template
const templateIdTitle = useId()

// sign in
const localePath = useLocalePath()
const route = useRoute()
const store = useStore()

// stepper
const { error, step, title } = useStepperPage<'default'>({
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

// computations
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
  title: Einloggen
  errorTitle: Anmeldefehler
  errorDescription: Bitte versuche es erneut
en:
  accountRequired: Log in to continue.
  backToLogin: Back to Login
  title: Log in
  errorTitle: Login Error
  errorDescription: Please try again
</i18n>
