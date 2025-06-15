<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">
        {{ title }}
      </span>
      <template v-if="!error && previous" #back>
        <ButtonIcon :aria-label="t('back')" @click="step = previous">
          <AppIconBack />
        </ButtonIcon>
      </template>
    </LayoutTopBar>
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <LayoutPage v-bind="attributes">
        <FormAccountRegistration v-model:form="form" @submit="step = 'age'" />
        <ContentLegalFooter />
      </LayoutPage>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'age'">
      <AccountRegistrationStepAge
        v-bind="attributes"
        @success="
          ($event) => {
            birthDate = $event
            step = 'terms'
          }
        "
      />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'terms'">
      <AccountLegalConsent
        v-bind="attributes"
        :disabled="!legalTermId"
        :label="t('agreeTerms')"
        @agreement="step = 'privacy'"
      >
        <ContentLegalTerms @id="legalTermId = $event" />
      </AccountLegalConsent>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'privacy'">
      <AccountLegalConsent
        v-bind="attributes"
        :label="t('agreePrivacy')"
        @agreement="submit(legalTermId || '')"
      >
        <Content path="privacy-consent" />
      </AccountLegalConsent>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'success'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="success">
          <template #description>
            {{ t('verificationInstructions') }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <ButtonColored
            :aria-label="t('verificationButton')"
            class="w-full max-w-md"
            disabled
            variant="secondary"
          >
            {{ t('verificationButton') }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </AppStep>
    <AppStep v-if="error" v-slot="attributes" :is-active="step === 'error'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="error">
          {{ error }}
          <template #description>
            {{ t('tryAgain') }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <ButtonColored
            :aria-label="t('backToRegistration')"
            class="w-full max-w-sm"
            variant="primary-critical"
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

// form
const form = reactive({
  captcha: ref<string>(),
  emailAddress: ref<string>(),
  password: ref<string>(),
  passwordRepetition: ref<string>(),
  username: ref<string>(),
})
const submit = async (termId: string) => {
  const result = await accountRegistrationMutation.executeMutation(
    {
      birthDate: birthDate,
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

  step.value = 'success'
}

// stepper
const { error, previous, restart, step, title } = useStepperPage<
  'age' | 'terms' | 'privacy' | 'success'
>({
  steps: {
    default: {
      title: t('titleForm'),
    },
    age: {
      title: t('titleAge'),
      previous: 'default',
    },
    terms: {
      title: t('titleTerms'),
      previous: 'age',
    },
    privacy: {
      title: t('titlePrivacy'),
      previous: 'terms',
    },
    success: {
      title: t('titleVerification'),
    },
  },
})

// page
useHeadDefault({ title: title.value })

// legal term
const legalTermId = ref<string>()
</script>

<i18n lang="yaml">
de:
  agreeTerms: Ich stimme den Allgemeinen Geschäftsbedingungen zu
  agreePrivacy: Ich stimme der Datenschutzerklärung zu
  back: zurück
  backToRegistration: Zurück zur Registrierung
  postgresVTAUV: Es gibt bereits einen Account mit diesem Nutzernamen! Überlege dir einen neuen Namen oder versuche dich anzumelden.
  postgresVTBDA: Du musst mindestens 18 Jahre alt sein, um dich zu registrieren.
  postgresVTPLL: Das Passwort ist zu kurz! Überlege dir ein längeres.
  titleAge: Bereit für Social Media?
  titleForm: Erstelle ein Konto
  titlePrivacy: Datenschutzbestimmungen
  titleTerms: Geschäftsbedingungen
  titleVerification: E-Mail-Bestätigung erforderlich
  tryAgain: Bitte versuche es erneut
  verificationButton: Warte auf dich…
  verificationInstructions: Überprüfe deine E-Mails auf einen Bestätigungslink.
en:
  agreeTerms: I agree to the Terms and Conditions
  agreePrivacy: I agree to the Privacy Policy
  back: back
  backToRegistration: Back to Registration
  postgresVTAUV: This username is already in use! Think of a new name or try signing in instead.
  postgresVTBDA: You must be at least 18 years old to register.
  postgresVTPLL: Your password is too short! Think of a longer one.
  titleAge: Ready for Social Media?
  titleForm: Create an account
  titlePrivacy: Privacy Policy
  titleTerms: General Terms and Conditions
  titleVerification: Email Verification Required
  tryAgain: Please try again
  verificationButton: Waiting for you…
  verificationInstructions: Check your emails for a verification link.
</i18n>
