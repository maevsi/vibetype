<template>
  <div>
    <LayoutTopBar v-if="store.jwtDecoded?.role === `${SITE_NAME}_account`">
      <span> {{ t('createEvent') }} </span>
      <template #back>
        <ButtonIcon
          v-if="previous"
          :aria-label="t('back')"
          @click="step = previous"
        >
          <AppIconBack />
        </ButtonIcon>
        <ButtonIconBackRoute v-else :aria-label="t('back')">
          <AppIconBack />
        </ButtonIconBackRoute>
      </template>
    </LayoutTopBar>
    <div class="px-4">
      <div v-if="store.jwtDecoded?.role === `${SITE_NAME}_account`">
        <div class="mt-8 flex-1 md:px-12">
          <AppStep v-slot="stepProps" :is-active="step === 'default'">
            <EventStepsPrimarySettings
              v-bind="stepProps"
              :form="form"
              :validation="v$"
              :show-back="false"
              @update-form="updateForm"
              @next="step = 'dateLocation'"
            />
          </AppStep>
          <AppStep v-slot="stepProps" :is-active="step === 'dateLocation'">
            <EventStepsDateLocation
              v-bind="stepProps"
              :form="form"
              :validation="v$"
              @update-form="updateForm"
              @next="step = 'details'"
            />
          </AppStep>
          <AppStep v-slot="stepProps" :is-active="step === 'details'">
            <EventStepsDetails
              v-bind="stepProps"
              :form="form"
              :validation="v$"
              @update-form="updateForm"
              @next="step = 'cover'"
            />
          </AppStep>
          <AppStep v-slot="stepProps" :is-active="step === 'cover'">
            <EventStepsCover
              v-bind="stepProps"
              :form="form"
              :validation="v$"
              :show-skip="true"
              @update-form="updateForm"
              @next="step = 'visibility'"
            />
          </AppStep>
          <AppStep v-slot="stepProps" :is-active="step === 'visibility'">
            <EventStepsVisibility
              v-bind="stepProps"
              :form="form"
              :validation="v$"
              next-label="Preview"
              @update-form="updateForm"
              @next="handleSubmit"
            />
          </AppStep>
        </div>
      </div>
      <LayoutCallToAction
        v-else
        :call-to-action="t('anonymousCta')"
        :call-to-action-description="t('anonymousCtaDescription')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useEventForm } from '~/composables/useEventForm'
import type { EventFormType } from '~/types/events/eventForm'

const localePath = useLocalePath()
const { t } = useI18n()
const store = useStore()

const { form, v$ } = useEventForm()

const updateForm = (updatedForm: Partial<EventFormType>) => {
  form.value = { ...form.value, ...updatedForm }
}

const handleSubmit = async () => {
  try {
    const isValid = await v$.value.$validate()
    if (!isValid) {
      v$.value.$touch()
      return
    }
    if (!store.signedInAccountId) throw new Error('Account id is missing!')
    store.setPreviewForm(form.value)
    await navigateTo(localePath({ name: 'event-preview' }))
  } catch (error) {
    console.log(error)
  }
}

const { previous, step } = useStepperPage<
  'dateLocation' | 'details' | 'cover' | 'visibility'
>({
  steps: {
    default: {
      title: t('createEvent'),
    },
    dateLocation: {
      previous: 'default',
    },
    details: {
      previous: 'dateLocation',
    },
    cover: {
      previous: 'details',
    },
    visibility: {
      previous: 'cover',
    },
  },
})

onMounted(() => {
  if (store.jwtDecoded?.role === `${SITE_NAME}_account`) {
    setPageLayout('plain')
  }
})
</script>

<i18n lang="yaml">
de:
  anonymousCta: Finde ihn auf {siteName}
  anonymousCtaDescription: Du suchst einen liebevollen Ort für deine Veranstaltung?
  back: zurück
  createEvent: Veranstaltung erstellen
en:
  anonymousCta: Find it on {siteName}
  anonymousCtaDescription: Are you looking for a loving place for your event?
  back: back
  createEvent: Create Event
</i18n>
