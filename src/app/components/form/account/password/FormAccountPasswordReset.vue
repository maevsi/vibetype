<template>
  <form ref="formRef" class="flex flex-col gap-4" @submit="onSubmit">
    <form.Field v-slot="{ field }" name="password">
      <Field>
        <FieldLabel>
          <TypographySubtitleSmall>
            {{ t('passwordNew') }}
          </TypographySubtitleSmall>
        </FieldLabel>
        <FieldContent>
          <div class="relative">
            <Input
              :type="isPasswordVisible ? 'text' : 'password'"
              :model-value="field.state.value"
              :aria-invalid="isFieldInvalid(field)"
              @blur="field.handleBlur"
              @input="
                field.handleChange(($event.target as HTMLInputElement).value)
              "
            />
            <ButtonIcon
              :aria-label="t('visibilityToggle')"
              class="absolute top-1/2 right-2 -translate-y-1/2"
              @click="isPasswordVisible = !isPasswordVisible"
            >
              <AppIconEye v-if="!isPasswordVisible" />
              <AppIconEyeSlash v-else />
            </ButtonIcon>
          </div>
          <Progress
            :model-value="calculatePasswordStrength(field.state.value)"
            class="my-2"
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
import { useAccountPasswordResetMutation } from '~~/gql/documents/mutations/account/accountPasswordReset'

const { code } = defineProps<{
  code: string
}>()

const emit = defineEmits<{
  success: []
}>()

const modelError = defineModel<Error>('error')

const { t } = useI18n()
const formRef = useTemplateRef<HTMLFormElement>('formRef')
const submit = () => formRef.value?.requestSubmit()
defineExpose({ submit })

// data
const isPasswordVisible = ref(false)

// api data
const passwordResetMutation = useAccountPasswordResetMutation()
const api = await useApiData([passwordResetMutation])
watch(
  () => api.value.errors,
  (current) => {
    modelError.value = current?.length
      ? new Error(
          getCombinedErrorMessages(current, {
            postgres22023: t('postgres22023'),
            postgres55000: t('postgres55000'),
            postgresP0002: t('postgresP0002'),
          })[0],
        )
      : undefined
  },
)

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
    const result = await passwordResetMutation.executeMutation({
      input: {
        code,
        password: value.password,
      },
    })

    if (result.error || !result.data) return

    emit('success')
  },
})

const onSubmit = (e: Event) => {
  e.preventDefault()
  e.stopPropagation()
  form.handleSubmit()
}
</script>

<i18n lang="yaml">
de:
  passwordNew: Gib dein neues Passwort ein
  postgres22023: Das Passwort ist zu kurz! Überlege dir ein längeres.
  postgresP0002: Unbekannter Zurücksetzungslink! Hast du dein Passwort vielleicht schon zurückgesetzt?
  postgres55000: Der Zurücksetzungslink ist abgelaufen!
  visibilityToggle: Sichtbarkeit umschalten
en:
  passwordNew: Enter new password
  postgres22023: This password is too short! Think of a longer one.
  postgresP0002: Invalid reset link! Have you perhaps already reset your password?
  postgres55000: Your reset link has expired!
  visibilityToggle: Toggle visibility
</i18n>
