<template>
  <div>
    <LayoutPageTitle :title="title" />
    <div class="flex flex-col gap-6">
      <section class="flex flex-col gap-4">
        <span class="text-lg font-bold">{{ t('profile') }}</span>
        <div class="flex flex-col gap-3">
          <CardButton
            class="bg-(--accent-strong) text-(--semantic-base-primary-button-text)"
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
            class="border-(--warning-strong) bg-(--warning-weak) text-(--warning-text)"
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
        <span class="text-lg font-bold">{{ t('display') }}</span>
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
        <span class="text-lg font-bold" @click="onDevelopmentModeTrigger">
          {{ t('support') }}
        </span>
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
            is-external
            :title="t('featureSuggestion')"
            to="https://forms.monday.com/forms/f3ef56d13c8383e6ececb2875d7fb4b2?r=euc1"
          >
            <AppIconIdea />
          </CardButton>
          <CardButton
            is-external
            :title="t('bugReport')"
            to="https://forms.monday.com/forms/55b8fc2281c2be1647a69e6a4ffe156e?r=euc1"
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
        </div>
      </section>
      <section class="flex flex-col gap-4">
        <span class="text-lg font-bold">
          {{ t('legal') }}
        </span>
        <div class="flex flex-col gap-3">
          <CardButton :title="t('terms')" :to="localePath('docs-legal-terms')">
            <AppIconContract />
          </CardButton>
          <CardButton
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
      <section class="flex flex-col">
        <CardButton
          v-if="store.signedInUsername"
          class="bg-(--critic-string) text-(--semantic-base-light-text-on-dark)"
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
const localePath = useLocalePath()
const store = useStore()
const { signOut } = await useSignOut()
const { isDevelopmentModeActive, onDevelopmentModeTrigger } =
  useDevelopmentModeTrigger()

// sign out
const signOutToRoot = async () => {
  await signOut()
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
  aiSetup: KI einrichten
  # aiSetupReset: KI-Einrichtung zurücksetzen
  bugReport: Fehler
  colorScheme: Farbschema
  contact: Kontakt
  cookies: Cookies
  developerInformation: Entwicklerinformationen
  display: Anzeige
  featureSuggestion: Idee
  language: Sprache
  legal: Rechtliches
  legalNotice: Impressum
  logout: Abmelden
  preferences: Einstellungen
  privacy: Datenschutzerklärung
  profile: Profil
  earlyBirdStart: Early Bird beitreten
  # earlyBirdStop: Early Bird beenden
  support: Hilfe
  terms: Allgemeine Geschäftsbedingungen
en:
  aiSetup: Set up AI
  # aiSetupReset: Reset AI Setup
  bugReport: Issue
  colorScheme: Color scheme
  contact: Contact
  cookies: Cookies
  developerInformation: Developer information
  display: Display
  featureSuggestion: Idea
  language: Language
  legal: Legal
  legalNotice: Legal Notice
  logout: Log Out
  preferences: Settings
  privacy: Privacy Policy
  profile: Profile
  earlyBirdStart: Join Early Bird
  # earlyBirdStop: Stop Early Bird
  support: Support
  terms: General Terms and Conditions
</i18n>
