<template>
  <section class="flex flex-col gap-4">
    <h2 class="text-title">{{ t('title', { count: totalCount }) }}</h2>
    <p v-if="!events.length" class="text-body text-muted-foreground">
      {{ t('empty') }}
    </p>
    <ul v-else class="flex flex-col gap-2">
      <li v-for="event in events" :key="event.id" class="flex flex-col">
        <AppLink
          v-if="event.accountByCreatedBy"
          :to="
            localePath({
              name: 'event-view-username-event_name',
              params: {
                event_name: event.slug,
                username: event.accountByCreatedBy.username,
              },
            })
          "
        >
          {{ event.name }}
        </AppLink>
        <span v-else>{{ event.name }}</span>
        <AppTime
          class="text-body-small text-muted-foreground"
          :datetime="event.start"
        />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const { events, totalCount } = defineProps<{
  events: {
    accountByCreatedBy?: { username: string } | null
    id: string
    name: string
    slug: string
    start: string
  }[]
  totalCount: number
}>()

const localePath = useLocalePath()
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  empty: Dieser Kontakt ist noch zu keiner Deiner Veranstaltungen eingeladen.
  title: Eingeladen zu {count} Veranstaltung | Eingeladen zu {count} Veranstaltungen
en:
  empty: This contact isn't invited to any of your events yet.
  title: Invited to {count} event | Invited to {count} events
</i18n>
