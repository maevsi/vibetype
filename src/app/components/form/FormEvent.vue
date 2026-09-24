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
                :aria-invalid="isFieldInvalid(nameField)"
                :model-value="nameField.state.value"
                :placeholder="t('namePlaceholder')"
                type="text"
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
            onChangeAsync: async ({ value: val }) => {
              if (!val) return undefined

              const slugExists = await validateEventSlugFn(val)
              return slugExists
                ? t('validationExistenceNone', { slug: val })
                : undefined
            },
            onChangeAsyncDebounceMs: 300,
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
        <form.Field v-slot="{ field }" name="categoryIds">
          <Field>
            <FieldLabel>{{ t('categories') }}</FieldLabel>
            <FieldContent>
              <FormEventCategorySelect
                :model-value="field.state.value"
                @update:model-value="field.handleChange($event)"
              />
            </FieldContent>
          </Field>
        </form.Field>
        <form.Field v-slot="{ field }" name="formatIds">
          <Field>
            <FieldLabel>{{ t('formats') }}</FieldLabel>
            <FieldContent>
              <FormEventFormatSelect
                :model-value="field.state.value"
                @update:model-value="field.handleChange($event)"
              />
            </FieldContent>
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
                :aria-invalid="isFieldInvalid(field)"
                :model-value="field.state.value"
                type="number"
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
          <Field class="flex flex-col">
            <FieldLabel for="button-start">{{ t('start') }}</FieldLabel>
            <FieldContent>
              <Popover>
                <PopoverTrigger as-child>
                  <Button
                    id="button-start"
                    :aria-invalid="isFieldInvalid(field)"
                    :class="
                      cn(
                        'justify-start text-start font-normal',
                        !field.state.value && 'text-muted-foreground',
                      )
                    "
                    variant="outline"
                  >
                    {{
                      dateTimeFormatter(field.state.value) ??
                      dateTimeFormatter(now.toISOString())
                    }}
                  </Button>
                </PopoverTrigger>
                <PopoverContent class="w-auto p-0">
                  <div
                    class="flex max-h-(--reka-popover-content-available-height) flex-col items-center gap-3 overflow-y-auto p-3"
                  >
                    <AppCalendar
                      :max-value="
                        form.getFieldValue('end')
                          ? isoToCalendarDateTime(form.getFieldValue('end'))
                          : undefined
                      "
                      :model-value="isoToCalendarDateTime(field.state.value)"
                      :week-starts-on="1"
                      @update:model-value="
                        (date) => applyDateSelection(field, date)
                      "
                    />
                    <AppTimeField
                      :locale
                      :model-value="isoToCalendarDateTime(field.state.value)"
                      :placeholder="
                        isoToCalendarDateTime(field.state.value) ??
                        nowCalendarDateTime
                      "
                      :step="{ minute: 5 }"
                      step-snapping
                      @update:model-value="
                        (time) => applyTimeSelection(field, time)
                      "
                    />
                  </div>
                </PopoverContent>
              </Popover>
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
          <Field class="flex flex-col">
            <FieldLabel for="button-end">{{ t('end') }}</FieldLabel>
            <FieldContent>
              <Popover>
                <PopoverTrigger as-child>
                  <Button
                    id="button-end"
                    :class="
                      cn(
                        'justify-start text-start font-normal',
                        !field.state.value && 'text-muted-foreground',
                      )
                    "
                    variant="outline"
                  >
                    {{
                      dateTimeFormatter(field.state.value) ??
                      dateTimeFormatter(now.toISOString())
                    }}
                  </Button>
                </PopoverTrigger>
                <PopoverContent class="w-auto p-0">
                  <div
                    class="flex max-h-(--reka-popover-content-available-height) flex-col items-center gap-3 overflow-y-auto p-3"
                  >
                    <AppCalendar
                      :min-value="
                        form.getFieldValue('start')
                          ? isoToCalendarDateTime(form.getFieldValue('start'))
                          : undefined
                      "
                      :model-value="isoToCalendarDateTime(field.state.value)"
                      :week-starts-on="1"
                      @update:model-value="
                        (date) => applyDateSelection(field, date)
                      "
                    />
                    <AppTimeField
                      :locale
                      :model-value="isoToCalendarDateTime(field.state.value)"
                      :placeholder="
                        isoToCalendarDateTime(field.state.value) ??
                        nowCalendarDateTime
                      "
                      :step="{ minute: 5 }"
                      step-snapping
                      @update:model-value="
                        (time) => applyTimeSelection(field, time)
                      "
                    />
                  </div>
                </PopoverContent>
              </Popover>
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
        <form.Field v-slot="{ field: isInPersonField }" name="isInPerson">
          <template v-if="isInPersonField.state.value">
            <form.Field
              v-slot="{ field: locationNameField }"
              name="locationName"
            >
              <Field>
                <FieldLabel for="input-location-name">{{
                  t('location')
                }}</FieldLabel>
                <FieldContent>
                  <Input
                    id="input-location-name"
                    :aria-invalid="isFieldInvalid(locationNameField)"
                    :model-value="locationNameField.state.value"
                    :placeholder="t('locationPlaceholder')"
                    type="text"
                    @blur="locationNameField.handleBlur"
                    @input="
                      locationNameField.handleChange(
                        ($event.target as HTMLInputElement).value,
                      )
                    "
                  />
                </FieldContent>
                <FieldDescription>{{ t('locationHint') }}</FieldDescription>
                <FieldError
                  v-if="isFieldInvalid(locationNameField)"
                  :errors="locationNameField.state.meta.errors"
                />
              </Field>
            </form.Field>
            <AppFeature feature="map">
              <div class="relative isolate">
                <LazyAppMap
                  ref="map"
                  class="h-64"
                  geocoder
                  :position-initial="locationPositionInitial"
                  @geocode="onGeocode"
                />
                <AppIconMapPinSolid
                  class="pointer-events-none absolute top-1/2 left-1/2 z-400 size-8 -translate-x-1/2 -translate-y-full text-(--critic-red-middle)"
                />
              </div>
            </AppFeature>
          </template>
        </form.Field>
        <form.Field v-slot="{ field }" name="url">
          <Field>
            <FieldLabel for="input-url">{{ t('url') }}</FieldLabel>
            <FieldContent>
              <Input
                id="input-url"
                :aria-invalid="isFieldInvalid(field)"
                :model-value="field.state.value"
                :placeholder="t('globalPlaceholderUrl')"
                type="url"
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
                <LazyAppTipTap
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
            :loading="api.isFetching"
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
  </div>
