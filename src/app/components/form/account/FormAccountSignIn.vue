<template>
  <div class="flex flex-col items-center gap-4">
    <AppForm
      :form="v$"
      form-class="w-full"
      :is-form-sent="isFormSent"
      :submit-name="t('signIn')"
      @submit.prevent="submit"
    >
      <FormInputEmailAddress
        :form-input="v$.username"
        @input="form.username = $event"
      />
      <!-- TODO: allow for username too -->
      <FormInputPassword
        :form-input="v$.password"
        @input="form.password = $event"
      />
      <FormInputCaptcha
        v-model:is-used="captchaIsUsed"
        :form-input="v$.captcha"
        is-centered
        @input="form.captcha = $event"
      />
    </AppForm>
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
import { useVuelidate } from '@vuelidate/core'
import { useAuthenticateMutation } from '~~/gql/documents/mutations/account/accountAuthenticate'

const emit = defineEmits<{
  'signed-in': []
}>()

const { t } = useI18n()
const { jwtStore } = await useJwtStore()
const localePath = useLocalePath()

// data
const form = reactive({
  captcha: ref<string>(),
  password: ref<string>(),
  username: ref<string>(),
})
const isFormSent = ref(false)
const modelError = defineModel<Error>('error')

// api data
const authenticateMutation = useAuthenticateMutation()
const api = await useApiData([authenticateMutation])

// methods
const alertError = useAlertError()
const captchaIsUsed = ref<boolean>()
const submit = async () => {
  if (!(await isFormValid({ v$, isFormSent }))) return

  const result = await authenticateMutation.executeMutation(
    {
      username: form.username || '',
      password: form.password || '',
    },
    {
      fetchOptions: {
        headers: {
          ...(form.captcha && { [TURNSTILE_HEADER_KEY]: form.captcha }),
        },
      },
    },
  )

  if (result.error) {
    captchaIsUsed.value = true
    return
  }

  try {
    await jwtStore(result.data?.authenticate?.jwt || undefined)
  } catch (error) {
    alertError({
      ...(error instanceof Error ? { error } : {}),
      messageI18n: t('jwtStoreFail'),
    })
    return
  }

  emit('signed-in')
}

// vuelidate
const rules = {
  captcha: VALIDATION_CAPTCHA(),
  username: VALIDATION_EMAIL_ADDRESS({ isRequired: true }),
  password: VALIDATION_PASSWORD(),
}
const v$ = useVuelidate(rules, form)

// TODO: move into api utility as `errorsTranslated`
watch(
  () => api.value.errors,
  (current) => {
    modelError.value = current?.length
      ? new Error(
          getCombinedErrorMessages(current, {
            postgres55000: t('postgres55000'),
            postgresP0002: t('postgresP0002'),
          })[0],
        )
      : undefined
  },
)
</script>

<i18n lang="yaml">
de:
  jwtStoreFail: Fehler beim Speichern der Authentifizierungsdaten!
  passwordReset: Passwort zurücksetzen
  postgres55000: Deine E-Mail-Adresse ist noch nicht verifiziert! Schau in dein E-Mail-Postfach, ggf. auch in den Spam-Ordner, oder kontaktiere den Support.
  postgresP0002: Anmeldung fehlgeschlagen! Hast du dich schon registriert? Überprüfe deine Eingaben auf Schreibfehler oder kontaktiere den Support.
  register: Konto erstellen
  signIn: Einloggen
en:
  jwtStoreFail: Failed to store the authentication data!
  passwordReset: I forgot my password
  postgres55000: Your email address has not been verified yet! Check your email inbox, including the spam folder if necessary, or contact support.
  postgresP0002: Login failed! Have you registered yet? Check your input for spelling mistakes or contact support.
  register: Create an account
  signIn: Log in
</i18n>
