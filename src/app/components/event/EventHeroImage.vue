<template>
  <div
    v-if="!headerImageSrc && (categoryName || formatName)"
    :aria-label="t('heroImage')"
    :class="
      cn(
        'flex aspect-[3/2] h-48 w-full items-center justify-center gap-4 rounded-t-large bg-surface-raised',
        classProps,
      )
    "
    role="img"
  >
    <EventIconCategory
      v-if="categoryName"
      class="size-20"
      :name="categoryName"
    />
    <EventIconFormat v-if="formatName" class="size-20" :name="formatName" />
  </div>
  <AppImage
    v-else
    :alt="t('heroImage')"
    aspect="aspect-[3/2]"
    :class="cn('h-48 w-full rounded-t-large object-cover', classProps)"
    height="2"
    :src="
      headerImageSrc ||
      `/assets/static/images/event/${getHeroImageName(event.name)}.jpg`
    "
    width="3"
  />
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { class: classProps = undefined, event } = defineProps<{
  class?: HTMLAttributes['class']
  event: Pick<
    EventItemFragment,
    | 'eventCategoryMappingsByEventId'
    | 'eventFormatMappingsByEventId'
    | 'eventUploadsByEventId'
    | 'name'
  >
}>()

const categoryName = computed(
  () =>
    event.eventCategoryMappingsByEventId?.nodes[0]?.eventCategoryByCategoryId
      ?.name,
)
const formatName = computed(
  () =>
    event.eventFormatMappingsByEventId?.nodes[0]?.eventFormatByFormatId?.name,
)

const TUSD_FILES_URL = useTusdFilesUrl()
const headerImageSrc = computed(() => {
  const storageKey = getEventHeaderImageStorageKey(event)
  return storageKey ? TUSD_FILES_URL + storageKey : undefined
})

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  heroImage: Titelbild der Veranstaltung
en:
  heroImage: Title picture of the event
</i18n>
