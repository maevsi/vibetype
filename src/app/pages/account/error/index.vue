<template>
  <section class="relative flex flex-1 flex-col gap-10">
    <LayoutTopBar>
      <span :id="templateIdTitle">{{ t('title') }}</span>
    </LayoutTopBar>
    <LayoutPageContent>
      <LayoutPageResult type="error">
        <template #description>{{ t('description') }}</template>
      </LayoutPageResult>
      <template #bottom-navigation-extension>
        <ButtonColored
          :aria-label="t('backToLogin')"
          class="w-full max-w-sm"
          :to="localePath('session-create')"
          variant="primary-critical"
        >
          {{ t('backToLogin') }}
        </ButtonColored>
      </template>
    </LayoutPageContent>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default-no-header',
})

const localePath = useLocalePath()
const { t } = useI18n()
const templateIdTitle = useId()
</script>

<i18n lang="yaml">
de:
  title: Registrierungsfehler
  description: Bitte versuche es erneut
  backToLogin: Zurück zur Registrierung
en:
  title: Error
  description: Please try again
  backToLogin: Back to Login
</i18n>
