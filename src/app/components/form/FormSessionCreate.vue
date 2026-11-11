<template>
  <div class="flex flex-col gap-4">
    <form class="flex w-full flex-col gap-3" @submit.prevent="handleSubmit">
      <form.Field v-slot="{ field }" name="username">
        <Field>
          <FieldContent>
            <FormAuthInput
              :aria-invalid="!!usernameValidation.error.value"
              autocomplete="username"
              :model-value="field.state.value"
              :placeholder="t('emailAddressOrUsername')"
              type="text"
              @blur="handleUsernameBlur(field)"
              @input="handleUsernameInput(field, $event)"
            >
              <template #icon>
                <IHeroiconsEnvelope />
              </template>
            </FormAuthInput>
          </FieldContent>
          <p
            v-if="usernameValidation.error.value"
            class="text-caption text-error"
          >
            {{ usernameValidation.error.value }}
          </p>
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="password">
        <Field>
          <FieldContent>
            <FormAuthInputPassword
              :aria-invalid="!!passwordValidation.error.value"
              autocomplete="current-password"
              :model-value="field.state.value"
              :placeholder="t('password')"
              @blur="handlePasswordBlur(field)"
              @input="handlePasswordInput(field, $event)"
            />
          </FieldContent>
          <p
            v-if="passwordValidation.error.value"
            class="text-caption text-error"
          >
            {{ passwordValidation.error.value }}
          </p>
        </Field>
      </form.Field>
      <div class="text-right">
        <NuxtLinkLocale
          class="text-body text-fg-1"
          to="account-password-reset-request"
        >
          {{ t('forgotPassword') }}
        </NuxtLinkLocale>
      </div>
      <FormFieldCaptcha v-model:captcha-is-used="captchaIsUsed" :form />
      <ButtonColored
        :aria-label="t('signIn')"
        class="w-full"
        :loading="loading"
        type="submit"
      >
        {{ t('signIn') }}
      </ButtonColored>
    </form>
    <p class="text-center text-body text-fg-2">
      {{ t('newToVibetype') }}
      <NuxtLinkLocale
        class="font-semibold text-link underline"
        to="account-create"
      >
        {{ t('register') }}
      </NuxtLinkLocale>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

const emit = defineEmits<{
  'signed-in': [username: string]
}>()

const { t } = useI18n()

// data
const modelError = defineModel<Error>('error')

const captchaIsUsed = ref<boolean>()

// manual validation
const schemaUsername = z.union([
  SCHEMA_EMAIL_ADDRESS_REQUIRED,
  SCHEMA_USERNAME_REQUIRED,
])

const usernameValidation = useAuthFieldValidation({
  validator: (value: string) => {
    if (!value) {
      return t('usernameRequired')
    }

    const result = schemaUsername.safeParse(value)
    return result.success ? '' : t('usernameInvalid')
  },
})

const passwordValidation = useAuthFieldValidation({
  validator: (value: string) => {
    if (!value) {
      return t('passwordRequired')
    }

    const result = SCHEMA_PASSWORD.safeParse(value)
    return result.success ? '' : t('passwordInvalid')
  },
})

const handleUsernameBlur = async (field: {
  handleBlur: () => void
  state: { value: string }
}) => {
  field.handleBlur()
  await usernameValidation.handleBlur(field.state.value)
}

const handleUsernameInput = async (
  field: { handleChange: (value: string) => void },
  value: string,
) => {
  field.handleChange(value)
  await usernameValidation.handleInput(value)
}

const handlePasswordBlur = async (field: {
  handleBlur: () => void
  state: { value: string }
}) => {
  field.handleBlur()
  await passwordValidation.handleBlur(field.state.value)
}

const handlePasswordInput = async (
  field: { handleChange: (value: string) => void },
  value: string,
) => {
  field.handleChange(value)
  await passwordValidation.handleInput(value)
}

// form
const loading = ref<boolean>()
const alertError = useAlertError()
const store = useStore()
const nuxtApp = useNuxtApp()
const { $csrfFetch, $urqlReset } = nuxtApp

const formSchema = z.object({
  captcha: SCHEMA_CAPTCHA,
  password: SCHEMA_PASSWORD,
  username: z.union([SCHEMA_EMAIL_ADDRESS_REQUIRED, SCHEMA_USERNAME_REQUIRED]),
})

const form = useForm({
  defaultValues: {
    captcha: '',
    password: '',
    username: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    try {
      loading.value = true
      const { jwtPayload } = await $csrfFetch('/api/model/jwt', {
        body: {
          password: value.password,
          username: value.username,
        },
        headers: {
          ...(value.captcha ? { [TURNSTILE_HEADER_KEY]: value.captcha } : {}),
        },
        method: 'POST',
      })

      if (!jwtPayload) {
        throw new Error(t('error'))
      }

      store.jwtSet(jwtPayload)
      await $urqlReset()
      // the session opens in the language of the account, so the sign-in target below is computed in it
      await syncLocaleToOwnContactLanguage({ nuxtApp, store })
      emit('signed-in', value.username)
    } catch (error) {
      alertError({
        ...(error instanceof Error ? { error } : {}),
        messageI18n: t('error'),
      })
      modelError.value = new Error(t('error'), { cause: error })
    } finally {
      captchaIsUsed.value = true
      loading.value = false
    }
  },
})

const handleSubmit = async () => {
  usernameValidation.touched.value = true
  passwordValidation.touched.value = true

  const usernameValid = await usernameValidation.validate(
    form.getFieldValue('username'),
  )
  const passwordValid = await passwordValidation.validate(
    form.getFieldValue('password'),
  )

  if (!usernameValid || !passwordValid) return

  form.handleSubmit()
}
</script>

<i18n lang="yaml">
de:
  emailAddressOrUsername: E-Mail-Adresse oder Benutzername
  error: Es gab ein Problem bei der Anmeldung. Versuche es nochmal oder kontaktiere den Support, wir helfen dir gerne weiter.
  forgotPassword: Passwort vergessen?
  newToVibetype: Neu bei Vibetype?
  password: Passwort
  passwordInvalid: Ungueltiges Passwort
  passwordRequired: Bitte gib dein Passwort ein
  register: Neues Konto erstellen
  signIn: Einloggen
  usernameInvalid: Ungültige E-Mail-Adresse oder Benutzername
  usernameRequired: Bitte gib deine E-Mail-Adresse oder deinen Benutzernamen ein
en:
  emailAddressOrUsername: Email or username
  error: There was a problem signing in. Please try again or contact support, we are happy to help.
  forgotPassword: Forgot your password?
  newToVibetype: New to Vibetype?
  password: Enter password
  passwordInvalid: Invalid password
  passwordRequired: Please enter your password
  register: Create new account
  signIn: Sign in
  usernameInvalid: Invalid email address or username
  usernameRequired: Please enter your email address or username
</i18n>
