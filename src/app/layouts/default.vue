<template>
  <div class="flex min-h-screen lg:h-screen 2xl:h-auto">
    <LayoutMenuSidebar class="hidden lg:block 2xl:hidden" />
    <div class="flex min-w-0 flex-1 flex-col">
      <div
        class="container mx-auto flex flex-1 shrink flex-col p-4 md:px-8 lg:block lg:overflow-y-auto"
        :data-is-loading="isLoading"
        data-testid="is-loading"
      >
        <div class="flex-1 2xl:pb-32">
          <LayoutHeader />
          <main class="flex-1 overflow-hidden p-1">
            <slot />
          </main>
        </div>
      </div>
      <LayoutMenuBottomNavigation class="lg:hidden" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { $dayjs } = useNuxtApp()
const { locale } = useI18n()

const loadingId = Math.random()
const loadingIds = useState(STATE_LOADING_IDS_NAME, () => [loadingId])

// computations
const isLoading = computed(() => !!loadingIds.value.length)

// lifecycle
onMounted(() => loadingIds.value.splice(loadingIds.value.indexOf(loadingId), 1))

// initialization
$dayjs.locale(locale.value)
</script>
