<template>
  <div class="mt-8 space-y-4">
    <div class="w-full space-y-2">
      <h2 class="mb-4 text-xl dark:text-[--semantic-base-text-primary]">
        {{ t('startDateTime') }}
      </h2>
      <EventTimePicker
        v-model="startDate"
        :placeholder="t('startDate')"
        :initial-time="'10:00'"
        class="w-full"
        @update="selectStartDateTime"
      />
      <h2 class="mb-4 text-xl dark:text-[--semantic-base-text-primary]">
        {{ t('endDateTime') }}
      </h2>
      <EventTimePicker
        v-model="endDate"
        :placeholder="t('endDate')"
        :initial-time="'10:00'"
        class="w-full"
        @update="selectEndDateTime"
      />
    </div>
    <div>
      <div class="flex items-center space-x-2">
        <input
          v-model="isRecurring"
          type="checkbox"
          class="text-primary-600 focus:ring-primary-500 h-5 w-5 rounded-lg border-gray-200 dark:border-[--semantic-base-line] dark:bg-[--semantic-base-background]"
        />
        <span class="text-lg dark:text-[--semantic-base-text-primary]">{{
          t('recurringEvent')
        }}</span>
      </div>
      <div v-if="isRecurring" class="mt-4">
        <div class="flex w-full justify-center sm:justify-start">
          <div class="flex px-4">
            <FormInput :title="t('frequency')" type="dropdown">
              <DropdownMenu v-model:open="openFrequency">
                <DropdownMenuTrigger
                  class="flex h-14 items-center rounded-l-xl border border-gray-200 bg-white px-4 py-2 text-left sm:w-[280px] dark:border-[--semantic-base-line] dark:bg-[--semantic-base-background]"
                >
                  <div class="min-w-0 flex-1">
                    <span
                      class="block truncate text-sm"
                      :class="{
                        'text-gray-500 dark:text-[--semantic-base-text-secondary]':
                          !frequency,
                        'text-gray-600 dark:text-[--semantic-base-text-primary]':
                          frequency,
                      }"
                    >
                      {{ frequency || t('everyYear') }}
                    </span>
                  </div>
                  <ChevronDown
                    :class="{ 'rotate-180': openFrequency }"
                    class="ml-2 h-6 w-6 text-gray-300 transition-transform dark:text-[--semantic-base-text-secondary]"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  class="w-[--radix-dropdown-menu-trigger-width] rounded-br-xl rounded-bl-xl border border-gray-200 bg-white p-1 shadow-lg dark:border-[--semantic-base-line] dark:bg-[--semantic-base-background]"
                >
                  <DropdownMenuItem
                    v-for="option in frequencyOptions"
                    :key="option.value"
                    class="cursor-pointer rounded-md px-3 py-2 text-lg text-gray-600 hover:bg-gray-50 dark:text-[--semantic-base-text-primary] dark:hover:bg-[--semantic-base-surface-1]"
                    @click="selectFrequency(option)"
                  >
                    {{ option.label }}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </FormInput>
            <FormInput :title="t('endsOn')">
              <Popover>
                <PopoverTrigger class="w-full">
                  <div
                    class="flex h-14 items-center rounded-r-xl border border-l-0 border-gray-200 bg-white px-4 py-2 dark:border-[--semantic-base-line] dark:bg-[--semantic-base-background]"
                  >
                    <div class="min-w-0 flex-1">
                      <span
                        class="block truncate text-sm text-gray-600 dark:text-[--semantic-base-text-primary]"
                        >{{
                          reccuringDate
                            ? df.format(toDate(reccuringDate))
                            : t('defaultEndDate')
                        }}</span
                      >
                    </div>
                    <CalendarIcon
                      class="ml-2 h-6 w-6 text-gray-300 dark:text-[--semantic-base-text-secondary]"
                    />
                  </div>
                </PopoverTrigger>
                <PopoverContent
                  class="w-auto rounded-l-xl rounded-br-xl rounded-bl-xl border border-l-0 border-gray-200 bg-white p-0 dark:border-[--semantic-base-line] dark:bg-[--semantic-base-background]"
                  hide-close
                >
                  <Calendar
                    v-model="reccuringDate"
                    :calendar-label="t('endDate')"
                    class="bg-white dark:bg-[--semantic-base-background] [&_.rdp]:p-3 [&_.rdp-head_th]:p-2 [&_.rdp-table]:w-full [&_.rdp-tbody_td]:p-2"
                    initial-focus
                    @update:model-value="handleRecurringUpdate"
                  />
                </PopoverContent>
              </Popover>
            </FormInput>
          </div>
        </div>
      </div>
    </div>
    <h2 class="mb-4 text-xl dark:text-[--semantic-base-text-primary]">
      {{ t('address') }}
    </h2>
    <div
      class="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm dark:border-[--semantic-base-line] dark:bg-[--semantic-base-background]"
    >
      <div class="space-y-6">
        <div
          class="border-b border-gray-100 pb-4 dark:border-[--semantic-base-line]"
        >
          <input
            v-model="eventForm.address"
            type="text"
            :placeholder="t('address')"
            class="border-0 px-0 py-2 text-xl text-gray-600 placeholder:text-gray-400 focus:border-transparent focus:ring-0 focus:outline-none dark:bg-[--semantic-base-background] dark:text-[--semantic-base-text-primary] dark:placeholder:text-[--semantic-base-text-secondary]"
            pattern="^[A-Za-z0-9\s\-\.]+$"
            @input="onAddressInput"
          />
        </div>
        <div class="grid grid-cols-2 gap-8">
          <div
            class="border-b border-gray-100 pb-4 dark:border-[--semantic-base-line]"
          >
            <input
              v-model="eventForm.postcode"
              type="number"
              :placeholder="t('postcode')"
              class="w-full appearance-none border-0 px-0 py-2 text-xl text-gray-600 placeholder:text-gray-400 focus:border-transparent focus:ring-0 focus:outline-none dark:bg-[--semantic-base-background] dark:text-[--semantic-base-text-primary] dark:placeholder:text-[--semantic-base-text-secondary]"
              maxlength="10"
              @input="onPostcodeInput"
            />
          </div>
          <div
            class="border-b border-gray-100 pb-4 dark:border-[--semantic-base-line]"
          >
            <input
              v-model="eventForm.city"
              type="text"
              :placeholder="t('city')"
              class="w-full appearance-none border-0 px-0 py-2 text-xl text-gray-600 placeholder:text-gray-400 focus:border-transparent focus:ring-0 focus:outline-none dark:bg-[--semantic-base-background] dark:text-[--semantic-base-text-primary] dark:placeholder:text-[--semantic-base-text-secondary]"
              pattern="[A-Za-z\s]+"
              @input="onCityInput"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from '~/components/scn/calendar'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '~/components/scn/popover'
