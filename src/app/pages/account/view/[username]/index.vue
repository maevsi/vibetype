<template>
  <Loader :api>
    <AppError
      v-if="!account"
      :error="{ message: 'Account data missing', status: 404 }"
    />
    <LayoutPage v-else>
      <div class="flex flex-col gap-4">
        <div
          class="relative flex flex-col items-center gap-4 rounded-large bg-surface-raised p-6"
        >
          <template v-if="isOwnProfile">
            <AppButton
              v-if="isOwnProfile"
              :aria-label="t('edit')"
              class="absolute top-4 right-4 size-11 justify-center rounded-full bg-surface hover:bg-line"
              size="none"
              :to="
                localePath({
                  name: 'account-edit-username',
                  params: {
                    username: route.params.username,
                  },
                })
              "
              variant="ghost"
            >
              <AppIconEdit class="size-5" />
            </AppButton>
          </template>
          <template v-else>
            <div
              v-if="store.signedInAccountId"
              class="absolute top-4 right-4 flex justify-center"
            >
              <AppDropdown>
                <AppDropdownItem
                  variant="destructive"
                  @select="isBlockDrawerOpen = true"
                >
                  {{ t('blockAccount') }}
                </AppDropdownItem>
                <template #trigger>
                  <span
                    class="flex size-11 items-center justify-center rounded-full bg-surface hover:bg-line"
                  >
                    <AppIconMoreVertical />
                  </span>
                </template>
              </AppDropdown>
              <AccountBlockDrawer
                v-model:open="isBlockDrawerOpen"
                :blocked-account-id="account.rowId"
                :blocked-username="route.params.username"
                :blocking-account-id="store.signedInAccountId"
              />
            </div>
          </template>
          <!-- TODO: pass in data to make subcomponent api requests unnecessary -->
          <AccountProfilePicture
            :account-id="account.rowId"
            class="size-32 rounded-large"
            height="128"
            width="128"
          />
          <h1 class="text-center text-heading-medium text-balance">
            {{ t('username', { username: route.params.username }) }}
          </h1>
        </div>
        <AppFeature feature="friends">
          <AppButton
            v-if="store.signedInUsername !== route.params.username"
            :aria-label="t('friendAdd')"
            disabled
            variant="secondary"
          >
            {{ t('friendAdd') }}
          </AppButton>
        </AppFeature>
        <AppFeature feature="friends">
          <h2 class="text-title3">
            {{ t('friends') }}
          </h2>
          <!-- @vue-ignore -->
          <AppCardButton
            class="relative"
            disabled
            :to="`/friend/view/$username`"
          >
            <div class="isolate flex -space-x-2 overflow-hidden p-1">
              <AccountProfilePicture
                account-id="d3d7f2d0-bbf5-46aa-84ba-82ccf3c6af6b"
                class="rounded-full ring-3 ring-surface-raised"
                height="64"
                width="64"
              />
              <AccountProfilePicture
                account-id="d3d7f2d0-bbf5-46aa-84ba-82ccf3c6af6b"
                class="rounded-full ring-3 ring-surface-raised"
                height="64"
                width="64"
              />
              <AccountProfilePicture
                account-id="d3d7f2d0-bbf5-46aa-84ba-82ccf3c6af6b"
                class="rounded-full ring-3 ring-surface-raised"
                height="64"
                width="64"
              />
            </div>
          </AppCardButton>
        </AppFeature>
        <AppFeature v-if="isOwnProfile" feature="account-management">
          <AppButton
            :aria-label="t('contactBook')"
            class="data-[size=large]:gap-4.5 data-[type=secondary]:px-4.5"
            :to="
              localePath({
                name: 'contact',
              })
            "
            variant="secondary"
          >
            <AppIconContacts />
            <span class="text-headline">
              {{ t('contactBook') }}
            </span>
          </AppButton>
        </AppFeature>
        <AppFeature v-if="isOwnProfile" feature="account-management">
          <AppButton
            :aria-label="t('uploads')"
            class="data-[size=large]:gap-4.5 data-[type=secondary]:px-4.5"
            :to="
              localePath({
                name: 'upload',
              })
            "
            variant="secondary"
          >
            <AppIconFolder />
            <span class="text-headline">
              {{ t('uploads') }}
            </span>
          </AppButton>
        </AppFeature>
        <div v-if="accountDescription" class="flex flex-col gap-2 p-1.5">
          <h2 class="text-title3 text-balance">
            {{ t('about') }}
          </h2>
          <span class="text-body">
            {{ accountDescription }}
          </span>
        </div>
        <div v-if="events?.length" class="flex flex-col gap-3 py-1.5">
          <div class="flex items-center justify-between pl-2">
            <h2 class="text-title3 text-balance">
              {{ t('events') }}
            </h2>
            <AppButton
              v-if="isOwnProfile"
              :aria-label="t('newEvent')"
              class="data-[size=large]:gap-2 data-[type=primary]:px-4.5 data-[type=primary]:py-2"
              :to="localePath('event-create')"
            >
              <span class="text-body">
                {{ t('newEvent') }}
              </span>
              <AppIconAdd />
            </AppButton>
          </div>
          <EventCard v-for="event in events" :key="event.rowId" :event />
          <AppButton
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
          </AppButton>
        </div>
        <div class="flex flex-col gap-3">
          <h2 class="px-2 text-title3 text-balance">
            {{ t('achievements') }}
          </h2>
          <div
            class="flex justify-between rounded-large bg-surface-raised px-6 py-2"
          >
            <div
              v-if="hasMeetTheTeamAchievement"
              class="flex gap-2 text-center"
            >
              <div class="flex flex-1 flex-col items-center gap-2 py-2">
                <AppIconHandshake class="text-fg-2" />
                <span class="text-caption font-bold">
                  {{ t('achievementMeetTheTeam') }}
                </span>
              </div>
            </div>
            <span
              v-else
              class="flex-1 px-6 py-2 text-center text-caption font-bold"
            >
              {{ t('achievementsNone') }}
            </span>
          </div>
        </div>
        <div v-if="accountImprintUrl" class="flex flex-col gap-2 p-1.5">
          <h2 class="text-title3 text-balance">
            {{ t('imprint') }}
          </h2>
          <span class="text-body">
            <AppLink :to="accountImprintUrl">
              {{ accountImprintUrl }}
            </AppLink>
          </span>
        </div>
        <template v-if="isOwnProfile">
          <AppSeparator />
          <AppMenuItem
            :title="t('settings')"
            :to="localePath({ name: 'session-edit' })"
          >
            <AppIconSettings />
          </AppMenuItem>
        </template>
      </div>
    </LayoutPage>
  </Loader>
