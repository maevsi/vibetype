<template>
  <NuxtTime
    v-bind="forwardedProps"
    :locale="props.options.locale || defaultLocale"
    :time-zone="props.options.timeZone || defaultTimeZone"
  />
</template>

<script setup lang="ts">
import type { NuxtTimeProps } from '#app'

const { locale: defaultLocale } = useI18n()
const defaultTimeZone = useTimeZone()

const props = withDefaults(
  defineProps<{
    datetime: NuxtTimeProps['datetime']
    options?: Omit<NuxtTimeProps, 'datetime'>
  }>(),
  {
    options: () => ({
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
  },
)

const forwardedProps = computed(() => {
  const { locale, timeZone, ...delegated } = props.options

  return { datetime: props.datetime, ...delegated }
})
</script>
