<template>
  <AppImage
    v-bind="delegatedProps"
    :alt="t('profilePictureAlt', { emailAddress })"
    :cross-origin
    :height="size"
    :src="imageSrc"
    :width="size"
  />
</template>

<script setup lang="ts">
import blankProfilePicture from '~/assets/images/blank-profile-picture.svg'

const {
  aspect = 'aspect-square',
  emailAddress = undefined,
  emailAddressHash = undefined,
  size,
} = defineProps<{
  aspect?: string
  emailAddress?: string | null
  emailAddressHash?: string | null
  size: string
}>()

const { t } = useI18n()

// computations
const imageSrc = computed(() => {
  if (emailAddress && emailAddressHash)
    return `https://www.gravatar.com/avatar/${emailAddressHash}?d=mp&s=${size}`

  return blankProfilePicture
})
const crossOrigin = computed(() => {
  if (emailAddress && emailAddressHash) return 'anonymous'

  return undefined
})
const delegatedProps = computed(() => ({
  aspect,
}))
</script>

<i18n lang="yaml">
de:
  profilePictureAlt: Der Avatar von {emailAddress}.
en:
  profilePictureAlt: "{emailAddress}'s avatar."
</i18n>
