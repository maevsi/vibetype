<script setup lang="ts">
import { Column, Img, Row, Section } from '@vue-email/components'

import AppText from './base/AppText.vue'
import { LOGO_CID } from '../../../utils/assets'

const { logoSource = undefined, locale } = defineProps<{
  logoSource?: string
  locale: AppLocale
}>()

const { siteUrl } = useSiteUrl()

// data
const locales = {
  de: {
    logo: (siteName: string) => `${siteName}s Logo`,
    siteName: 'Vibetype'.toUpperCase(),
    subtitle: 'Finde Veranstaltungen, Gäste und Freunde 💙❤️💚',
  },
  en: {
    logo: (siteName: string) => `${siteName}'s logo`,
    siteName: 'Vibetype'.toUpperCase(),
    subtitle: 'Find events, guests and friends 💙❤️💚',
  },
}
const t = locales[locale]
</script>

<template>
  <Section padding-top="30px">
    <Row>
      <Column>
        <Img
          :alt="t.logo(t.siteName)"
          height="75"
          :href="siteUrl"
          :src="logoSource || `cid:${LOGO_CID}`"
          style="margin: auto"
          width="300"
        />
      </Column>
    </Row>
  </Section>
  <Section>
    <Row width="100%">
      <Column>
        <AppText style="font-size: 14px; margin: 0; text-align: center">
          {{ t.subtitle }}
        </AppText>
      </Column>
    </Row>
  </Section>
</template>
