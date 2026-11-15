<template>
  <li
    :class="
      cn('flex gap-3 rounded-medium p-3', isUnread && 'bg-surface-raised')
    "
  >
    <div class="relative size-10 shrink-0">
      <AccountProfilePicture
        v-if="isAvatarShown && notification.actorAccountId"
        :account-id="notification.actorAccountId"
        class="size-10 rounded-full"
        height="40"
        width="40"
      />
      <div
        v-else
        class="flex size-10 items-center justify-center rounded-full bg-line text-fg-1"
      >
        <AppIconMail v-if="notification.type === 'event_invitation'" />
        <AppIconCalendar v-else-if="notification.type === 'event_updated'" />
        <AppIconTrash v-else-if="notification.type === 'event_deleted'" />
        <AppIconCheckCircle
          v-else-if="
            notification.type === 'guest_feedback' &&
            payload.feedback === 'accepted'
          "
        />
        <AppIconXCircle v-else-if="notification.type === 'guest_feedback'" />
        <AppIconUsers v-else />
      </div>
      <NotificationIndicator
        v-if="isUnread"
        class="absolute -top-0.5 -right-0.5 ring-2 ring-surface"
      />
    </div>
    <div class="flex min-w-0 flex-1 flex-col gap-1">
      <div class="flex items-center gap-2 text-caption text-fg-2">
        <span v-if="isUnread" class="sr-only">{{ t('unread') }}</span>
        <AppTime
          :datetime="notification.createdAt"
          :options="{ numeric: 'auto', relative: true }"
        />
      </div>
      <component
        :is="target ? AppLink : 'p'"
        v-bind="target ? { isColored: false, to: localePath(target) } : {}"
        :class="
          cn(
            'text-body-small wrap-anywhere text-fg-1',
            target && 'rounded-small hover:underline',
            isUnread ? 'font-semibold' : 'font-normal',
          )
        "
        @click="target && emit('open')"
      >
        <i18n-t
          v-if="notification.type === 'event_invitation'"
          keypath="textEventInvitation"
          tag="span"
        >
          <template #actor>
            <strong>{{ actorName }}</strong>
          </template>
          <template #event>
            <strong>{{ eventName }}</strong>
          </template>
        </i18n-t>
        <i18n-t
          v-else-if="
            notification.type === 'event_updated' && payload.changes.length
          "
          keypath="textEventUpdatedChanges"
          tag="span"
        >
          <template #changes>{{ changesText }}</template>
          <template #event>
            <strong>{{ eventName }}</strong>
          </template>
        </i18n-t>
        <i18n-t
          v-else-if="notification.type === 'event_updated'"
          keypath="textEventUpdated"
          tag="span"
        >
          <template #event>
            <strong>{{ eventName }}</strong>
          </template>
        </i18n-t>
        <i18n-t
          v-else-if="notification.type === 'event_deleted'"
          keypath="textEventDeleted"
          tag="span"
        >
          <template #event>
            <strong>{{ eventName }}</strong>
          </template>
        </i18n-t>
        <i18n-t
          v-else-if="
            notification.type === 'guest_feedback' &&
            payload.feedback === 'canceled'
          "
          keypath="textGuestFeedbackCanceled"
          tag="span"
        >
          <template #event>
            <strong>{{ eventName }}</strong>
          </template>
          <template #guest>
            <strong>{{ guestName }}</strong>
          </template>
        </i18n-t>
        <i18n-t
          v-else-if="notification.type === 'guest_feedback'"
          keypath="textGuestFeedbackAccepted"
          tag="span"
        >
          <template #event>
            <strong>{{ eventName }}</strong>
          </template>
          <template #guest>
            <strong>{{ guestName }}</strong>
          </template>
        </i18n-t>
        <i18n-t
          v-else-if="notification.type === 'friendship_accepted'"
          keypath="textFriendshipAccepted"
          tag="span"
        >
          <template #actor>
            <strong>{{ actorName }}</strong>
          </template>
        </i18n-t>
        <i18n-t
          v-else-if="notification.type === 'friendship_requested'"
          keypath="textFriendshipRequested"
          tag="span"
        >
          <template #actor>
            <strong>{{ actorName }}</strong>
          </template>
        </i18n-t>
        <template v-else>{{ t('textUnknown') }}</template>
      </component>
      <template v-if="notification.type === 'friendship_requested'">
        <p
          v-if="resolution"
          class="flex items-center gap-2 text-body-small text-fg-2"
          role="status"
        >
          <AppIconCheckCircle v-if="resolution === 'accepted'" class="size-5" />
          <AppIconXCircle v-else class="size-5" />
          {{
            resolution === 'accepted'
              ? t('friendshipAccepted', { name: actorName })
              : t('friendshipDeclined')
          }}
        </p>
        <div v-else-if="notification.friendshipId" class="mt-1 flex gap-2">
          <ButtonColored
            :aria-label="t('declineLabel', { name: actorName })"
            class="flex-1"
            :disabled="isResolving"
            size="small"
            variant="secondary"
            @click="decline"
          >
            {{ t('decline') }}
          </ButtonColored>
          <ButtonColored
            :aria-label="t('acceptLabel', { name: actorName })"
            class="flex-1"
            :loading="isResolving"
            size="small"
            @click="accept"
          >
            {{ t('accept') }}
          </ButtonColored>
        </div>
      </template>
    </div>
  </li>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import { AppLink } from '#components'
