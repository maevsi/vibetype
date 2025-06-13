<template>
  <div class="flex w-full">
    <div class="grid w-full grid-cols-2 gap-0">
      <Popover>
        <PopoverTrigger class="w-full">
          <div
            class="flex h-14 w-full items-center justify-between rounded-l-xl border border-(--semantic-base-line) px-4 py-2"
          >
            <span class="block truncate text-(--semantic-base-text)">
              {{
                modelValue
                  ? df.format(
                      modelValue instanceof Date
                        ? modelValue
                        : new Date(String(modelValue)),
                    )
                  : props.placeholder
              }}
            </span>
            <CalendarIcon
              class="ml-2 size-6 flex-shrink-0 text-(--semantic-base-text)"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent
          class="z-50 min-w-[8rem] overflow-hidden rounded-md border border-(--semantic-base-line) bg-(--semantic-base-surface) p-0 shadow-md"
          hide-close
        >
          <Calendar
            class="bg-(--semantic-base-surface-1)"
            :selected="modelValue"
            @update:model-value="
              (date) => (modelValue = date as unknown as CalendarDate)
            "
          />
        </PopoverContent>
      </Popover>
      <div
        class="flex h-14 w-full items-center rounded-r-xl border border-l-0 border-(--semantic-base-line) bg-(--semantic-base-surface) px-4 py-2"
      >
        <input
          v-model="time"
          type="time"
          class="w-full border-0 px-0 py-2 text-xl text-(--semantic-base-text) focus:border-transparent focus:ring-0 focus:outline-none"
          placeholder="10:00"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarIcon } from 'lucide-vue-next'
import type { CalendarDate } from '@internationalized/date'
import { DateFormatter } from '@internationalized/date'
import dayjs from 'dayjs'
const { locale } = useI18n()

const props = defineProps<{
  placeholder?: string
}>()

const modelValue = defineModel<CalendarDate>({
  default: dayjs().toDate(),
})
const time = defineModel<string>('time', {
  default: '10:00',
})

const emit = defineEmits<{
  (e: 'update', value: { date: CalendarDate; time: string }): void
}>()

const df = new DateFormatter(locale.value, { dateStyle: 'long' })

watch([() => modelValue.value, () => time.value], () => {
  emit('update', {
    date: modelValue.value,
    time: time.value,
  })
})
</script>
