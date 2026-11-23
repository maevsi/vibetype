<template>
  <div
    v-if="groups.length"
    :aria-label="t('label')"
    class="flex flex-wrap gap-2"
    role="group"
  >
    <AppFilterChip
      v-for="group in groupsSorted"
      :key="group.rowId"
      :label="group.name"
      :model-value="getState(group.rowId)"
      :state-labels="{
        excluded: t('stateExcluded'),
        included: t('stateIncluded'),
        neutral: t('stateNeutral'),
      }"
      @update:model-value="setState(group.rowId, $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { AppFilterChipState } from '../app/filter/AppFilterChip.vue'

export interface ContactGroupFilterGroup {
  name: string
  rowId: string
}

const { groups } = defineProps<{
  groups: ContactGroupFilterGroup[]
}>()

const { t } = useI18n()

// data
const groupIdsExcluded = defineModel<string[]>('excluded', {
  default: () => [],
})
const groupIdsIncluded = defineModel<string[]>('included', {
  default: () => [],
})

// computations
const groupsSorted = computed(() =>
  [...groups].sort((a, b) => a.name.localeCompare(b.name)),
)

// methods
const getState = (groupId: string): AppFilterChipState | undefined =>
  groupIdsIncluded.value.includes(groupId)
    ? 'included'
    : groupIdsExcluded.value.includes(groupId)
      ? 'excluded'
      : undefined

const setState = (groupId: string, state: AppFilterChipState | undefined) => {
  groupIdsExcluded.value = groupIdsExcluded.value.filter((id) => id !== groupId)
  groupIdsIncluded.value = groupIdsIncluded.value.filter((id) => id !== groupId)

  if (state === 'excluded')
    groupIdsExcluded.value = [...groupIdsExcluded.value, groupId]
  else if (state === 'included')
    groupIdsIncluded.value = [...groupIdsIncluded.value, groupId]
}
</script>

<i18n lang="yaml">
de:
  label: Nach Gruppen filtern
  stateExcluded: ausgeschlossen
  stateIncluded: eingeschlossen
  stateNeutral: nicht gefiltert
en:
  label: Filter by groups
  stateExcluded: excluded
  stateIncluded: included
  stateNeutral: not filtered
</i18n>
