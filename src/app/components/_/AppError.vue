<template>
  <div class="flex flex-col items-center gap-4">
    <CardStateAlert class="flex flex-col items-center text-3xl">
      <span class="flex items-center gap-1 text-xl font-black">
        {{ t('maevNo') }}
      </span>
      <h1>{{ `${statusCode} - ${statusReason}` }}</h1>
    </CardStateAlert>
    <div>
      <p v-if="statusCode === 403" class="text-center">
        {{ t('error403Description') }}
        <br />
        {{ t('error403Hint') }}
      </p>
    </div>
    <div>
      <span v-if="description">
        {{ description }}
      </span>
      <!-- eslint-disable vue/no-v-html -->
      <div v-if="isInDevelopment && stack" v-html="stack" />
      <!-- eslint-enable vue/no-v-html -->
    </div>
    <ButtonList class="justify-center">
      <ButtonSignIn v-if="statusCode === 403" />
      <ButtonHome />
    </ButtonList>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  statusCode: number
  statusMessage?: string
  description?: string
  stack?: string
}
const props = withDefaults(defineProps<Props>(), {
  description: undefined,
  statusMessage: undefined,
  stack: undefined,
})

const { locale, t } = useI18n()

const isInDevelopment = import.meta.dev

// page
const { ssrContext } = useNuxtApp()
if (ssrContext && props.statusCode) {
  ssrContext.event.node.res.statusCode = props.statusCode
}

// status code
const { status } = await import('@http-util/status-i18n')
const statusReason = computed(() => {
  return status(props.statusCode, locale.value) || t('error')
})
</script>

<i18n lang="yaml">
de:
  error: Fehler
  error403Description: Du bist aktuell nicht berechtigt, auf diese Seite zuzugreifen.
  error403Hint: Hast du dich schon angemeldet oder von diesem Gerät aus einen Einladungscode eingegeben?
  maevNo: maev.no? 🥺
en:
  error: Error
  error403Description: "You don't have permission to access this site."
  error403Hint: Try signing in or enter an invitation code on this device.
  maevNo: maev.no? 🥺
</i18n>
