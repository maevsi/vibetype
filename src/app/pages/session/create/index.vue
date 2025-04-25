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
    <template v-if="!errorVisible">
      <LayoutPage>
        <FormAccountSignIn @signed-in="onSignIn" @error="handleError" />
        <ContentLegalFooter />
      </LayoutPage>
    </template>
    <template v-else>
      <LayoutPage>
        <LayoutPageResult type="error">
          <template #description>
            {{ errorDescription }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <ButtonColored
            :aria-label="t('backToLogin')"
            class="w-full max-w-md"
            variant="primary-critical"
            @click="resetError"
          >
            {{ t('backToLogin') }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </template>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'plain',
})

// page
const { t } = useI18n()

const errorDescription = ref('')

const handleError = (isError: boolean, message: string) => {
  errorVisible.value = isError
  errorDescription.value = message
}

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
en:
  accountRequired: Log in to continue.
  backToLogin: Back to Login
  error: Error
  title: Log in
</i18n>
