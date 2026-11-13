<template>
  <Dialog
    :open="open"
    @update:open="
      (nextOpen) => {
        if (isSubmitting && !nextOpen) return
        open = nextOpen
      }
    "
  >
    <DialogContent>
      <DialogHeader :class="$slots.header ? 'px-8' : 'sr-only'">
        <DialogTitle class="text-center">
          <slot name="header">{{ t('dialog') }}</slot>
        </DialogTitle>
      </DialogHeader>
      <div
        class="flex min-h-0 min-w-0 flex-col"
        :class="{
          'disabled pointer-events-none relative': isSubmitting,
        }"
      >
        <slot />
        <!-- TODO: show submitting state on button, not whole modal -->
        <div
          v-if="isSubmitting"
          class="absolute inset-0 flex items-center justify-center"
        >
          <AppSpinner class="size-8" />
        </div>
      </div>
      <DialogFooter v-if="!isFooterHidden" class="gap-8 sm:justify-center">
        <slot name="footer">
          <AppButton
            :aria-label="submitName || t('ok')"
            :disabled="isSubmitDisabled"
            :loading="isSubmitting"
            type="submit"
            @click="emit('submit')"
          >
            {{ submitName || t('ok') }}
            <template #prefix>
              <slot name="submit-icon">
                <AppIconCheckCircleSolid />
              </slot>
            </template>
          </AppButton>
        </slot>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
const {
  isFooterHidden,
  isSubmitDisabled,
  isSubmitting,
  submitName = undefined,
} = defineProps<{
  isFooterHidden?: boolean
  isSubmitDisabled?: boolean
  isSubmitting?: boolean
  submitName?: string
}>()

const emit = defineEmits<{
  close: []
  submit: []
}>()

const open = defineModel<boolean>()
const { t } = useI18n()

// lifecycle
watch(open, (newValue) => {
  if (!newValue) {
    emit('close')
  }
})
</script>

<i18n lang="yaml">
de:
  dialog: Dialog
  ok: Ok
en:
  dialog: Dialog
  ok: Ok
</i18n>
