<template>
  <ButtonIcon
    v-if="event.visibility === EventVisibility.Public"
    :aria-label="t('share')"
    @click="share"
  >
    <AppIconShare :title="t('share')" />
  </ButtonIcon>
</template>

<script setup lang="ts">
import { useShare } from '@vueuse/core'

import { EventVisibility } from '~~/gql/generated/graphcache'
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { event } = defineProps<{
  event: {
    accountByCreatedBy?: { username: string } | null
    name: string
    slug: string
    visibility: EventItemFragment['visibility']
  }
}>()

const { t } = useI18n()
const localePath = useLocalePath()
const { copy } = useCopy()
const { isSupported, share: shareNative } = useShare()

const share = async () => {
  if (!import.meta.client || !event.accountByCreatedBy) return

  // links to the public event page, also from a guest page, so that sharing
  // never hands out a personal invitation link
  const url = `${window.location.origin}${localePath({
    name: 'event-view-username-event_name',
    params: {
      event_name: event.slug,
      username: event.accountByCreatedBy.username,
    },
  })}`

  if (isSupported.value) {
    try {
      await shareNative({ title: event.name, url })
      return
    } catch (error) {
      // the user closing the share sheet rejects with `AbortError`, any other
      // failure (e.g. `NotAllowedError`) falls back to copying the link
      if (error instanceof DOMException && error.name === 'AbortError') return
    }
  }

  if (await copy(url)) toast.success(t('copySuccess'))
}
</script>

<i18n lang="yaml">
de:
  copySuccess: Der Link zur Veranstaltung wurde in die Zwischenablage kopiert.
  share: Teilen
en:
  copySuccess: The event link has been copied to the clipboard.
  share: Share
</i18n>
