<template>
  <Loader :api="api" indicator="ping">
    <LayoutPage>
      <div v-if="account" class="flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <TypographyH2>
            {{ title }}
          </TypographyH2>
          <AppButton
            v-if="isOwnProfile"
            :aria-label="t('edit')"
            :to="
              localePath({
                name: 'account-edit-username',
                params: {
                  username: store.signedInUsername,
                },
              })
            "
          >
            <AppIconSettings class="size-8" />
          </AppButton>
        </div>
        <div
          class="flex items-center gap-3 rounded-xl border border-(--semantic-base-line) bg-(--semantic-base-surface-1) p-3 dark:border-none"
        >
          <!-- TODO: pass in data to make subcomponent api requests unnecessary -->
          <AccountProfilePicture
            :account-id="account.id"
            class="size-15 rounded-full"
            height="60"
            width="60"
          />
          <TypographyH3>
            {{ t('username', { username: route.params.username }) }}
          </TypographyH3>
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
          class="data-[size=large]:gap-4.5 data-[type=secondary]:px-4.5"
          :to="
            localePath({
              name: 'contact',
            })
          "
        >
          <AppIconContacts />
          <TypographySubtitleMedium>
            {{ t('contactBook') }}
          </TypographySubtitleMedium>
        </ButtonColored>
        <div v-if="accountDescription" class="flex flex-col gap-2 p-1.5">
          <TypographyH3>
            {{ t('about') }}
          </TypographyH3>
          <TypographyBodyMedium>
            {{ accountDescription }}
          </TypographyBodyMedium>
        </div>
        <div v-if="events?.length" class="flex flex-col gap-3 py-1.5">
          <div class="flex justify-between pl-2">
            <TypographyH3>
              {{ t('events') }}
            </TypographyH3>
            <ButtonColored
              v-if="isOwnProfile"
              :aria-label="t('newEvent')"
              class="data-[size=large]:gap-2 data-[type=primary]:px-4.5 data-[type=primary]:py-2"
              :to="localePath('event-create')"
            >
              <TypographySubtitleSmall>
                {{ t('newEvent') }}
              </TypographySubtitleSmall>
              <AppIconAdd />
            </ButtonColored>
          </div>
          <EventCard v-for="event in events" :key="event.id" :event />
          <ButtonColored
            v-if="account.eventsByCreatedBy.totalCount > 3"
            :aria-label="t('eventMore')"
            :to="
              localePath({
                name: 'event-view-username',
                params: { username: route.params.username },
              })
            "
            variant="tertiary"
          >
            {{ t('eventMore') }}
            <template #suffix>
              <AppIconChevronDown />
            </template>
          </ButtonColored>
        </div>
        <div class="flex flex-col gap-3">
          <TypographyH3 class="px-2">
            {{ t('achievements') }}
          </TypographyH3>
          <div
            class="flex justify-between rounded-xl border border-(--semantic-base-line) bg-(--semantic-base-surface-1) px-6 py-2"
          >
            <div
              v-if="
                achievements?.filter(
                  (achievement) =>
                    achievement.achievement === AchievementType.MeetTheTeam,
                ).length
              "
              class="flex gap-2 text-center"
            >
              <div class="flex flex-1 flex-col items-center gap-2 py-2">
                <IFa6SolidHandshake
                  class="text-(--semantic-base-icon-primary)"
                  height="1.5em"
                  width="1.5em"
                />
                <TypographyLabelBold>
                  {{ t('achievementMeetTheTeam') }}
                </TypographyLabelBold>
              </div>
            </div>
            <span v-else>
              {{ t('achievementsNone') }}
            </span>
          </div>
        </div>
        <div v-if="accountImprint" class="flex flex-col gap-2 p-1.5">
          <TypographyH3>
            {{ t('imprint') }}
          </TypographyH3>
          <TypographyBodyMedium>
            {{ accountImprint }}
          </TypographyBodyMedium>
        </div>
      </div>
    </LayoutPage>
  </Loader>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'

import {
  AchievementType,
  type AccountQueryVariables,
} from '~~/gql/generated/graphql'
import { graphql } from '~~/gql/generated'

definePageMeta({
  layout: 'default-no-header',
})

const queryAccount = graphql(`
  query Account($username: String!) {
    accountByUsername(username: $username) {
      achievementsByAccountId(first: 5) {
        nodes {
          achievement
          id
        }
      }
      description
      eventsByCreatedBy(first: 3) {
        nodes {
          eventFavoritesByEventId(first: 1) {
            nodes {
              createdBy
              id
            }
          }
          guestsByEventId(first: 1) {
            nodes {
              contactByContactId {
                accountId
                id
              }
              id
            }
          }
          id
          name
          slug
          start
        }
        totalCount
      }
      id
      imprint
    }
  }
`)

// page
const store = useStore()
const route = useRoute('account-view-username___en')
const isOwnProfile = computed(
  () => store.signedInUsername === route.params.username,
)
const { t } = useI18n()
const title = computed(() =>
  isOwnProfile.value ? t('myProfile') : t('profile'),
)
useHeadDefault({
  ogType: 'profile',
  profileUsername: route.params.username,
  title,
})

// api data
const query = useQuery({
  query: queryAccount,
  variables: {
    username: route.params.username,
  } satisfies MaybeRefObj<AccountQueryVariables>,
})
const api = await useApiData([query])
const account = computed(() => query.data.value?.accountByUsername)
const accountDescription = computed(() => account.value?.description?.trim())
const accountImprint = computed(() => account.value?.imprint?.trim())
const achievements = computed(
  () => account.value?.achievementsByAccountId.nodes,
)
const events = computed(() =>
  account.value?.eventsByCreatedBy.nodes.map((event) => ({
    ...event,
    accountByCreatedBy: { ...account.value, username: route.params.username },
  })),
)

// account
if (account.value === null) {
  throw showError({
    message: 'Account data missing',
    statusCode: 404,
  })
}

// template
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  about: Über
  achievementMeetTheTeam: Triff das Team
  achievements: Errungenschaften
  achievementsNone: Noch keine freigeschaltet
  contactBook: Kontaktbuch
  edit: Profil bearbeiten
  eventMore: Mehr…
  events: Events
  friendAdd: Freundschaftsanfrage senden
  friends: Freunde
  imprint: Impressum
  myProfile: Mein Profil
  newEvent: Neues Event
  profile: Profil
  username: "{'@'}{username}"
en:
  about: About
  achievementMeetTheTeam: Meet the team
  achievements: Achievements
  achievementsNone: None unlocked yet
  contactBook: Contact Book
  edit: Edit profile
  eventMore: Show more
  events: Events
  friendAdd: Send friend request
  friends: Friends
  imprint: Imprint
  myProfile: My Profile
  newEvent: New event
  profile: Profile
  username: "{'@'}{username}"
</i18n>
