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
      </LayoutPage>
    </template>
  </Loader>
</template>

<script setup lang="ts">
// validation
await useSignInRequired()

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
  title: Freunde von {username}
  titleOwn: Meine Freunde
en:
  title: "{username}'s friends"
  titleOwn: My friends
</i18n>
