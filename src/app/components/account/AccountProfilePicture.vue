<template>
  <LoaderImage
    :alt="t('profilePictureAlt', { username: account?.username })"
    :aspect="aspect"
    :classes="classProps"
    :height="height"
    :src="profilePictureUrl || blankProfilePicture"
    :width="width"
  />
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'
import type { HtmlHTMLAttributes } from 'vue'

import blankProfilePicture from '~/assets/images/blank-profile-picture.svg'
import { graphql } from '~~/gql/generated'
import type { AccountByIdQueryVariables } from '~~/gql/generated/graphql'

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
const query = useQuery({
  query: graphql(`
    query AccountById($id: UUID!) {
      accountById(id: $id) {
        id
        profilePictureByAccountId {
          id
          uploadByUploadId {
            id
            storageKey
          }
        }
        username
      }
    }
  `),
  variables: {
    id: accountId,
  } satisfies MaybeRefObj<AccountByIdQueryVariables>,
})
const api = await useApiData([query])
const account = computed(() => api.value.data.accountById)
const upload = computed(
  () => account.value?.profilePictureByAccountId?.uploadByUploadId,
)

// computations
const profilePictureUrl = computed(() =>
  upload.value?.storageKey
    ? TUSD_FILES_URL + upload.value.storageKey
    : undefined,
)
</script>

<i18n lang="yaml">
de:
  profilePictureAlt: Profilbild von {username}.
en:
  profilePictureAlt: "{username}'s profile picture."
</i18n>
