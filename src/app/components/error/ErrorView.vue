<template>
  <section class="flex flex-1 flex-col gap-10">
    <LayoutPageContent>
      <LayoutPageResult type="error">
        <template #description>
          {{ props.description ?? t('description') }}</template
        >
      </LayoutPageResult>
      <template #bottom-navigation-extension>
        <ButtonColored
          :aria-label="t('backToLogin')"
          class="w-full max-w-sm"
          :to="localePath('session-create')"
          variant="primary-critical"
          @click="emit('close')"
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

const emit = defineEmits<{
  close: []
}>()
const localePath = useLocalePath()
const { t } = useI18n()

const props = withDefaults(
  defineProps<{
    isVisible?: boolean
    description?: string
  }>(),
  {
    isVisible: false,
    description: '',
  },
)
</script>
<i18n lang="yaml">
de:
  description: Bitte versuche es erneut
  backToLogin: Zurück zur Registrierung
en:
  description: Please try again
  backToLogin: Back to Login
</i18n>
