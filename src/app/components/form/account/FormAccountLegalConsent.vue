<template>
  <Form
    :form="v$"
    form-class="sticky bottom-0 z-10 flex flex-col gap-3 border-t border-(--semantic-base-line) bg-(--semantic-base-background) p-3"
    :is-form-sent="isFormSent"
    :submit-name="t('next')"
    @submit.prevent="formSubmit"
  >
    <div
      class="rounded-xl border border-(--semantic-base-line) bg-(--faint-weak) px-3 py-4"
    >
      <div class="flex items-center gap-3 p-1">
        <!-- TODO: extract checkbox-label combination to form input component -->
        <Checkbox
          :id="`form-account-legal-consent-${id}`"
          class="bg-(--semantic-base-surface-1)"
          :disabled
          form-key="agreement"
          :model-value="v$.agreement.$model"
          @update:model-value="
            form.agreement = typeof $event === 'string' ? false : $event
          "
        />
        <label
          :for="`form-account-legal-consent-${id}`"
          class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          <TypographySubtitleMedium>
            {{ label }}
          </TypographySubtitleMedium>
        </label>
      </div>
      <FormInputStateError
        :form-input="v$.agreement"
        validation-property="required"
      >
        {{ t('globalValidationRequired') }}
      </FormInputStateError>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { and, required } from '@vuelidate/validators'

const { disabled, id, label } = defineProps<{
  disabled?: boolean
  id: string
  label: string
}>()
const emit = defineEmits<{
  agreement: []
}>()

const { t } = useI18n()
const { form, isFormSent, formSubmit, v$ } = useForm({
  fields: {
    agreement: ref<boolean>(),
  },
  rules: {
    agreement: {
      required: and(required, (value: unknown) => !!value),
    },
  },
  onSubmit: () => emit('agreement'),
})
</script>

<i18n lang="yaml">
de:
  next: Weiter
en:
  next: Next
</i18n>
