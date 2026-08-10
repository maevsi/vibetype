<template>
  <section class="flex flex-col gap-3">
    <TypographyH3>{{ t('title') }}</TypographyH3>
    <div
      v-if="images.length === 0"
      class="flex aspect-video items-center justify-center rounded-2xl bg-(--neutral-level-1) text-(--semantic-base-text-secondary)"
    >
      <TypographySubtitleSmall>{{ t('empty') }}</TypographySubtitleSmall>
    </div>
    <div v-else class="grid grid-cols-3 gap-2">
      <button
        v-for="(image, index) in images"
        :key="image.id"
        :aria-label="image.alt"
        class="relative overflow-hidden rounded-2xl focus-visible:ring-2 focus-visible:ring-(--accent-strong)"
        type="button"
        @click="activeIndex = index"
      >
        <img
          :alt="image.alt"
          class="aspect-square w-full rounded-2xl object-cover"
          :src="image.src"
        />
      </button>
    </div>

    <div
      v-if="activeIndex !== null"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      @click="activeIndex = null"
    >
      <img
        :alt="images[activeIndex]?.alt"
        class="max-h-full max-w-full rounded-2xl object-contain"
        :src="images[activeIndex]?.src"
        @click.stop
      />
      <button
        :aria-label="t('close')"
        class="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white text-(--semantic-base-text-primary) hover:opacity-80"
        type="button"
        @click="activeIndex = null"
      >
        <AppIconClose />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const { images = [] } = defineProps<{
  images?: ReadonlyArray<{ alt: string; id: string; src: string }>
}>()

const { t } = useI18n()
const activeIndex = ref<number | null>(null)

watchEffect((onCleanup) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && activeIndex.value !== null) {
      activeIndex.value = null
    }
  }

  if (activeIndex.value !== null) {
    document.addEventListener('keydown', handleKeyDown)
    onCleanup(() => {
      document.removeEventListener('keydown', handleKeyDown)
    })
  }
})
</script>

<i18n lang="yaml">
de:
  close: Schließen
  empty: Noch keine Bilder
  title: Galerie
en:
  close: Close
  empty: No images yet
  title: Gallery
</i18n>
