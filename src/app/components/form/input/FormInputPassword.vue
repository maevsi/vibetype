<template>
  <div class="relative">
    <Input
      :id
      :aria-invalid="ariaInvalid"
      :aria-label="placeholder"
      :autocomplete
      :class="[inputClass, hasIcon ? 'pr-12 pl-12' : 'pr-14']"
      :model-value="modelValue"
      :placeholder
      :type="isVisible ? 'text' : 'password'"
      @blur="emit('blur')"
      @input="emit('input', ($event.target as HTMLInputElement).value)"
    />
    <div
      v-if="hasIcon"
      class="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-fg-2"
    >
      <slot name="icon">
        <IHeroiconsKey />
      </slot>
    </div>
    <AppButton
      :aria-label="t('visibilityToggle')"
      class="absolute top-1/2 right-2 -translate-y-1/2"
      size="none"
      variant="ghost"
      @click="isVisible = !isVisible"
    >
      <AppIconEye v-if="!isVisible" />
      <AppIconEyeSlash v-else />
    </AppButton>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  ariaInvalid?: boolean
  autocomplete: 'current-password' | 'new-password'
  hasIcon?: boolean
  id?: string
  inputClass?: HTMLAttributes['class']
  modelValue?: string
  placeholder?: string
}>()

const emit = defineEmits<{
  blur: []
  input: [value: string]
}>()

const { t } = useI18n()
const isVisible = ref(false)
</script>

<i18n lang="yaml">
de:
  visibilityToggle: Passwort-Sichtbarkeit umschalten
en:
  visibilityToggle: Toggle password visibility
</i18n>
