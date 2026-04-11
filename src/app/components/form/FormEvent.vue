<template>
  <div>
    <form novalidate @submit.prevent="form.handleSubmit">
      <div class="flex flex-col gap-4">
        <form.Field v-slot="{ field: nameField }" name="name">
          <Field>
            <FieldLabel for="input-name">{{ t('name') }}</FieldLabel>
            <FieldContent>
              <Input
                id="input-name"
                type="text"
                :placeholder="t('namePlaceholder')"
                :model-value="nameField.state.value"
                :aria-invalid="isFieldInvalid(nameField)"
                @blur="nameField.handleBlur"
                @input="
                  onInputName(
                    ($event.target as HTMLInputElement).value,
                    nameField,
                  )
                "
              />
            </FieldContent>
            <FieldError
              v-if="isFieldInvalid(nameField)"
              :errors="nameField.state.meta.errors"
            />
            <p
              v-if="event && event.name !== nameField.state.value"
              class="text-sm text-yellow-600 dark:text-yellow-400"
            >
              {{ t('validationWarningNameChangeSlug') }}
            </p>
          </Field>
        </form.Field>
        <form.Field
          v-slot="{ field: slugField }"
          name="slug"
          :validators="{
            onBlurAsync: async ({ value: val }) => {
              if (!val) return undefined

              const slugExists = await validateEventSlugFn(val)
              return slugExists
                ? t('validationExistenceNone', { slug: val })
                : undefined
            },
            onBlurAsyncDebounceMs: 300,
          }"
        >
          <FieldError
            v-if="isFieldInvalid(slugField)"
            :errors="normalizeFieldErrors(slugField.state.meta.errors)"
          />
        </form.Field>
        <form.Field v-slot="{ field }" name="visibility">
          <Field>
            <FieldLabel>{{ t('visibility') }}</FieldLabel>
            <FieldContent>
              <AppRadioGroup
                :default-value="field.state.value"
                :items="[
                  {
                    label: t('visibilityPublic'),
                    value: EventVisibility.Public,
                  },
                  {
                    label: t('visibilityPrivate'),
                    value: EventVisibility.Private,
                  },
                  {
                    label: t('visibilityUnlisted'),
                    value: EventVisibility.Unlisted,
                  },
                ]"
                name="visibility"
                @update:model-value="
                  (value) =>
                    field.handleChange(String(value ?? '') as EventVisibility)
                "
              />
            </FieldContent>
            <FieldError
              v-if="isFieldInvalid(field)"
              :errors="field.state.meta.errors"
            />
          </Field>
        </form.Field>
        <form.Field
          v-if="form.getFieldValue('visibility') === EventVisibility.Public"
          v-slot="{ field }"
          name="guestCountMaximum"
        >
          <Field>
            <FieldLabel for="input-invitee-count-maximum">{{
              t('maximumInviteeCount')
            }}</FieldLabel>
            <FieldContent>
              <Input
                id="input-invitee-count-maximum"
                type="number"
                :model-value="field.state.value"
                :aria-invalid="isFieldInvalid(field)"
                @blur="field.handleBlur"
                @input="
                  field.handleChange(($event.target as HTMLInputElement).value)
                "
              />
            </FieldContent>
            <FieldError
              v-if="isFieldInvalid(field)"
              :errors="field.state.meta.errors"
            />
          </Field>
        </form.Field>
        <form.Field v-slot="{ field }" name="start">
          <Field>
            <FieldLabel for="input-start">{{ t('start') }}</FieldLabel>
            <FieldContent>
              <Input
                id="input-start"
                type="text"
                readonly
                :placeholder="dateTimeFormatter(now.toISOString())"
                :model-value="dateTimeFormatter(field.state.value)"
                :aria-invalid="isFieldInvalid(field)"
                @click="store.modals.push({ id: 'ModalDateTimeStart' })"
              />
            </FieldContent>
            <FieldError
              v-if="isFieldInvalid(field)"
              :errors="field.state.meta.errors"
            />
            <p
              v-if="isWarningStartPastShown"
              class="text-sm text-yellow-600 dark:text-yellow-400"
            >
              {{ t('globalValidationNowOrFuture') }}
            </p>
          </Field>
        </form.Field>
        <form.Field v-slot="{ field }" name="end">
          <Field>
            <FieldLabel for="input-end">{{ t('end') }}</FieldLabel>
            <FieldContent>
              <Input
                id="input-end"
                type="text"
                readonly
                :placeholder="dateTimeFormatter(now.toISOString())"
                :model-value="dateTimeFormatter(field.state.value)"
                @click="store.modals.push({ id: 'ModalDateTimeEnd' })"
              />
            </FieldContent>
          </Field>
        </form.Field>
        <Field>
          <FieldLabel>{{ t('attendanceType') }}</FieldLabel>
          <FieldContent>
            <form.Field v-slot="{ field }" name="isInPerson">
              <FormCheckbox
                form-key="is-in-person"
                :value="field.state.value"
                @change="field.handleChange($event)"
              >
                {{ t('isInPerson') }}
              </FormCheckbox>
            </form.Field>
            <form.Field v-slot="{ field }" name="isRemote">
              <FormCheckbox
                form-key="is-remote"
                :value="field.state.value"
                @change="field.handleChange($event)"
              >
                {{ t('isRemote') }}
              </FormCheckbox>
            </form.Field>
          </FieldContent>
        </Field>
        <form.Field v-slot="{ field }" name="url">
          <Field>
            <FieldLabel for="input-url">{{ t('url') }}</FieldLabel>
            <FieldContent>
              <Input
                id="input-url"
                type="url"
                :placeholder="t('globalPlaceholderUrl')"
                :model-value="field.state.value"
                :aria-invalid="isFieldInvalid(field)"
                @blur="field.handleBlur"
                @input="
                  field.handleChange(($event.target as HTMLInputElement).value)
                "
              />
            </FieldContent>
            <FieldError
              v-if="isFieldInvalid(field)"
              :errors="field.state.meta.errors"
            />
          </Field>
        </form.Field>
        <form.Field v-slot="{ field }" name="description">
          <Field>
            <FieldLabel>{{ t('description') }}</FieldLabel>
            <FieldContent>
              <client-only>
                <AppTipTap
                  :value="field.state.value"
                  @input="field.handleChange($event)"
                />
              </client-only>
            </FieldContent>
            <FieldError
              v-if="isFieldInvalid(field)"
              :errors="field.state.meta.errors"
            />
          </Field>
        </form.Field>
        <div class="flex flex-col items-center justify-between">
          <ButtonColored
            :aria-label="
              form.getFieldValue('rowId') ? t('eventUpdate') : t('eventCreate')
            "
            class="w-full"
            type="submit"
          >
            {{
              form.getFieldValue('rowId') ? t('eventUpdate') : t('eventCreate')
            }}
          </ButtonColored>
        </div>
        <CardStateAlert v-if="errorMessages?.length">
          <AppSpanList :span="errorMessages" />
        </CardStateAlert>
      </div>
    </form>
    <Modal id="ModalDateTimeStart">
      <div class="flex justify-center">
        <DatePicker
          :model-value="form.getFieldValue('start')"
          :first-day-of-week="2"
          :is24hr="locale !== 'en'"
          :is-dark="colorMode.value === 'dark'"
          :locale
          :masks="{ input: 'YYYY-MM-DD h:mm A' }"
          :max-date="form.getFieldValue('end')"
          :minute-increment="5"
          mode="dateTime"
          @update:model-value="form.setFieldValue('start', $event as string)"
        />
      </div>
    </Modal>
    <Modal id="ModalDateTimeEnd">
      <div class="flex justify-center">
        <DatePicker
          :model-value="form.getFieldValue('end')"
          :first-day-of-week="2"
          :is24hr="locale !== 'en'"
          :is-dark="colorMode.value === 'dark'"
          :locale
          :masks="{ input: 'YYYY-MM-DD h:mm A' }"
          :min-date="form.getFieldValue('start')"
          :minute-increment="5"
          mode="dateTime"
          @update:model-value="form.setFieldValue('end', $event as string)"
        />
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import type { AnyFieldApi } from '@tanstack/vue-form'
import { z } from 'zod'
import { DatePicker } from 'v-calendar'

