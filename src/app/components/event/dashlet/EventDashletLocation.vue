<template>
  <EventDashlet v-if="event.isInPerson && address?.name">
    <AppLink v-if="mapsUrl" class="flex flex-col" is-external :to="mapsUrl">
      <span>{{ address.name }}</span>
      <span v-for="line in lines" :key="line" class="text-fg-2">{{
        line
      }}</span>
    </AppLink>
    <AppButton
      :aria-label="t('copy')"
      class="ml-auto shrink-0"
      size="icon"
      variant="secondary"
      @click="copyAddress"
    >
      <AppIconClipboard />
    </AppButton>
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
const text = computed(() =>
  [address?.name, getAddressText(address)].filter(Boolean).join(', '),
)
const mapsUrl = computed(() =>
  getMapsUrl({ location: address?.location, text: text.value }),
)

const { copy } = useCopy()
const copyAddress = async () => {
  if (await copy(text.value)) toast.success(t('copySuccess'))
}
</script>

<i18n lang="yaml">
de:
  copy: Adresse kopieren
  copySuccess: Die Adresse wurde in die Zwischenablage kopiert.
  location: Ort
en:
  copy: Copy address
  copySuccess: The address has been copied to the clipboard.
  location: location
</i18n>
