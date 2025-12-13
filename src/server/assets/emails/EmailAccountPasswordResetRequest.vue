<script setup lang="ts">
import { Column, Row, Section, Link } from '@vue-email/components'

import AppButton from './components/base/AppButton.vue'
import AppText from './components/base/AppText.vue'
import AppAuthor from './components/AppAuthor.vue'
import AppFooter from './components/AppFooter.vue'
import Email from './Email.vue'
import type { Locale } from '../../utils/i18n'
import { getEmailDateTimeFormatter } from '../../../shared/utils/dateTime'

const {
  emailAddress,
  locale,
  logoSource = undefined,
  passwordResetVerificationLink,
  validUntil,
} = defineProps<{
  emailAddress: string
  locale: Locale
  logoSource?: string
  passwordResetVerificationLink: string
  validUntil: string
}>()

const dateTimeFormatter = getEmailDateTimeFormatter(locale)
const locales = {
  de: {
    button: 'Passwort zurücksetzen',
    header: () => `Willkommen zurück!`,
    paragraph1: (siteName: string) =>
      `Es wurde eine Anfrage zum Zurücksetzen des Kennworts für dein ${siteName}-Konto gestellt.`,
    paragraph2:
      'Wenn du das warst, klicke auf den unten stehenden Button, um ein neues Passwort zu vergeben.',
    paragraph3:
      'Wenn du das nicht warst, kontaktiere uns bitte so schnell wie möglich unter der folgenden E-Mail-Adresse.',
    siteName: 'Vibetype'.toUpperCase(),
    title: 'Passwort zurücksetzen',
    validUntil: (validUntil: string) =>
      `Diese Anfrage ist bis zum ${dateTimeFormatter.format(new Date(validUntil))} gültig.`,
  },
  en: {
    button: 'Reset password',
    header: () => `Welcome back!`,
    paragraph1: (siteName: string) =>
      `A request to reset the password for your ${siteName} account has been initiated.`,
    paragraph2:
      'If that was you, click on the button below to set a new password.',
    paragraph3:
      "If that hasn't been you, please contact us as soon as possible using the email address below.",
    siteName: 'Vibetype'.toUpperCase(),
    title: 'Reset password',
    validUntil: (validUntil: string) =>
      `This request is valid until ${dateTimeFormatter.format(new Date(validUntil))}.`,
  },
}
const t = locales[locale]
</script>

<template>
  <Email :locale :logo-source :title="t.title">
    <Section style="padding-top: 30px">
      <Row style="width: 45%">
        <Column>
          <AppText
            style="
              font-weight: 700;
              line-height: 54px;
              font-size: 36px;
              text-align: center;
            "
          >
            {{ t.header() }}
          </AppText>
        </Column>
      </Row>
    </Section>
    <Section>
      <Row>
        <Column>
          <AppText>
            {{ t.paragraph1(t.siteName) }}
          </AppText>
          <AppText>
            {{ t.paragraph2 }}
          </AppText>
          <AppText style="margin: 0; margin-top: 32px; text-align: center">
            <AppButton :href="passwordResetVerificationLink">
              {{ t.button }}
            </AppButton>
          </AppText>
          <AppText
            style="
              color: #555;
              font-size: 13px;
              margin-top: 8px;
              margin-bottom: 32px;
              text-align: center;
            "
          >
            {{ t.validUntil(validUntil) }}
          </AppText>
          <AppText>
            {{ t.paragraph3 }}
          </AppText>
          <AppText>
            <Link
              href="mailto:contact+password-reset@maev.si"
              style="text-decoration: underline"
            >
              <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
              {{ 'contact+password-reset@maev.si' }}
            </Link>
          </AppText>
        </Column>
      </Row>
    </Section>
    <AppAuthor :locale />
    <AppFooter :email-address :locale />
  </Email>
</template>
