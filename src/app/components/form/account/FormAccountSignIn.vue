<template>
  <div>
    <div v-if="!errorVisible" class="flex flex-col items-center gap-4">
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
    <ErrorView
      v-else
      :is-visible="errorVisible"
      :description="errorDescription"
      @close="onClose"
    />
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { useAuthenticateMutation } from '~~/gql/documents/mutations/account/accountAuthenticate'

const emit = defineEmits<{
  'signed-in': []
  'error-visible': [boolean]
}>()

const fireAlert = useFireAlert()
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

const errorVisible = ref(false)
const errorDescription = ref('')

// api data
const authenticateMutation = useAuthenticateMutation()
const api = getApiData([authenticateMutation])

// methods
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
    api.value.errors = [result.error]
    const pgError = result.error.graphQLErrors?.find(
      (g) => g.errcode === '55000' || g.errcode === 'P0002',
    )
    if (pgError) {
      if (pgError.errcode === '55000') {
        errorDescription.value = t('postgres55000')
      } else if (pgError.errcode === 'P0002') {
        errorDescription.value = t('postgresP0002')
      }
    } else {
      errorDescription.value = result.error.message
    }
    errorVisible.value = true
    emit('error-visible', true)
    return
  }
  try {
    await jwtStore(result.data?.authenticate?.jwt)
  } catch (error) {
    await fireAlert({
      error,
      level: 'error',
      text: t('jwtStoreFail'),
      title: t('globalStatusError'),
    })
    return
  }
  emit('signed-in')
}

const onClose = () => {
  errorVisible.value = false
  emit('error-visible', false)
}

// vuelidate
const rules = {
  captcha: VALIDATION_CAPTCHA(),
  username: VALIDATION_EMAIL_ADDRESS({ isRequired: true }),
  password: VALIDATION_PASSWORD(),
}
const v$ = useVuelidate(rules, form)
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
