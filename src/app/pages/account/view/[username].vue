<template>
  <Loader :api="api" indicator="ping">
    <div class="flex flex-col gap-4">
      <TypographyH2>
        {{ title }}
      </TypographyH2>
      <div class="flex flex-col gap-4">
        <div
          class="light:border-(--semantic-base-line) flex flex-col items-center justify-center rounded-xl border border-1 sm:flex-row"
        >
          <div
            class="flex w-full flex-row gap-4 rounded-xl bg-(--semantic-base-surface-1)"
          >
            <div class="flex flex-row items-center gap-4 px-4 py-4 md:py-5">
              <AccountProfilePicture
                :account-id="account.id"
                class="size-15 rounded-full"
                height="60"
                width="60"
              />
              <TypographyH3>
                {{ t('userHandle', { username: route.params.username }) }}
              </TypographyH3>
            </div>
          </div>
        </div>
        <AppUnderConstruction>
          <ButtonColored
            v-if="store.signedInUsername !== route.params.username"
            :aria-label="t('friendAdd')"
            disabled
          >
            {{ t('friendAdd') }}
          </ButtonColored>
        </AppUnderConstruction>

        <AppUnderConstruction>
          <span class="text-xl font-bold">
            {{ t('friends') }}
          </span>
          <!-- @vue-ignore -->
          <CardButton
            class="relative"
            is-disabled
            :to="`/friend/view/$username`"
          >
            <div class="isolate flex -space-x-2 overflow-hidden p-1">
              <AccountProfilePicture
                account-id="d3d7f2d0-bbf5-46aa-84ba-82ccf3c6af6b"
                class="ring-background-brighten dark:ring-background-darken rounded-full ring-3"
                height="64"
                width="64"
              />
              <AccountProfilePicture
                account-id="d3d7f2d0-bbf5-46aa-84ba-82ccf3c6af6b"
                class="ring-background-brighten dark:ring-background-darken rounded-full ring-3"
                height="64"
                width="64"
              />
              <AccountProfilePicture
                account-id="d3d7f2d0-bbf5-46aa-84ba-82ccf3c6af6b"
                class="ring-background-brighten dark:ring-background-darken rounded-full ring-3"
                height="64"
                width="64"
              />
            </div>
          </CardButton>
        </AppUnderConstruction>
        <ButtonColored
          v-if="isOwnProfile"
          :aria-label="t('contactBook')"
          variant="secondary"
          class="py-3"
          :to="
            localePath({
              name: 'contact',
            })
          "
        >
          <div class="flex flex-row gap-4">
            <AppIconContacts :aria-label="t('iconAltContactBook')" />
            <TypographySubtitleMedium>
              {{ t('contactBook') }}
            </TypographySubtitleMedium>
          </div>
        </ButtonColored>
        <div v-if="account.description?.trim()" class="flex flex-col gap-2">
          <TypographyH3>
            {{ t('about') }}
          </TypographyH3>
          <TypographyBodyMedium>
            {{ account.description }}
          </TypographyBodyMedium>
        </div>
        <div v-if="mixedEvents.length > 0" class="flex flex-col">
          <div class="flex flex-row justify-between">
            <TypographyH3>
              {{ t('events') }}
            </TypographyH3>
            <ButtonColored
              v-if="isOwnProfile"
              :aria-label="t('contactBook')"
              variant="primary"
              class="rounded-xl py-2 text-sm font-semibold"
              :to="localePath('event-create')"
            >
              <div class="flex flex-row gap-2">
                <TypographySubtitleSmall>
                  {{ t('newEvent') }}
                </TypographySubtitleSmall>
                <AppIconAdd :aria-label="t('iconAdd')" />
              </div>
            </ButtonColored>
          </div>
        </div>
        <div>
          <div v-if="mixedEvents.length > 0" class="flex flex-col gap-4">
            <EventCard
              v-for="event in mixedEvents"
              :key="event.id"
              :event="event"
              :is-organizing="event.isOrganizing"
              :is-attending="event.isAttending"
              :is-own-profile="isOwnProfile"
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
                  <div
                    class="absolute inset-0 flex items-center justify-center"
                  >
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
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { getAccountItem } from '~~/gql/documents/fragments/accountItem'
import { getAchievementItem } from '~~/gql/documents/fragments/achievementItem'
import { useAccountByUsernameQuery } from '~~/gql/documents/queries/account/accountByUsername'
import { useAllAchievementsQuery } from '~~/gql/documents/queries/achievement/achievementsAll'
import {
  AchievementType,
  type EventItemFragment,
} from '~~/gql/generated/graphql'
import { getEventItem } from '~~/gql/documents/fragments/eventItem'
import { useAccountEventsAttendingQuery } from '~~/gql/documents/queries/event/eventsAttending'
import EventCard from '~/components/event/list/EventCard.vue'
import { useAllEventsQuery } from '~~/gql/documents/queries/event/eventsAll'

