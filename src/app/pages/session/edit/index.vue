<template>
  <div>
    <LayoutPageTitle :title />
    <div class="flex flex-col gap-6">
      <section class="flex flex-col gap-4">
        <TypographyH4 class="text-(--figma-neutral-level-6)">{{
          t('profile')
        }}</TypographyH4>
        <div class="flex flex-col gap-3">
          <CardButton
            class="bg-(--figma-primary-green-middle-dark) text-(--figma-base-white)"
            :title="t('aiSetup')"
            :to="
              localePath({
                name: 'preference-create',
              })
            "
          >
            <AppIconNetworkIntelligence />
            <!-- <template #iconSecondary>
              <AppIconRestartAlt />
            </template> -->
          </CardButton>
          <CardButton
            class="border-(--figma-warning-yellow-middle-dark) bg-(--figma-warning-yellow-light) text-(--figma-warning-yellow-dark)"
            :title="t('earlyBirdStart')"
            :to="localePath({ name: 'early-bird-create' })"
          >
            <AppIconEarlyBird />
            <!-- TODO: implement early bird cancellation -->
            <template v-if="false" #iconSecondary>
              <AppIconClose />
            </template>
          </CardButton>
        </div>
      </section>
      <section class="flex flex-col gap-4">
        <TypographyH4 class="text-(--figma-neutral-level-6)">{{
          t('display')
        }}</TypographyH4>
        <div class="flex flex-col gap-3">
          <CardButton
            :title="t('colorScheme')"
            :to="
              localePath({
                name: 'session-edit-color-scheme',
              })
            "
          >
            <AppIconSun />
          </CardButton>
          <CardButton
            :title="t('language')"
            :to="
              localePath({
                name: 'session-edit-language',
              })
            "
          >
            <AppIconLanguage />
          </CardButton>
        </div>
      </section>
      <section class="flex flex-col gap-4">
        <TypographyH4
          class="text-(--figma-neutral-level-6)"
          @click="onDevelopmentModeTrigger"
        >
          {{ t('support') }}
        </TypographyH4>
        <div class="flex flex-col gap-3">
          <CardButton
            v-if="isDevelopmentModeActive"
            :title="t('developerInformation')"
            :to="
              localePath({
                name: 'session-view',
              })
            "
          >
            <AppIconWrench />
          </CardButton>
          <CardButton
            :title="t('featureSuggestion')"
            :to="
              localePath({
                name: 'support-idea',
              })
            "
          >
            <AppIconIdea />
          </CardButton>
          <CardButton
            :title="t('bugReport')"
            :to="
              localePath({
                name: 'support-issue',
              })
            "
          >
            <AppIconBug />
          </CardButton>
          <CardButton
            :title="t('contact')"
            :to="
              localePath({
                name: 'support-contact',
              })
            "
          >
            <AppIconMail />
          </CardButton>
          <CardButton
            :title="t('report')"
            :to="
              localePath({
                name: 'support-report',
              })
            "
          >
            <AppIconReport />
          </CardButton>
        </div>
      </section>
      <section class="flex flex-col gap-4">
        <TypographyH4 class="text-(--figma-neutral-level-6)">
          {{ t('legal') }}
        </TypographyH4>
        <div class="flex flex-col gap-3">
          <CardButton :title="t('terms')" :to="localePath('docs-legal-terms')">
            <AppIconContract />
          </CardButton>
          <CardButton
            v-if="!isIos"
            :title="t('cookies')"
            @click="cookieControl.isModalActive.value = true"
          >
            <AppIconCookieOutline />
          </CardButton>
          <CardButton
            :title="t('legalNotice')"
            :to="localePath('docs-legal-imprint')"
          >
            <AppIconLegal />
          </CardButton>
          <CardButton
            :title="t('privacy')"
            :to="localePath('docs-legal-privacy')"
          >
            <AppIconVerifiedUser />
          </CardButton>
        </div>
      </section>
      <section v-if="store.signedInUsername" class="flex flex-col gap-4">
        <TypographyH4 class="text-(--figma-neutral-level-6)">
          {{ t('interactions') }}
        </TypographyH4>
        <CardButton
          :title="t('accountBlock')"
          :to="
            localePath({
              name: 'account-view-username-block',
              params: { username: store.signedInUsername },
            })
          "
        >
          <AppIconNoSymbol />
        </CardButton>
      </section>
      <section v-if="store.signedInUsername" class="flex flex-col">
        <CardButton
          class="bg-(--figma-critic-red-middle-dark) text-(--figma-base-white)"
          :title="t('logout')"
          @click="signOutToRoot"
        >
          <template #iconSecondary />
          <AppIconLogout />
        </CardButton>
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
