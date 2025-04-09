<template>
  <div class="flex flex-col items-center gap-4">
    <Form
      :errors="api.errors"
      :errors-pg-ids="{
        postgres22023: t('postgres22023'),
        postgres23505: t('postgres23505'),
      }"
      :form="v$"
      form-class="w-full"
      :is-form-sent="isFormSent"
      :submit-name="t('register')"
      @submit.prevent="submitEmit"
    >
      <FormInputUsername
        :form-input="v$.username"
        is-validatable
        is-validation-inverted
        @input="form.username = $event"
      />
      <FormInputEmailAddress
        :form-input="v$.emailAddress"
        @input="form.emailAddress = $event"
      />
      <FormInputPassword
        :form-input="v$.password"
        @input="form.password = $event"
      />
      <FormInputPassword
        :form-input="v$.passwordRepetition"
        :title="t('passwordRepetition')"
        @input="form.passwordRepetition = $event"
      />
      <FormInputCaptcha
        :form-input="v$.captcha"
        is-centered
        @input="form.captcha = $event"
      />
      <template #assistance>
        <FormInputStateInfo>
          {{ t('accountDeletionNotice') }}
        </FormInputStateInfo>
      </template>
    </Form>
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
import { useVuelidate } from '@vuelidate/core'
import { sameAs, required } from '@vuelidate/validators'

import { useAccountRegistrationMutation } from '~~/gql/documents/mutations/account/accountRegistration'

const emit = defineEmits<{
  submit: []
  success: []
}>()

const { locale, t } = useI18n()
const localePath = useLocalePath()
const accountRegistrationMutation = useAccountRegistrationMutation()
const api = getApiData([accountRegistrationMutation])
const form = reactive({
  captcha: ref<string>(),
  emailAddress: ref<string>(),
  password: ref<string>(),
  passwordRepetition: ref<string>(),
  username: ref<string>(),
})
const isFormSent = ref(false)

// Methods
const submit = async (termId: string) => {
  const result = await accountRegistrationMutation.executeMutation(
    {
      emailAddress: form.emailAddress || '',
      language: locale.value,
      legalTermId: termId,
      password: form.password || '',
      username: form.username || '',
    },
    {
      fetchOptions: {
        headers: {
          ...(form.captcha && { [TURNSTILE_HEADER_KEY]: form.captcha }),
        },
      },
    },
  )
  if (result.error || !result.data) return
  emit('success')
}
const submitEmit = async () => {
  if (!(await isFormValid({ v$, isFormSent }))) return
  emit('submit')
}

// vuelidate
const rules = {
  captcha: VALIDATION_CAPTCHA(),
  emailAddress: VALIDATION_EMAIL_ADDRESS({ isRequired: true }),
  username: VALIDATION_USERNAME({
    isRequired: true,
    validateExistenceNone: true,
  }),
  password: VALIDATION_PASSWORD(),
  passwordRepetition: {
    required,
    sameAs: sameAs(computed(() => form.password)),
  },
}
const v$ = useVuelidate(rules, form)

defineExpose({
  submit,
})
</script>

<i18n lang="yaml">
de:
  accountDeletionNotice: Du wirst deinen Account jederzeit löschen können.
  passwordRepetition: Passwort bestätigen
  postgres22023: Das Passwort ist zu kurz! Überlege dir ein längeres.
  postgres23505: Es gibt bereits einen Account mit diesem Nutzernamen! Überlege dir einen neuen Namen oder versuche dich anzumelden.
  register: Registrieren
  signIn: 'Du hast bereits ein Konto? Anmelden'
en:
  accountDeletionNotice: "You'll be able to delete your account at any time."
  passwordRepetition: Confirm password
  postgres22023: Your password is too short! Think of a longer one.
  postgres23505: This username is already in use! Think of a new name or try signing in instead.
  register: Sign Up
  signIn: Already have an account? Log in
</i18n>
