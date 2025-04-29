<template>
  <Loader :api="api" indicator="ping">
    <LayoutPageTitle :title="title" />
    <div class="flex flex-col gap-4">
      <div class="flex flex-col items-center justify-center sm:flex-row">
        <div
          class="flex w-full flex-row gap-4 rounded-xl bg-(--semantic-base-surface-1)"
        >
          <div class="flex flex-row items-center gap-4 px-4 py-4 md:py-5">
            <AccountProfilePicture
              :account-id="account.id"
              class="size-12 rounded-full md:size-14"
              height="50"
              width="50"
            />
            <TypographyH3 class="my-auto">
              {{ '@' + route.params.username }}
            </TypographyH3>
          </div>
        </div>
      </div>
      <ButtonColored
        :aria-label="t('contactBook')"
        variant="secondary"
        class="rounded-lg py-2"
        :to="
          localePath({
            name: 'contact',
          })
        "
      >
        <div class="flex flex-row gap-4">
          <IVibetypeContacts class="size-6" :alt="t('iconAltContactBook')" />
          {{ t('contactBook') }}
        </div>
      </ButtonColored>
      <div class="flex flex-col gap-2">
        <TypographyH3>
          {{ t('about') }}
        </TypographyH3>
        <TypographyBodyMedium>
          {{ account.description }}
        </TypographyBodyMedium>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-row justify-between">
          <TypographyH3>
            {{ t('events') }}
          </TypographyH3>
          <ButtonColored
            :aria-label="t('contactBook')"
            variant="primary"
            class="rounded-xl py-2 text-sm font-semibold"
            :to="localePath('event-create')"
          >
            <div class="flex flex-row gap-1">
              {{ t('newEvent') }}
              <IVibetypeColoredAdd class="size-5" :alt="t('iconAdd')" />
            </div>
          </ButtonColored>
        </div>
      </div>
      <div>
        <div v-if="mixedEvents.length > 0" class="flex flex-col gap-4">
          <EventProfile
            v-for="event in mixedEvents"
            :key="event.id"
            :event="event"
            :is-organizing="event.isOrganizing"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <TypographyH3>
          {{ t('achievements') }}
        </TypographyH3>
        <!-- @vue-ignore -->
        <CardButton
          class="relative"
          is-disabled
          :to="`/achievement/view/$username`"
        >
          <div
            v-if="
              achievements.filter(
                (achievement) =>
                  achievement.achievement === AchievementType.MeetTheTeam,
              ).length
            "
            class="flex gap-2 text-center"
          >
            <div class="flex flex-1 flex-col items-center gap-2 p-2">
              <div class="relative">
                <IMaterialSymbolsHexagonOutline height="4em" width="4em" />
                <div class="absolute inset-0 flex items-center justify-center">
                  <IFa6SolidHandshake height="1.5em" width="1.5em" />
                </div>
              </div>
              <span class="text-gray-700 dark:text-gray-300">
                {{ t('achievementMeetTheTeam') }}
              </span>
            </div>
          </div>
          <span v-else>
            {{ t('achievementsNone') }}
          </span>
        </CardButton>
      </div>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { getAccountItem } from '~~/gql/documents/fragments/accountItem'
import { getAchievementItem } from '~~/gql/documents/fragments/achievementItem'
import { useAccountByUsernameQuery } from '~~/gql/documents/queries/account/accountByUsername'
import { useAllAchievementsQuery } from '~~/gql/documents/queries/achievement/achievementsAll'
import { AchievementType } from '~~/gql/generated/graphql'
import { getEventItem } from '~~/gql/documents/fragments/eventItem'
import { useAccountEventsAttendingQuery } from '~~/gql/documents/queries/event/eventsAttending'
import EventProfile from '~/components/event/list/EventProfile.vue'
import { useAllEventsQuery } from '~~/gql/documents/queries/event/eventsAll'
const { t } = useI18n()
const route = useRoute('account-view-username___en')
const localePath = useLocalePath()

// data
const title = t('myProfile')

useHeadDefault({
  ogType: 'profile',
  profileUsername: route.params.username,
  title,
})

// api data
const accountByUsernameQuery = await zalgo(
  useAccountByUsernameQuery({
    username: route.params.username,
  }),
)
const account = getAccountItem(
  accountByUsernameQuery.data.value?.accountByUsername,
)
if (!account) {
  throw createError({
    statusCode: 404,
  })
}
const achievementsQuery = await useAllAchievementsQuery({
  accountId: account.id,
})
const achievements =
  achievementsQuery.data.value?.allAchievements?.nodes
    .map((x) => getAchievementItem(x))
    .filter(isNeitherNullNorUndefined) || []

const accountEventsAttendingQuery = await zalgo(
  useAccountEventsAttendingQuery({
    accountId: account.id,
  }),
)

const eventsAttending = computed(() => {
  const contact =
    accountEventsAttendingQuery.data.value?.allContacts?.nodes?.[0]
  if (!contact) return []

  return (
    contact.guestsByContactId?.nodes
      ?.map((guest) => getEventItem(guest.eventByEventId))
      .filter(isNeitherNullNorUndefined) || []
  )
})

const allEventsQueryAfter = ref<string>()
const allEventsQuery = await zalgo(
  useAllEventsQuery({
    after: allEventsQueryAfter,
    createdBy: account.id,
    first: ITEMS_PER_PAGE,
  }),
)
const events = computed(
  () =>
    allEventsQuery.data.value?.allEvents?.nodes
      ?.map(getEventItem)
      .filter(isNeitherNullNorUndefined) || [],
)

const mixedEvents = computed(() => {
  const attendingWithFlag = eventsAttending.value.map((event) => ({
    ...event,
    isOrganizing: false,
  }))
  const organizingWithFlag = events.value.map((event) => ({
    ...event,
    isOrganizing: true,
  }))
  return [...attendingWithFlag, ...organizingWithFlag]
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
    .slice(0, 3)
})

const api = getApiData([
  accountByUsernameQuery,
  achievementsQuery,
  accountEventsAttendingQuery,
  allEventsQuery,
])
</script>

<i18n lang="yaml">
de:
  achievements: Errungenschaften
  achievementsNone: Noch keine freigeschaltet
  achievementMeetTheTeam: Triff das Team
  about: Über
  contactBook: Kontaktbuch
  events: Veranstaltungen
  myProfile: Mein Profil
  newEvent: Neue Veranstaltung
  iconAltContactBook: Kontaktbuch-Symbol
  iconAdd: Hinzufügen
en:
  achievements: Achievements
  achievementsNone: None unlocked yet
  achievementMeetTheTeam: Meet the team
  about: About
  contactBook: Contact Book
  events: Events
  myProfile: My Profile
  newEvent: New event
  iconAltContactBook: Contact Book Icon
  iconAdd: Add
</i18n>
