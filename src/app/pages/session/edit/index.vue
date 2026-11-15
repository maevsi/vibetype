<template>
  <div>
    <LayoutPageTitle :title />
    <div class="flex flex-col gap-6">
      <section class="flex flex-col gap-4">
        <span class="text-headline">{{ t('profile') }}</span>
        <div class="flex flex-col gap-3">
          <AppCardButton
            class="bg-action-primary text-on-action-primary"
            :title="t('aiSetup')"
            :to="
              localePath({
                name: 'preference-create',
              })
            "
          >
            <AppIconNetworkIntelligence />
            <!-- <template #suffix>
              <AppIconRestartAlt />
            </template> -->
          </AppCardButton>
          <AppCardButton
            class="border-action-warning bg-warning-tint text-fg-1"
            :title="t('earlyBirdStart')"
            :to="localePath({ name: 'early-bird-create' })"
          >
            <AppIconEarlyBird />
            <template v-if="false" #suffix>
              <AppIconClose />
            </template>
          </AppCardButton>
        </div>
      </section>
      <section class="flex flex-col gap-4">
        <span class="text-headline">{{ t('display') }}</span>
        <div class="flex flex-col gap-3">
          <AppCardButton
            :title="t('colorScheme')"
            :to="
              localePath({
                name: 'session-edit-color-scheme',
              })
            "
          >
            <AppIconSun />
          </AppCardButton>
          <AppCardButton
            :title="t('language')"
            :to="
              localePath({
                name: 'session-edit-language',
              })
            "
          >
            <AppIconLanguage />
          </AppCardButton>
        </div>
      </section>
      <section class="flex flex-col gap-4">
        <span class="text-headline" @click="onDevelopmentModeTrigger">
          {{ t('support') }}
        </span>
        <div class="flex flex-col gap-3">
          <AppCardButton
            v-if="isDevelopmentModeActive"
            :title="t('developerInformation')"
            :to="
              localePath({
                name: 'session-view',
              })
            "
          >
            <AppIconWrench />
          </AppCardButton>
          <AppCardButton
            :title="t('featureSuggestion')"
            :to="
              localePath({
                name: 'support-idea',
              })
            "
          >
            <AppIconIdea />
          </AppCardButton>
          <AppCardButton
            :title="t('bugReport')"
            :to="
              localePath({
                name: 'support-issue',
              })
            "
          >
            <AppIconBug />
          </AppCardButton>
          <AppCardButton
            :title="t('contact')"
            :to="
              localePath({
                name: 'support-contact',
              })
            "
          >
            <AppIconMail />
          </AppCardButton>
          <AppCardButton
            :title="t('report')"
            :to="
              localePath({
                name: 'support-report',
              })
            "
          >
            <AppIconReport />
          </AppCardButton>
        </div>
      </section>
      <section class="flex flex-col gap-4">
        <span class="text-headline">
          {{ t('legal') }}
        </span>
        <div class="flex flex-col gap-3">
          <AppCardButton
            :title="t('terms')"
            :to="localePath('docs-legal-terms')"
          >
            <AppIconContract />
          </AppCardButton>
          <AppCardButton
            v-if="!isIos"
            :title="t('cookies')"
            @click="cookieControl.isModalActive.value = true"
          >
            <AppIconCookieOutline />
          </AppCardButton>
          <AppCardButton
            :title="t('legalNotice')"
            :to="localePath('docs-legal-imprint')"
          >
            <AppIconLegal />
          </AppCardButton>
          <AppCardButton
            :title="t('privacy')"
            :to="localePath('docs-legal-privacy')"
          >
            <AppIconVerifiedUser />
          </AppCardButton>
        </div>
      </section>
      <section v-if="store.signedInUsername" class="flex flex-col gap-4">
        <span class="text-headline">
          {{ t('interactions') }}
        </span>
        <AppCardButton
          :title="t('accountBlock')"
          :to="
            localePath({
              name: 'account-view-username-block',
              params: { username: store.signedInUsername },
            })
          "
        >
          <AppIconNoSymbol />
        </AppCardButton>
      </section>
      <section v-if="store.signedInUsername" class="flex flex-col">
        <AppCardButton
          class="bg-action-danger text-white"
          :title="t('logout')"
          @click="signOutToRoot"
        >
          <template #suffix />
          <AppIconLogout />
        </AppCardButton>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const cookieControl = useCookieControl()
const { isIos } = usePlatform()
const localePath = useLocalePath()
const store = useStore()
const jwtDelete = useJwtDelete()
const { isDevelopmentModeActive, onDevelopmentModeTrigger } =
  useDevelopmentModeTrigger()

// sign out
const signOutToRoot = async () => {
  await jwtDelete()
  return navigateTo(
    localePath({
      name: 'index',
      query: {
        signOut: null,
      },
    }),
  )
}

// page
const title = t('preferences')
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  accountBlock: Blockierte Benutzer
  aiSetup: KI einrichten
  # aiSetupReset: KI-Einrichtung zurücksetzen
  bugReport: Fehler
  colorScheme: Farbschema
  contact: Kontakt
  cookies: Cookies
  developerInformation: Entwicklerinformationen
  display: Anzeige
  earlyBirdStart: Early Bird beitreten
  # earlyBirdStop: Early Bird beenden
  featureSuggestion: Idee
  interactions: Interaktionen mit dir
  language: Sprache
  legal: Rechtliches
  legalNotice: Impressum
  logout: Abmelden
  preferences: Einstellungen
  privacy: Datenschutzerklärung
  profile: Profil
  report: Meldung von Inhalten
  support: Hilfe
  terms: Allgemeine Geschäftsbedingungen
en:
  accountBlock: Blocked Users
  aiSetup: Set up AI
  # aiSetupReset: Reset AI Setup
  bugReport: Issue
  colorScheme: Color scheme
  contact: Contact
  cookies: Cookies
  developerInformation: Developer information
  display: Display
  earlyBirdStart: Join Early Bird
  # earlyBirdStop: Stop Early Bird
  featureSuggestion: Idea
  interactions: Interactions with you
  language: Language
  legal: Legal
  legalNotice: Legal Notice
  logout: Log Out
  preferences: Settings
  privacy: Privacy Policy
  profile: Profile
  report: Content Report
  support: Support
  terms: General Terms and Conditions
</i18n>
