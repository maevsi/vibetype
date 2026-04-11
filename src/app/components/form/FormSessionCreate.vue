<template>
  <div class="flex flex-col items-center gap-4">
    <form
      class="flex w-full flex-col gap-4"
      @submit.prevent="form.handleSubmit"
    >
      <form.Field v-slot="{ field }" name="username">
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
      <!-- TODO: allow for username too -->
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
          </FieldContent>
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <FormFieldCaptcha v-model:captcha-is-used="captchaIsUsed" :form />
      <ButtonColored :aria-label="t('signIn')" class="w-full" type="submit">
        {{ t('signIn') }}
      </ButtonColored>
    </form>
    <ButtonColored
      :aria-label="t('register')"
      class="w-full"
      :to="localePath('account-create')"
      variant="secondary"
    >
      {{ t('register') }}
    </ButtonColored>
    <ButtonColored
      :aria-label="t('passwordReset')"
      class="w-full"
      :to="localePath('account-password-reset-request')"
      variant="tertiary"
    >
      {{ t('passwordReset') }}
    </ButtonColored>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

const emit = defineEmits<{
  'signed-in': []
}>()

const { t } = useI18n()
const localePath = useLocalePath()

// data
const modelError = defineModel<Error>('error')

const captchaIsUsed = ref<boolean>()

// form
const loading = ref<boolean>()
const alertError = useAlertError()
const store = useStore()
const { $csrfFetch, $urqlReset } = useNuxtApp()

const formSchema = z.object({
  captcha: z.string().min(1),
  password: z.string().min(1),
  username: z.string().min(1).email().max(1000),
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
      $urqlReset()
      emit('signed-in')
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
</script>

<i18n lang="yaml">
de:
  emailAddress: E-Mail-Adresse
  error: Es gab ein Problem bei der Anmeldung. Versuche es nochmal oder kontaktiere den Support, wir helfen dir gerne weiter.
  password: Passwort
  passwordReset: Passwort zurücksetzen
  register: Konto erstellen
  signIn: Einloggen
en:
  emailAddress: Email address
  error: There was a problem signing in. Please try again or contact support, we are happy to help.
  password: Password
  passwordReset: I forgot my password
  register: Create an account
  signIn: Log in
</i18n>
