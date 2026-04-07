<template>
  <form
    class="sticky bottom-0 z-10 flex flex-col gap-3 border-t border-(--semantic-base-line) bg-(--semantic-base-background) p-3"
    novalidate
    @submit.prevent="onSubmit"
  >
    <div
      class="rounded-xl border border-(--semantic-base-line) bg-(--faint-weak) px-3 py-4"
    >
      <form.Field v-slot="{ field }" name="agreement">
        <div class="flex items-center gap-3 p-1">
          <AppCheckbox
            :id="templateIdCheckbox"
            :disabled
            form-key="agreement"
            :model-value="field.state.value"
            required
            @update:model-value="
              field.handleChange(
                typeof $event === 'string' ? false : ($event ?? false),
              )
            "
          />
          <label
            :for="templateIdCheckbox"
            class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <TypographySubtitleMedium>
              {{ label }}
            </TypographySubtitleMedium>
          </label>
        </div>
        <FieldError
          v-if="isFieldInvalid(field)"
          :errors="field.state.meta.errors"
        />
      </form.Field>
    </div>
    <ButtonColored :aria-label="t('next')" class="w-full" type="submit">
      {{ t('next') }}
    </ButtonColored>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

const { disabled, label } = defineProps<{
  disabled?: boolean
  label: string
}>()
const emit = defineEmits<{
  agreement: []
}>()

const { t } = useI18n()

const formSchema = z.object({
  agreement: z.literal(true, {
    errorMap: () => ({ message: t('globalValidationRequired') }),
  }),
})

const form = useForm({
  defaultValues: {
    agreement: false,
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: () => {
    emit('agreement')
  },
})

const onSubmit = (e: Event) => {
  e.preventDefault()
  e.stopPropagation()
  form.handleSubmit()
}

// accessibility
const templateIdCheckbox = useId()
</script>

<i18n lang="yaml">
de:
  next: Weiter
en:
  next: Next
</i18n>
