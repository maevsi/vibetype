<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <!-- Header -->
    <FormAuthPageHeader
      :header-key="step"
      :title-id="templateIdTitle"
      @back="handleBackClick"
    >
      <template #title>{{ title }}</template>
      <template v-if="subtitle" #subtitle>{{ subtitle }}</template>
    </FormAuthPageHeader>

    <!-- Step: Email -->
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <LayoutPage v-bind="attributes">
        <div class="flex flex-col gap-6">
          <FormAuthInput
            :aria-label="t('emailPlaceholder')"
            :model-value="emailField.value.value"
            :placeholder="t('emailPlaceholder')"
            type="email"
            @blur="emailField.handleBlur"
            @input="emailField.handleInput($event)"
          >
            <template #icon>
              <IHeroiconsEnvelope />
            </template>
          </FormAuthInput>
          <p v-if="emailField.error.value" class="text-sm text-red-600">
            {{ emailField.error.value }}
          </p>
          <!-- Terms checkbox -->
          <div class="flex items-start gap-3">
            <FormCheckbox
              :aria-label="t('agreeCheckboxLabel')"
              :value="agreedToTerms"
              @change="agreedToTerms = $event"
            />
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {{ t('agreePrefix') }}
              <NuxtLinkLocale
                class="font-semibold text-green-600"
                to="docs-legal-terms"
                >{{ t('termsOfService') }}</NuxtLinkLocale
              >{{ t('legalComma') }}
              <NuxtLinkLocale
                class="font-semibold text-green-600"
                to="docs-legal-imprint"
                >{{ t('imprint') }}</NuxtLinkLocale
              >
              {{ t('and') }}
              <NuxtLinkLocale
                class="font-semibold text-green-600"
                to="docs-legal-privacy"
                >{{ t('privacyPolicy') }}</NuxtLinkLocale
              >
            </span>
          </div>
          <p v-if="termsError" class="text-sm text-red-600">
            {{ termsError }}
          </p>
          <FormAuthButton
            :aria-label="t('continue')"
            @click="handleEmailContinue"
          >
            {{ t('continue') }}
          </FormAuthButton>
          <p class="text-center text-[15px] text-gray-500 dark:text-gray-400">
            {{ t('alreadyHaveAccount') }}
            <NuxtLinkLocale
              class="font-semibold text-green-600"
              to="session-create"
              >{{ t('signInLink') }}</NuxtLinkLocale
            >
          </p>
        </div>
      </LayoutPage>
    </AppStep>

    <!-- Step: Password -->
    <AppStep v-slot="attributes" :is-active="step === 'password'">
      <LayoutPage v-bind="attributes">
        <FormAccountRegistration
          v-model:captcha-is-used="captchaIsUsed"
          @submit="
            (values) => {
              passwordData = values
              step = 'username'
            }
          "
        />
      </LayoutPage>
    </AppStep>

    <!-- Step: Username -->
    <AppStep v-slot="attributes" :is-active="step === 'username'">
      <LayoutPage v-bind="attributes">
        <div class="flex flex-col gap-4">
          <div class="relative">
            <FormAuthInput
              :aria-label="t('usernamePlaceholder')"
              :disabled="usernameField.isLoading.value"
              :model-value="usernameField.value.value"
              :placeholder="t('usernamePlaceholder')"
              type="text"
              @blur="usernameField.handleBlur"
              @input="handleUsernameInput($event)"
            >
              <template #icon>
                <IHeroiconsUser />
              </template>
            </FormAuthInput>
            <div
              v-if="usernameField.isLoading.value"
              class="absolute top-1/2 right-4 -translate-y-1/2"
            >
              <div
                class="size-5 animate-spin rounded-full border-2 border-gray-300 border-t-green-600"
              />
            </div>
          </div>
          <p v-if="usernameField.error.value" class="text-sm text-red-600">
            {{ usernameField.error.value }}
          </p>
          <FormAuthButton
            :aria-label="t('continue')"
            :disabled="
              !usernameField.value.value || !!usernameField.error.value
            "
            @click="handleUsernameContinue"
          >
            {{ t('continue') }}
          </FormAuthButton>
        </div>
      </LayoutPage>
    </AppStep>

    <!-- Step: Age -->
    <AppStep v-slot="attributes" :is-active="step === 'age'">
      <LayoutPage v-bind="attributes">
        <div class="flex flex-col gap-4">
          <FormAccountRegistrationAge
            ref="ageForm"
            @success="handleAgeSuccess"
          />
          <FormAuthButton
            :aria-label="t('confirmAge')"
            @click="ageFormRef?.submit()"
          >
            {{ t('confirmAge') }}
          </FormAuthButton>
        </div>
      </LayoutPage>
    </AppStep>

    <!-- Step: Success -->
    <FormAuthStepSuccess :is-active="step === 'success'">
      <div class="flex flex-col gap-4">
        <p
          class="text-[15px] leading-5 font-semibold text-gray-500 dark:text-gray-400"
        >
          {{ t('verificationSentTo') }}
          <span class="font-semibold text-gray-900 dark:text-gray-100">{{
            emailField.value.value
          }}</span>
        </p>
        <p
          class="text-[15px] leading-5 font-semibold text-gray-500 dark:text-gray-400"
        >
          {{ t('verificationOpenLink') }}
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ t('verificationDescription') }}
        </p>
        <NuxtLinkLocale
          class="flex items-center justify-center gap-2 text-[15px] text-gray-500 dark:text-gray-400"
          to="support-contact"
        >
          <IHeroiconsQuestionMarkCircle class="size-5" />
          {{ t('support') }}
        </NuxtLinkLocale>
      </div>
    </FormAuthStepSuccess>

    <!-- Step: Error -->
    <FormAuthStepError :error="error" :is-active="step === 'error'">
      <ButtonColored
        :aria-label="t('backToRegistration')"
        class="w-full max-w-sm"
        variant="primary"
        @click="restart"
      >
        {{ t('backToRegistration') }}
      </ButtonColored>
    </FormAuthStepError>
  </section>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import { useAccountRegistrationMutation } from '~~/gql/documents/mutations/account/accountRegistration'
