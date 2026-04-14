<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <!-- Header -->
    <div class="w-full max-w-md self-center px-3 pt-4 lg:px-6">
      <ButtonIcon
        v-if="!error && previous"
        :aria-label="t('back')"
        class="mb-8"
        @click="step = previous"
      >
        <AppIconBack />
      </ButtonIcon>
      <div v-else class="mb-8 size-10" />
      <h1
        :id="templateIdTitle"
        class="text-[28px] leading-8.5 font-bold tracking-[-0.4px]"
      >
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        class="mt-2 text-[15px] leading-5 font-semibold text-gray-500 dark:text-gray-400"
      >
        {{ subtitle }}
      </p>
    </div>

    <!-- Step: Email -->
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <LayoutPage v-bind="attributes">
        <div class="flex flex-col gap-6">
          <div class="relative">
            <IHeroiconsEnvelope
              class="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-gray-500 dark:text-gray-400"
            />
            <Input
              v-model="emailAddress"
              type="email"
              :placeholder="t('emailPlaceholder')"
              :aria-label="t('emailPlaceholder')"
              class="h-13 rounded-2xl border-transparent bg-gray-100 pl-12 text-[17px] dark:bg-gray-800"
              @blur="handleEmailBlur"
            />
          </div>
          <p v-if="emailError" class="text-sm text-red-600">
            {{ emailError }}
          </p>
          <!-- Terms checkbox -->
          <div class="flex items-start gap-3">
            <button
              type="button"
              :aria-checked="agreedToTerms"
              :aria-label="t('agreeCheckboxLabel')"
              class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl transition-colors"
              :class="
                agreedToTerms ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
              "
              role="checkbox"
              @click="agreedToTerms = !agreedToTerms"
            >
              <svg
                v-if="agreedToTerms"
                class="size-4"
                fill="none"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>
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
          <ButtonColored
            :aria-label="t('continue')"
            class="h-13! w-full rounded-2xl! text-[17px]! text-white! dark:bg-green-700!"
            @click="handleEmailContinue"
          >
            {{ t('continue') }}
          </ButtonColored>
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
            <IHeroiconsUser
              class="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-gray-500 dark:text-gray-400"
            />
            <Input
              v-model="username"
              type="text"
              :placeholder="t('usernamePlaceholder')"
              :aria-label="t('usernamePlaceholder')"
              class="h-13 rounded-2xl border-transparent bg-gray-100 pl-12 text-[17px] dark:bg-gray-800"
              @blur="handleUsernameBlur"
            />
          </div>
          <p v-if="usernameError" class="text-sm text-red-600">
            {{ usernameError }}
          </p>
          <ButtonColored
            :aria-label="t('continue')"
            class="h-13! w-full rounded-2xl! text-[17px]! text-white! dark:bg-green-700!"
            @click="handleUsernameContinue"
          >
            {{ t('continue') }}
          </ButtonColored>
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
          <ButtonColored
            :aria-label="t('confirmAge')"
            class="h-13! w-full rounded-2xl! text-[17px]! text-white! dark:bg-green-700!"
            @click="ageFormRef?.submit()"
          >
            {{ t('confirmAge') }}
          </ButtonColored>
        </div>
      </LayoutPage>
    </AppStep>

    <!-- Step: Success -->
    <AppStep v-slot="attributes" :is-active="step === 'success'">
      <LayoutPage v-bind="attributes">
        <div class="flex flex-col gap-4">
          <p
            class="text-[15px] leading-5 font-semibold text-gray-500 dark:text-gray-400"
          >
            {{ t('verificationSentTo') }}
            <span class="font-semibold text-gray-900 dark:text-gray-100">{{
              emailAddress
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
      </LayoutPage>
    </AppStep>

    <!-- Step: Error -->
    <AppStep v-slot="attributes" :is-active="step === 'error'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="error">
          <span v-if="error && error.message">
            {{ error.message }}
          </span>
          <template #description>
            {{ t('globalTryAgain') }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <ButtonColored
            :aria-label="t('backToRegistration')"
            class="w-full max-w-sm"
            variant="primary"
            @click="restart"
          >
            {{ t('backToRegistration') }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </AppStep>
  </section>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import { useAccountRegistrationMutation } from '~~/gql/documents/mutations/account/accountRegistration'

definePageMeta({
  layout: 'plain',
})

const { locale, t } = useI18n()

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
const emailAddress = ref('')
const agreedToTerms = ref(false)

// email step
const emailError = ref('')
const emailTouched = ref(false)
const termsError = ref('')
const validateEmail = () => {
  if (!emailAddress.value) {
    emailError.value = t('emailRequired')
    return false
  }
  const result = SCHEMA_EMAIL_ADDRESS_REQUIRED.safeParse(emailAddress.value)
  emailError.value = result.success ? '' : t('emailInvalid')
  return result.success
}
const handleEmailBlur = () => {
  emailTouched.value = true
  validateEmail()
}
watch(emailAddress, () => {
  if (emailTouched.value) validateEmail()
})
watch(agreedToTerms, (value) => {
  if (value) termsError.value = ''
})
const handleEmailContinue = () => {
  emailTouched.value = true
  if (!validateEmail()) return
  if (!agreedToTerms.value) {
    termsError.value = t('termsRequired')
    return
  }
  termsError.value = ''
  step.value = 'password'
}

// password data
const passwordData = ref<{
  captcha: string
  password: string
}>()
const captchaIsUsed = ref<boolean>()

// username step
const username = ref('')
const usernameError = ref('')
const usernameTouched = ref(false)
const validateUsernameFormat = () => {
  if (!username.value) {
    usernameError.value = ''
    return
  }
  if (!REGEX_SLUG.test(username.value)) {
    usernameError.value = t('usernameInvalidCharacters')
    return
  }
  usernameError.value = ''
}
const handleUsernameBlur = async () => {
  usernameTouched.value = true
  if (!username.value) return
  validateUsernameFormat()
  if (usernameError.value) return

  const isAvailable = await validateUsername(true)(username.value)

  if (!isAvailable) {
    usernameError.value = t('usernameAlreadyTaken')
  } else {
    usernameError.value = ''
  }
}
watch(username, () => {
  if (usernameTouched.value) validateUsernameFormat()
})
const handleUsernameContinue = () => {
  usernameTouched.value = true
  validateUsernameFormat()
  if (!username.value) {
    usernameError.value = t('usernameRequired')
    return
  }
  if (usernameError.value) return
  step.value = 'age'
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
const legalTermId = computed(
  () => legalTermsQuery.data.value?.allLegalTerms?.nodes[0]?.rowId || '',
)

// csrf
const { csrf } = useCsrf()

const submit = async () => {
  if (!passwordData.value) return

  const result = await accountRegistrationMutation.executeMutation(
    {
      input: {
        birthDate: birthDate.value,
        emailAddress: emailAddress.value,
        language: locale.value,
        legalTermId: legalTermId.value,
        password: passwordData.value.password,
        username: username.value,
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
  'password' | 'username' | 'age' | 'success'
>({
  steps: {
    default: {
      title: t('titleEmail'),
    },
    password: {
      title: t('titlePassword'),
      previous: 'default',
    },
    username: {
      title: t('titleUsername'),
      previous: 'password',
    },
    age: {
      title: t('titleAge'),
      previous: 'username',
    },
    success: {
      title: t('titleVerification'),
    },
  },
})

// subtitle (only shown on email step)
const subtitle = computed(() => {
  if (step.value === 'default') return t('subtitleEmail')
  if (step.value === 'password') return t('subtitlePassword')
  if (step.value === 'username') return t('subtitleUsername')
  if (step.value === 'age') return t('subtitleAge')
  return undefined
})

// page
useHeadDefault({ title: title.value })
</script>

<i18n lang="yaml">
de:
  agreeCheckboxLabel: Ich stimme den Bedingungen zu
  agreePrefix: "Ich stimme Vibetype's "
  alreadyHaveAccount: 'Du hast bereits ein Konto?'
  and: ' und '
  back: zurück
  backToRegistration: Zurück zur Registrierung
  confirmAge: Alter bestätigen
  continue: Weiter
  emailInvalid: Bitte gib eine gültige E-Mail-Adresse ein
  emailPlaceholder: E-Mail-Adresse eingeben
  emailRequired: Bitte gib eine E-Mail-Adresse ein
  imprint: Impressum
  legalComma: ', '
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
  back: back
  backToRegistration: Back to Registration
  confirmAge: Confirm age
  continue: Continue
  emailInvalid: Please enter a valid email address
  emailPlaceholder: Enter your email
  emailRequired: Please enter an email address
  imprint: Imprint
  legalComma: ', '
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