</template>

<script setup lang="ts">
import type { DateValue, TimeValue } from 'reka-ui'
import {
  fromDate,
  getLocalTimeZone,
  parseAbsoluteToLocal,
  toCalendarDateTime,
} from '@internationalized/date'
import { toDate } from 'reka-ui/date'
import { useForm } from '@tanstack/vue-form'
import type { AnyFieldApi } from '@tanstack/vue-form'
import { useMutation } from '@urql/vue'
import { z } from 'zod'

import { cn } from '@/utils/shadcn'

import { graphql } from '~~/gql/generated'
import { EventVisibility } from '~~/gql/generated/graphcache'
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
  > & {
    addressByAddressId?: {
      location?: { latitude: number; longitude: number } | null
      name?: string | null
      rowId?: string | null
    } | null
    eventCategoryMappingsByEventId?: {
      nodes: readonly { categoryId: string }[]
    } | null
    eventFormatMappingsByEventId?: {
      nodes: readonly { formatId: string }[]
    } | null
  }
}>()

const localePath = useLocalePath()
const { locale, t } = useI18n()
const store = useStore()
const timeZone = useTimeZone()

// data
const now = useNow()

// api data
const createEventMutation = useMutation(
  graphql(`
    mutation CreateEvent($input: CreateEventInput!) {
      createEvent(input: $input) {
        event {
          id
          rowId
        }
      }
    }
  `),
)
const updateEventMutation = useMutation(
  graphql(`
    mutation updateEventByRowId($input: UpdateEventByRowIdInput!) {
      updateEventByRowId(input: $input) {
        event {
          id
        }
      }
    }
  `),
)
const createAddressMutation = useMutation(
  graphql(`
    mutation CreateAddress($input: CreateAddressInput!) {
      createAddress(input: $input) {
        address {
          rowId
        }
      }
    }
  `),
)
const updateAddressByRowIdMutation = useMutation(
  graphql(`
    mutation UpdateAddressByRowId($input: UpdateAddressByRowIdInput!) {
      updateAddressByRowId(input: $input) {
        address {
          rowId
        }
      }
    }
  `),
)
const createEventCategoryMappingMutation = useMutation(
  graphql(`
    mutation CreateEventCategoryMapping(
      $input: CreateEventCategoryMappingInput!
    ) {
      createEventCategoryMapping(input: $input) {
        eventCategoryMapping {
          categoryId
          eventByEventId {
            id
          }
          id
        }
      }
    }
  `),
)
const deleteEventCategoryMappingByEventIdAndCategoryIdMutation = useMutation(
  graphql(`
    mutation DeleteEventCategoryMappingByEventIdAndCategoryId(
      $input: DeleteEventCategoryMappingByEventIdAndCategoryIdInput!
    ) {
      deleteEventCategoryMappingByEventIdAndCategoryId(input: $input) {
        deletedEventCategoryMappingId
        eventCategoryMapping {
          eventByEventId {
            id
          }
        }
      }
    }
  `),
)
const createEventFormatMappingMutation = useMutation(
  graphql(`
    mutation CreateEventFormatMapping($input: CreateEventFormatMappingInput!) {
      createEventFormatMapping(input: $input) {
        eventFormatMapping {
          eventByEventId {
            id
          }
          formatId
          id
        }
      }
    }
  `),
)
const deleteEventFormatMappingByEventIdAndFormatIdMutation = useMutation(
  graphql(`
    mutation DeleteEventFormatMappingByEventIdAndFormatId(
      $input: DeleteEventFormatMappingByEventIdAndFormatIdInput!
    ) {
      deleteEventFormatMappingByEventIdAndFormatId(input: $input) {
        deletedEventFormatMappingId
        eventFormatMapping {
          eventByEventId {
            id
          }
        }
      }
    }
  `),
)
const api = await useApiData([
  createAddressMutation,
  createEventMutation,
  updateAddressByRowIdMutation,
  updateEventMutation,
  createEventCategoryMappingMutation,
  deleteEventCategoryMappingByEventIdAndCategoryIdMutation,
  createEventFormatMappingMutation,
  deleteEventFormatMappingByEventIdAndFormatIdMutation,
])

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
  categoryIds: z.array(z.string()),
  description: SCHEMA_EVENT_DESCRIPTION_OPTIONAL,
  end: z.string(),
  formatIds: z.array(z.string()),
  guestCountMaximum: z.string(),
  isInPerson: z.boolean(),
  isRemote: z.boolean(),
  locationName: SCHEMA_EVENT_LOCATION_NAME_OPTIONAL,
  name: SCHEMA_EVENT_NAME_REQUIRED,
  rowId: z.string(),
  slug: SCHEMA_EVENT_SLUG_REQUIRED,
  start: z.string().min(1),
  url: SCHEMA_URL_HTTPS_OPTIONAL,
  visibility: z.enum(EventVisibility),
})

