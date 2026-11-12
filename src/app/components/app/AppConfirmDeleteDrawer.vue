<template>
  <AppDrawer v-model:open="isOpen" @animation-end="onAnimationEnd">
    <AppStep v-slot="attributes" :is-active="!error">
      <div v-bind="attributes" class="text-fg-2">
        <TypographySubtitleSmall>
          <slot />
        </TypographySubtitleSmall>
      </div>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="!!error">
      <div v-bind="attributes">
        <LayoutPageResult :message="error?.message" type="error">
          <template #description>
            {{ t('globalTryAgain') }}
          </template>
        </LayoutPageResult>
      </div>
    </AppStep>
    <template #title>
      <AppStep v-slot="attributes" :is-active="!error">
        <span v-bind="attributes">{{ title }}</span>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="!!error">
        <span v-bind="attributes">{{ t('globalError') }}</span>
      </AppStep>
    </template>
    <template #footer>
      <AppStep v-slot="attributes" :is-active="!error">
        <ButtonColored
          v-bind="attributes"
          :aria-label="confirmLabel"
          :loading="isPending"
          variant="primary-critical"
          @click="emit('confirm')"
        >
          {{ confirmLabel }}
        </ButtonColored>
        <ButtonColored
          v-bind="attributes"
          :aria-label="cancelLabel"
          variant="tertiary"
          @click="isOpen = false"
        >
          {{ cancelLabel }}
        </ButtonColored>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="!!error">
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('globalTryAgain')"
          variant="tertiary"
          @click="emit('restart')"
        >
          {{ t('globalTryAgain') }}
        </ButtonColored>
      </AppStep>
    </template>
  </AppDrawer>
</template>

<script setup lang="ts">
defineProps<{
  cancelLabel: string
  confirmLabel: string
  error?: Error
  isPending?: boolean
  title: string
}>()
const emit = defineEmits<{
  confirm: []
  restart: []
}>()

const isOpen = defineModel<boolean>('open')
const onAnimationEnd = (isOpenValue: boolean) => {
  if (isOpenValue) return

  emit('restart')
}

const { t } = useI18n()
</script>
