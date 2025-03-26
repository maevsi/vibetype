<template>
  <div>
    <LayoutPageTitle :title="t('createEvent')" :is-centered="true" />
    <div v-if="store.jwtDecoded?.role === `${SITE_NAME}_account`">
      <Stepper
        v-model="stepIndex"
        :total-steps="6"
        class="flex min-h-screen flex-col"
      >
        <div class="flex w-full justify-center gap-2 py-4">
          <StepperItem
            v-for="step in 6"
            :key="step"
            v-slot="{ state }"
            class="relative flex items-center"
            :step="step"
          >
            <div
              class="flex h-6 w-6 items-center justify-center rounded-full"
              :class="{
                'bg-(--accent-weak)': state === 'active',
                'bg-(--faint-weak)':
                  state !== 'active' && state !== 'completed',
              }"
            >
              <div
                class="h-3 w-3 rounded-full transition-colors duration-200"
                :class="{
                  'bg-(--accent-strong)':
                    state === 'active' || state === 'completed',
                  'bg-(--faint-weak)':
                    state !== 'active' && state !== 'completed',
                }"
              />
            </div>
          </StepperItem>
        </div>
        <div class="flex-1 md:px-12">
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
            <EventStepsPreview
              v-else-if="stepIndex === 6"
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
              {{
                stepIndex === 5
                  ? t('preview')
                  : stepIndex === 6
                    ? t('saveAndPublishing')
                    : t('next')
              }}
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
            <ButtonColored
              v-if="stepIndex === 6"
              variant="secondary"
              class="w-full"
              :aria-label="t('saveDraft')"
              @click="handleDraftSave"
            >
              {{ t('saveDraft') }}
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
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import { useI18n } from 'vue-i18n'
import { LocalStorageStrategy } from '~/utils/storage/LocalStorageStrategy'
import { useEventForm } from '~/composables/useEventForm'
import type { EventFormType } from '~/types/events/eventForm'
import { useCreateEventMutation } from '~~/gql/documents/mutations/event/eventCreate'
import { useUploadCreateMutation } from '~~/gql/documents/mutations/upload/uploadCreate'
import { EventVisibility } from '~~/gql/generated/graphql'
import type { EventStorageStrategy } from '~/types/events/EventStorageStrategy'

const localePath = useLocalePath()
const TUSD_FILES_URL = useTusdFilesUrl()
const createEventMutation = useCreateEventMutation()
const uploadCreateMutation = useUploadCreateMutation()
const storageStrategy = ref<EventStorageStrategy>(
  LocalStorageStrategy.getInstance(),
)
const runtimeConfig = useRuntimeConfig()

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
  t('previewHeading'),
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
  if ((await isStepValid()) && stepIndex.value < 6) {
    stepIndex.value++
  } else if (stepIndex.value === 6) {
    await handleSubmit()
  } else {
    v$.value.$touch()
  }
}

const handleDraftSave = async () => {
  await storageStrategy.value.saveEvent(form.value)
  await navigateTo(
    localePath({
      name: 'event-view-username',
      params: { username: store.signedInUsername },
    }),
  )
  showToast({ title: t('draftSaved') })
}

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

    const result = await createEventMutation.executeMutation({
      createEventInput: {
        event: {
          createdBy: store.signedInAccountId,
          name: form.value.name,
          slug: form.value.slug,
          description: form.value.description || null,
          isInPerson: form.value.isInPerson,
          isRemote: form.value.isRemote,
          start: form.value.startDate || null,
          end: form.value.endDate || null,
          visibility: form.value.visibility || EventVisibility.Private,
          guestCountMaximum: form.value.inviteeCountMaximum
            ? +form.value.inviteeCountMaximum
            : null,
          url: form.value.website,
        },
      },
    })

    if (result.error || !result.data) {
      throw new Error('Event creation failed')
    }
    if (form.value.images?.length) {
      try {
        for (const file of form.value.images) {
          const uploadResult = await uploadCreateMutation.executeMutation({
            uploadCreateInput: {
              sizeByte: file.size,
            },
          })
          if (!uploadResult.data?.uploadCreate?.upload?.id) {
            throw new Error('Upload creation failed')
          }
          const uppy = new Uppy({
            id: 'event-images',
            debug: !runtimeConfig.public.vio.isInProduction,
            restrictions: {
              maxFileSize: 1048576,
              maxNumberOfFiles: 6,
              minNumberOfFiles: 0,
              allowedFileTypes: ['image/*'],
            },
            meta: {
              maevsiUploadUuid: uploadResult.data.uploadCreate.upload.id,
            },
          })
          uppy.use(Tus, {
            endpoint: TUSD_FILES_URL,
            limit: 6,
            removeFingerprintOnSuccess: true,
          })
          uppy.addFile({
            source: 'event-images',
            name: `/event-images/${file.name}`,
            type: file.type,
            data: file,
          })
          const result = await uppy.upload()
          if (result && result.failed && result.failed.length > 0) {
            console.error()
          }
        }
      } catch (uploadError) {
        console.error('Image upload failed:', uploadError)
      }
    }
    showToast({ title: t('eventCreateSuccess') })
    if (!store.signedInUsername || !form.value.slug) {
      throw new Error(
        'Aborting navigation: required data for path templating is missing!',
      )
    }
    await navigateTo(
      localePath({
        name: 'event-view-username-event_name',
        params: {
          username: store.signedInUsername,
          event_name: form.value.slug,
        },
      }),
    )
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
  draftSaved: Entwurf erfolgreich gespeichert
  eventCreateSuccess: Veranstaltung erfolgreich erstellt.
  eventDetails: Veranstaltungsdetails
  next: Weiter
  preview: Vorschau der Veranstaltung
  previewHeading: Veranstaltungsvorschau
  primarySettings: Grundeinstellungen
  saveAndPublishing: Speichern und zur Veröffentlichung
  saveDraft: Als Entwurf speichern
  skip: Überspringen
  visibility: Sichtbarkeit
en:
  anonymousCta: Find it on {siteName}
  anonymousCtaDescription: Are you looking for a loving place for your event?
  coverImage: Images and Highlights
  createEvent: Create Event
  dateAndLocation: Date and Location
  draftSaved: Draft saved successfully
  eventCreateSuccess: Event created successfully.
  eventDetails: More Details
  next: Next
  preview: Preview
  previewHeading: Event Preview
  primarySettings: Primary Event Details
  saveAndPublishing: Publish
  saveDraft: Save as Draft
  skip: Skip
  visibility: Visibility
</i18n>