const syncEventCategoryMappings = async ({
  eventId,
  originalCategoryIds,
  selectedCategoryIds,
}: {
  eventId: string
  originalCategoryIds: string[]
  selectedCategoryIds: string[]
}) => {
  const results = await Promise.all([
    ...selectedCategoryIds
      .filter((categoryId) => !originalCategoryIds.includes(categoryId))
      .map((categoryId) =>
        createEventCategoryMappingMutation.executeMutation({
          input: { eventCategoryMapping: { categoryId, eventId } },
        }),
      ),
    ...originalCategoryIds
      .filter((categoryId) => !selectedCategoryIds.includes(categoryId))
      .map((categoryId) =>
        deleteEventCategoryMappingByEventIdAndCategoryIdMutation.executeMutation(
          { input: { categoryId, eventId } },
        ),
      ),
  ])

  return results.every((result) => !result.error)
}
const syncEventFormatMappings = async ({
  eventId,
  originalFormatIds,
  selectedFormatIds,
}: {
  eventId: string
  originalFormatIds: string[]
  selectedFormatIds: string[]
}) => {
  const results = await Promise.all([
    ...selectedFormatIds
      .filter((formatId) => !originalFormatIds.includes(formatId))
      .map((formatId) =>
        createEventFormatMappingMutation.executeMutation({
          input: { eventFormatMapping: { eventId, formatId } },
        }),
      ),
    ...originalFormatIds
      .filter((formatId) => !selectedFormatIds.includes(formatId))
      .map((formatId) =>
        deleteEventFormatMappingByEventIdAndFormatIdMutation.executeMutation({
          input: { eventId, formatId },
        }),
      ),
  ])

  return results.every((result) => !result.error)
}

