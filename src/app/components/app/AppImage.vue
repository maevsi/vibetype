<template>
  <div :class="cn(aspect, classProps)" data-slot="image">
    <AppLoaderPing v-if="isLoading" />
    <AppAlert v-if="isError" variant="error">
      {{ t('error') }}
    </AppAlert>
    <img
      v-if="srcWhenLoaded"
      :alt
      :class="cn(aspect, classProps)"
      :crossorigin="crossOrigin"
      :height
      :src="srcWhenLoaded"
      :width
    />
    <img :alt class="hidden" :crossorigin="crossOrigin" :height :src :width />
  </div>
</template>

<script setup lang="ts">
import { debounce } from 'lodash-es'
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const {
  alt,
  aspect,
  class: classProps = undefined,
  crossOrigin = undefined,
  height,
  src,
  width,
} = defineProps<{
  alt: string
  aspect: string
  class?: HTMLAttributes['class']
  crossOrigin?: 'anonymous'
  height: string
  src: string
  width: string
}>()

const { t } = useI18n()

// data
const img = ref<HTMLImageElement>()
const isError = ref(false)
const isLoading = ref(false)
const loadingId = Math.random()
const loadingIds = useState(STATE_LOADING_IDS_NAME, () => [] as number[])
const srcWhenLoaded = ref<string | undefined>(src)

// methods
const loadOnClient = () => {
  loadingStartDebounced()

  img.value = new Image()
  img.value.onload = () => {
    loadingStop()
    srcWhenLoaded.value = img.value?.src
  }
  img.value.onerror = () => {
    loadingStop()
    isError.value = true
  }
  img.value.crossOrigin = crossOrigin || null
  img.value.src = src
}
const loadingStart = () => {
  srcWhenLoaded.value = undefined
  isLoading.value = true
  loadingIds.value.push(loadingId)
}
const loadingStartDebounced = debounce(loadingStart, 100)
const loadingStop = () => {
  loadingStartDebounced.cancel()
  isLoading.value = false
  loadingIds.value.splice(loadingIds.value.indexOf(loadingId), 1)
}

// lifecycle
onMounted(loadOnClient)
watch(
  () => src,
  () => loadOnClient(),
)
</script>

<i18n lang="yaml">
de:
  error: Bild konnte nicht geladen werden!
en:
  error: Image could not be loaded!
</i18n>
