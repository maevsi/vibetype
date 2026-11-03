<template>
  <div>
    <LayoutPageTitle :title />
    <div class="flex flex-col gap-8">
      <AppFeature feature="notifications">
        <div class="flex flex-col gap-8">
          <section
            v-if="store.signedInAccountId && store.signedInUsername"
            class="flex flex-col gap-4"
          >
            <!-- <h2>{{ t('friendRequests') }}</h2> -->
            <div>
              <NotificationFriendRequest
                :account-id="store.signedInAccountId"
                :username="store.signedInUsername"
              />
              <!-- <NotificationFriendRequest
              :account-id="store.signedInAccountId"
              :username="store.signedInUsername"
            />
            <NotificationFriendRequest
              :account-id="store.signedInAccountId"
              :username="store.signedInUsername"
            /> -->
            </div>
          </section>
          <section class="flex flex-col gap-4">
            <!-- <h2>{{ t('general') }}</h2> -->
            <div class="flex flex-col gap-2">
              <NotificationGeneral
                :category="t('locationChangedCategory')"
                is-unread
                :message="t('locationChangedMessage')"
              >
                <template #icon>
                  <AppIconMapPinSolid />
                </template>
              </NotificationGeneral>
              <NotificationGeneral
                :category="t('invitationCategory')"
                :message="t('invitationMessage')"
              >
                <template #icon>
                  <AppIconHeart />
                </template>
              </NotificationGeneral>
            </div>
          </section>
        </div>
      </AppFeature>
      <ButtonApp />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const store = useStore()

// data
const title = t('notifications')

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  # friendRequests: Freundschaftsanfragen
  # general: Allgemein
  invitationCategory: 'Du bist eingeladen:'
  invitationMessage: TrapParty 23 von Jonas
  locationChangedCategory: 'Neu:'
  locationChangedMessage: Ortswechsel bei einer Veranstaltung
  notifications: Benachrichtigungen
en:
  # friendRequests: Friend requests
  # general: General
  invitationCategory: 'You are invited:'
  invitationMessage: TrapParty 23 by Jonas
  locationChangedCategory: 'News:'
  locationChangedMessage: place changed for an event
  notifications: Notifications
</i18n>