</template>

<script setup lang="ts">
import { AchievementType } from '~~/gql/generated/graphcache'
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
          rowId
        }
      }
      description
      profilePictureByAccountId {
        id
        rowId
        uploadByUploadId {
          id
          rowId
          storageKey
        }
      }
      eventsByCreatedBy(first: 3, orderBy: START_DESC) {
        nodes {
          eventCategoryMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
            nodes {
              eventCategoryByCategoryId {
                id
                name
              }
              id
            }
          }
          eventFavoritesByEventId(first: 1) {
            nodes {
              createdBy
              id
              rowId
            }
          }
          eventFormatMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
            nodes {
              eventFormatByFormatId {
                id
                name
              }
              id
            }
          }
          guestsByEventId(first: 1) {
            nodes {
              contactByContactId {
                accountId
                id
                rowId
              }
              id
              rowId
            }
          }
          id
          name
          rowId
          slug
          start
        }
        totalCount
      }
      id
      imprintUrl
      rowId
    }
  }
`)

// page
const store = useStore()
const route = useRoute()
const isOwnProfile = computed(
  () => store.signedInUsername === route.params.username,
)
const { t } = useI18n()
const title = computed(() =>
  isOwnProfile.value ? t('myProfile') : t('profile'),
)

// api data
const query = useApiQuery({
  query: queryAccount,
  variables: {
    username: route.params.username,
  },
})
const api = await useApiData([query])
const account = computed(() => query.data.value?.accountByUsername)
const accountDescription = computed(() => account.value?.description?.trim())
const accountImprintUrl = computed(() => account.value?.imprintUrl?.trim())
const achievements = computed(
  () => account.value?.achievementsByAccountId.nodes,
)
const hasMeetTheTeamAchievement = computed(() =>
  Boolean(
    achievements.value?.filter(
      (achievement) => achievement.achievement === AchievementType.MeetTheTeam,
    ).length,
  ),
)
const events = computed(() =>
  account.value?.eventsByCreatedBy.nodes.map((event) => ({
    ...event,
    accountByCreatedBy: { ...account.value, username: route.params.username },
  })),
)
const hasProfileContent = computed(() =>
  Boolean(
    accountDescription.value ||
    accountImprintUrl.value ||
    events.value?.length ||
    hasMeetTheTeamAchievement.value,
  ),
)

// page (post-fetch)
const TUSD_FILES_URL = useTusdFilesUrl()
const accountProfilePictureUrl = computed(() => {
  const storageKey =
    account.value?.profilePictureByAccountId?.uploadByUploadId?.storageKey

  return storageKey ? TUSD_FILES_URL + storageKey : undefined
})
const { siteUrlTyped: siteUrl } = useSiteUrl()
useHeadDefault({
  description: accountDescription,
  ogType: 'profile',
  profileUsername: route.params.username,
  robots: computed(() =>
    hasProfileContent.value ? undefined : { noindex: true },
  ),
  title,
})
definePerson({
  description: accountDescription,
  image: accountProfilePictureUrl,
  name: route.params.username,
  url: `https://${siteUrl.host}${route.fullPath}`,
})
defineOgImage(
  'Person.takumi',
  {
    description: accountDescription,
    image: accountProfilePictureUrl,
    username: route.params.username,
  },
  {
    alt: t('ogImageAlt'),
  },
)

// template
const localePath = useLocalePath()
const isBlockDrawerOpen = ref<boolean>()
</script>

<i18n lang="yaml">
de:
  about: Über
  achievementMeetTheTeam: Triff das Team
  achievements: Errungenschaften
  achievementsNone: Noch keine freigeschaltet
  blockAccount: Konto blockieren
  contactBook: Kontaktbuch
  edit: Profil bearbeiten
  eventMore: Mehr…
  events: Events
  friendAdd: Freundschaftsanfrage senden
  friends: Freunde
  imprint: Impressum
  myProfile: Mein Profil
  newEvent: Neues Event
  ogImageAlt: Das Profilbild des Kontos.
  profile: Profil
  settings: Einstellungen
  uploads: Meine Dateien
  username: "{'@'}{username}"
en:
  about: About
  achievementMeetTheTeam: Meet the team
  achievements: Achievements
  achievementsNone: None unlocked yet
  blockAccount: Block Account
  contactBook: Contact Book
  edit: Edit profile
  eventMore: Show more
  events: Events
  friendAdd: Send friend request
  friends: Friends
  imprint: Imprint
  myProfile: My Profile
  newEvent: New event
  ogImageAlt: The account's profile picture.
  profile: Profile
  settings: Settings
  uploads: Uploads
  username: "{'@'}{username}"
</i18n>
