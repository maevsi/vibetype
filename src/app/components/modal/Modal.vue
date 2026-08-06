<template>
  <Dialog :open="isVisible" @update:open="onOpenChange">
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
            @click="submit()"
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
      <CardStateAlert v-if="errors" class="mb-4">
        <AppSpanList :span="errors" />
      </CardStateAlert>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
const {
  id,
  isFooterHidden,
  isSubmitDisabled,
  submitName = undefined,
  submitTaskProvider = () => Promise.resolve(),
} = defineProps<{
  id: string
  isFooterHidden?: boolean
  isSubmitDisabled?: boolean
  submitName?: string
  submitTaskProvider?: () => Promise<unknown>
}>()

const emit = defineEmits<{
  close: []
  submitSuccess: [submitSuccess: unknown]
}>()

const store = useStore()
const { t } = useI18n()

// data
const errors = ref()
const isSubmitting = ref(false)

// computations
const isVisible = computed(
  () => store.modals.filter((modal) => modal.id === id).length > 0,
)

// methods
const close = () => {
  // NOT = "cancel"! Used by `submit` too.

  store.modalRemove(id)
}
const onOpenChange = (open: boolean) => {
  if (!open) {
    close()
  }
}
const submit = async () => {
  isSubmitting.value = true

  try {
    const value = await submitTaskProvider()
    emit('submitSuccess', value)
    close()
  } catch (errorsLocal) {
    errors.value = [errorsLocal]
    console.error(errorsLocal)
  }

  isSubmitting.value = false
}

// lifecycle
watch(isVisible, (newValue: boolean, _oldvalue) => {
  if (!newValue) {
    errors.value = undefined
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
