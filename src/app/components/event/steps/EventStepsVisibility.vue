<template>
  <div class="mt-8 flex flex-col gap-8">
    <AppStepIndex :count="5" :index="5" />
    <TypographyH3>{{ t('title') }}</TypographyH3>
    <div class="flex flex-col gap-4">
      <RadioGroup v-model="eventForm.visibility" class="flex flex-col gap-6">
        <div class="w-full">
          <div class="flex items-start space-x-3">
            <RadioGroupItem value="PUBLIC" />
            <div class="flex w-full flex-col gap-1">
              <TypographySubtitleSmall>{{
                t('public')
              }}</TypographySubtitleSmall>
              <TypographyCaption>{{ t('visibleByAnyone') }}</TypographyCaption>
              <div v-if="eventForm.visibility === 'PUBLIC'" class="mt-4">
                <TypographyBodySmall>{{
                  t('maxGuestCount')
                }}</TypographyBodySmall>
                <input
                  v-model="eventForm.inviteeCountMaximum"
                  type="number"
                  class="w-full rounded-lg border border-(--semantic-base-line) px-4 py-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="flex items-start space-x-3">
            <RadioGroupItem value="PRIVATE" />
            <div class="flex w-full flex-col gap-1">
              <TypographySubtitleSmall>
                {{ t('private') }}
              </TypographySubtitleSmall>
              <TypographyCaption>{{ t('visibleByInvited') }}</TypographyCaption>
              <div v-if="eventForm.visibility === 'PRIVATE'" class="mt-4">
                <TypographyBodySmall>{{
                  t('maxGuestCount')
                }}</TypographyBodySmall>
                <input
                  v-model="eventForm.inviteeCountMaximum"
                  type="number"
                  class="w-full rounded-lg border border-(--semantic-base-line) px-4 py-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="flex items-start space-x-3">
            <RadioGroupItem value="UNLISTED" />
            <div class="flex w-full flex-col gap-1">
              <TypographySubtitleSmall>
                {{ t('unlisted') }}
              </TypographySubtitleSmall>
              <TypographyCaption>
                {{ t('visibleByLink') }}
              </TypographyCaption>
              <div v-if="eventForm.visibility === 'UNLISTED'" class="mt-4">
                <TypographyBodySmall>{{
                  t('maxGuestCount')
                }}</TypographyBodySmall>
                <input
                  v-model="eventForm.inviteeCountMaximum"
                  type="number"
                  class="w-full rounded-lg border border-(--semantic-base-line) px-4 py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </RadioGroup>
    </div>
    <ButtonColored
      :disabled="!isVisibilityValid"
      variant="primary"
      class="w-full"
      :aria-label="t('preview')"
      @click="emit('next')"
    >
      {{ t('preview') }}
    </ButtonColored>
  </div>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@/components/scn/radio-group'
import type { EventVisibility } from '~~/gql/generated/graphql'

interface FormData {
  visibility: null | EventVisibility
  inviteeCountMaximum: string
}

const emit = defineEmits<{
  updateForm: [value: Partial<FormData>]
  next: []
}>()

const { t } = useI18n()
const { form: eventForm, isVisibilityValid } = useEventForm()
</script>

<i18n lang="yaml">
de:
  maxGuestCount: Maximale Gästeanzahl
  public: Öffentlich
  private: Privat
  preview: Vorschau der Veranstaltung
  visibleByAnyone: Sichtbar für jeden
  visibleByInvited: Sichtbar für eingeladene Gäste
  visibleByLink: Nur über einen Link sichtbar
  unlisted: Ungelistet
  title: Sichtbarkeit und Anmeldung

en:
  public: Public
  private: Private
  preview: Preview the event
  unlisted: Unlisted
  visibleByAnyone: Visible by anyone
  visibleByInvited: Visible by invited guests
  visibleByLink: Only visible through a link
  maxGuestCount: Maximum guest count
  title: Visibility and Registration
</i18n>
