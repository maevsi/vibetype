<template>
  <div class="bg-(--semantic-base-background)">
    <div v-if="store.jwtDecoded?.role === `${SITE_NAME}_account`">
      <Stepper
        v-model="stepIndex"
        :total-steps="6"
        class="flex min-h-screen flex-col"
      >
        <div class="flex w-full justify-center gap-2 pt-6">
          <StepperItem
            v-for="step in 5"
            :key="step"
            v-slot="{ state }"
            class="relative flex items-center"
            :step="step"
          >
            <div
              class="flex h-5 w-5 items-center justify-center rounded-full"
              :class="{
                'bg-[var(--accent-weak)]': state === 'active',
                'bg-[var(--faint-weak)]':
                  state !== 'active' && state !== 'completed',
              }"
            >
              <div
                class="h-3 w-3 rounded-full transition-colors duration-200"
                :class="{
                  'bg-[var(--accent-strong)]':
                    state === 'active' || state === 'completed',
                  'bg-transparent': state !== 'active' && state !== 'completed',
                }"
              />
            </div>
          </StepperItem>
        </div>
        <div class="mt-8 flex-1 md:px-12">
          <h2 class="mb-2 text-2xl font-bold">
            {{ stepTitles[stepIndex - 1] }}
          </h2>
          <div class="space-y-6">
            <EventStepsPrimarySettings
              v-if="stepIndex === 1"
              :form="form"
              :validation="v$"
              @update-form="updateForm"
            />
            <EventStepsDateLocation
              v-else-if="stepIndex === 2"
              :form="form"
              :validation="v$"
              @update-form="updateForm"
            />
            <EventStepsDetails
              v-else-if="stepIndex === 3"
              :form="form"
              :validation="v$"
              @update-form="updateForm"
            />
            <EventStepsCover
              v-else-if="stepIndex === 4"
              :form="form"
              :validation="v$"
              @update-form="updateForm"
            />
            <EventStepsVisibility
              v-else-if="stepIndex === 5"
              :form="form"
              :validation="v$"
              @update-form="updateForm"
            />
          </div>
          <div class="flex flex-col gap-4 py-4">
            <ButtonColored
              variant="primary"
              :disabled="disableButton"
              class="w-full"
              :aria-label="stepIndex === 5 ? t('preview') : t('next')"
              :type="stepIndex === 6 ? 'submit' : 'button'"
              @click="handleNext"
            >
              {{ stepIndex === 5 ? t('preview') : t('next') }}
            </ButtonColored>
            <ButtonColored
              v-if="stepIndex === 4"
              :is-disabled="isStepValid"
              variant="secondary"
              class="w-full"
              :aria-label="t('skip')"
              @click="handleNext"
            >
              {{ t('skip') }}
            </ButtonColored>
          </div>
        </div>
      </Stepper>
    </div>
    <LayoutCallToAction
      v-else
      :call-to-action="t('anonymousCta')"
      :call-to-action-description="t('anonymousCtaDescription')"
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useEventForm } from '~/composables/useEventForm'
import type { EventFormType } from '~/types/events/eventForm'
import { useHeaderTitle } from '~/composables/useHeaderTitle'

const localePath = useLocalePath()
const { setTitle } = useHeaderTitle()
const { t } = useI18n()
const store = useStore()
const stepIndex = ref(1)
const disableButton = ref(true)

const {
  form,
  v$,
  isStepOneValid,
  isStepTwoValid,
  isStepThreeValid,
  isStepFiveValid,
} = useEventForm()

const stepTitles = [
  t('primarySettings'),
  t('dateAndLocation'),
  t('eventDetails'),
  t('coverImage'),
  t('visibility'),
]

const isStepValid = async () => {
  switch (stepIndex.value) {
    case 1:
      return await isStepOneValid()
    case 2:
      return await isStepTwoValid()
    case 3:
      return await isStepThreeValid()
    case 5:
      return await isStepFiveValid()
    default:
      return true
  }
}

watch(
  [stepIndex, form],
  async () => {
    disableButton.value = !(await isStepValid())
  },
  { immediate: true, deep: true },
)

const handleNext = async () => {
  if ((await isStepValid()) && stepIndex.value < 5) {
    stepIndex.value++
  } else if (stepIndex.value === 5) {
    await handleSubmit()
  } else {
    v$.value.$touch()
  }
}

onMounted(() => {
  setTitle(t('createEvent'))
})

onBeforeUnmount(() => {
  setTitle('')
})

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
    console.error('Form submission error:', error)
  }
}
</script>

<i18n lang="yaml">
de:
  anonymousCta: Finde ihn auf {siteName}
  anonymousCtaDescription: Du suchst einen liebevollen Ort für deine Veranstaltung?
  coverImage: Titelbild
  createEvent: Veranstaltung erstellen
  dateAndLocation: Datum und Ort
  eventDetails: Veranstaltungsdetails
  next: Weiter
  preview: Vorschau der Veranstaltung
  primarySettings: Grundeinstellungen
  skip: Überspringen
  visibility: Sichtbarkeit
en:
  anonymousCta: Find it on {siteName}
  anonymousCtaDescription: Are you looking for a loving place for your event?
  coverImage: Images and Highlights
  createEvent: Create Event
  dateAndLocation: Date and Location
  eventDetails: More Details
  next: Next
  preview: Preview
  primarySettings: Primary Event Details
  skip: Skip
  visibility: Visibility
</i18n>
