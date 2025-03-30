<template>
  <ButtonColored
    :aria-label="t('eventUnlock')"
    :is-primary="isPrimary"
    :to="localePath('guest-unlock')"
    @click="emit('click')"
  >
    {{ t('eventUnlock') }}
    <template #prefix>
      <IHeroiconsKey />
    </template>
  </ButtonColored>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()

const { isPrimary } = defineProps<{
  isPrimary?: boolean
}>()

const emit = defineEmits<{
  click: []
}>()
</script>

<i18n lang="yaml">
de:
  eventUnlock: Einladungscode eingeben
en:
  eventUnlock: Enter invitation code
</i18n>
