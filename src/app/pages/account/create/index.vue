<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">{{ t('titleShort') }}</span>
      <template v-if="previous" #back>
        <AppButton
          :aria-label="t('back')"
          size="none"
          variant="ghost"
          @click="step = previous"
        >
          <AppIconBack />
        </AppButton>
      </template>
    </LayoutTopBar>

    <!-- Step: Email -->
    <AppStepPanel v-slot="attributes" :is-active="step === 'default'">
      <LayoutPage v-bind="attributes">
        <FormAuthHeader>
          <template #title>{{ t('titleEmail') }}</template>
          <template #subtitle>{{ t('subtitleEmail') }}</template>
        </FormAuthHeader>
        <form
          class="flex flex-col gap-6"
          novalidate
          @submit.prevent="handleEmailContinue"
        >
          <AppInput
            :aria-describedby="
              emailField.error.value ? templateIdEmailError : undefined
            "
            :aria-invalid="!!emailField.error.value"
            :aria-label="t('emailPlaceholder')"
            :model-value="emailField.value.value"
            :placeholder="t('emailPlaceholder')"
            type="email"
            @blur="emailField.handleBlur"
            @update:model-value="emailField.handleInput"
          >
            <template #prefix>
              <IHeroiconsEnvelope />
            </template>
          </AppInput>
          <p
            v-if="emailField.error.value"
            :id="templateIdEmailError"
            class="text-caption text-error"
          >
            {{ emailField.error.value }}
          </p>
          <!-- Terms checkbox -->
          <div class="flex items-start gap-3">
            <AppCheckbox
              id="agree-to-terms"
              :aria-describedby="termsError ? templateIdTermsError : undefined"
              :aria-invalid="!!termsError"
              class="mt-0.5 shrink-0"
              :model-value="agreedToTerms"
              @update:model-value="
                (checked) => (agreedToTerms = checked === true)
              "
            />
            <label for="agree-to-terms">
              <span class="text-body-small text-fg-2">
                {{ t('agreePrefix') }}
                <NuxtLinkLocale
                  class="font-semibold text-link underline"
                  to="docs-legal-terms"
                  >{{ t('termsOfUse') }}</NuxtLinkLocale
                >
              </span>
            </label>
          </div>
          <p
            v-if="termsError"
            :id="templateIdTermsError"
            class="text-caption text-error"
          >
            {{ termsError }}
          </p>
          <p class="text-body-small text-fg-2">
            {{ t('privacyNoticePrefix') }}
            <NuxtLinkLocale
              class="font-semibold text-link underline"
              to="docs-legal-privacy"
              >{{ t('privacyPolicy') }}</NuxtLinkLocale>{{
              t('privacyNoticeSuffix')
            }}
          </p>
          <AppButton :aria-label="t('continue')" class="w-full" type="submit">
            {{ t('continue') }}
          </AppButton>
          <p class="text-center text-body text-fg-2">
            {{ t('alreadyHaveAccount') }}
            <NuxtLinkLocale
              class="font-semibold text-link underline"
              to="session-create"
              >{{ t('signInLink') }}</NuxtLinkLocale
            >
          </p>
        </form>
      </LayoutPage>
    </AppStepPanel>

    <!-- Step: Password -->
    <AppStepPanel v-slot="attributes" :is-active="step === 'password'">
      <LayoutPage v-bind="attributes">
        <FormAuthHeader>
          <template #title>{{ t('titlePassword') }}</template>
          <template #subtitle>{{ t('subtitlePassword') }}</template>
        </FormAuthHeader>
        <FormAccountRegistration
          v-model:captcha-is-used="captchaIsUsed"
          @submit="
            (values) => {
              passwordData = values
              step = 'username'
            }
          "
        />
        <p class="text-body-small text-fg-2">
          {{ t('privacyNoticePrefix') }}
          <NuxtLinkLocale
            class="font-semibold text-link underline"
            to="docs-legal-privacy"
            >{{ t('privacyPolicy') }}</NuxtLinkLocale>{{
            t('privacyNoticeSuffix')
          }}
        </p>
      </LayoutPage>
    </AppStepPanel>

    <!-- Step: Username -->
    <AppStepPanel v-slot="attributes" :is-active="step === 'username'">
      <LayoutPage v-bind="attributes">
        <FormAuthHeader>
          <template #title>{{ t('titleUsername') }}</template>
          <template #subtitle>{{ t('subtitleUsername') }}</template>
        </FormAuthHeader>
        <form
          class="flex flex-col gap-4"
          novalidate
          @submit.prevent="handleUsernameContinue"
        >
          <div class="relative">
            <AppInput
              :aria-describedby="
                usernameField.error.value ? templateIdUsernameError : undefined
              "
              :aria-invalid="!!usernameField.error.value"
              :aria-label="t('usernamePlaceholder')"
              :model-value="usernameField.value.value"
              :placeholder="t('usernamePlaceholder')"
              type="text"
              @blur="usernameField.handleBlur"
              @update:model-value="handleUsernameInput"
            >
              <template #prefix>
                <IHeroiconsUser />
              </template>
            </AppInput>
            <div
              v-if="usernameField.isLoading.value"
              class="absolute top-1/2 right-4 -translate-y-1/2"
            >
              <div
                class="size-5 animate-spin rounded-full border-2 border-line border-t-green-600"
              />
            </div>
          </div>
          <p
            v-if="usernameField.error.value"
            :id="templateIdUsernameError"
            class="text-caption text-error"
          >
            {{ usernameField.error.value }}
          </p>
          <AppButton
            :aria-label="t('continue')"
            class="w-full"
            :disabled="
              !usernameField.value.value || !!usernameField.error.value
            "
            type="submit"
          >
            {{ t('continue') }}
          </AppButton>
          <p class="text-body-small text-fg-2">
            {{ t('privacyNoticePrefix') }}
            <NuxtLinkLocale
              class="font-semibold text-link underline"
              to="docs-legal-privacy"
              >{{ t('privacyPolicy') }}</NuxtLinkLocale>{{
              t('privacyNoticeSuffix')
            }}
          </p>
        </form>
      </LayoutPage>
    </AppStepPanel>

    <!-- Step: Age -->
    <AppStepPanel v-slot="attributes" :is-active="step === 'age'">
      <LayoutPage v-bind="attributes">
        <FormAuthHeader>
          <template #title>{{ t('titleAge') }}</template>
          <template #subtitle>{{ t('subtitleAge') }}</template>
        </FormAuthHeader>
        <div class="flex flex-col gap-4">
          <FormAccountRegistrationAge
            :id="templateIdAgeForm"
            @success="handleAgeSuccess"
          />
          <AppButton
            :aria-label="t('confirmAge')"
            class="w-full"
            :form="templateIdAgeForm"
            type="submit"
          >
            {{ t('confirmAge') }}
          </AppButton>
          <p class="text-body-small text-fg-2">
            {{ t('privacyNoticePrefix') }}
            <NuxtLinkLocale
              class="font-semibold text-link underline"
              to="docs-legal-privacy"
              >{{ t('privacyPolicy') }}</NuxtLinkLocale>{{
              t('privacyNoticeSuffix')
            }}
          </p>
        </div>
      </LayoutPage>
    </AppStepPanel>

    <!-- Step: Success -->
    <FormAuthStepSuccess :is-active="step === 'success'">
      <div class="flex flex-col gap-4">
        <FormAuthHeader>
          <template #title>{{ t('titleVerification') }}</template>
        </FormAuthHeader>
        <p class="text-body text-fg-2">
          {{ t('verificationSentTo') }}
          <span class="font-semibold text-fg-1">{{
            emailField.value.value
          }}</span>
        </p>
        <p class="text-body text-fg-2">
          {{ t('verificationOpenLink') }}
        </p>
        <p class="text-body-small text-fg-2">
          {{ t('verificationDescription') }}
        </p>
        <NuxtLinkLocale
          class="flex items-center justify-center gap-2 text-body text-fg-2"
          to="support-contact"
        >
          <IHeroiconsQuestionMarkCircle class="size-5" />
          {{ t('support') }}
        </NuxtLinkLocale>
      </div>
    </FormAuthStepSuccess>

    <!-- Step: Error -->
    <FormAuthStepError :error="error" :is-active="step === 'error'">
      <AppButton
        :aria-label="t('backToRegistration')"
        class="w-full max-w-md"
        variant="primary"
        @click="restart"
      >
        {{ t('backToRegistration') }}
      </AppButton>
    </FormAuthStepError>
  </section>
