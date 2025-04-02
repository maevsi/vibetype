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
      @submit.prevent="openPrivacyModal"
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
        :label="t('passwordRepetition')"
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
      :aria-label="t('alreadyHaveAnAccount')"
      class="w-full dark:data-[type=tertiary]:text-[#fafafc]"
      :to="localePath('session-create')"
      variant="tertiary"
    >
      {{ t('alreadyHaveAnAccount') }}
    </ButtonColored>
    <!-- Modals -->
    <ModalPrivacyPolicy
      v-model="privacyModalOpen"
      @agreement="openGeneralTerms"
    />
    <ModalGeneralTerms
      v-model="generalTermsModalOpen"
      @back="openPrivacyModal"
      @agreement="submit"
    />
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { sameAs, required } from '@vuelidate/validators'

import { useAccountRegistrationMutation } from '~~/gql/documents/mutations/account/accountRegistration'

const { locale, t } = useI18n()
const localePath = useLocalePath()
const fireAlert = useFireAlert()
const privacyModalOpen = ref(false)
const generalTermsModalOpen = ref(false)
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
  const accountResult = await accountRegistrationMutation.executeMutation(
    {
      emailAddress: form.emailAddress || '',
      language: locale.value,
      password: form.password || '',
      username: form.username || '',
      legalTermId: termId,
    },
    {
      fetchOptions: {
        headers: {
          ...(form.captcha && { [TURNSTILE_HEADER_KEY]: form.captcha }),
        },
      },
    },
  )
  if (accountResult.error) return
  const accountUuid = accountResult.data?.accountRegistration?.uuid
  if (!accountUuid) {
    console.error('No account UUID received')
    return
  }
  await fireAlert({
    level: 'success',
    title: t('registrationSuccessTitle'),
    text: t('registrationSuccessBody'),
  })
  await navigateTo('/account/verify/create')
}

const openPrivacyModal = async () => {
  if (!(await isFormValid({ v$, isFormSent }))) return
  openPrivacyModal()
}
const openGeneralTerms = () => {
  generalTermsModalOpen.value = true
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
</script>

<i18n lang="yaml">
de:
  accountDeletionNotice: Du wirst deinen Account jederzeit löschen können.
  alreadyHaveAnAccount: 'Du hast bereits ein Konto? Anmelden'
  passwordRepetition: Passwort bestätigen
  postgres22023: Das Passwort ist zu kurz! Überlege dir ein längeres.
  postgres23505: Es gibt bereits einen Account mit diesem Nutzernamen oder dieser E-Mail-Adresse! Überlege dir einen neuen Namen oder versuche dich anzumelden.
  register: Registrieren
  registrationSuccessBody: Verifiziere deinen Account über den Link in der E-Mail, die du in Kürze erhalten wirst.
  registrationSuccessTitle: Verifizierungs-E-Mail gesendet.
en:
  accountDeletionNotice: "You'll be able to delete your account at any time."
  alreadyHaveAnAccount: Already have an account? Log in
  passwordRepetition: Confirm password
  postgres22023: Your password is too short! Think of a longer one.
  postgres23505: This username or email address is already in use! Think of a new name or try signing in instead.
  register: Sign Up
  registrationSuccessBody: Verify your account using the verification link sent to you by email.
  registrationSuccessTitle: Verification email sent.
</i18n>
