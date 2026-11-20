<script setup lang="ts">
import { LOGO_CID, LOGO_DARK_CID } from '#shared/utils/assets'

const { locale } = defineProps<{
  locale: AppLocale
}>()

const { siteUrl } = useSiteUrl()

// data
const locales = {
  de: {
    logo: (siteName: string) => `${siteName}s Logo`,
    siteName: 'Vibetype'.toUpperCase(),
  },
  en: {
    logo: (siteName: string) => `${siteName}'s logo`,
    siteName: 'Vibetype'.toUpperCase(),
  },
}
const t = locales[locale]
</script>

<template>
  <ESection style="padding-top: 30px">
    <ERow>
      <EColumn>
        <ELink :href="siteUrl">
          <EImg
            :alt="t.logo(t.siteName)"
            class="logo-light"
            height="75"
            :src="`cid:${LOGO_CID}`"
            style="margin: auto"
            width="300"
          />
          <EImg
            :alt="t.logo(t.siteName)"
            class="logo-dark"
            height="75"
            :src="`cid:${LOGO_DARK_CID}`"
            style="display: none; margin: auto; mso-hide: all"
            width="300"
          />
        </ELink>
      </EColumn>
    </ERow>
  </ESection>
</template>
