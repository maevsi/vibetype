<template>
  <FormInput :title="title" type="dropdown">
    <DropdownMenu v-model:open="isOpen">
      <DropdownMenuTrigger
        class="w-full rounded-lg border border-(--semantic-base-line) px-4 py-2 text-left"
      >
        <div class="flex items-center justify-between">
          <span class="text-(--semantic-base-text-secondary)">
            <slot name="display" />
          </span>
          <ChevronDown
            :class="{ 'rotate-180': isOpen }"
            class="size-4 transition-transform"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        class="w-full bg-(--semantic-base-surface-1)"
        align="start"
      >
        <slot />
      </DropdownMenuContent>
    </DropdownMenu>
  </FormInput>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const { title } = defineProps<{
  title: string
}>()

const isOpen = ref(false)
</script>
