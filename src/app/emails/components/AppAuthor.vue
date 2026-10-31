<script setup lang="ts">
import { PROFILE_PICTURE_JONAS_CID } from '#shared/utils/assets'
import AppText from './base/AppText.vue'

const { locale, profilePictureSource = undefined } = defineProps<{
  locale: AppLocale
  profilePictureSource?: string
}>()

// data
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
            height="50"
            :src="profilePictureSource || `cid:${PROFILE_PICTURE_JONAS_CID}`"
            width="50"
          />
        </ELink>
      </EColumn>
      <EColumn width="88%">
        <AppText style="line-height: 9px">
          {{ authorName }}
        </AppText>
        <AppText style="font-style: italic; line-height: 9px">
          {{ t.author(t.siteName) }}
        </AppText>
      </EColumn>
    </ERow>
  </ESection>
</template>