import {
  useValidationDedup,
  useValidationField,
} from '~/composables/useValidation'

definePageMeta({
  layout: 'plain',
})

const { locale, t } = useI18n()

// navigation
const router = useRouter()
const navigateBack = () => {
  router.back()
}

// api data
const accountRegistrationMutation = useAccountRegistrationMutation()
const api = await useApiData([accountRegistrationMutation])

// TODO: move into api utility as `errorsTranslated`
watch(
  () => api.value.errors,
  (current) => {
    error.value = current?.length
      ? new Error(
          getCombinedErrorMessages(current, {
            postgresVTAUV: t('postgresVTAUV'),
            postgresVTBDA: t('postgresVTBDA'),
            postgresVTPLL: t('postgresVTPLL'),
          })[0],
        )
      : undefined
  },
)

// template
const templateIdTitle = useId()
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
const ageFormRef = useTemplateRef<{ submit: () => void }>('ageForm')
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
const { error, previous, restart, step, title } = useStepperPage<
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

// subtitle (only shown on email step)
const subtitle = computed(() => {
  if (step.value === 'age') return t('subtitleAge')
  if (step.value === 'default') return t('subtitleEmail')
  if (step.value === 'password') return t('subtitlePassword')
  if (step.value === 'username') return t('subtitleUsername')
  return undefined
})

// handlers
const handleBackClick = () => {
  if (step.value === 'default') {
    navigateBack()
  } else {
    step.value = previous.value || 'default'
  }
}

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
useHeadDefault({ title: title.value })
</script>

<i18n lang="yaml">
de:
  agreeCheckboxLabel: Ich stimme den Bedingungen zu
  agreePrefix: "Ich stimme Vibetype's "
  alreadyHaveAccount: 'Du hast bereits ein Konto?'
  and: ' und '
  backToRegistration: Zurück zur Registrierung
  birthDateUnavailable: Das Geburtsdatum ist nicht verfügbar. Bitte versuche es erneut.
  confirmAge: Alter bestätigen
  continue: Weiter
  emailInvalid: Bitte gib eine gültige E-Mail-Adresse ein
  emailPlaceholder: E-Mail-Adresse eingeben
  emailRequired: Bitte gib eine E-Mail-Adresse ein
  imprint: Impressum
  legalComma: ', '
  legalTermsUnavailable: Die rechtlichen Bedingungen konnten nicht geladen werden. Bitte versuche es später erneut.
  passwordUnavailable: Das Passwort ist nicht verfügbar. Bitte versuche es erneut.
  postgresVTAUV: Es gibt bereits einen Account mit diesem Nutzernamen! Überlege dir einen neuen Namen oder versuche dich anzumelden.
  postgresVTBDA: Du musst mindestens 18 Jahre alt sein, um dich zu registrieren.
  postgresVTPLL: Das Passwort ist zu kurz! Überlege dir ein längeres.
  privacyPolicy: Datenschutzrichtlinie
  signInLink: Anmelden
  subtitleAge: Für den richtigen Vibe und deine Sicherheit zeigt dir Vibetype nur Events, die zu deinem Alter passen.
  subtitleEmail: Wir verwenden sie, um dir einen Bestätigungslink zu senden und dein Konto zu sichern.
  subtitlePassword: Mindestens 12 Zeichen mit mindestens 1 Großbuchstaben und 1 Sonderzeichen.
  subtitleUsername: Dieser Name wird anderen Nutzern angezeigt.
  support: Support kontaktieren
  termsOfService: Nutzungsbedingungen
  termsRequired: Bitte stimme den Bedingungen zu
  titleAge: Alter bestätigen
  titleEmail: Registriere dich mit deiner E-Mail
  titlePassword: Erstelle dein Passwort
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
  agreeCheckboxLabel: I agree to the terms
  agreePrefix: "I agree to Vibetype's "
  alreadyHaveAccount: 'Already have an account?'
  and: ' and '
  backToRegistration: Back to Registration
  birthDateUnavailable: Birth date is unavailable. Please try again.
  confirmAge: Confirm age
  continue: Continue
  emailInvalid: Please enter a valid email address
  emailPlaceholder: Enter your email
  emailRequired: Please enter an email address
  imprint: Imprint
  legalComma: ', '
  legalTermsUnavailable: We could not load the legal terms. Please try again later.
  passwordUnavailable: Password is unavailable. Please try again.
  postgresVTAUV: This username is already in use! Think of a new name or try signing in instead.
  postgresVTBDA: You must be at least 18 years old to register.
  postgresVTPLL: Your password is too short! Think of a longer one.
  privacyPolicy: Privacy Policy
  signInLink: Sign in
  subtitleAge: To keep things fun and safe, Vibetype curates just the right events for your age and vibe.
  subtitleEmail: We'll use it to send your verification link and keep your account secure.
  subtitlePassword: Minimum 12 characters with at least 1 uppercase letter and 1 special character.
  subtitleUsername: This name will be visible to other users.
  support: Contact support
  termsOfService: Terms of Service
  termsRequired: Please agree to the terms
  titleAge: Confirm your age
  titleEmail: Sign up using your email
  titlePassword: Create your password
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