import { CalendarIcon, ChevronDown } from 'lucide-vue-next'
import type { CalendarDate } from '@internationalized/date'
import { DateFormatter } from '@internationalized/date'
import { toDate } from 'reka-ui/date'
import type { BaseValidation } from '@vuelidate/core'

import { useEventForm } from '~/composables/useEventForm'
const { form: eventForm } = useEventForm()
const { t } = useI18n()

const props = defineProps<{
  form: {
    address: string
    endDate: string
    endTime: string
    frequency: string | null
    isRecurring: boolean
    recurringEndDate: string | null
    startDate: string
    startTime: string
    postcode: string
    city: string
  }
  validation: BaseValidation
}>()

const isRecurring = ref(false)

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const reccuringDate = ref()

const startDate = ref()
const endDate = ref()

const openFrequency = ref(false)
const frequency = ref('')

const frequencyOptions = computed(() => [
  { label: t('everyDay'), value: 'daily' },
  { label: t('everyWeek'), value: 'weekly' },
  { label: t('everyMonth'), value: 'monthly' },
  { label: t('everyYear'), value: 'yearly' },
])

const emit = defineEmits<{
  updateForm: [value: Partial<typeof props.form>]
}>()

const selectStartDateTime = ({
  date,
  time,
}: {
  date: CalendarDate
  time: string
}) => {
  const jsDate = new Date(date.toString())
  const isoDate = jsDate.toISOString()

  eventForm.value.startDate = isoDate
  eventForm.value.startTime = time

  emit('updateForm', {
    ...props.form,
    startDate: isoDate,
    startTime: time,
  })
}

const selectEndDateTime = ({
  date,
  time,
}: {
  date: CalendarDate
  time: string
}) => {
  const jsDate = new Date(date.toString())
  const isoDate = jsDate.toISOString()

  eventForm.value.startDate = isoDate
  eventForm.value.startTime = time
  emit('updateForm', {
    ...props.form,
    endDate: isoDate,
    endTime: time,
  })
}

const handleRecurringUpdate = () => {
  const recurringEndDate =
    isRecurring.value && reccuringDate.value
      ? new Date(reccuringDate.value.toString()).toISOString()
      : null

  emit('updateForm', {
    isRecurring: isRecurring.value,
    frequency: isRecurring.value ? frequency.value : null,
    recurringEndDate,
  })
}

const selectFrequency = (option: { label: string; value: string }) => {
  frequency.value = option.label
  openFrequency.value = false
  handleRecurringUpdate()
}

const onAddressInput = () => {
  emit('updateForm', {
    address: eventForm.value.address,
  })
}

const onPostcodeInput = () => {
  emit('updateForm', {
    postcode: eventForm.value.postcode,
  })
}

const onCityInput = () => {
  emit('updateForm', {
    city: eventForm.value.city,
  })
}
</script>

<i18n lang="yaml">
de:
  address: Adresse
  city: Stadt
  defaultEndDate: 24. März 2026
  endDate: Enddatum
  endDateTime: Enddatum & Uhrzeit
  endsOn: Endet am
  everyDay: Jeden Tag
  everyMonth: Jeden Monat
  everyWeek: Jede Woche
  everyYear: Jedes Jahr
  frequency: Häufigkeit
  postcode: Postleitzahl
  recurringEvent: Wiederkehrendes Event
  startDate: Startdatum
  startDateTime: Startdatum & Uhrzeit
en:
  address: Address
  city: City
  defaultEndDate: 24 Mar 2026
  endDate: End Date
  endDateTime: End
  endsOn: Ends on
  everyDay: Every day
  everyMonth: Every month
  everyWeek: Every week
  everyYear: Every year
  frequency: Frequency
  postcode: Post Code
  recurringEvent: Recurring event
  startDate: Start Date
  startDateTime: Begin
</i18n>
