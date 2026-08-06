<template>
  <Dialog v-model:open="open">
    <DialogContent
      class="top-[10%] max-h-[80%] w-5/6 max-w-none translate-y-0 flex-col gap-2 overflow-auto rounded-xl border-(--faint-line) bg-(--surface) p-2 shadow-xs sm:w-2/3 sm:max-w-none lg:w-1/2 xl:w-1/3"
    >
      <DialogHeader :class="$slots.header ? 'pr-8' : 'sr-only'">
        <DialogTitle class="text-center">
          <slot name="header">{{ t('dialog') }}</slot>
        </DialogTitle>
      </DialogHeader>
      <div
        class="flex min-h-0 flex-col"
        :class="{
          'disabled pointer-events-none relative': isSubmitting,
        }"
      >
        <slot />
        <div v-if="isSubmitting" class="absolute inset-0">
          <LoaderIndicatorSpinner class="m-auto size-8" />
        </div>
      </div>
      <DialogFooter v-if="!isFooterHidden" class="gap-8 sm:justify-center">
        <slot name="footer">
          <ButtonColored
            :aria-label="submitName || t('ok')"
            :disabled="isSubmitting || isSubmitDisabled"
            type="submit"
            @click="emit('submit')"
          >
            {{ submitName || t('ok') }}
            <template #prefix>
              <slot name="submit-icon">
                <AppIconCheckCircleSolid />
              </slot>
            </template>
          </ButtonColored>
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

<script lang="ts">
export default {
  name: 'AppModal',
}
</script>

<i18n lang="yaml">
de:
  dialog: Dialog
  ok: Ok
en:
  dialog: Dialog
  ok: Ok
</i18n>
