<template>
  <div
    ref="scroll-container"
    class="border-background-brighten dark:border-background-darken overflow-y-auto rounded-lg border"
    @scroll.passive="onScroll"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ResizeSensor } from 'css-element-queries'
import { debounce } from 'lodash-es'

const { hasNextPage } = defineProps<{
  hasNextPage: boolean
}>()

const emit = defineEmits<{
  loadMore: []
}>()

const templateScrollContainer = useTemplateRef('scroll-container')

// data
const resizeSensor = ref<ResizeSensor>()

// methods
const emitLoadMore = debounce(() => {
  emit('loadMore')
}, 300)
const onScroll = (e: Event) => {
  const scrollBar = e.target as Element

  if (
    scrollBar &&
    scrollBar.scrollTop + scrollBar.clientHeight >=
      scrollBar.scrollHeight - 500 &&
    hasNextPage
  ) {
    emitLoadMore()
  }
}

// lifecycle
onMounted(() => {
  const scrollContainerLocal = templateScrollContainer.value

  if (!scrollContainerLocal) return

  resizeSensor.value = new ResizeSensor(scrollContainerLocal, () => {
    if (
      scrollContainerLocal.scrollHeight === scrollContainerLocal.clientHeight &&
      hasNextPage
    ) {
      emitLoadMore()
    }
  })
})
onBeforeUnmount(() => {
  if (resizeSensor.value) {
    resizeSensor.value.detach()
  }
})
</script>
