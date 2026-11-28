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
    company: [
      'maevsi UG (haftungsbeschränkt)',
      'Virchowstraße 4, 34121 Kassel',
      'Sitz: Kassel',
      'Amtsgericht Kassel, HRB 20135',
      'Geschäftsführer: Jonas Thelemann, Tony Krieger',
    ],
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    unsubscribe: 'E-Mails abbestellen',
  },
  en: {
    company: [
      'maevsi UG (haftungsbeschränkt)',
      'Virchowstraße 4, 34121 Kassel, Germany',
      'Registered office: Kassel',
      'Local court Kassel, HRB 20135',
      'Managing directors: Jonas Thelemann, Tony Krieger',
    ],
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
          {{ separator }}
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
        </AppText>
        <AppText
          class="text-secondary"
          style="
            color: #5f6461;
            font-size: 11px;
            line-height: 18px;
            text-align: center;
          "
        >
          {{ t.company.join(` ${separator} `) }}
        </AppText>
      </EColumn>
    </ERow>
  </ESection>
</template>
