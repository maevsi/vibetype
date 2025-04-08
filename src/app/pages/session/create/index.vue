<template>
  <div class="flex grow flex-col">
    <LayoutHeader />
    <div class="flex flex-col">
      <CardStateInfo v-if="to" class="rounded-none">
        {{ t('accountRequired') }}
      </CardStateInfo>
    </div>
    <div class="flex justify-center px-6">
      <FormAccountSignIn class="max-w-sm grow" @signed-in="onSignIn" />
    </div>
    <ContentLegalFooter />
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

// data
const title = t('title')

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

const { setTitle } = useHeaderTitle()

onMounted(() => {
  setTitle(title)
})
onBeforeUnmount(() => {
  setTitle('')
})

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  accountRequired: Melde dich an, um fortzufahren.
  title: Einloggen
en:
  accountRequired: Log in to continue.
  title: Log in
</i18n>
