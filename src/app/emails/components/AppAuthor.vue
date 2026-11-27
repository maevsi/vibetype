<script setup lang="ts">
import { EMAIL_IMAGE_PATH_PROFILE_PICTURE_JONAS } from '#shared/utils/assets'
import AppText from './base/AppText.vue'

const { locale } = defineProps<{
  locale: AppLocale
}>()

// data
const { siteUrl } = useSiteUrl()
const profilePictureSrc = new URL(
  EMAIL_IMAGE_PATH_PROFILE_PICTURE_JONAS,
  siteUrl,
).href
const authorName = 'Jonas Thelemann'
const authorWebsite = 'https://jonas-thelemann.de/'
const locales = {
  de: {
    author: (siteName: string) => `${siteName}s Autor`,
    profilePicture: 'Profilbild',
    siteName: 'Vibetype'.toUpperCase(),
  },
  en: {
    author: (siteName: string) => `${siteName}'s author`,
    profilePicture: 'Profile picture',
    siteName: 'Vibetype'.toUpperCase(),
  },
}
const t = locales[locale]
</script>

<template>
  <ESection style="padding-top: 20px">
    <ERow>
      <EColumn width="12%">
        <ELink :href="authorWebsite">
          <EImg
            :alt="t.profilePicture"
            class="profile-picture"
            height="50"
            :src="profilePictureSrc"
            width="50"
          />
        </ELink>
      </EColumn>
      <EColumn style="vertical-align: middle" width="88%">
        <AppText style="line-height: 20px; margin: 0">
          {{ authorName }}
          <br />
          <span style="font-style: italic">{{ t.author(t.siteName) }}</span>
        </AppText>
      </EColumn>
    </ERow>
  </ESection>
</template>
