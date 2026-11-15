<template>
  <CardStateAlert v-if="error" class="flex flex-col items-center gap-2">
    {{ t('loadError') }}
    <ButtonColored
      :aria-label="t('retry')"
      size="small"
      variant="secondary"
      @click="load"
    >
      {{ t('retry') }}
    </ButtonColored>
  </CardStateAlert>
  <LoaderPlaceholder v-else-if="!hasLoaded" />
  <Card v-else>
    <ul class="flex flex-col divide-y divide-line">
      <li
        v-for="{ description, title, type } in types"
        :key="type"
        class="flex items-center justify-between gap-4 p-2"
      >
        <div class="flex min-w-0 flex-col">
          <span :id="`${templateId}-${type}`" class="text-body">
            {{ title }}
          </span>
          <span
            :id="`${templateId}-${type}-description`"
            class="text-body-small font-normal text-fg-2"
          >
            {{ description }}
          </span>
        </div>
        <SwitchRoot
          :aria-describedby="`${templateId}-${type}-description`"
          :aria-labelledby="`${templateId}-${type}`"
          class="relative h-8 w-13 shrink-0 rounded-full bg-line transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link disabled:opacity-60 data-[state=checked]:bg-action-primary"
          :disabled="pendingTypes.includes(type)"
          :model-value="isPushEnabled(type)"
          @update:model-value="setPushEnabled(type, $event)"
        >
          <SwitchThumb
            class="block size-6 translate-x-1 rounded-full bg-white shadow transition-transform data-[state=checked]:translate-x-6"
          />
        </SwitchRoot>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'reka-ui'

const { t } = useI18n()
const templateId = useId()
const types = computed(
  (): { description: string; title: string; type: NotificationTypeName }[] => [
    {
      description: t('eventInvitationDescription'),
      title: t('eventInvitationTitle'),
      type: 'event_invitation',
    },
    {
      description: t('guestFeedbackDescription'),
      title: t('guestFeedbackTitle'),
      type: 'guest_feedback',
    },
    {
      description: t('eventUpdatedDescription'),
      title: t('eventUpdatedTitle'),
      type: 'event_updated',
    },
    {
      description: t('eventDeletedDescription'),
      title: t('eventDeletedTitle'),
      type: 'event_deleted',
    },
    {
      description: t('friendshipRequestedDescription'),
      title: t('friendshipRequestedTitle'),
      type: 'friendship_requested',
    },
    {
      description: t('friendshipAcceptedDescription'),
      title: t('friendshipAcceptedTitle'),
      type: 'friendship_accepted',
    },
  ],
)
const { error, hasLoaded, isPushEnabled, load, pendingTypes, setPushEnabled } =
  useNotificationPreference()
</script>

<i18n lang="yaml">
de:
  eventDeletedDescription: Wenn eine Veranstaltung, zu der du eingeladen bist, gelöscht wird.
  eventDeletedTitle: Gelöschte Veranstaltungen
  eventInvitationDescription: Wenn dich jemand zu einer Veranstaltung einlädt.
  eventInvitationTitle: Einladungen
  eventUpdatedDescription: Wenn sich Beginn, Ende, Ort oder Teilnahmeform ändern.
  eventUpdatedTitle: Änderungen an Veranstaltungen
  friendshipAcceptedDescription: Wenn jemand deine Freundschaftsanfrage annimmt.
  friendshipAcceptedTitle: Angenommene Freundschaftsanfragen
  friendshipRequestedDescription: Wenn dir jemand eine Freundschaftsanfrage schickt.
  friendshipRequestedTitle: Freundschaftsanfragen
  guestFeedbackDescription: Wenn jemand deine Einladung annimmt oder absagt.
  guestFeedbackTitle: Antworten auf Einladungen
  loadError: Die Einstellungen konnten nicht geladen werden.
  retry: Erneut versuchen
en:
  eventDeletedDescription: When an event you are invited to is deleted.
  eventDeletedTitle: Deleted events
  eventInvitationDescription: When someone invites you to an event.
  eventInvitationTitle: Invitations
  eventUpdatedDescription: When the start, end, location or attendance format changes.
  eventUpdatedTitle: Event changes
  friendshipAcceptedDescription: When someone accepts your friend request.
  friendshipAcceptedTitle: Accepted friend requests
  friendshipRequestedDescription: When someone sends you a friend request.
  friendshipRequestedTitle: Friend requests
  guestFeedbackDescription: When someone accepts or cancels your invitation.
  guestFeedbackTitle: Replies to invitations
  loadError: The settings could not be loaded.
  retry: Try again
</i18n>
