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

const emit = defineEmits<{
  'signed-in': []
}>()

const { t } = useI18n()
const localePath = useLocalePath()

// data
const form = reactive({
  captcha: ref<string>(),
  password: ref<string>(),
  username: ref<string>(),
})
const isFormSent = ref(false)
const modelError = defineModel<Error>('error')

// TODO: loading

// methods
const loading = ref<boolean>()
const alertError = useAlertError()
const captchaIsUsed = ref<boolean>()
const store = useStore()
const { $csrfFetch, $urqlReset } = useNuxtApp()
const submit = async () => {
  if (!(await isFormValid({ v$, isFormSent }))) return

  try {
    loading.value = true
    const { jwtDecoded: jwt } = await $csrfFetch('/api/model/jwt', {
      body: {
        password: form.password,
        username: form.username,
      },
      headers: {
        ...(form.captcha ? { [TURNSTILE_HEADER_KEY]: form.captcha } : {}),
      },
      method: 'POST',
    })

    if (!jwt) {
      throw new Error(t('error'))
    }

    store.jwtSet(jwt)
    $urqlReset()
    emit('signed-in')
  } catch (error) {
    alertError({
      ...(error instanceof Error ? { error } : {}),
      messageI18n: t('error'),
    })
    modelError.value = new Error(t('error'), { cause: error }) // TODO: implement error page
  } finally {
    captchaIsUsed.value = true
    loading.value = false
  }
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
  error: Es gab ein Problem bei der Anmeldung. Versuche es nochmal oder kontaktiere den Support, wir helfen dir gerne weiter.
  passwordReset: Passwort zurücksetzen
  register: Konto erstellen
  signIn: Einloggen
en:
  error: There was a problem signing in. Please try again or contact support, we are happy to help.
  passwordReset: I forgot my password
  register: Create an account
  signIn: Log in
</i18n>
