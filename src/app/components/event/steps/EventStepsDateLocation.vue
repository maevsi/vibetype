<template>
  <div class="mt-8 flex flex-col gap-4">
    <AppStepIndex :count="5" :index="2" />
    <TypographyH3>{{ t('title') }}</TypographyH3>
    <div class="flex w-full flex-col gap-2">
      <TypographyH6>
        {{ t('startDateTime') }}
      </TypographyH6>
      <EventTimePicker
        v-model="startDate"
        :placeholder="t('startDate')"
        :initial-time="'10:00'"
        class="w-full"
        @update="selectStartDateTime"
      />
      <TypographyH6>
        {{ t('endDateTime') }}
      </TypographyH6>
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
          class="focus:ring-primary-500 size-5 rounded-lg dark:border-[--semantic-base-line] dark:bg-[--semantic-base-background]"
          :checked="props.form.isRecurring"
          type="checkbox"
          @change="updateRecurring"
        />
        <TypographySubtitleMedium>{{
          t('recurringEvent')
        }}</TypographySubtitleMedium>
      </div>
      <div v-if="isRecurring" class="mt-4">
        <div class="flex w-full justify-center sm:justify-start">
          <div class="flex px-4">
            <FormInput :title="t('frequency')" type="dropdown">
              <DropdownMenu v-model:open="openFrequency">
                <DropdownMenuTrigger
                  class="flex h-14 w-full items-center justify-between rounded-l-xl border border-(--semantic-base-line) bg-(--semantic-base-surface) px-4 py-2 text-left transition-colors hover:bg-(--semantic-base-surface-hovered) focus:ring-2 focus:ring-(--accent-strong) focus:outline-none sm:w-[280px]"
                >
                  <span class="block truncate text-(--semantic-base-text)">
                    {{ frequency || t('everyYear') }}
                  </span>
                  <ChevronDown
                    :class="{ 'rotate-180': openFrequency }"
                    class="ml-2 size-6 shrink-0 text-(--semantic-base-text) transition-transform"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  class="z-50 min-w-[8rem] overflow-hidden rounded-md border border-(--semantic-base-line) bg-(--semantic-base-surface) p-1 shadow-md"
                >
                  <DropdownMenuItem
                    v-for="option in frequencyOptions"
                    :key="option.value"
                    class="relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm text-(--semantic-base-text) transition-colors outline-none select-none hover:bg-(--semantic-base-surface-hovered) focus:bg-(--semantic-base-surface-hovered)"
                    @click="selectFrequency(option)"
                  >
                    {{ option.label }}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </FormInput>
            <FormInput :title="t('endsOn')">
              <Popover>
                <PopoverTrigger
                  class="flex h-14 items-center rounded-r-xl border border-l-0 border-(--semantic-base-line) px-4 py-2"
                >
                  <div class="flex h-14 items-center px-4 py-2">
                    <div class="min-w-0 flex-1">
                      <span class="block truncate">{{
                        reccuringDate
                          ? df.format(toDate(reccuringDate))
                          : t('defaultEndDate')
                      }}</span>
                    </div>
                    <CalendarIcon class="ml-2 size-6" />
                  </div>
                </PopoverTrigger>
                <PopoverContent class="w-auto p-0" hide-close>
                  <Calendar
                    v-model="reccuringDate"
                    :calendar-label="t('endDate')"
                    class="dark:bg-[--semantic-base-background] [&_.rdp]:p-3 [&_.rdp-head_th]:p-2 [&_.rdp-table]:w-full [&_.rdp-tbody_td]:p-2"
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
    <TypographyH6>
      {{ t('address') }}
    </TypographyH6>
    <div
      class="rounded-lg border border-b border-(--semantic-base-line) text-center"
    >
      <div class="border-b border-(--semantic-base-line) px-4 py-2">
        <input
          class="w-full border-0 px-0 py-2 focus:outline-none"
          :value="props.form.address"
          type="text"
          :placeholder="t('address')"
          pattern="^[A-Za-z0-9\s\-\.]+$"
          @input="onAddressInput($event)"
        />
      </div>
      <div class="grid grid-cols-2 px-4">
        <div class="border-r border-(--semantic-base-line) py-2">
          <input
            class="w-full appearance-none border-0 px-0 py-2 focus:outline-none"
            :value="props.form.postcode"
            maxlength="10"
            type="number"
            :placeholder="t('postcode')"
            @input="onPostcodeInput($event)"
          />
        </div>
        <div class="py-2 pl-4">
          <input
            class="w-full appearance-none border-0 px-0 py-2 focus:outline-none"
            :value="props.form.city"
            type="text"
            :placeholder="t('city')"
            pattern="[A-Za-z\s]+"
            @input="onCityInput($event)"
          />
        </div>
      </div>
    </div>
    <ButtonColored
      :disabled="!isDateLocationValid"
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
import type { CalendarDate } from '@internationalized/date'
import { DateFormatter } from '@internationalized/date'
import type { BaseValidation } from '@vuelidate/core'
import { CalendarIcon, ChevronDown } from 'lucide-vue-next'
import { toDate } from 'reka-ui/date'

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
  isDateLocationValid: boolean
}>()

const emit = defineEmits<{
  updateForm: [value: Partial<typeof props.form>]
  next: []
}>()

const { t } = useI18n()

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

const selectStartDateTime = ({
  date,
  time,
}: {
  date: CalendarDate
  time: string
}) => {
  const jsDate = new Date(date.toString())
  const isoDate = jsDate.toISOString()

  emit('updateForm', {
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

  emit('updateForm', {
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

const updateRecurring = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target) {
    emit('updateForm', { isRecurring: target.checked })
  }
}

const onAddressInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('updateForm', { address: target.value })
}

const onPostcodeInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('updateForm', { postcode: target.value })
}

const onCityInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('updateForm', { city: target.value })
}
</script>

<i18n lang="yaml">
de:
  address: Adresse
  button: Weiter
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
  title: Datum und Ort
en:
  address: Address
  button: Next
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
  title: Date and Location
</i18n>
