<template>
  <form ref="formRef" novalidate @submit.prevent="form.handleSubmit">
    <div class="flex flex-col gap-4">
      <form.Field v-slot="{ field }" name="password">
        <Field>
          <FieldLabel for="input-password">{{
            t('passwordAccount')
          }}</FieldLabel>
          <FieldContent>
            <FormInputPassword
              id="input-password"
              :aria-invalid="isFieldInvalid(field)"
              :model-value="field.state.value"
              @blur="field.handleBlur"
              @input="field.handleChange($event)"
            />
          </FieldContent>
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <div class="flex flex-col items-center">
        <ButtonColored
          :aria-label="t('deletion', { item: itemNameDeletion })"
          class="w-full"
          type="submit"
          variant="primary-critical"
        >
          {{ t('deletion', { item: itemNameDeletion }) }}
        </ButtonColored>
      </div>
      <CardStateAlert v-if="errorMessages?.length">
        <AppSpanList :span="errorMessages" />
      </CardStateAlert>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { AnyVariables, UseMutationResponse } from '@urql/vue'
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

const {
  errorsPgIds = undefined,
  isToastHidden = undefined,
  itemNameDeletion,
  itemNameSuccess,
  mutation,
  variables = undefined,
} = defineProps<{
  errorsPgIds?: Record<string, string>
  isToastHidden?: boolean
  itemNameDeletion: string
  itemNameSuccess: string
  mutation: UseMutationResponse<unknown, AnyVariables>
  variables?: Record<string, unknown>
}>()

const modelError = defineModel<Error>('error')

const emit = defineEmits<{
  success: []
}>()

const { t } = useI18n()
const formRef = useTemplateRef<HTMLFormElement>('formRef')
const submit = () => formRef.value?.requestSubmit()
defineExpose({ submit })

// api data
const api = await useApiData([mutation])

// form
const formSchema = z.object({
  password: SCHEMA_PASSWORD,
})

const form = useForm({
  defaultValues: {
    password: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    const result = await mutation.executeMutation({
      input: {
        password: value.password,
        ...variables,
      },
    })

    if (result.error) return

    if (!isToastHidden) {
      toast.success(
        t('success', {
          item: itemNameSuccess,
        }),
      )
    }

    emit('success')
  },
})

// computations
const errorMessages = computed(() =>
  api.value.errors
    ? getCombinedErrorMessages(api.value.errors, errorsPgIds)
    : undefined,
)

watch(
  () => api.value.errors,
  (current) => {
    modelError.value = current?.length
      ? new Error(getCombinedErrorMessages(current, errorsPgIds)[0])
      : undefined
  },
)
</script>

<i18n lang="yaml">
de:
  deletion: '{item} endgültig löschen'
  passwordAccount: Konto-Passwort
  success: '{item} erfolgreich gelöscht.'
en:
  deletion: 'Delete {item} permanently'
  passwordAccount: Account password
  success: '{item} deleted successfully.'
</i18n>
