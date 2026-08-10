<template>
  <LoaderImage
    v-if="profilePictureUrl"
    :alt="t('profilePictureAlt', { username: account?.username })"
    :aspect
    :classes="classProps"
    :height
    :src="profilePictureUrl"
    :width
  />
  <div
    v-else
    :class="
      cn(
        'flex items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br from-blue-400 to-purple-500',
        classProps,
      )
    "
    :style="{ height: `${height}px`, width: `${width}px` }"
  >
    <AppIconUser class="size-1/2 text-white" />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'
import { graphql } from '~~/gql/generated'

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
    query AccountByRowId($id: UUID!) {
      accountByRowId(rowId: $id) {
        id
        profilePictureByAccountId {
          id
          rowId
          uploadByUploadId {
            id
            rowId
            storageKey
          }
        }
        rowId
        username
      }
    }
  `),
  variables: {
    id: accountId,
  },
})
const api = await useApiData([query])
const account = computed(() => api.value.data.accountByRowId)
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
