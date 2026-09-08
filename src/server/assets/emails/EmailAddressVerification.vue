<script setup lang="ts">
import { Column, Row, Section, Link } from '@vue-email/components'

import AppButton from './components/base/AppButton.vue'
import AppText from './components/base/AppText.vue'
import AppAuthor from './components/AppAuthor.vue'
import AppFooter from './components/AppFooter.vue'
import Email from './Email.vue'

const {
  emailAddress,
  emailAddressVerificationLink,
  locale,
  logoSource = undefined,
  timeZone = undefined,
  validUntil,
} = defineProps<{
  emailAddress: string
  emailAddressVerificationLink: string
  locale: AppLocale
  logoSource?: string
  timeZone?: string
  validUntil: string
}>()

const dateTimeFormatter = getEmailDateTimeFormatter(locale, timeZone)
const locales = {
  de: {
    button: 'E-Mail-Adresse bestätigen',
    header: () => `Bestätige deine E-Mail-Adresse`,
    paragraph1: (siteName: string) =>
      `Um mit der Erstellung deines ${siteName}-Kontos fortzufahren, bestätige bitte, dass diese E-Mail-Adresse dir gehört.`,
    paragraph2:
      'Klicke dazu auf den unten stehenden Button. Danach kannst du deinen Benutzernamen und dein Passwort festlegen.',
    paragraph3:
      'Wenn du kein Konto erstellt hast, kannst du diese E-Mail ignorieren.',
    siteName: 'Vibetype'.toUpperCase(),
    title: 'E-Mail-Adresse bestätigen',
    validUntil: (validUntil: string) =>
      `Dieser Bestätigungslink ist bis zum ${dateTimeFormatter.format(new Date(validUntil))} gültig.`,
  },
  en: {
    button: 'Confirm email address',
    header: () => `Confirm your email address`,
    paragraph1: (siteName: string) =>
      `To continue creating your ${siteName} account, please confirm that this email address belongs to you.`,
    paragraph2:
      'Click the button below to do so. Afterwards, you can choose your username and password.',
    paragraph3: "If you didn't create an account, you can ignore this email.",
    siteName: 'Vibetype'.toUpperCase(),
    title: 'Confirm your email address',
    validUntil: (validUntil: string) =>
      `This confirmation link is valid until ${dateTimeFormatter.format(new Date(validUntil))}.`,
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
            <AppButton :href="emailAddressVerificationLink">
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
              href="mailto:contact+email-verification@maev.si"
              style="text-decoration: underline"
            >
              <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
              {{ 'contact+email-verification@maev.si' }}
            </Link>
          </AppText>
        </Column>
      </Row>
    </Section>
    <AppAuthor :locale />
    <AppFooter :email-address :locale />
  </Email>
</template>
