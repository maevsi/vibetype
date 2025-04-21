<template>
  <div class="flex grow flex-col gap-10 pb-5">
    <div class="flex flex-col">
      <LayoutTopBar>
        {{ title }}
      </LayoutTopBar>
      <CardStateInfo v-if="to" class="rounded-none">
        {{ t('accountRequired') }}
      </CardStateInfo>
    </div>
    <div class="flex justify-center px-6">
      <FormAccountSignIn
        class="max-w-sm grow"
        @signed-in="onSignIn"
        @error-visible="errorVisible = $event"
      />
    </div>
    <ContentLegalFooter v-show="!errorVisible" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'plain',
})

const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const store = useStore()
const errorVisible = ref(false)

// data
const title = computed(() => (errorVisible.value ? t('error') : t('title')))

// computations
const to = computed(() =>
  route.query.to && !Array.isArray(route.query.to) ? route.query.to : undefined,
)

// methods
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

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  accountRequired: Melde dich an, um fortzufahren.
  error: Fehler
  title: Einloggen
en:
  accountRequired: Log in to continue.
  error: Error
  title: Log in
</i18n>
