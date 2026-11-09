<script setup lang="ts">
import AppText from './base/AppText.vue'

const { emailAddress, locale } = defineProps<{
  emailAddress: string
  locale: AppLocale
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
  <ESection>
    <ERow>
      <EColumn>
        <AppText style="font-size: 13px; text-align: center">
          <ELink
            :href="`mailto:contact+unsubscribe@maev.si?subject=Unsubscribe%20${emailAddress}`"
            style="color: #60a5fa; text-decoration: underline"
          >
            {{ t.unsubscribe }}
          </ELink>
        </AppText>
      </EColumn>
    </ERow>
  </ESection>
</template>
