<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div @click="onClick" v-html="html" />
  <AppExternalLinkDrawer v-if="url" v-model="isDrawerExternalLinkOpen" :url />
</template>

<script setup lang="ts">
const { html } = defineProps<{
  html: string
}>()

// data
const isDrawerExternalLinkOpen = ref(false)
const url = ref<string>()

// methods
const onClick = async (event: MouseEvent) => {
  const anchor =
    event.target instanceof Element ? event.target.closest('a[href]') : null

  if (!(anchor instanceof HTMLAnchorElement)) return

  const navigation = getLinkNavigation(anchor.href, window.location.origin)

  if (!navigation) return

  if ('url' in navigation) {
    event.preventDefault()
    url.value = navigation.url
    isDrawerExternalLinkOpen.value = true
    return
  }

  // modified clicks open a new tab or window natively
  if (event.button || event.metaKey || event.ctrlKey || event.shiftKey) return

  event.preventDefault()
  await navigateTo(navigation.path)
}
</script>
