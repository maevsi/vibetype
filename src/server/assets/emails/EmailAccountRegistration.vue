<script setup lang="ts">
import { Column, Row, Section } from '@vue-email/components'

import AppButton from './components/base/AppButton.vue'
import AppText from './components/base/AppText.vue'
import AppAuthor from './components/AppAuthor.vue'
import AppFooter from './components/AppFooter.vue'
import Email from './Email.vue'

const {
  emailAddress,
  locale,
  logoSource = undefined,
  siteUrl,
  username,
} = defineProps<{
  emailAddress: string
  locale: AppLocale
  logoSource?: string
  siteUrl: string
  username: string
}>()

const locales = {
  de: {
    button: 'Jetzt loslegen',
    header: (username: string) => `Willkommen, ${username}!`,
    paragraph1: (siteName: string) =>
      `Vielen Dank für deine Anmeldung bei ${siteName}, wir freuen uns, dass du dabei bist!`,
    paragraph2: 'Dein Konto ist eingerichtet und einsatzbereit.',
    siteName: 'Vibetype'.toUpperCase(),
    title: 'Willkommen',
  },
  en: {
    button: 'Get started',
    header: (username: string) => `Welcome, ${username}!`,
    paragraph1: (siteName: string) =>
      `Thanks so much for joining ${siteName}, we're thrilled to have you!`,
    paragraph2: 'Your account is set up and ready to go.',
    siteName: 'Vibetype'.toUpperCase(),
    title: 'Welcome',
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
            {{ t.header(username) }}
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
            <AppButton :href="siteUrl">
              {{ t.button }}
            </AppButton>
          </AppText>
        </Column>
      </Row>
    </Section>
    <AppAuthor :locale />
    <AppFooter :email-address :locale />
  </Email>
</template>
