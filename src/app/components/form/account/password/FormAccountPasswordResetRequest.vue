<template>
  <form
    ref="formRef"
    :class="classProps"
    class="flex flex-col gap-4"
    @submit.prevent="form.handleSubmit"
  >
    <form.Field v-slot="{ field }" name="emailAddress">
      <Field>
        <FieldLabel>
          <TypographySubtitleSmall>
            {{ t('emailAddress') }}
          </TypographySubtitleSmall>
        </FieldLabel>
        <FieldContent>
          <Input
            type="email"
            :model-value="field.state.value"
            :aria-invalid="isFieldInvalid(field)"
            @blur="field.handleBlur"
            @input="
              field.handleChange(($event.target as HTMLInputElement).value)
            "
          />
        </FieldContent>
        <FieldError
          v-if="isFieldInvalid(field)"
          :errors="field.state.meta.errors"
        />
      </Field>
    </form.Field>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'
import type { HtmlHTMLAttributes } from 'vue'

import { useAccountPasswordResetRequestMutation } from '~~/gql/documents/mutations/account/accountPasswordResetRequest'

const { class: classProps = undefined } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()

const emit = defineEmits<{
  success: []
}>()

const modelError = defineModel<Error>('error')

const { locale, t } = useI18n()
const formRef = useTemplateRef<HTMLFormElement>('formRef')
const submit = () => formRef.value?.requestSubmit()
defineExpose({ submit })

// api data
const passwordResetRequestMutation = useAccountPasswordResetRequestMutation()
const api = await useApiData([passwordResetRequestMutation])
watch(
  () => api.value.errors,
  (current) => {
    modelError.value = current?.length
      ? new Error(getCombinedErrorMessages(current)[0])
      : undefined
  },
)

// form
const formSchema = z.object({
  emailAddress: SCHEMA_EMAIL_ADDRESS_REQUIRED,
})

const form = useForm({
  defaultValues: {
    emailAddress: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    const result = await passwordResetRequestMutation.executeMutation({
      input: {
        emailAddress: value.emailAddress,
        language: locale.value,
      },
    })

    if (!getResultData(result)) return

    emit('success')
  },
})
</script>

<i18n lang="yaml">
de:
  emailAddress: E-Mail-Adresse
en:
  emailAddress: Email address
</i18n>
