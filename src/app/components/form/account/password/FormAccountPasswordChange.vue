<template>
  <form class="flex flex-col gap-4" @submit.prevent="form.handleSubmit">
    <form.Field v-slot="{ field }" name="passwordCurrent">
      <Field>
        <FieldLabel>
          <TypographySubtitleSmall>
            {{ t('passwordCurrent') }}
          </TypographySubtitleSmall>
        </FieldLabel>
        <FieldContent>
          <FormInputPassword
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
    <form.Field v-slot="{ field }" name="passwordNew">
      <Field>
        <FieldLabel>
          <TypographySubtitleSmall>
            {{ t('passwordNew') }}
          </TypographySubtitleSmall>
        </FieldLabel>
        <FieldContent>
          <FormInputPassword
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
    <ButtonColored
      :aria-label="t('passwordChange')"
      class="w-full"
      type="submit"
    >
      {{ t('passwordChange') }}
    </ButtonColored>
    <CardStateAlert v-if="errorMessages?.length">
      <AppSpanList :span="errorMessages" />
    </CardStateAlert>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

import { useAccountPasswordChangeMutation } from '~~/gql/documents/mutations/account/accountPasswordChange'

const { t } = useI18n()

// api data
const accountPasswordChangeMutation = useAccountPasswordChangeMutation()
const api = await useApiData([accountPasswordChangeMutation])

const errorMessages = computed(() =>
  api.value.errors.length
    ? getCombinedErrorMessages(api.value.errors, {
        postgres22023: t('postgres22023'),
        postgres28P01: t('postgres28P01'),
      })
    : undefined,
)

// form
const formSchema = z.object({
  passwordCurrent: z.string().min(1),
  passwordNew: z.string().min(VALIDATION_PASSWORD_LENGTH_MINIMUM),
})

const form = useForm({
  defaultValues: {
    passwordCurrent: '',
    passwordNew: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    const result = await accountPasswordChangeMutation.executeMutation({
      input: {
        passwordCurrent: value.passwordCurrent,
        passwordNew: value.passwordNew,
      },
    })

    if (result.error || !result.data) return

    toast.success(t('passwordChangeSuccess'))
    form.reset()
  },
})
</script>

<i18n lang="yaml">
de:
  passwordChange: Passwort ändern
  passwordChangeSuccess: Passwort erfolgreich geändert.
  passwordCurrent: Aktuelles Passwort
  passwordNew: Neues Passwort
  postgres22023: Das neue Passwort ist zu kurz! Überlege dir ein längeres.
  postgres28P01: Aktuelles Passwort falsch! Überprüfe, ob du alles richtig geschrieben hast.
en:
  passwordChange: Change password
  passwordChangeSuccess: Password changed successfully.
  passwordCurrent: Current password
  passwordNew: New password
  postgres22023: Your new password is too short! Think of a longer one.
  postgres28P01: Current password incorrect! Check for spelling mistakes.
</i18n>
