<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-col gap-2">
    <h2 :id="templateIdTitle" class="text-title3">
      {{ t('title') }}
    </h2>
    <!-- The tiles are inert, as events cannot be listed by category in the order of their start yet; once the event list accepts a category, bind the selection and remove `inert` -->
    <div
      ref="categories"
      :class="cn('overflow-hidden', !isExpanded && 'max-h-57')"
      inert
    >
      <FormEventCategorySelect />
    </div>
    <AppButton
      v-if="isExpandable"
      :aria-expanded="isExpanded"
      :aria-label="isExpanded ? t('showFewer') : t('browseAll')"
      class="self-center"
      variant="tertiary"
      @click="isExpanded = !isExpanded"
    >
      {{ isExpanded ? t('showFewer') : t('browseAll') }}
    </AppButton>
  </section>
</template>

<script setup lang="ts">
import { cn } from '@/utils/shadcn'

const { t } = useI18n()

// Two rows of tiles show at first, so the toggle is only offered when there are more
const categories = useTemplateRef('categories')
const isExpandable = ref(false)
const isExpanded = ref(false)
onMounted(() => {
  if (!categories.value) return

  isExpandable.value =
    categories.value.scrollHeight > categories.value.clientHeight
})

// template
const templateIdTitle = useId()
</script>

<i18n lang="yaml">
de:
  browseAll: Alle Kategorien anzeigen
  showFewer: Weniger anzeigen
  title: Kategorien
en:
  browseAll: Browse all categories
  showFewer: Show fewer
  title: Categories
</i18n>