const { t } = useI18n()
const route = useRoute('account-view-username___en')
const localePath = useLocalePath()
type EventWithFlags = EventItemFragment & {
  isOrganizing: boolean
  isAttending: boolean
}

// data

const store = useStore()
const isOwnProfile = computed(
  () => store.signedInUsername === route.params.username,
)
const title = computed(() =>
  isOwnProfile.value ? t('myProfile') : t('profile'),
)

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

const accountId = store.signedInAccountId
const accountEventsAttendingQuery = accountId
  ? await zalgo(useAccountEventsAttendingQuery({ accountId }))
  : undefined

const eventsAttending = computed(() => {
  if (!accountEventsAttendingQuery) return []
  const contacts =
    accountEventsAttendingQuery.data.value?.allContacts?.nodes || []
  if (contacts.length === 0) return []
  const events = contacts.flatMap(
    (contact) =>
      contact.guestsByContactId?.nodes
        ?.map((guest) => getEventItem(guest.eventByEventId))
        .filter(isNeitherNullNorUndefined) || [],
  )
  return [...new Map(events.map((event) => [event.id, event])).values()]
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

/**
 * Computes mixed events to display on the profile.
 *
 * Returns events with isOrganizing and isAttending flags set appropriately:
 *
 * On own profile:
 * - Events you're attending: isAttending = true
 * - Events you're organizing: isOrganizing = true
 *
 * On another user's profile:
 * - Events they organize that you're attending: isAttending = true
 *
 * Filters out duplicate events, sorts by start date, and returns max 3 events.
 */
const mixedEvents = computed(() => {
  const attendingEventIds = new Set(
    eventsAttending.value.map((event) => event.id),
  )

  let result: EventWithFlags[] = []

  if (isOwnProfile.value) {
    result = eventsAttending.value.map((event) => ({
      ...event,
      isOrganizing: false,
      isAttending: true,
    }))
  }

  const organizingEvents = events.value.map((event) => {
    const isCurrentUserAttending =
      !isOwnProfile.value && attendingEventIds.has(event.id)

    return {
      ...event,
      isOrganizing: isOwnProfile.value,
      isAttending: isCurrentUserAttending,
    }
  })

  result.push(...organizingEvents)
  const seen = new Set()
  result = result.filter((event) => {
    if (seen.has(event.id)) {
      return false
    }
    seen.add(event.id)
    return true
  })

  return result
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
  friendAdd: Freundschaftsanfrage senden
  friends: Freunde
  myProfile: Mein Profil
  newEvent: Neue Veranstaltung
  profile: Profil
  iconAltContactBook: Kontaktbuch-Symbol
  iconAdd: Hinzufügen
  userHandle: "{'@'}{username}"
en:
  achievements: Achievements
  achievementsNone: None unlocked yet
  achievementMeetTheTeam: Meet the team
  about: About
  contactBook: Contact Book
  events: Events
  friends: Friends
  friendAdd: Send friend request
  myProfile: My Profile
  newEvent: New event
  profile: Profile
  iconAltContactBook: Contact Book Icon
  iconAdd: Add
  userHandle: "{'@'}{username}"
</i18n>