import { useCreateEventMutation } from '~~/gql/documents/mutations/event/eventCreate'
import { useUpdateEventByRowIdMutation } from '~~/gql/documents/mutations/event/eventUpdateByRowId'
import { EventVisibility } from '~~/gql/generated/graphql'
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { event = undefined } = defineProps<{
  event?: Pick<
    EventItemFragment,
    | 'name'
    | 'slug'
    | 'visibility'
    | 'guestCountMaximum'
    | 'start'
    | 'end'
    | 'isInPerson'
    | 'isRemote'
    | 'url'
    | 'description'
    | 'rowId'
  >
}>()

const localePath = useLocalePath()
const { locale, t } = useI18n()
const store = useStore()
const colorMode = useColorMode()
const timeZone = useTimeZone()

// data
const now = useNow()

// api data
const createEventMutation = useCreateEventMutation()
const updateEventMutation = useUpdateEventByRowIdMutation()
const api = await useApiData([createEventMutation, updateEventMutation])

// slug validation
const validateEventSlugFn = async (value: string) => {
  if (!value) return false
  if (value === event?.slug) return false

  try {
    const result = await getEventByCreatedByAndSlug({
      $urql: useNuxtApp().$urql,
      createdBy: store.signedInAccountId || '',
      slug: value,
    })
    return !!result
  } catch {
    return true
  }
}