</template>

<script setup lang="ts">
import { useMutation, useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import { accountRegistrationMutation as accountRegistrationDocument } from '~~/shared/utils/account'
import {
  useValidationDedup,
  useValidationField,
} from '~/composables/useValidation'

const { locale, t } = useI18n()

// api data
const accountRegistrationMutation = useMutation(accountRegistrationDocument)
const api = await useApiData([accountRegistrationMutation])

// template
const templateIdTitle = useId()
const templateIdEmailError = useId()
const templateIdTermsError = useId()
const templateIdUsernameError = useId()
const birthDate = ref<string>()
const agreedToTerms = ref(false)
const termsError = ref('')

// email validation
const emailField = useValidationField({
  validator: (value: string) => {
    const result = SCHEMA_EMAIL_ADDRESS_REQUIRED.safeParse(value)
    return {
      error: result.success ? undefined : t('emailInvalid'),
      success: result.success,
    }
  },
})

// password data
const passwordData = ref<
  | {
      captcha: string
      password: string
    }
  | undefined
>()
const captchaIsUsed = ref<boolean>()

// username validation with request deduplication
const { validateWithDedup } = useValidationDedup()

const usernameField = useValidationField({
  validator: async (value: string) => {
    if (!value) {
      return { error: t('usernameRequired'), success: false }
    }
    if (!REGEX_SLUG.test(value)) {
      return { error: t('usernameInvalidCharacters'), success: false }
    }

    const isAvailable = await validateWithDedup(value, {
      validator: (username) => validateUsername(true)(username),
    })

    return {
      error: isAvailable ? undefined : t('usernameAlreadyTaken'),
      success: isAvailable,
    }
  },
})

const handleUsernameInput = (newValue: string) => {
  usernameField.handleInput(newValue)
}

// age step
const templateIdAgeForm = useId()
const handleAgeSuccess = async (date: string) => {
  birthDate.value = date
  await submit()
}

// legal term
const allLegalTermsQuery = graphql(`
  query AllLegalTerms($language: String) {
    allLegalTerms(condition: { language: $language }) {
      nodes {
        id
        rowId
        term
      }
    }
  }
`)
const legalTermsQuery = useQuery({
  query: allLegalTermsQuery,
  variables: { language: locale.value },
})

const legalTermId = computed(() => {
  const result = legalTermsQuery.data.value?.allLegalTerms?.nodes?.[0]?.rowId
  if (!result && legalTermsQuery.error.value) {
    console.error('Failed to fetch legal terms:', legalTermsQuery.error.value)
  }
  return result
})

// csrf
const { csrf } = useCsrf()

const submit = async () => {
  if (!birthDate.value) {
    error.value = new Error(t('birthDateUnavailable'))
    return
  }

  if (!passwordData.value) {
    error.value = new Error(t('passwordUnavailable'))
    return
  }

  const legalTermIdValue = legalTermId.value
  if (!legalTermIdValue) {
    error.value = new Error(t('legalTermsUnavailable'))
    return
  }

  const result = await accountRegistrationMutation.executeMutation(
    {
      input: {
        birthDate: birthDate.value,
        emailAddress: emailField.value.value,
        language: locale.value,
        legalTermId: legalTermIdValue,
        password: passwordData.value.password,
        timeZone: useTimeZone(),
        username: usernameField.value.value,
      },
    },
    {
      fetchOptions: {
        headers: {
          [CSRF_HEADER_NAME]: csrf,
          ...(passwordData.value.captcha && {
            [TURNSTILE_HEADER_KEY]: passwordData.value.captcha,
          }),
        },
      },
    },
  )

  if (!getResultData(result)) {
    captchaIsUsed.value = true
    return
  }

  step.value = 'success'
}

// stepper
const { error, previous, restart, step } = useStepperPage<
  'age' | 'password' | 'success' | 'username'
>({
  steps: {
    age: {
      title: t('titleAge'),
      previous: 'username',
    },
    default: {
      title: t('titleEmail'),
    },
    password: {
      title: t('titlePassword'),
      previous: 'default',
    },
    success: {
      title: t('titleVerification'),
    },
    username: {
      title: t('titleUsername'),
      previous: 'password',
    },
  },
})
useApiErrorModel({
  errorModel: error,
  errors: () => api.value.errors,
  postgresErrorMap: {
    postgresVTAUV: t('postgresVTAUV'),
    postgresVTBDA: t('postgresVTBDA'),
    postgresVTPLL: t('postgresVTPLL'),
  },
})

// handlers
const handleEmailContinue = async () => {
  if (!emailField.value.value) {
    emailField.error.value = t('emailRequired')
    return
  }
  const isValid = await emailField.validate()
  if (!isValid) return
  if (!agreedToTerms.value) {
    termsError.value = t('termsRequired')
    return
  }
  termsError.value = ''
  step.value = 'password'
}

const handleUsernameContinue = async () => {
  const isValid = await usernameField.validate()
  if (!isValid) return
  step.value = 'age'
}

// page
const titlePage = t('titleEmail')
useHeadDefault({ title: titlePage })
</script>

<i18n lang="yaml">
de:
  agreePrefix: 'Ich akzeptiere die '
  alreadyHaveAccount: 'Du hast bereits ein Konto?'
  back: Zurück
  backToRegistration: Zurück zur Registrierung
  birthDateUnavailable: Das Geburtsdatum ist nicht verfügbar. Bitte versuche es erneut.
  confirmAge: Alter bestätigen
  continue: Weiter
  emailInvalid: Bitte gib eine gültige E-Mail-Adresse ein
  emailPlaceholder: E-Mail-Adresse eingeben
  emailRequired: Bitte gib eine E-Mail-Adresse ein
  legalTermsUnavailable: Die rechtlichen Bedingungen konnten nicht geladen werden. Bitte versuche es später erneut.
  passwordUnavailable: Das Passwort ist nicht verfügbar. Bitte versuche es erneut.
  postgresVTAUV: Es gibt bereits einen Account mit diesem Nutzernamen! Überlege dir einen neuen Namen oder versuche dich anzumelden.
  postgresVTBDA: Du musst mindestens 18 Jahre alt sein, um dich zu registrieren.
  postgresVTPLL: Das Passwort ist zu kurz! Überlege dir ein längeres.
  privacyNoticePrefix: 'Informationen dazu, wie wir deine Daten verarbeiten, findest du in unserer '
  privacyNoticeSuffix: .
  privacyPolicy: Datenschutzerklärung
  signInLink: Anmelden
  subtitleAge: Für den richtigen Vibe und deine Sicherheit zeigt dir Vibetype nur Events, die zu deinem Alter passen.
  subtitleEmail: Wir verwenden sie, um dir einen Bestätigungslink zu senden und dein Konto zu sichern.
  subtitlePassword: Mindestens 8 Zeichen, die nicht leicht zu erraten sind.
  subtitleUsername: Dieser Name wird anderen Nutzern angezeigt.
  support: Support kontaktieren
  termsOfUse: Nutzungsbedingungen
  termsRequired: Bitte akzeptiere die Nutzungsbedingungen
  titleAge: Alter bestätigen
  titleEmail: Registriere dich mit deiner E-Mail
  titlePassword: Erstelle dein Passwort
  titleShort: Registrieren
  titleUsername: Wähle deinen Nutzernamen
  titleVerification: Überprüfe dein Postfach
  usernameAlreadyTaken: Dieser Nutzername ist bereits vergeben
  usernameInvalidCharacters: Nur Buchstaben, Zahlen und Bindestriche erlaubt
  usernamePlaceholder: Nutzername
  usernameRequired: Bitte gib einen Nutzernamen ein
  verificationDescription: Wenn du keine E-Mail erhältst, hast du möglicherweise bereits ein Konto bei @.upper:{'globalSiteName'}. Du kannst versuchen, dein Passwort zurückzusetzen, um dich wieder in deinem Konto einzuloggen.
  verificationOpenLink: Öffne den Link, um zu bestätigen, dass du es wirklich bist.
  verificationSentTo: 'Wir haben dir gerade einen Bestätigungslink gesendet an '
en:
  agreePrefix: 'I accept the '
  alreadyHaveAccount: 'Already have an account?'
  back: Back
  backToRegistration: Back to Registration
  birthDateUnavailable: Birth date is unavailable. Please try again.
  confirmAge: Confirm age
  continue: Continue
  emailInvalid: Please enter a valid email address
  emailPlaceholder: Enter your email
  emailRequired: Please enter an email address
  legalTermsUnavailable: We could not load the legal terms. Please try again later.
  passwordUnavailable: Password is unavailable. Please try again.
  postgresVTAUV: This username is already in use! Think of a new name or try signing in instead.
  postgresVTBDA: You must be at least 18 years old to register.
  postgresVTPLL: Your password is too short! Think of a longer one.
  privacyNoticePrefix: 'Information on how we process your data can be found in our '
  privacyNoticeSuffix: .
  privacyPolicy: Privacy Policy
  signInLink: Sign in
  subtitleAge: To keep things fun and safe, Vibetype curates just the right events for your age and vibe.
  subtitleEmail: We'll use it to send your verification link and keep your account secure.
  subtitlePassword: At least 8 characters that aren't easy to guess.
  subtitleUsername: This name will be visible to other users.
  support: Contact support
  termsOfUse: Terms of Use
  termsRequired: Please accept the Terms of Use
  titleAge: Confirm your age
  titleEmail: Sign up using your email
  titlePassword: Create your password
  titleShort: Sign up
  titleUsername: Choose your username
  titleVerification: Check your inbox for a verification link
  usernameAlreadyTaken: This username is already taken
  usernameInvalidCharacters: Only letters, numbers, and hyphens allowed
  usernamePlaceholder: Username
  usernameRequired: Please enter a username
  verificationDescription: If you don't receive an email, you may already have an account with @.upper:{'globalSiteName'}. You can try to reset your password to log back into your account.
  verificationOpenLink: Open it to confirm it's really you.
  verificationSentTo: "We've just sent a verification link to "
</i18n>
