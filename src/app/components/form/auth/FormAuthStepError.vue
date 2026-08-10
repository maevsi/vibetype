<template>
  <AppStep v-slot="attributes" :is-active="isActive">
    <LayoutPage v-bind="attributes">
      <AppErrorPanel
        :description="description ?? t('description')"
        :error-message="error?.message"
        :heading="heading ?? t('heading')"
      >
        <slot />
        <FormAuthButton
          :aria-label="t('contactSupport')"
          variant="secondary"
          @click="navigateTo(localePath({ name: 'support-contact' }))"
        >
          {{ t('contactSupport') }}
        </FormAuthButton>
      </AppErrorPanel>
    </LayoutPage>
  </AppStep>
</template>

<script setup lang="ts">
const {
  description = undefined,
  error = null,
  heading = undefined,
  isActive = false,
} = defineProps<{
  description?: string
  error?: Error | null
  heading?: string
  isActive?: boolean
}>()

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  contactSupport: Support kontaktieren
  description: Bitte versuche es später erneut.
  heading: Fehler
en:
  contactSupport: Contact support
  description: Please try again later.
  heading: Error
</i18n>
