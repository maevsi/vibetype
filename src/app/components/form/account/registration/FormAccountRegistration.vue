<template>
  <div class="flex flex-col items-center gap-4">
    <AppForm
      v-if="form"
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
        id="password"
        :form-input="v$.password"
        is-strength-shown
        @input="form.password = $event"
      />
      <FormInputPassword
        id="password-repetition"
        :form-input="v$.passwordRepetition"
        :title="t('passwordRepetition')"
        @input="form.passwordRepetition = $event"
      />
      <FormInputCaptcha
        v-model:is-used="captchaIsUsed"
        :form-input="v$.captcha"
        is-centered
        @input="form.captcha = $event"
      />
      <template #assistance>
        <FormInputStateInfo>
          {{ t('accountDeletionNotice') }}
        </FormInputStateInfo>
      </template>
    </AppForm>
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

const emit = defineEmits<{
  submit: []
}>()

const { t } = useI18n()
const localePath = useLocalePath()
const form = defineModel<{
  captcha: string | undefined
  emailAddress: string | undefined
  password: string | undefined
  passwordRepetition: string | undefined
  username: string | undefined
}>('form', { required: true })
const isFormSent = ref(false)
const captchaIsUsed = defineModel<boolean>('captcha-is-used')

// Methods
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
    sameAs: sameAs(computed(() => form.value?.password)),
  },
}
const v$ = useVuelidate(rules, form.value)
</script>

<i18n lang="yaml">
de:
  accountDeletionNotice: Du wirst deinen Account jederzeit löschen können.
  passwordRepetition: Passwort bestätigen
  register: Registrieren
  signIn: 'Du hast bereits ein Konto? Anmelden'
en:
  accountDeletionNotice: "You'll be able to delete your account at any time."
  passwordRepetition: Confirm password
  register: Sign Up
  signIn: Already have an account? Log in
</i18n>
