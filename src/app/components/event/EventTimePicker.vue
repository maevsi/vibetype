<template>
  <div class="flex w-full">
    <div class="grid w-full grid-cols-2 gap-0">
      <Popover>
        <PopoverTrigger class="w-full">
          <div
            class="flex h-14 w-full items-center rounded-l-xl border border-gray-200 bg-white px-4 py-2 dark:border-[--semantic-base-line] dark:bg-[--semantic-base-background]"
          >
            <div class="min-w-0 flex-1">
              <span
                class="block truncate text-sm text-gray-600 dark:text-[--semantic-base-text-primary]"
                >{{
                  modelValue
                    ? df.format(
                        modelValue instanceof Date
                          ? modelValue
                          : new Date(String(modelValue)),
                      )
                    : placeholder
                }}</span
              >
            </div>
            <CalendarIcon
              class="ml-2 h-6 w-6 flex-shrink-0 text-gray-300 dark:text-[--semantic-base-text-secondary]"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent
          class="w-auto border border-gray-200 p-0 dark:border-[--semantic-base-line] dark:bg-[--semantic-base-background]"
          hide-close
        >
          <Calendar
            class="bg-white dark:bg-[--semantic-base-background] [&_.rdp]:p-3 [&_.rdp-button]:dark:text-[--semantic-base-text-primary] [&_.rdp-button:hover]:dark:bg-[--semantic-base-surface-1] [&_.rdp-caption]:dark:text-[--semantic-base-text-primary] [&_.rdp-day_selected]:dark:bg-[--accent-fancy] [&_.rdp-head_cell]:dark:text-[--semantic-base-text-secondary] [&_.rdp-head_th]:p-2 [&_.rdp-table]:w-full [&_.rdp-tbody_td]:p-2"
            :selected="modelValue"
            @update:model-value="
              (date) =>
                emit('update:modelValue', date as unknown as CalendarDate)
            "
          />
        </PopoverContent>
      </Popover>

      <div
        class="flex h-14 w-full items-center rounded-r-xl border border-l-0 border-gray-200 bg-white px-4 py-2 dark:border-[--semantic-base-line] dark:bg-[--semantic-base-background]"
      >
        <input
          v-model="selectedTime"
          type="time"
          class="w-full border-0 px-0 py-2 text-xl text-gray-600 placeholder:text-gray-400 focus:border-transparent focus:ring-0 focus:outline-none dark:bg-[--semantic-base-background] dark:text-[--semantic-base-text-primary] dark:placeholder:text-[--semantic-base-text-secondary]"
          :placeholder="timePlaceholder || '10:00'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar } from '~/components/scn/calendar'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '~/components/scn/popover'
import { CalendarIcon } from 'lucide-vue-next'
import type { CalendarDate } from '@internationalized/date'
import { DateFormatter } from '@internationalized/date'
const { locale } = useI18n()

interface Props {
  modelValue: CalendarDate
  placeholder?: string
  timePlaceholder?: string
  initialTime?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', date: CalendarDate): void
  (e: 'update:time', time: string): void
  (e: 'update', value: { date: CalendarDate; time: string }): void
}>()

const selectedTime = ref<string>(props.initialTime || '')
const df = new DateFormatter(locale.value, { dateStyle: 'long' })

watch([() => props.modelValue, selectedTime], () => {
  emit('update', {
    date: props.modelValue,
    time: selectedTime.value,
  })
})
</script>
