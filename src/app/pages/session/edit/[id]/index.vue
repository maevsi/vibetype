<template>
  <div>
    <LayoutPageTitle :title="title" />
    <div class="flex flex-col gap-6">
      <section v-if="store.signedInUsername" class="flex flex-col gap-4">
        <span class="text-lg font-bold">{{ t('profile') }}</span>
        <div class="flex flex-col gap-3">
          <CardButton
            :title="t('personalInformation')"
            :to="
              localePath({
                name: 'account-edit-username',
                params: {
                  username: store.signedInUsername,
                },
              })
            "
          >
            <AppIconPerson />
          </CardButton>
          <CardButton
            :title="t('contactBook')"
            :to="
              localePath({
                name: 'contact',
              })
            "
          >
            <AppIconContacts />
          </CardButton>
          <AppUnderConstruction>
            <CardButton
              class="bg-(--accent-strong) text-(--semantic-base-primary-button-text)"
              :title="t('resetAISetup')"
              :to="
                localePath({
                  name: 'account-edit-username',
                  params: {
                    username: store.signedInUsername,
                  },
                })
              "
            >
              <AppIconNetworkIntelligence />

              <template #iconSecondary>
                <AppIconRestartAlt />
              </template>
            </CardButton>
          </AppUnderConstruction>
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
                name: 'session-edit-id-color-scheme',
                params: {
                  id: route.params.id,
                },
              })
            "
          >
            <AppIconSun />
          </CardButton>
          <CardButton
            :title="t('language')"
            :to="
              localePath({
                name: 'session-edit-id-language',
                params: {
                  id: route.params.id,
                },
              })
            "
          >
            <AppIconLanguage />
          </CardButton>
        </div>
      </section>
      <section class="flex flex-col gap-4">
        <span class="text-lg font-bold">{{ t('support') }}</span>
        <div class="flex flex-col gap-3">
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
            is-external
            :title="t('contact')"
            to="https://forms.monday.com/forms/74204ae8168ecb1dd44c15b502854a5a?r=euc1"
          >
            <AppIconMail />
          </CardButton>
          <CardButton
            :title="t('developerInformation')"
            :to="
              localePath({
                name: 'session-view-id',
                params: {
                  id: route.params.id,
                },
              })
            "
          >
            <AppIconWrench />
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
          @click="signOut"
        >
          <template #iconSecondary />
          <AppIconLogout />
        </CardButton>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RouteNamedMap } from 'vue-router/auto-routes'

const ROUTE_NAME: keyof RouteNamedMap = 'session-edit-id___en'

defineRouteRules({
  robots: false,
})

const { t } = useI18n()
const cookieControl = useCookieControl()
const localePath = useLocalePath()
const route = useRoute(ROUTE_NAME)
const store = useStore()
const { signOut } = await useSignOut()

// data
const title = t('preferences')

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  bugReport: Fehler
  colorScheme: Farbschema
  contact: Kontakt
  contactBook: Kontaktbuch
  cookies: Cookies
  developerInformation: Entwicklerinformationen
  display: Anzeige
  featureSuggestion: Idee
  language: Sprache
  legal: Rechtliches
  legalNotice: Impressum
  logout: Abmelden
  personalInformation: Persönliche Informationen
  preferences: Einstellungen
  privacy: Datenschutzerklärung
  profile: Profil
  resetAISetup: KI-Einrichtung zurücksetzen
  earlyBirdStart: Early Bird beitreten
  # earlyBirdStop: Early Bird beenden
  support: Hilfe
  terms: Allgemeine Geschäftsbedingungen
en:
  bugReport: Issue
  colorScheme: Color scheme
  contact: Contact
  contactBook: Contact Book
  cookies: Cookies
  developerInformation: Developer information
  display: Display
  featureSuggestion: Idea
  language: Language
  legal: Legal
  legalNotice: Legal Notice
  logout: Log Out
  personalInformation: Personal Information
  preferences: Settings
  privacy: Privacy Policy
  profile: Profile
  resetAISetup: Reset AI Setup
  earlyBirdStart: Join Early Bird
  # earlyBirdStop: Stop Early Bird
  support: Support
  terms: General Terms and Conditions
</i18n>
