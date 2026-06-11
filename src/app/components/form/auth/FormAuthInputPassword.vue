<template>
  <div class="relative">
    <Input
      :id
      :aria-invalid="ariaInvalid"
      :class="[
        cn(
          'h-13 rounded-2xl border-transparent bg-gray-100 pr-12 pl-12 text-[17px] dark:bg-gray-800',
          { 'border-red-500': ariaInvalid },
        ),
      ]"
      :model-value="modelValue"
      :placeholder
      :type="isVisible ? 'text' : 'password'"
      @blur="emit('blur')"
      @input="emit('input', ($event.target as HTMLInputElement).value)"
    />
    <div
      class="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-gray-500 dark:text-gray-400"
    >
      <slot name="icon">
        <IHeroiconsKey />
      </slot>
    </div>
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
import { cn } from '@/utils/shadcn'

defineProps<{
  ariaInvalid?: boolean
  id?: string
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