// form
const formSchema = z.object({
  description: z
    .string()
    .max(VALIDATION_EVENT_DESCRIPTION_LENGTH_MAXIMUM)
    .or(z.literal('')),
  end: z.string(),
  guestCountMaximum: z.string(),
  isInPerson: z.boolean(),
  isRemote: z.boolean(),
  name: z.string().min(1).max(VALIDATION_EVENT_NAME_LENGTH_MAXIMUM),
  rowId: z.string(),
  slug: z
    .string()
    .regex(REGEX_SLUG)
    .max(VALIDATION_EVENT_SLUG_LENGTH_MAXIMUM)
    .min(1),
  start: z.string().min(1),
  url: z
    .string()
    .regex(REGEX_URL_HTTPS)
    .max(VALIDATION_URL_LENGTH_MAXIMUM)
    .or(z.literal('')),
  visibility: z.nativeEnum(EventVisibility),
})

const form = useForm({
  defaultValues: {
    description: (event?.description as string) ?? '',
    end: (event?.end as string) ?? '',
    guestCountMaximum: event?.guestCountMaximum
      ? String(event.guestCountMaximum)
      : '',
    isInPerson: event?.isInPerson ?? false,
    isRemote: event?.isRemote ?? false,
    name: (event?.name as string) ?? '',
    rowId: '',
    slug: (event?.slug as string) ?? '',
    start: (event?.start as string) ?? '',
    url: (event?.url as string) ?? '',
    visibility:
      (event?.visibility as EventVisibility) ?? EventVisibility.Private,
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    if (!store.signedInAccountId) throw new Error('Account id is missing!')

    if (value.rowId) {
      // Edit
      const result = await updateEventMutation.executeMutation({
        input: {
          rowId: value.rowId,
          eventPatch: {
            createdBy: store.signedInAccountId,
            description: value.description || null,
            end: value.end || null,
            guestCountMaximum: value.guestCountMaximum
              ? +value.guestCountMaximum
              : null,
            isInPerson: value.isInPerson,
            isRemote: value.isRemote,
            name: value.name || null,
            slug: value.slug || null,
            start: value.start || null,
            url: value.url || null,
            visibility: value.visibility || null,
          },
        },
      })

      if (result.error || !result.data) return

      toast.success(t('eventUpdateSuccess'))
    } else {
      // Add
      const result = await createEventMutation.executeMutation({
        input: {
          event: {
            createdBy: store.signedInAccountId || '',
            description: value.description || null,
            end: value.end || null,
            guestCountMaximum: value.guestCountMaximum
              ? +value.guestCountMaximum
              : null,
            isInPerson: value.isInPerson,
            isRemote: value.isRemote,
            name: value.name || '',
            slug: value.slug || '',
            start: value.start || null,
            url: value.url || null,
            visibility: value.visibility || EventVisibility.Private,
          },
        },
      })

      if (result.error || !result.data) return

      toast.success(t('eventCreateSuccess'))

      if (!store.signedInUsername || !value.slug)
        throw new Error(
          'Aborting navigation: required data for path templating is missing!',
        )

      await navigateTo(
        localePath({
          name: 'event-view-username-event_name',
          params: {
            username: store.signedInUsername,
            event_name: value.slug,
          },
        }),
      )
    }
  },
})

