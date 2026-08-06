<template>
  <div
    v-if="categoryName || formatName"
    :aria-label="t('heroImage')"
    class="flex aspect-[3/2] h-48 w-full items-center justify-center gap-4 rounded-t-xl bg-(--semantic-base-surface-1)"
    role="img"
  >
    <EventIconCategory
      v-if="categoryName"
      class="size-20"
      :name="categoryName"
    />
    <EventIconFormat v-if="formatName" class="size-20" :name="formatName" />
  </div>
  <LoaderImage
    v-else
    :alt="t('heroImage')"
    aspect="aspect-[3/2]"
    classes="rounded-t-xl h-48 object-cover w-full"
    height="2"
    :src="`/assets/static/images/event/${getHeroImageName(event.name)}.jpg`"
    width="3"
  />
</template>

<script setup lang="ts">
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { event } = defineProps<{
  event: Pick<
    EventItemFragment,
    'eventCategoryMappingsByEventId' | 'eventFormatMappingsByEventId' | 'name'
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

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  heroImage: Titelbild der Veranstaltung
en:
  heroImage: Title picture of the event
</i18n>
