<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>
      <template #back>
        <ButtonIconBackRoute :to="redirectPath" />
      </template>
      {{ title }}
    </LayoutTopBar>
    <LayoutPage>
      <FormContact
        v-if="authentication.isSignedIn"
        @submit-success="navigateTo(redirectPath)"
      />
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
const authentication = useAuthentication()
const localePath = useLocalePath()
const route = useRoute()
const { t } = useI18n()

// validation
await useSignInRequired()

// data
const redirectPath = getRedirectPath(
  route.query.redirect,
  localePath('contact'),
)
const title = t('title')

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  title: Kontakt hinzufügen
en:
  title: Add contact
</i18n>
