<template>
  <div class="flex h-15 items-center px-3 py-1.5 shadow-xs">
    <!-- TODO: add `border-b border-(--semantic-base-line)` when backdrop glow is removed -->
    <ButtonIcon
      v-if="
        store.routeHistory.length ||
        !isEqual(route.path, localePath('index').toString())
      "
      :aria-label="t('back')"
      class="p-3"
      @click="store.navigateBack()"
    >
      <IVibetypeBack class="size-6" />
    </ButtonIcon>
    <TypographyH6 class="grow text-center">
      <slot />
    </TypographyH6>
    <div class="p-3">
      <div class="size-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { isEqual } from 'ufo'

const store = useStore()
const localePath = useLocalePath()
const { t } = useI18n()
const route = useRoute()
// const { variant } = defineProps<{
//   variant:
//     | 'for-image-back'
//     | 'for-image'
//     | 'label-big'
//     | 'label-event'
//     | 'label-medium'
// }>()
</script>

<i18n lang="yaml">
de:
  back: zurück
en:
  back: back
</i18n>
