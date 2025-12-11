<template>
  <Calendar
    v-slot="{ date }"
    v-model:placeholder="placeholder"
    v-bind="forwarded"
    :class="cn('rounded-md border p-3', props.class)"
    :locale
  >
    <CalendarHeading class="flex w-full items-center justify-between gap-2">
      <Select
        :default-value="placeholder?.month.toString()"
        @update:model-value="
          (v: unknown) => {
            if (!v || !placeholder) return
            if (Number(v) === placeholder?.month) return
            placeholder = placeholder.set({
              month: Number(v),
            })
          }
        "
      >
        <SelectTrigger :aria-label="t('selectMonth')" class="w-4/5">
          <SelectValue :placeholder="t('selectMonth')" />
        </SelectTrigger>
        <SelectContent class="max-h-48">
          <SelectItem
            v-for="month in createYear({ dateObj: date })"
            :key="month.toString()"
            :value="month.month.toString()"
          >
            {{ formatter.custom(toDate(month), { month: 'long' }) }}
          </SelectItem>
        </SelectContent>
      </Select>
      <Select
        :default-value="placeholder?.year.toString()"
        @update:model-value="
          (v: unknown) => {
            if (!v || !placeholder) return
            if (Number(v) === placeholder?.year) return
            placeholder = placeholder.set({
              year: Number(v),
            })
          }
        "
      >
        <SelectTrigger :aria-label="t('selectYear')" class="w-2/5">
          <SelectValue :placeholder="t('selectYear')" />
        </SelectTrigger>
        <SelectContent class="max-h-48">
          <SelectItem
            v-for="yearValue in createDecade({
              dateObj: calendarDateToday,
              startIndex: -100,
              endIndex: 0,
            })"
            :key="yearValue.toString()"
            :value="yearValue.year.toString()"
          >
            {{ yearValue.year }}
          </SelectItem>
        </SelectContent>
      </Select>
    </CalendarHeading>
  </Calendar>
</template>

<script setup lang="ts">
import { getLocalTimeZone, today } from '@internationalized/date'
import type { DateValue } from '@internationalized/date'
import { reactiveOmit, useVModel } from '@vueuse/core'
import { useDateFormatter, useForwardPropsEmits } from 'reka-ui'
import type { CalendarRootEmits, CalendarRootProps } from 'reka-ui'
import { createDecade, createYear, toDate } from 'reka-ui/date'
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const props = withDefaults(
  defineProps<CalendarRootProps & { class?: HTMLAttributes['class'] }>(),
  {
    class: undefined,
    modelValue: undefined,
  },
)
const emit = defineEmits<
  {
    next: []
  } & CalendarRootEmits
>()

const delegatedProps = reactiveOmit(props, 'class', 'placeholder')
const forwarded = useForwardPropsEmits(delegatedProps, emit)

const calendarDateToday = today(getLocalTimeZone())
const placeholder = useVModel(props, 'modelValue', emit, {
  passive: false,
  defaultValue: calendarDateToday,
}) as Ref<DateValue>

const { locale, t } = useI18n()
const formatter = useDateFormatter(locale.value)
</script>

<i18n lang="yaml">
de:
  selectMonth: Monat auswählen
  selectYear: Jahr auswählen
en:
  selectMonth: Select month
  selectYear: Select year
</i18n>
