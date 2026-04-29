<template>
  <div class="relative">
    <Input
      :id
      :type="isVisible ? 'text' : 'password'"
      :model-value="modelValue"
      :aria-invalid="ariaInvalid"
      :class="inputClass"
      :placeholder
      @blur="emit('blur')"
      @input="emit('input', ($event.target as HTMLInputElement).value)"
    />
    <ButtonIcon
      :aria-label="t('visibilityToggle')"
      class="absolute top-1/2 right-2 -translate-y-1/2"
      @click="isVisible = !isVisible"
    >
      <AppIconEye v-if="!isVisible" />
      <AppIconEyeSlash v-else />
    </ButtonIcon>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  ariaInvalid?: boolean
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
