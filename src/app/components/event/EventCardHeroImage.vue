<template>
  <div class="overflow-hidden rounded-lg">
    <LoaderImage
      :alt="t('heroImage')"
      aspect="aspect-[130/94]"
      class="h-full w-full object-cover"
      :src="`/assets/static/images/event/${getHeroImageName(event.name)}.jpg`"
      height="94"
      width="130"
    />
  </div>
</template>

<script setup lang="ts">
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { event } = defineProps<{
  event: Pick<EventItemFragment, 'name'>
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  heroImage: Titelbild der Veranstaltung
en:
  heroImage: Title picture of the event
</i18n>
