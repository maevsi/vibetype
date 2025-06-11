<template>
  <div class="flex flex-col gap-6">
    <AppStepIndex :count="5" :index="1" />
    <TypographyH3>{{ t('title') }}</TypographyH3>
    <TypographySubtitleSmall class="text-(--semantic-base-text-secondary)">
      {{ t('allFieldsRequired') }}
    </TypographySubtitleSmall>
    <FormInput
      id-label="event-name"
      is-validatable
      :placeholder="t('namePlaceholder')"
      :title="t('eventTitle')"
      type="text"
      :validation-property="v$.slug"
      :value="v$.name"
      input-class="w-full rounded-lg px-4 py-2"
      @input="onInputName($event)"
    >
      <template #stateWarning>
        <FormInputStateWarning v-if="event && event.name !== form.name">
          {{ t('validationWarningNameChangeSlug') }}
        </FormInputStateWarning>
      </template>
      <template #stateError>
        <FormInputStateError
          :form-input="props.validation.slug"
          validation-property="lengthMax"
        >
          {{ t('validationExistenceNone', { slug: v$.slug?.$model }) }}
        </FormInputStateError>
        <FormInputStateError
          :form-input="v$.name"
          validation-property="lengthMax"
        >
          {{ t('globalValidationLength') }}
        </FormInputStateError>
        <FormInputStateError
          :form-input="props.validation.slug"
          validation-property="lengthMax"
        >
          {{ t('globalValidationRequired') }}
        </FormInputStateError>
      </template>
    </FormInput>
    <FormInput :title="t('attendanceType')" type="checkbox">
      <div class="flex w-3/4 flex-row justify-between">
        <FormCheckbox
          form-key="is-in-person"
          :value="form.isInPerson"
          @change="onAttendanceTypeChange('isInPerson', $event)"
        >
          {{ t('inPerson') }}
        </FormCheckbox>
        <FormCheckbox
          form-key="is-remote"
          :value="form.isRemote"
          @change="onAttendanceTypeChange('isRemote', $event)"
        >
          {{ t('remote') }}
        </FormCheckbox>
      </div>
    </FormInput>
    <FormDropDown :title="t('genre')">
      <template #display>
        {{ props.form.category || t('choose') }}
      </template>
      <DropdownMenuItem
        v-for="category in eventCategory"
        :key="category.id"
        @click="selectCategory(category)"
      >
        {{ category.name }}
      </DropdownMenuItem>
    </FormDropDown>
    <FormDropDown :title="t('format')">
      <template #display>
        {{ props.form.format || t('choose') }}
      </template>
      <DropdownMenuItem
        v-for="format in formats"
        :key="format.id"
        @click="selectFormat(format)"
      >
        {{ format.name }}
      </DropdownMenuItem>
    </FormDropDown>
    <ButtonColored
      :disabled="!isPrimarySettingsValid"
      variant="primary"
      class="w-full"
      :aria-label="t('button')"
      @click="emit('next')"
    >
      {{ t('button') }}
    </ButtonColored>
  </div>
</template>

<script setup lang="ts">
import type { BaseValidation } from '@vuelidate/core'
import slugify from 'slugify'
import FormDropDown from '~/components/form/FormDropDown.vue'
import type { EventItemFragment } from '~~/gql/generated/graphql'
import { useAllEventCategoriesQuery } from '~~/gql/documents/queries/event/eventCategoriesAll'
import { getEventCategoryItem } from '~~/gql/documents/fragments/eventCategoryItem'
import { useAllEventFormatsQuery } from '~~/gql/documents/queries/event/eventFormatsAll'
import { getEventFormatItem } from '~~/gql/documents/fragments/eventFormatItem'

const {
  form: eventForm,
  v$,
  updateFormName,
  isPrimarySettingsValid,
} = useEventForm()

const props = defineProps<{
  form: {
    name: string
    slug: string
    isInPerson: boolean
    isRemote: boolean
    category: string
    format: string
  }
  validation: BaseValidation
  event?: Pick<EventItemFragment, 'name' | 'slug'>
}>()

const emit = defineEmits<{
  updateForm: [value: Partial<typeof props.form>]
  next: []
}>()

const { t } = useI18n()

const { data: categoriesData } = useAllEventCategoriesQuery()
const { data: formatsData } = useAllEventFormatsQuery()

const eventCategory = computed(
  () =>
    categoriesData.value?.allEventCategories?.nodes
      ?.map(getEventCategoryItem)
      .filter(isNeitherNullNorUndefined) || [],
)

const formats = computed(
  () =>
    formatsData.value?.allEventFormats?.nodes
      ?.map(getEventFormatItem)
      .filter(isNeitherNullNorUndefined) || [],
)

const selectCategory = (category: { id: number; name: string }) => {
  eventForm.value.category = category.name
  emit('updateForm', { ...props.form, category: category.name })
}

const selectFormat = (format: { id: number; name: string }) => {
  eventForm.value.format = format.name
  emit('updateForm', { ...props.form, format: format.name })
}

const onInputName = async ($event: string) => {
  v$.value.name.$model = $event
  v$.value.slug.$model = slugify($event, {
    lower: true,
    strict: true,
  })
  eventForm.value.name = $event
  eventForm.value.slug = slugify($event, {
    lower: true,
    strict: true,
  })

  emit('updateForm', {
    name: eventForm.value.name,
    slug: eventForm.value.slug,
  })
  updateFormName($event)
}

const onAttendanceTypeChange = (
  field: 'isInPerson' | 'isRemote',
  value: boolean,
) => {
  eventForm.value[field] = value

  if (field === 'isInPerson') {
    eventForm.value.isRemote = !value
  }
  if (field === 'isRemote') {
    eventForm.value.isInPerson = !value
  }

  emit('updateForm', {
    isInPerson: eventForm.value.isInPerson,
    isRemote: eventForm.value.isRemote,
  })
}
</script>

<i18n lang="yaml">
de:
  allFieldsRequired: Alle Felder sind erforderlich
  attendanceType: Anwesenheitstyp
  button: Weiter
  choose: Wählen
  genre: Veranstaltungskategorie
  eventTitle: Veranstaltungstitel
  format: Format
  inPerson: In person
  namePlaceholder: Willkommensfeier
  remote: Remote
  title: Grundlegende Event-Details
  validationExistenceNone: Du hast bereits eine Veranstaltung mit der ID "{slug}"
  validationWarningNameChangeSlug: Wenn du den Namen änderst, funktionieren bestehende Links zur Veranstaltung möglicherweise nicht mehr
  # eventTitlePlaceholder: Gib deiner Veranstaltung einen Namen
en:
  allFieldsRequired: All fields are required
  attendanceType: Type
  button: Next
  choose: Choose option
  genre: Genre
  eventTitle: Title
  format: Format
  inPerson: In person
  namePlaceholder: Welcome Party
  remote: Remote
  title: Primary event details
  validationExistenceNone: You have already created an event with id "{slug}"
  validationWarningNameChangeSlug: If you change the name, existing links to the event may no longer work
  # eventTitlePlaceholder: Give your event a name
</i18n>