// methods
const dateTimeFormatter = (x?: string) =>
  x
    ? new Date(x).toLocaleString(locale.value, {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone,
      })
    : undefined
const onInputName = async (value: string, nameField: AnyFieldApi) => {
  nameField.handleChange(value)
  await updateSlug()
}
const updateSlug = async () => {
  const slugify = (await import('slugify')).default

  form.setFieldValue(
    'slug',
    slugify(form.getFieldValue('name') ?? '', {
      lower: true,
      strict: true,
    }),
  )
}

// computations
const isWarningStartPastShown = computed(() => {
  const start = form.getFieldValue('start')
  return !!start && new Date(start) < now.value
})
const errorMessages = computed(() =>
  api.value.errors ? getCombinedErrorMessages(api.value.errors) : undefined,
)

// initialization — set rowId for edit mode
if (event?.rowId) {
  form.setFieldValue('rowId', event.rowId)
}
</script>

<style>
@import url('~~/node_modules/v-calendar/dist/style.css');
</style>

<i18n lang="yaml">
de:
  attendanceType: Anwesenheitstyp
  description: Einladungstext
  end: Ende
  eventCreate: Veranstaltung erstellen
  eventCreateSuccess: Veranstaltung erfolgreich erstellt.
  eventUpdate: Änderungen speichern
  eventUpdateSuccess: Aktualisiert
  # stateInfoLocation: Ein Suchbegriff für Google Maps.
  isInPerson: vor Ort
  isRemote: digital
  maximumInviteeCount: Maximale Gästezahl
  name: Name
  namePlaceholder: Willkommensfeier
  # location: Ort
  start: Beginn
  validationExistenceNone: Du hast bereits eine Veranstaltung mit der ID "{slug}" angelegt
  validationWarningNameChangeSlug: Wenn du den Namen änderst, funktionieren bestehende Links zur Veranstaltung möglicherweise nicht mehr
  visibility: Sichtbarkeit
  visibilityPrivate: privat
  visibilityPublic: öffentlich
  visibilityUnlisted: ungelistet
  url: Weblink
en:
  attendanceType: Attendance type
  description: Invitation text
  end: End
  eventCreate: Create event
  eventCreateSuccess: Event created successfully.
  eventUpdate: Save changes
  eventUpdateSuccess: Updated
  # stateInfoLocation: A search phrase for Google Maps.
  isInPerson: in person
  isRemote: remote
  maximumInviteeCount: Maximum guest count
  name: Name
  namePlaceholder: Welcome Party
  # location: Location
  start: Start
  validationExistenceNone: You have already created an event with id "{slug}"
  validationWarningNameChangeSlug: If you change the name, existing links to the event may no longer work
  visibility: Visibility
  visibilityPrivate: private
  visibilityPublic: public
  visibilityUnlisted: unlisted
  url: Weblink
</i18n>