// location
const addressRowIdOriginal = event?.addressByAddressId?.rowId
const locationPositionInitial = event?.addressByAddressId?.location
  ? {
      latitude: event.addressByAddressId.location.latitude,
      longitude: event.addressByAddressId.location.longitude,
      zoomLevel: 15,
    }
  : undefined
const templateMap = useTemplateRef('map')
const onGeocode = (name: string) => {
  form.setFieldValue('locationName', name)
}
const syncAddress = async (
  locationName: string,
): Promise<string | null | undefined> => {
  const trimmedLocationName = locationName.trim()

  if (!form.getFieldValue('isInPerson') || !trimmedLocationName) return null

  const mapCenter = templateMap.value?.mapCenter
  if (!mapCenter) return addressRowIdOriginal ?? null

  const location = {
    type: 'Point' as const,
    coordinates: [mapCenter.lng, mapCenter.lat],
  }

  if (addressRowIdOriginal) {
    const result = await updateAddressByRowIdMutation.executeMutation({
      input: {
        addressPatch: { location, name: trimmedLocationName },
        rowId: addressRowIdOriginal,
      },
    })
    return getResultData(result) ? addressRowIdOriginal : undefined
  }

  const result = await createAddressMutation.executeMutation({
    input: {
      address: {
        createdBy: store.signedInAccountId || '',
        location,
        name: trimmedLocationName,
      },
    },
  })
  return getResultData(result)?.createAddress?.address?.rowId
}

