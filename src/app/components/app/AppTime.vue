<template>
  <NuxtTime
    v-bind="forwardedProps"
    :locale="props.locale || defaultLocale"
    :time-zone="props.timeZone || defaultTimeZone"
  />
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'

import type { NuxtTimeProps } from '#app'

const { locale: defaultLocale } = useI18n()
const defaultTimeZone = useTimeZone()

const props = withDefaults(defineProps<NuxtTimeProps>(), {
  // ...dateTimeFormatOptions, TODO: use shared options
  day: 'numeric',
  hour: 'numeric',
  locale: undefined,
  minute: 'numeric',
  month: 'short',
  relative: undefined,
  timeZone: undefined,
  timeZoneName: undefined,
  weekday: undefined,
  year: 'numeric',
})

const delegatedProps = reactiveOmit(props, 'locale', 'timeZone')
const forwardedProps = useForwardProps(delegatedProps)
</script>
