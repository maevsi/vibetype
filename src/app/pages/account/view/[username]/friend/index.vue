<template>
  <Loader :api>
    <AppError
      v-if="!account"
      :error="{ message: 'Account data missing', status: 404 }"
    />
    <template v-else>
      <LayoutTopBar>
        <span>
          {{ title }}
        </span>
        <template #back>
          <ButtonIconBackRoute />
        </template>
      </LayoutTopBar>
      <LayoutPage>
        <AccountFriendshipList
          v-if="authentication.isSignedIn"
          :account-id="account.rowId"
          :signed-in-account-id="authentication.signedInAccountId"
          :username="route.params.username"
        />
        <LayoutCallToAction
          v-else
          :call-to-action="t('anonymousCta')"
          :call-to-action-description="t('anonymousCtaDescription')"
        />
      </LayoutPage>
    </template>
  </Loader>
</template>

<script setup lang="ts">
// compiler
definePageMeta({
  layout: 'default-no-header',
})

// page
const authentication = useAuthentication()
const store = useStore()
const route = useRoute()
const { t } = useI18n()
const title = computed(() =>
  store.signedInUsername === route.params.username
    ? t('titleOwn')
    : t('title', { username: route.params.username }),
)
useHeadDefault({ title })

// api data
const accountQuery = useApiQuery({
  query: accountByUsernameQuery,
  variables: {
    username: route.params.username,
  },
})
const api = await useApiData([accountQuery])
const account = computed(() => accountQuery.data.value?.accountByUsername)
</script>

<i18n lang="yaml">
de:
  anonymousCta: Finde es auf @.upper:{'globalSiteName'} heraus
  anonymousCtaDescription: Wer ist mit wem befreundet?
  title: Freunde von {username}
  titleOwn: Meine Freunde
en:
  anonymousCta: Find out on @.upper:{'globalSiteName'}
  anonymousCtaDescription: Who is friends with whom?
  title: "{username}'s friends"
  titleOwn: My friends
</i18n>