import { cn } from '@/utils/shadcn'

const { isUnread = false, notification } = defineProps<{
  isUnread?: boolean
  notification: AccountNotificationItem
}>()

const emit = defineEmits<{
  open: []
}>()

const { locale, t } = useI18n()
const alertError = useAlertError()
const localePath = useLocalePath()

// api data
const updateFriendshipByRowIdMutation = useMutation(
  graphql(`
    mutation AcceptFriendship($input: UpdateFriendshipByRowIdInput!) {
      updateFriendshipByRowId(input: $input) {
        friendship {
          id
          rowId
          status
        }
      }
    }
  `),
)
const deleteFriendshipByRowIdMutation = useMutation(
  graphql(`
    mutation DeclineFriendship($input: DeleteFriendshipByRowIdInput!) {
      deleteFriendshipByRowId(input: $input) {
        clientMutationId
      }
    }
  `),
)

// computations
const payload = computed(() => parseNotificationPayload(notification.payload))
const target = computed(() => getNotificationTarget(notification))
const isAvatarShown = computed(
  () =>
    notification.type !== 'event_deleted' &&
    notification.type !== 'event_updated',
)
const actorName = computed(
  () =>
    (notification.type === 'event_invitation'
      ? payload.value.eventCreatorUsername
      : undefined) ??
    payload.value.actorUsername ??
    t('someone'),
)
const eventName = computed(() => payload.value.eventName ?? t('eventUnknown'))
const guestName = computed(
  () => payload.value.guestName ?? payload.value.actorUsername ?? t('someone'),
)
const changesText = computed(() => {
  const labels = {
    address: t('changeAddress'),
    attendance: t('changeAttendance'),
    end: t('changeEnd'),
    start: t('changeStart'),
  }

  return new Intl.ListFormat(locale.value, {
    style: 'long',
    type: 'conjunction',
  }).format(payload.value.changes.map((change) => labels[change]))
})

// friend request
const resolution = ref<'accepted' | 'declined'>()
const isResolving = ref(false)
const accept = async () => {
  if (!notification.friendshipId) return

  isResolving.value = true

  try {
    const result = await updateFriendshipByRowIdMutation.executeMutation({
      input: {
        friendshipPatch: { status: 'accepted' },
        rowId: notification.friendshipId,
      },
    })

    if (result.error || !result.data?.updateFriendshipByRowId) {
      alertError({
        error: result.error,
        messageI18n: t('acceptError'),
      })
      return
    }

    resolution.value = 'accepted'
  } finally {
    isResolving.value = false
  }
}
const decline = async () => {
  if (!notification.friendshipId) return

  isResolving.value = true

  try {
    const result = await deleteFriendshipByRowIdMutation.executeMutation({
      input: { rowId: notification.friendshipId },
    })

    if (result.error) {
      alertError({
        error: result.error,
        messageI18n: t('declineError'),
      })
      return
    }

    resolution.value = 'declined'
  } finally {
    isResolving.value = false
  }
}
</script>

<i18n lang="yaml">
de:
  accept: Annehmen
  acceptError: Die Anfrage konnte nicht angenommen werden.
  acceptLabel: Freundschaftsanfrage von {name} annehmen
  changeAddress: Ort
  changeAttendance: Teilnahmeform
  changeEnd: Ende
  changeStart: Beginn
  decline: Ablehnen
  declineError: Die Anfrage konnte nicht abgelehnt werden.
  declineLabel: Freundschaftsanfrage von {name} ablehnen
  eventUnknown: eine Veranstaltung
  friendshipAccepted: Du und {name} seid jetzt befreundet.
  friendshipDeclined: Anfrage abgelehnt.
  someone: Jemand
  textEventDeleted: '{event} wurde gelöscht.'
  textEventInvitation: '{actor} hat dich zu {event} eingeladen.'
  textEventUpdated: '{event} wurde geändert.'
  textEventUpdatedChanges: '{event} wurde geändert ({changes}).'
  textFriendshipAccepted: '{actor} hat deine Freundschaftsanfrage angenommen.'
  textFriendshipRequested: '{actor} möchte mit dir befreundet sein.'
  textGuestFeedbackAccepted: '{guest} hat deine Einladung zu {event} angenommen.'
  textGuestFeedbackCanceled: '{guest} hat für {event} abgesagt.'
  textUnknown: Neue Benachrichtigung
  unread: Ungelesen
en:
  accept: Accept
  acceptError: The request could not be accepted.
  acceptLabel: Accept friend request from {name}
  changeAddress: location
  changeAttendance: attendance format
  changeEnd: end time
  changeStart: start time
  decline: Decline
  declineError: The request could not be declined.
  declineLabel: Decline friend request from {name}
  eventUnknown: an event
  friendshipAccepted: You and {name} are now friends.
  friendshipDeclined: Request declined.
  someone: Someone
  textEventDeleted: '{event} was deleted.'
  textEventInvitation: '{actor} invited you to {event}.'
  textEventUpdated: '{event} was updated.'
  textEventUpdatedChanges: '{event} was updated ({changes}).'
  textFriendshipAccepted: '{actor} accepted your friend request.'
  textFriendshipRequested: '{actor} wants to be your friend.'
  textGuestFeedbackAccepted: '{guest} accepted your invitation to {event}.'
  textGuestFeedbackCanceled: '{guest} canceled for {event}.'
  textUnknown: New notification
  unread: Unread
</i18n>
