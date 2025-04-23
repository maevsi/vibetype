<template>
  <div class="flex flex-1" :class="pageBackground">
    <LayoutMenuSidebar class="max-lg:hidden 2xl:hidden" />
    <div class="flex min-w-0 flex-1 flex-col">
      <div
        class="container flex flex-1 flex-col gap-4 self-center overflow-hidden p-4 md:px-8 2xl:gap-8"
      >
        <LayoutHeader />
        <main>
          <slot />
        </main>
      </div>
      <LayoutMenuBottomNavigation class="lg:hidden" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { $dayjs } = useNuxtApp()
const { locale } = useI18n()
const route = useRoute()

const loadingId = Math.random()
const loadingIds = useState(STATE_LOADING_IDS_NAME, () => [loadingId])

const pageBackground = computed(() =>
  route.path.includes('/event') ? 'bg-[var(--semantic-base-background)]' : '',
)

// lifecycle
onMounted(() => loadingIds.value.splice(loadingIds.value.indexOf(loadingId), 1))

// initialization
$dayjs.locale(locale.value)
</script>
