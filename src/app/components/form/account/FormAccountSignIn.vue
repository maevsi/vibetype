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
  error: [boolean]
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

// api data
const authenticateMutation = useAuthenticateMutation()

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
    emit('error', true)
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
  register: Konto erstellen
  signIn: Einloggen
en:
  jwtStoreFail: Failed to store the authentication data!
  passwordReset: I forgot my password
  register: Create an account
  signIn: Log in
</i18n>
