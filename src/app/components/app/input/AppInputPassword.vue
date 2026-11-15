<template>
  <AppInput v-model="model" :type="isVisible ? 'text' : 'password'">
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix" />
    </template>
    <template #suffix>
      <AppButton
        :aria-label="t('visibilityToggle')"
        :aria-pressed="isVisible"
        size="none"
        variant="ghost"
        @click="isVisible = !isVisible"
      >
        <AppIconEyeSlash v-if="isVisible" />
        <AppIconEye v-else />
      </AppButton>
    </template>
  </AppInput>
</template>

<script setup lang="ts">
defineSlots<{
  prefix?: () => unknown
}>()

const model = defineModel<string>({ default: '' })

const { t } = useI18n()

const isVisible = ref(false)
</script>

<i18n lang="yaml">
de:
  visibilityToggle: Passwort-Sichtbarkeit umschalten
en:
  visibilityToggle: Toggle password visibility
</i18n>
