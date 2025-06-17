<template>
  <div>
    <LayoutTopBar
      v-if="
        store.jwtDecoded?.role === `${SITE_NAME}_account` && step !== 'preview'
      "
    >
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
              :is-primary-settings-valid="isPrimarySettingsValid"
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
              :is-date-location-valid="isDateLocationValid"
              @update-form="updateForm"
              @next="step = 'details'"
            />
          </AppStep>
          <AppStep v-slot="stepProps" :is-active="step === 'details'">
            <EventStepsDetails
              v-bind="stepProps"
              :form="form"
              :validation="v$"
              :is-details-valid="isDetailsValid"
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
              :is-visibility-valid="isVisibilityValid"
              next-label="Preview"
              @update-form="updateForm"
              @next="step = 'preview'"
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
    <AppStep v-slot="stepProps" :is-active="step === 'preview'">
      <EventStepsPreview
        v-bind="stepProps"
        :form="form"
        @next="createEvent"
        @previous="step = 'visibility'"
      />
    </AppStep>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useEventForm } from '~/composables/useEventForm'
import type { EventFormType } from '~/types/events/eventForm'
import Tus from '@uppy/tus'
import Uppy from '@uppy/core'
import { useCreateEventMutation } from '~~/gql/documents/mutations/event/eventCreate'
import { useCreateUploadMutation } from '~~/gql/documents/mutations/upload/uploadCreate'
import { EventVisibility } from '~~/gql/generated/graphql'

const localePath = useLocalePath()
const { t } = useI18n()
const store = useStore()
const TUSD_FILES_URL = useTusdFilesUrl()
const createEventMutation = useCreateEventMutation()
const uploadCreateMutation = useCreateUploadMutation()
const runtimeConfig = useRuntimeConfig()

const {
  form,
  v$,
  isPrimarySettingsValid,
  isDateLocationValid,
  isDetailsValid,
  isVisibilityValid,
} = useEventForm()

const updateForm = (updatedForm: Partial<EventFormType>) => {
  form.value = { ...form.value, ...updatedForm }
}

const { previous, step } = useStepperPage<
  'dateLocation' | 'details' | 'cover' | 'visibility' | 'preview'
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
    preview: {
      previous: 'visibility',
    },
  },
})

const createEvent = async () => {
  try {
    if (!form.value) {
      return
    }

    const result = await createEventMutation.executeMutation({
      input: {
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
    })

    if (result.error || !result.data) {
      return
    }

    if (form.value.images?.length) {
      try {
        for (const file of form.value.images) {
          const uploadResult = await uploadCreateMutation.executeMutation({
            input: {
              createdBy: store.signedInAccountId,
              sizeByte: file.size,
            },
          })
          if (!uploadResult.data?.createUpload?.upload?.id) {
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
              id: uploadResult.data.createUpload.upload.id,
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
          const uploadSuccessResult = await uppy.upload()
          if (
            uploadSuccessResult &&
            uploadSuccessResult.failed &&
            uploadSuccessResult.failed.length > 0
          ) {
            console.error('Image upload failed')
          }
        }
      } catch (uploadError) {
        console.error('Image upload failed:', uploadError)
      }
    }

    showToast({ title: t('eventCreateSuccess') })

    if (!store.signedInUsername || !form.value.slug) {
      console.error()
    }

    await navigateTo(
      localePath({
        name: 'event-view-username-event_name-published',
        params: {
          username: store.signedInUsername,
          event_name: form.value.slug,
        },
      }),
    )
  } catch (error) {
    console.error(error)
  }
}

//TODO: REVIEW LAYOUT ISSUE
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
  eventCreateSuccess: Veranstaltung erfolgreich erstellt.
en:
  anonymousCta: Find it on {siteName}
  anonymousCtaDescription: Are you looking for a loving place for your event?
  back: back
  createEvent: Create Event
  eventCreateSuccess: Event created successfully.
</i18n>
