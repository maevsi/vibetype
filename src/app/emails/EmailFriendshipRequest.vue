<script setup lang="ts">
import AppButton from './components/base/AppButton.vue'
import AppText from './components/base/AppText.vue'
import AppAuthor from './components/AppAuthor.vue'
import AppFooter from './components/AppFooter.vue'
import Email from './components/Email.vue'

const { emailAddress, friendshipRequestLink, locale, senderUsername } =
  defineProps<{
    emailAddress: string
    friendshipRequestLink: string
    locale: AppLocale
    senderUsername: string
  }>()

const locales = {
  de: {
    button: 'Anfrage ansehen',
    header: 'Neue Freundschaftsanfrage',
    paragraph1: (senderUsername: string, siteName: string) =>
      `${senderUsername} möchte auf ${siteName} mit dir befreundet sein.`,
    paragraph2:
      'Klicke auf den unten stehenden Button, um die Anfrage anzunehmen oder abzulehnen.',
    siteName: 'Vibetype'.toUpperCase(),
    title: 'Freundschaftsanfrage',
  },
  en: {
    button: 'View request',
    header: 'New friend request',
    paragraph1: (senderUsername: string, siteName: string) =>
      `${senderUsername} wants to be your friend on ${siteName}.`,
    paragraph2: 'Click on the button below to accept or decline the request.',
    siteName: 'Vibetype'.toUpperCase(),
    title: 'Friend request',
  },
}
const t = locales[locale]
</script>

<template>
  <Email :locale :title="t.title">
    <ESection style="padding-top: 30px">
      <ERow style="width: 45%">
        <EColumn>
          <AppText
            style="
              font-weight: 700;
              line-height: 54px;
              font-size: 36px;
              text-align: center;
            "
          >
            {{ t.header }}
          </AppText>
        </EColumn>
      </ERow>
    </ESection>
    <ESection>
      <ERow>
        <EColumn>
          <AppText>
            {{ t.paragraph1(senderUsername, t.siteName) }}
          </AppText>
          <AppText>
            {{ t.paragraph2 }}
          </AppText>
          <AppText style="margin: 0; margin-top: 32px; text-align: center">
            <AppButton :href="friendshipRequestLink">
              {{ t.button }}
            </AppButton>
          </AppText>
        </EColumn>
      </ERow>
    </ESection>
    <AppAuthor :locale />
    <AppFooter :email-address :locale />
  </Email>
</template>