const form = useForm({
  defaultValues: {
    categoryIds:
      event?.eventCategoryMappingsByEventId?.nodes
        .filter(isNeitherNullNorUndefined)
        .map((node) => node.categoryId) ?? [],
    description: (event?.description as string) ?? '',
    end: (event?.end as string) ?? '',
    formatIds:
      event?.eventFormatMappingsByEventId?.nodes
        .filter(isNeitherNullNorUndefined)
        .map((node) => node.formatId) ?? [],
    guestCountMaximum: event?.guestCountMaximum
      ? String(event.guestCountMaximum)
      : '',
    isInPerson: event?.isInPerson ?? false,
    isRemote: event?.isRemote ?? false,
    locationName: event?.addressByAddressId?.name ?? '',
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
      const addressId = await syncAddress(value.locationName)
      if (addressId === undefined) return

      const result = await updateEventMutation.executeMutation({
        input: {
          rowId: value.rowId,
          eventPatch: {
            addressId,
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

      if (!getResultData(result)) return

      const categoryMappingsSynced = await syncEventCategoryMappings({
        eventId: value.rowId,
        originalCategoryIds:
          event?.eventCategoryMappingsByEventId?.nodes
            .filter(isNeitherNullNorUndefined)
            .map((node) => node.categoryId) ?? [],
        selectedCategoryIds: value.categoryIds,
      })
      const formatMappingsSynced = await syncEventFormatMappings({
        eventId: value.rowId,
        originalFormatIds:
          event?.eventFormatMappingsByEventId?.nodes
            .filter(isNeitherNullNorUndefined)
            .map((node) => node.formatId) ?? [],
        selectedFormatIds: value.formatIds,
      })
      if (!categoryMappingsSynced || !formatMappingsSynced) return

      toast.success(t('eventUpdateSuccess'))
    } else {
      // Add
      const addressId = await syncAddress(value.locationName)
      if (addressId === undefined) return

      const result = await createEventMutation.executeMutation({
        input: {
          event: {
            addressId,
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
            start: value.start || '',
            url: value.url || null,
            visibility: value.visibility || EventVisibility.Private,
          },
        },
      })

      const data = getResultData(result)
      if (!data) return

      const eventId = data.createEvent?.event?.rowId
      if (eventId) {
        const categoryMappingsSynced = await syncEventCategoryMappings({
          eventId,
          originalCategoryIds: [],
          selectedCategoryIds: value.categoryIds,
        })
        const formatMappingsSynced = await syncEventFormatMappings({
          eventId,
          originalFormatIds: [],
          selectedFormatIds: value.formatIds,
        })
        if (!categoryMappingsSynced || !formatMappingsSynced) return
      }

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
const isoToCalendarDateTime = (value?: string) =>
  value ? toCalendarDateTime(parseAbsoluteToLocal(value)) : undefined
const applyDateSelection = (field: AnyFieldApi, date?: DateValue) => {
  if (!date) {
    field.handleChange('')
    return
  }

  const time =
    isoToCalendarDateTime(field.state.value) ?? nowCalendarDateTime.value
  field.handleChange(
    toDate(toCalendarDateTime(date, time), getLocalTimeZone()).toISOString(),
  )
}
const applyTimeSelection = (field: AnyFieldApi, time?: TimeValue) => {
  if (!time) {
    field.handleChange('')
    return
  }

  const date =
    isoToCalendarDateTime(field.state.value) ?? nowCalendarDateTime.value
  field.handleChange(
    toDate(toCalendarDateTime(date, time), getLocalTimeZone()).toISOString(),
  )
}
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
const nowCalendarDateTime = computed(() =>
  toCalendarDateTime(fromDate(now.value, getLocalTimeZone())),
)
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

<i18n lang="yaml">
de:
  attendanceType: Anwesenheitstyp
  categories: Kategorien
  description: Einladungstext
  end: Ende
  eventCreate: Veranstaltung erstellen
  eventCreateSuccess: Veranstaltung erfolgreich erstellt.
  eventUpdate: Änderungen speichern
  eventUpdateSuccess: Aktualisiert
  formats: Formate
  isInPerson: vor Ort
  isRemote: digital
  location: Ort
  locationHint: Suche nach einer Adresse oder verschiebe die Karte, um den Ort zu bestimmen.
  locationPlaceholder: Adresse oder Ort suchen
  maximumInviteeCount: Maximale Gästezahl
  name: Name
  namePlaceholder: Willkommensfeier
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
  categories: Categories
  description: Invitation text
  end: End
  eventCreate: Create event
  eventCreateSuccess: Event created successfully.
  eventUpdate: Save changes
  eventUpdateSuccess: Updated
  formats: Formats
  isInPerson: in person
  isRemote: remote
  location: Location
  locationHint: Search for an address or move the map to set the location.
  locationPlaceholder: Search for an address or place
  maximumInviteeCount: Maximum guest count
  name: Name
  namePlaceholder: Welcome Party
  start: Start
  validationExistenceNone: You have already created an event with id "{slug}"
  validationWarningNameChangeSlug: If you change the name, existing links to the event may no longer work
  visibility: Visibility
  visibilityPrivate: private
  visibilityPublic: public
  visibilityUnlisted: unlisted
  url: Weblink
</i18n>
