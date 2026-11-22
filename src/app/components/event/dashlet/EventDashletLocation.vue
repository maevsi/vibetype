<template>
  <EventDashlet v-if="event.isInPerson && address?.name">
    <AppLink class="flex flex-col" is-external :to="mapsUrl">
      <span>{{ address.name }}</span>
      <span v-for="line in lines" :key="line" class="text-fg-2">{{
        line
      }}</span>
    </AppLink>
    <template #icon>
      <AppIconMap :title="t('location')" />
    </template>
  </EventDashlet>
</template>

<script setup lang="ts">
import type { AddressFields } from '#shared/utils/address'

const { address = undefined, event } = defineProps<{
  address?:
    | (AddressFields & {
        id?: string | null
        location?: { latitude: number; longitude: number } | null
        name?: string | null
      })
    | null
  event: {
    isInPerson?: boolean | null
  }
}>()

const { t } = useI18n()

const lines = computed(() =>
  getAddressLines(address).filter((line) => line !== address?.name),
)
const mapsUrl = computed(() =>
  getMapsUrl({
    location: address?.location,
    text: [address?.name, getAddressText(address)].filter(Boolean).join(', '),
  }),
)
</script>

<i18n lang="yaml">
de:
  location: Ort
en:
  location: location
</i18n>
