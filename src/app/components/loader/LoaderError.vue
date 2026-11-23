<template>
  <AppAlert class="flex flex-col items-center gap-3" variant="error">
    <AppSpanList :span="messages" />
    <p v-if="!isOnline" class="text-body-small text-fg-2">
      {{ t('offline') }}
    </p>
    <AppButton
      :aria-label="t('retry')"
      size="small"
      variant="secondary"
      @click="emit('retry')"
    >
      {{ t('retry') }}
    </AppButton>
  </AppAlert>
</template>

<script setup lang="ts">
import { useOnline } from '@vueuse/core'

const { messages } = defineProps<{
  messages: string[]
}>()

const emit = defineEmits<{
  retry: []
}>()

const { t } = useI18n()

// data
const isOnline = useOnline()
</script>

<i18n lang="yaml">
de:
  offline: Du bist offline. Verbinde Dich mit dem Internet und versuche es dann erneut.
  retry: Erneut versuchen
en:
  offline: You're offline. Reconnect to the internet, then try again.
  retry: Try again
</i18n>
