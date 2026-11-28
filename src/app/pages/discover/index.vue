<template>
  <div class="flex flex-1 flex-col">
    <LayoutPage>
      <!-- the search bar leads the page, so the heading is only there for assistive technology -->
      <h1 class="sr-only">{{ title }}</h1>
      <div class="flex flex-1 flex-col gap-4">
        <EventSearchBar
          v-model:is-map-visible="isMapVisible"
          v-model:search-query="searchQuery"
          :has-map="type === 'events'"
          :placeholder="
            type === 'events'
              ? t('searchPlaceholderEvents')
              : t('searchPlaceholderPeople')
          "
        />
        <div
          :aria-label="t('typeLabel')"
          class="flex gap-1 overflow-x-auto border-b border-line"
          role="tablist"
        >
          <AppButton
            v-for="option in typeOptions"
            :key="option.value"
            :aria-label="option.label"
            :aria-selected="type === option.value"
            :class="
              cn(
                '-mb-px gap-2 rounded-none border-b-2 px-4 py-2 text-body whitespace-nowrap',
                type === option.value
                  ? 'border-action-primary text-fg-1'
                  : 'border-transparent text-fg-2',
              )
            "
            role="tab"
            size="none"
            :to="{ query: getQuery(option.value) }"
            variant="ghost"
          >
            <component
              :is="option.icon"
              aria-hidden="true"
              :class="cn('size-5', option.color)"
            />
            {{ option.label }}
          </AppButton>
        </div>
        <EventSearch
          v-if="type === 'events'"
          v-model:search-query="searchQuery"
        />
        <AccountSearch v-else v-model:search-query="searchQuery" />
      </div>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/shadcn'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const isMapVisible = useEventMapVisible()

// data
const title = t('title')
const typeOptions = computed(() => [
  {
    color: 'text-accent-pink',
    icon: resolveComponent('AppIconCalendar'),
    label: t('events'),
    value: 'events',
  },
  {
    color: 'text-info',
    icon: resolveComponent('AppIconUsers'),
    label: t('people'),
    value: 'people',
  },
])

// the type and the search live in the URL, so a reload or a shared link keeps them
const type = computed(() =>
  route.query.type === 'people' ? 'people' : 'events',
)
const searchQuery = ref(
  typeof route.query.q === 'string' ? route.query.q : undefined,
)
const getQuery = (override: string) => ({
  ...route.query,
  // the default stays out of the URL
  type: override === 'events' ? undefined : override,
})
// replaced instead of pushed, so typing does not fill the history
watch(searchQuery, (value) => {
  router.replace({ query: { ...route.query, q: value || undefined } })
})

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  events: Veranstaltungen
  people: Personen
  searchPlaceholderEvents: Alle Veranstaltungen durchsuchen
  searchPlaceholderPeople: Personen durchsuchen
  title: Entdecken
  typeLabel: Art der Suche
en:
  events: Events
  people: People
  searchPlaceholderEvents: Search all events
  searchPlaceholderPeople: Search people
  title: Discover
  typeLabel: Search type
</i18n>
