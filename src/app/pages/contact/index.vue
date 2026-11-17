<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <ContactList v-if="authentication.isSignedIn" />
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
const authentication = useAuthentication()
const { t } = useI18n()

// validation
await useSignInRequired()

// data
const title = t('title')

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  title: Kontaktbuch
en:
  title: Contact book
</i18n>
