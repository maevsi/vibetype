<template>
  <AppButton
    v-if="isVisible"
    v-bind="delegatedProps"
    :size="isRound ? 'icon' : 'none'"
    :variant="isRound ? 'secondary' : 'ghost'"
    @click="store.navigateBack()"
  >
    <slot>
      <AppIconBack />
    </slot>
  </AppButton>
</template>

<script setup lang="ts">
import { isEqual } from 'ufo'

const { t } = useI18n()

const { ariaLabel = undefined, isRound = false } = defineProps<{
  ariaLabel?: string
  isRound?: boolean
}>()
const delegatedProps = computed(() => ({
  ariaLabel: ariaLabel || t('back'),
}))

// router
const localePath = useLocalePath()
const store = useStore()
const route = useRoute()
const isVisible = computed(
  () =>
    store.routeHistory.length ||
    !isEqual(
      route.path,
      // signed-in accounts are redirected from the index to the dashboard, so going back from there only loops
      localePath(store.signedInAccountId ? 'dashboard' : 'index').toString(),
    ),
)

defineExpose({
  isVisible,
})
</script>

<i18n lang="yaml">
de:
  back: zurück
en:
  back: back
</i18n>
