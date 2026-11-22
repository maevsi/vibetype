<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <div class="flex flex-col gap-4">
        <section class="flex flex-col gap-4">
          <span class="text-headline">{{ t('display') }}</span>
          <div class="flex flex-col">
            <AppMenuItem
              :title="t('colorScheme')"
              :to="
                localePath({
                  name: 'session-edit-color-scheme',
                })
              "
              tone="info"
            >
              <AppIconSun />
            </AppMenuItem>
            <AppMenuItem
              v-if="!store.signedInUsername"
              :title="t('language')"
              :to="
                localePath({
                  name: 'session-edit-language',
                })
              "
              tone="warning"
            >
              <AppIconLanguage />
            </AppMenuItem>
          </div>
        </section>
        <section class="flex flex-col gap-4">
          <AppSeparator />
          <span class="text-headline" @click="onDevelopmentModeTrigger">
            {{ t('support') }}
          </span>
          <div class="flex flex-col">
            <AppMenuItem
              v-if="isDevelopmentModeActive"
              :title="t('developerInformation')"
              :to="
                localePath({
                  name: 'session-view',
                })
              "
              tone="success"
            >
              <AppIconWrench />
            </AppMenuItem>
            <AppMenuItem
              :title="t('featureSuggestion')"
              :to="
                localePath({
                  name: 'support-idea',
                })
              "
              tone="success"
            >
              <AppIconIdea />
            </AppMenuItem>
            <AppMenuItem
              :title="t('bugReport')"
              :to="
                localePath({
                  name: 'support-issue',
                })
              "
              tone="danger"
            >
              <AppIconBug />
            </AppMenuItem>
            <AppMenuItem
              :title="t('contact')"
              :to="
                localePath({
                  name: 'support-contact',
                })
              "
              tone="warning"
            >
              <AppIconMail />
            </AppMenuItem>
            <AppMenuItem
              :title="t('report')"
              :to="
                localePath({
                  name: 'support-report',
                })
              "
              tone="danger"
            >
              <AppIconReport />
            </AppMenuItem>
          </div>
        </section>
        <section class="flex flex-col gap-4">
          <AppSeparator />
          <span class="text-headline">
            {{ t('legal') }}
          </span>
          <div class="flex flex-col">
            <AppMenuItem
              :title="t('privacySettings')"
              :to="
                localePath({
                  name: 'session-edit-privacy',
                })
              "
              tone="success"
            >
              <AppIconShieldCheck />
            </AppMenuItem>
            <AppMenuItem
              :title="t('terms')"
              :to="localePath('docs-legal-terms')"
              tone="success"
            >
              <AppIconContract />
            </AppMenuItem>
            <AppMenuItem
              :title="t('legalNotice')"
              :to="localePath('docs-legal-imprint')"
              tone="success"
            >
              <AppIconLegal />
            </AppMenuItem>
            <AppMenuItem
              :title="t('privacy')"
              :to="localePath('docs-legal-privacy')"
              tone="success"
            >
              <AppIconVerifiedUser />
            </AppMenuItem>
          </div>
        </section>
      </div>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const store = useStore()
const { isDevelopmentModeActive, onDevelopmentModeTrigger } =
  useDevelopmentModeTrigger()

// page
const title = t('preferences')
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  bugReport: Fehler
  colorScheme: Farbschema
  contact: Kontakt
  developerInformation: Entwicklerinformationen
  display: Anzeige
  featureSuggestion: Idee
  language: Sprache
  legal: Rechtliches
  legalNotice: Impressum
  preferences: Einstellungen
  privacy: Datenschutzerklärung
  privacySettings: Datenschutz-Einstellungen
  report: Meldung von Inhalten
  support: Hilfe
  terms: Nutzungsbedingungen
en:
  bugReport: Issue
  colorScheme: Color scheme
  contact: Contact
  developerInformation: Developer information
  display: Display
  featureSuggestion: Idea
  language: Language
  legal: Legal
  legalNotice: Legal Notice
  preferences: Settings
  privacy: Privacy Policy
  privacySettings: Privacy settings
  report: Content Report
  support: Support
  terms: Terms of Use
</i18n>
