<template>
  <Loader :api="api" indicator="ping" :class="classProps">
    <LoaderImage
      :alt="t('profilePictureAlt', { username: account?.username })"
      :aspect="aspect"
      :classes="classProps"
      :height="height"
      :src="profilePictureUrl || blankProfilePicture"
      :width="width"
    />
  </Loader>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import blankProfilePicture from '~/assets/images/blank-profile-picture.svg'
import { getAccountItem } from '~~/gql/documents/fragments/accountItem'
import { getProfilePictureItem } from '~~/gql/documents/fragments/profilePictureItem'
import { getUploadItem } from '~~/gql/documents/fragments/uploadItem'
import { useAccountByIdQuery } from '~~/gql/documents/queries/account/accountById'
import { useProfilePictureByAccountIdQuery } from '~~/gql/documents/queries/profilePicture/profilePictureByAccountId'

const {
  accountId,
  aspect = 'aspect-square',
  class: classProps = undefined,
  height,
  width,
} = defineProps<
  {
    accountId: string
    aspect?: string
    height: string
    width: string
  } & { class?: HtmlHTMLAttributes['class'] }
>()

const { t } = useI18n()
const TUSD_FILES_URL = useTusdFilesUrl()

// api data
const accountByIdQuery = useAccountByIdQuery({
  id: accountId,
})
const profilePictureQuery = useProfilePictureByAccountIdQuery({
  accountId: accountId,
})
const api = await useApiData([accountByIdQuery, profilePictureQuery])
const account = computed(() => getAccountItem(api.value.data.accountById))

// computations
const profilePictureUrl = computed(() => {
  const profilePicture = getProfilePictureItem(
    api.value.data.profilePictureByAccountId,
  )
  const upload = getUploadItem(profilePicture?.uploadByUploadId)

  return upload?.storageKey ? TUSD_FILES_URL + upload.storageKey : undefined
})
</script>

<i18n lang="yaml">
de:
  profilePictureAlt: Profilbild von {username}.
en:
  profilePictureAlt: "{username}'s profile picture."
</i18n>
