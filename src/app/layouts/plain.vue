<template>
  <main
    :data-is-loading="isLoading"
    data-testid="is-loading"
    class="flex min-h-screen"
  >
    <slot />
  </main>
</template>

<script setup lang="ts">
const { $dayjs } = useNuxtApp()
const { locale } = useI18n()
$dayjs.locale(locale.value)

const loadingId = Math.random()
const loadingIds = useState(STATE_LOADING_IDS_NAME, () => [loadingId])
const isLoading = computed(() => !!loadingIds.value.length)
onMounted(() => loadingIds.value.splice(loadingIds.value.indexOf(loadingId), 1))
</script>
