<template>
  <div class="space-y-6">
    <p class="mb-4 text-sm text-gray-500">
      {{ t('allFieldsRequired') }}
    </p>
    <FormInput
      id-label="event-name"
      is-validatable
      :placeholder="t('namePlaceholder')"
      :title="t('eventTitle')"
      type="text"
      :validation-property="v$.slug"
      :value="v$.name"
      :value-formatter="(val) => val || ''"
      input-class="w-full rounded-lg px-4 py-2 "
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
    <FormInput :title="t('format')" type="dropdown">
      <DropdownMenu v-model:open="formatOpen">
        <DropdownMenuTrigger
          class="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-left text-gray-900 dark:border-gray-200"
        >
          <div class="flex items-center justify-between">
            <span
              :class="{
                'text-gray-500': !props.form.format,
              }"
            >
              {{ props.form.format || t('choose') }}
            </span>
            <ChevronDown
              :class="{ 'rotate-180': formatOpen }"
              class="h-4 w-4 transition-transform"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="top-full left-0 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg"
          align="start"
        >
          <div
            class="border-b border-gray-100 px-4 py-3 text-lg font-medium text-gray-900"
          >
            {{ t('choose') }}
          </div>
          <DropdownMenuItem
            v-for="format in formats"
            :key="format.id"
            class="block w-full px-4 py-2.5 text-gray-600 hover:bg-gray-50"
            @click="selectFormat(format)"
          >
            {{ format.name }}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </FormInput>
    <FormInput :title="t('eventCategory')" type="dropdown">
      <DropdownMenu v-model:open="categoryOpen">
        <DropdownMenuTrigger
          class="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-left text-gray-900 dark:border-gray-200"
        >
          <div class="flex items-center justify-between">
            <span
              :class="{
                'text-gray-500': !props.form.category,
              }"
            >
              {{ props.form.category || t('choose') }}
            </span>
            <ChevronDown
              :class="{ 'rotate-180': categoryOpen }"
              class="h-4 w-4 transition-transform"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="top-full left-0 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg"
          align="start"
        >
          <div
            class="border-b border-gray-100 px-4 py-3 text-lg font-medium text-gray-900"
          >
            {{ t('choose') }}
          </div>
          <DropdownMenuItem
            v-for="category in eventCategory"
            :key="category.id"
            class="block w-full px-4 py-2.5 text-gray-600 hover:bg-gray-50"
            @click="selectCategory(category)"
          >
            {{ category.name }}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </FormInput>
    <FormInput
      class="hidden"
      id-label="input-slug"
      is-required
      :value="v$.slug"
      :title="t('')"
      type="text"
    >
      <template #stateError>
        <FormInputStateError validation-property="formatSlug">
          {{ t('globalValidationFormat') }}
        </FormInputStateError>
        <FormInputStateError
          :form-input="validation.slug"
          validation-property="lengthMax"
        >
          {{ t('globalValidationLength') }}
        </FormInputStateError>
        <FormInputStateError
          :form-input="validation.slug"
          validation-property="required"
        >
          {{ t('globalValidationRequired') }}
        </FormInputStateError>
      </template>
    </FormInput>
  </div>
</template>

<script setup lang="ts">
import type { BaseValidation } from '@vuelidate/core'
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import slugify from 'slugify'
import type { EventItemFragment } from '~~/gql/generated/graphql'
import { useEventForm } from '~/composables/useEventForm'
// import { useEventCategoriesQuery } from '~~/gql/documents/queries/event/eventCategories'

const { form: eventForm, v$, updateFormName } = useEventForm()

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
}>()

const { t } = useI18n()

// const { data } = useEventCategoriesQuery()

// const eventCategory = computed(() => {
//   if (!data.value?.allEventCategories?.edges) return []
//   return data.value.allEventCategories.edges.map(
//     (edge: { node: { category: any } }, index: number) => ({
//       id: index + 1,
//       name: edge.node.category,
//     }),
//   )
// })

const eventCategory = computed(() => [
  { id: 1, name: 'Music' },
  { id: 2, name: 'Arts' },
  { id: 3, name: 'Tech' },
  { id: 4, name: 'Sports' },
  { id: 5, name: 'Education' },
])

const formats = computed(() => [
  { id: 1, name: 'In-person' },
  { id: 2, name: 'remote' },
  { id: 3, name: 'Hybrid' },
])

const categoryOpen = ref(false)
const formatOpen = ref(false)

const selectCategory = (category: { id: number; name: string }) => {
  eventForm.value.category = category.name
  emit('updateForm', { ...props.form, category: category.name })
  categoryOpen.value = false
}

const selectFormat = (format: { id: number; name: string }) => {
  eventForm.value.format = format.name
  emit('updateForm', { ...props.form, format: format.name })
  formatOpen.value = false
}

const onInputName = ($event: string) => {
  v$.value.name.$model = $event
  eventForm.value.name = $event
  eventForm.value.slug = slugify($event, {
    lower: true,
    strict: true,
  })
  v$.value.name.$touch()
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
  choose: Wählen
  eventCategory: Veranstaltungskategorie
  eventTitle: Veranstaltungstitel
  format: Format
  inPerson: In person
  namePlaceholder: Willkommensfeier
  remote: Remote
  validationExistenceNone: Du hast bereits eine Veranstaltung mit der ID "{slug}"
  validationWarningNameChangeSlug: Wenn du den Namen änderst, funktionieren bestehende Links zur Veranstaltung möglicherweise nicht mehr
  # eventTitlePlaceholder: Gib deiner Veranstaltung einen Namen
en:
  allFieldsRequired: All fields are required
  attendanceType: Type
  choose: Choose option
  eventCategory: Genre
  eventTitle: Title
  format: Format
  inPerson: In person
  namePlaceholder: Welcome Party
  remote: Remote
  validationExistenceNone: You have already created an event with id "{slug}"
  validationWarningNameChangeSlug: If you change the name, existing links to the event may no longer work
  # eventTitlePlaceholder: Give your event a name
</i18n>
