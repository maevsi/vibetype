<script setup lang="ts">
import { Column, Link, Row, Section } from '@vue-email/components'

import type { Locale } from '../../../utils/i18n'
import AppText from './base/AppText.vue'

const { emailAddress, locale } = defineProps<{
  emailAddress: string
  locale: Locale
}>()

// data
const locales = {
  de: {
    unsubscribe: 'E-Mails abbestellen',
  },
  en: {
    unsubscribe: 'Unsubscribe from emails',
  },
}
const t = locales[locale]
</script>

<template>
  <Section>
    <Row>
      <Column>
        <AppText style="font-size: 13px; text-align: center">
          <Link
            :href="`mailto:contact+unsubscribe@maev.si?subject=Unsubscribe%20${emailAddress}`"
            style="color: #60a5fa; text-decoration: underline"
          >
            {{ t.unsubscribe }}
          </Link>
        </AppText>
      </Column>
    </Row>
  </Section>
</template>
