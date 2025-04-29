<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">
        {{ t('title') }}
      </span>
    </LayoutTopBar>
    <CardStateInfo v-if="to" class="rounded-none">
      {{ t('accountRequired') }}
    </CardStateInfo>
    <LayoutPage>
      <AppStep v-slot="formAttrs" :is-active="!errorVisible">
        <div v-bind="formAttrs">
          <FormAccountSignIn
            @signed-in="onSignIn"
            @error="errorVisible = true"
          />
          <ContentLegalFooter />
        </div>
      </AppStep>
      <AppStep v-slot="errorAttrs" :is-active="errorVisible">
        <div v-bind="errorAttrs">
          <LayoutPageResult type="error">
            <template #description>
              {{ t('loginError') }}
            </template>
          </LayoutPageResult>
        </div>
      </AppStep>
      <template #bottom>
        <AppStep v-slot="buttonAttrs" :is-active="errorVisible">
          <div v-bind="buttonAttrs" class="flex w-full justify-center">
            <ButtonColored
              :aria-label="t('backToLogin')"
              class="w-full max-w-md"
              variant="primary-critical"
              @click="resetError"
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

const resetError = () => {
  errorVisible.value = false
}

// template
const templateIdTitle = useId()

// sign in
const localePath = useLocalePath()
const route = useRoute()
const store = useStore()
const errorVisible = ref(false)

const title = computed(() => (errorVisible.value ? t('error') : t('title')))
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
  error: Fehler
  title: Einloggen
  loginError: Anmeldefehler
en:
  accountRequired: Log in to continue.
  backToLogin: Back to Login
  error: Error
  title: Log in
  loginError: Login Error
</i18n>
