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

// TODO: use imported type (https://github.com/nuxt/nuxt/issues/29757)
// import type { NuxtTimeProps } from '#app'

const { locale: defaultLocale } = useI18n()
const defaultTimeZone = useTimeZone()

const props = withDefaults(
  defineProps</*NuxtTimeProps*/ {
    datetime: string | number | Date
    day?: 'numeric' | '2-digit'
    hour?: 'numeric' | '2-digit'
    locale?: string
    minute?: 'numeric' | '2-digit'
    month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
    relative?: boolean
    timeZone?: string
    timeZoneName?:
      | 'short'
      | 'long'
      | 'shortOffset'
      | 'longOffset'
      | 'shortGeneric'
      | 'longGeneric'
    weekday?: 'long' | 'short' | 'narrow'
    year?: 'numeric' | '2-digit'
  }>(),
  {
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
  },
)

const delegatedProps = reactiveOmit(props, 'locale', 'timeZone')
const forwardedProps = useForwardProps(delegatedProps)
</script>
