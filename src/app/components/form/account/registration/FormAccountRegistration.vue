<template>
  <div class="flex flex-col items-center gap-4">
    <form
      class="flex w-full flex-col gap-4"
      @submit.prevent="form.handleSubmit"
    >
      <form.Field
        v-slot="{ field }"
        name="username"
        :validators="{
          onBlurAsync: async ({ value: val }) => {
            if (!val) return undefined

            const isAvailable = await validateUsername(true)(val)
            return isAvailable ? undefined : t('usernameAlreadyTaken')
          },
          onBlurAsyncDebounceMs: 300,
        }"
      >
        <Field>
          <FieldLabel>
            <TypographySubtitleSmall>
              {{ t('username') }}
            </TypographySubtitleSmall>
          </FieldLabel>
          <FieldContent>
            <Input
              type="text"
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
            :errors="normalizeFieldErrors(field.state.meta.errors)"
          />
        </Field>
      </form.Field>
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
      <form.Field v-slot="{ field }" name="password">
        <Field>
          <FieldLabel>
            <TypographySubtitleSmall>
              {{ t('password') }}
            </TypographySubtitleSmall>
          </FieldLabel>
          <FieldContent>
            <FormInputPassword
              :aria-invalid="isFieldInvalid(field)"
              :model-value="field.state.value"
              @blur="field.handleBlur"
              @input="field.handleChange($event)"
            />
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
      <form.Field v-slot="{ field }" name="passwordRepetition">
        <Field>
          <FieldLabel>
            <TypographySubtitleSmall>
              {{ t('passwordRepetition') }}
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
      <FormFieldCaptcha v-model:captcha-is-used="captchaIsUsed" :form />
      <ButtonColored :aria-label="t('register')" class="w-full" type="submit">
        {{ t('register') }}
      </ButtonColored>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ t('accountDeletionNotice') }}
      </p>
    </form>
    <ButtonColored
      :aria-label="t('signIn')"
      class="w-full"
      :to="localePath('session-create')"
      variant="tertiary"
    >
      {{ t('signIn') }}
    </ButtonColored>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

const emit = defineEmits<{
  submit: [
    values: {
      captcha: string
      emailAddress: string
      password: string
      username: string
    },
  ]
}>()

const { t } = useI18n()
const localePath = useLocalePath()
const captchaIsUsed = defineModel<boolean>('captcha-is-used')

// form
const formSchema = z
  .object({
    captcha: SCHEMA_CAPTCHA,
    emailAddress: SCHEMA_EMAIL_ADDRESS_REQUIRED,
    password: SCHEMA_PASSWORD,
    passwordRepetition: z.string().min(1),
    username: SCHEMA_USERNAME_REQUIRED,
  })
  .refine((data) => data.password === data.passwordRepetition, {
    message: t('passwordMismatch'),
    path: ['passwordRepetition'],
  })

const form = useForm({
  defaultValues: {
    captcha: '',
    emailAddress: '',
    password: '',
    passwordRepetition: '',
    username: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    emit('submit', {
      captcha: value.captcha,
      emailAddress: value.emailAddress,
      password: value.password,
      username: value.username,
    })
  },
})
</script>

<i18n lang="yaml">
de:
  accountDeletionNotice: Du wirst deinen Account jederzeit löschen können.
  emailAddress: E-Mail-Adresse
  password: Passwort
  passwordMismatch: Die Passwörter stimmen nicht überein
  passwordRepetition: Passwort bestätigen
  register: Registrieren
  signIn: 'Du hast bereits ein Konto? Anmelden'
  username: Nutzername
  usernameAlreadyTaken: Dieser Nutzername ist bereits vergeben
en:
  accountDeletionNotice: "You'll be able to delete your account at any time."
  emailAddress: Email address
  password: Password
  passwordMismatch: The passwords do not match
  passwordRepetition: Confirm password
  register: Sign Up
  signIn: Already have an account? Log in
  username: Username
  usernameAlreadyTaken: This username is already taken
</i18n>
