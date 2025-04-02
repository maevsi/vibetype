<template>
  <div class="flex grow flex-col gap-10 pb-5">
    <LayoutTopBar>
      {{ t('title') }}
    </LayoutTopBar>
    <div class="flex justify-center px-6">
      <FormAccountRegistration class="max-w-sm grow" />
    </div>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'plain',
})

const { t } = useI18n()

// data
const title = t('title')

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  title: Erstelle ein Konto
en:
  title: Create an account
</i18n>
