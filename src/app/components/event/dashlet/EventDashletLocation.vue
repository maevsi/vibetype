<template>
  <EventDashlet v-if="event.isInPerson && address?.name">
    <!-- <AppLink
      class="line-clamp-2"
      is-external
      :to="`https://maps.google.de/?q=${encodeURIComponent(address.name)}`"
    > -->
    <span>
      {{ address.name }}
    </span>
    <!-- </AppLink> -->
    <template #icon>
      <AppIconMap :title="t('location')" />
    </template>
  </EventDashlet>
</template>

<script setup lang="ts">
const { address = undefined, event } = defineProps<{
  address?: {
    id?: string | null
    name?: string | null
  } | null
  event: {
    isInPerson?: boolean | null
  }
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  location: Ort
en:
  location: location
</i18n>
