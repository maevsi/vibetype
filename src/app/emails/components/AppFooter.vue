<script setup lang="ts">
import AppText from './base/AppText.vue'

const { emailAddress, locale } = defineProps<{
  emailAddress: string
  locale: AppLocale
}>()

const { siteUrl } = useSiteUrl()
const legalUrl = (name: string) =>
  `${new URL(siteUrl).origin}${locale === 'de' ? '/de' : ''}/docs/legal/${name}`

// data
const locales = {
  de: {
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    unsubscribe: 'E-Mails abbestellen',
  },
  en: {
    imprint: 'Imprint',
    privacy: 'Privacy',
    unsubscribe: 'Unsubscribe from emails',
  },
}
const t = locales[locale]
const separator = '·'
</script>

<template>
  <ESection>
    <ERow>
      <EColumn>
        <AppText style="font-size: 13px; text-align: center">
          <ELink
            class="link"
            :href="`mailto:contact+unsubscribe@maev.si?subject=Unsubscribe%20${emailAddress}`"
            style="
              color: #117a23;
              text-decoration: underline;
              white-space: nowrap;
            "
          >
            {{ t.unsubscribe }}
          </ELink>
          {{ separator }}
          <ELink
            class="link"
            :href="legalUrl('imprint')"
            style="
              color: #117a23;
              text-decoration: underline;
              white-space: nowrap;
            "
          >
            {{ t.imprint }}
          </ELink>
          {{ separator }}
          <ELink
            class="link"
            :href="legalUrl('privacy')"
            style="
              color: #117a23;
              text-decoration: underline;
              white-space: nowrap;
            "
          >
            {{ t.privacy }}
          </ELink>
        </AppText>
      </EColumn>
    </ERow>
  </ESection>
</template>
