<template>
  <div class="mt-8 flex flex-col gap-8">
    <AppStepIndex :count="5" :index="5" />
    <TypographyH3>{{ t('title') }}</TypographyH3>
    <div class="flex flex-col gap-4">
      <RadioGroup class="flex flex-col gap-6" :value="props.form.visibility">
        <div class="w-full">
          <div class="flex items-start space-x-3">
            <RadioGroupItem
              value="PUBLIC"
              @click="updateVisibility(EventVisibility.Public)"
            />
            <div class="flex w-full flex-col gap-1">
              <TypographySubtitleSmall>{{
                t('public')
              }}</TypographySubtitleSmall>
              <TypographyCaption>{{ t('visibleByAnyone') }}</TypographyCaption>
              <div v-if="props.form.visibility === 'PUBLIC'" class="mt-4">
                <TypographyBodySmall>{{
                  t('maxGuestCount')
                }}</TypographyBodySmall>
                <input
                  class="w-full rounded-lg border border-(--semantic-base-line) px-4 py-2"
                  :value="props.form.inviteeCountMaximum"
                  type="number"
                  @input="updateInviteeCount($event)"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="flex items-start space-x-3">
            <RadioGroupItem
              value="PRIVATE"
              @click="updateVisibility(EventVisibility.Private)"
            />
            <div class="flex w-full flex-col gap-1">
              <TypographySubtitleSmall>
                {{ t('private') }}
              </TypographySubtitleSmall>
              <TypographyCaption>{{ t('visibleByInvited') }}</TypographyCaption>
              <div v-if="props.form.visibility === 'PRIVATE'" class="mt-4">
                <TypographyBodySmall>{{
                  t('maxGuestCount')
                }}</TypographyBodySmall>
                <input
                  class="w-full rounded-lg border border-(--semantic-base-line) px-4 py-2"
                  :value="props.form.inviteeCountMaximum"
                  type="number"
                  @input="updateInviteeCount($event)"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="flex items-start space-x-3">
            <RadioGroupItem
              value="UNLISTED"
              @click="updateVisibility(EventVisibility.Unlisted)"
            />
            <div class="flex w-full flex-col gap-1">
              <TypographySubtitleSmall>
                {{ t('unlisted') }}
              </TypographySubtitleSmall>
              <TypographyCaption>
                {{ t('visibleByLink') }}
              </TypographyCaption>
              <div v-if="props.form.visibility === 'UNLISTED'" class="mt-4">
                <TypographyBodySmall>{{
                  t('maxGuestCount')
                }}</TypographyBodySmall>
                <input
                  class="w-full rounded-lg border border-(--semantic-base-line) px-4 py-2"
                  :value="props.form.inviteeCountMaximum"
                  type="number"
                  @input="updateInviteeCount($event)"
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
import { EventVisibility } from '~~/gql/generated/graphql'
import type { BaseValidation } from '@vuelidate/core'

const { t } = useI18n()

const props = defineProps<{
  form: {
    visibility: null | EventVisibility
    inviteeCountMaximum: string
  }
  validation: BaseValidation
  isVisibilityValid: boolean
}>()

const emit = defineEmits<{
  updateForm: [value: Partial<typeof props.form>]
  next: []
}>()

const updateVisibility = (value: EventVisibility) => {
  emit('updateForm', { visibility: value })
}
const updateInviteeCount = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target) {
    emit('updateForm', { inviteeCountMaximum: target.value })
  }
}
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
