<template>
  <button
    :aria-label="ariaLabel"
    :class="
      cn(
        'flex items-center justify-center gap-2 rounded-2xl text-[17px] font-semibold transition-all focus:outline-none',
        variant === 'primary'
          ? 'h-13 w-full bg-(--accent-strong) text-(--semantic-base-primary-button-text) hover:bg-(--accent-strong-hover)'
          : 'h-13 w-full bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
        { 'cursor-not-allowed opacity-50': disabled || loading },
      )
    "
    :disabled="disabled || loading"
    :type
    @click="$emit('click')"
  >
    <span
      v-if="loading"
      class="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />
    <span v-if="loading" class="inline">
      <slot name="loading">{{ t('globalLoading') }}</slot>
    </span>
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import { cn } from '@/utils/shadcn'

withDefaults(
  defineProps<{
    ariaLabel: string
    disabled?: boolean
    loading?: boolean
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary'
  }>(),
  {
    type: 'button',
    variant: 'primary',
  },
)

defineEmits<{
  click: []
}>()

const { t } = useI18n()
</script>
