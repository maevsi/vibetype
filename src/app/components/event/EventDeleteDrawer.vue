<template>
  <FormDeleteDrawer
    v-model:open="isOpen"
    :errors-pg-ids="{
      postgres28P01: t('postgres28P01'),
      postgresP0002: t('postgresP0002'),
    }"
    :is-trigger-hidden
    :item-name-deletion="t('itemNameDeletion')"
    :item-name-success="t('itemNameSuccess')"
    :mutation
    :variables="{ id: eventId }"
    @success="navigateTo(localePath('dashboard'))"
  />
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'

const { eventId, isTriggerHidden = false } = defineProps<{
  eventId: string
  isTriggerHidden?: boolean
}>()

const isOpen = defineModel<boolean>('open', { default: false })

const { t } = useI18n()
const localePath = useLocalePath()

const mutation = useMutation(
  graphql(`
    mutation EventDelete($input: EventDeleteInput!) {
      eventDelete(input: $input) {
        clientMutationId
      }
    }
  `),
)
</script>

<i18n lang="yaml">
de:
  itemNameDeletion: Veranstaltung
  itemNameSuccess: Veranstaltung
  postgres28P01: Passwort falsch! Überprüfe, ob Du alles richtig geschrieben hast.
  postgresP0002: Die Veranstaltung wurde nicht gefunden!
en:
  itemNameDeletion: event
  itemNameSuccess: Event
  postgres28P01: Password incorrect! Check for spelling mistakes.
  postgresP0002: Event could not be found!
</i18n>
