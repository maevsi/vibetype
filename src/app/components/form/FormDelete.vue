<template>
  <form ref="formRef" novalidate @submit.prevent="onSubmit">
    <div class="flex flex-col gap-4">
      <form.Field v-slot="{ field }" name="password">
        <Field>
          <FieldLabel for="input-password">{{
            t('passwordAccount')
          }}</FieldLabel>
          <FieldContent>
            <div class="relative">
              <Input
                id="input-password"
                :type="isPasswordVisible ? 'text' : 'password'"
                :model-value="field.state.value"
                :aria-invalid="isFieldInvalid(field)"
                @blur="field.handleBlur"
                @input="
                  field.handleChange(($event.target as HTMLInputElement).value)
                "
              />
              <ButtonIcon
                class="absolute top-1/2 right-2 -translate-y-1/2"
                :aria-label="t('visibilityToggle')"
                @click="isPasswordVisible = !isPasswordVisible"
              >
                <AppIconEye v-if="!isPasswordVisible" />
                <AppIconEyeSlash v-else />
              </ButtonIcon>
            </div>
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

// data
const isPasswordVisible = ref(false)

// api data
const api = await useApiData([mutation])

// form
const formSchema = z.object({
  password: z.string().min(VALIDATION_PASSWORD_LENGTH_MINIMUM),
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

const onSubmit = (e: Event) => {
  e.preventDefault()
  e.stopPropagation()
  form.handleSubmit()
}

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
  visibilityToggle: Passwort-Sichtbarkeit umschalten
en:
  deletion: 'Delete {item} permanently'
  passwordAccount: Account password
  success: '{item} deleted successfully.'
  visibilityToggle: Toggle password visibility
</i18n>
