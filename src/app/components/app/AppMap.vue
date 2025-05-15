<template>
  <div :id="templateIdMap" class="h-128 w-full" />
</template>

<script setup lang="ts">
import { getAddressItem } from '~~/gql/documents/fragments/addressItem'
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { events } = defineProps<{
  events: Pick<EventItemFragment, 'addressByAddressId'>[]
}>()

const templateIdMap = useId()

onMounted(async () => {
  const L = await import('leaflet')

  const map = L.map(templateIdMap).setView([51.3144643, 9.4957866], 13)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map)

  // L.tileLayer('https://{s}.tile.thunderforest.com/atlas/{z}/{x}/{y}.png', {
  //   maxZoom: 19,
  //   attribution:
  //     'Maps © <a href="https://www.thunderforest.com/">Thunderforest</a>, Data © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  // }).addTo(map)

  for (const event of events) {
    const location = getAddressItem(event.addressByAddressId)?.location
    if (!location) continue
    L.marker([location.latitude, location.longitude]).addTo(map)
  }
})
</script>

<style>
@import url('~~/node_modules/leaflet/dist/leaflet.css');
</style>
