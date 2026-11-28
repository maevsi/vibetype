<template>
  <AppDrawer v-model="isOpen">
    <template #title>{{ t('title') }}</template>
    <template #description>{{ t('description') }}</template>
    <div class="flex flex-col gap-4 pb-4">
      <p class="text-body text-fg-2">{{ t('description') }}</p>
      <ul class="flex flex-col gap-3">
        <li
          v-for="group in groupsSorted"
          :key="group.rowId"
          class="flex items-center gap-2"
        >
          <AppInput
            v-model="names[group.rowId]"
            :aria-label="t('groupName')"
            :placeholder="group.name"
            type="text"
            @keydown.enter.prevent="rename(group)"
          />
          <AppButton
            :aria-label="t('groupRename')"
            :disabled="
              !isRenamable(group) ||
              updateContactGroupByRowIdMutation.fetching.value
            "
            size="none"
            variant="ghost"
            @click="rename(group)"
          >
            <AppIconCheckCircle />
          </AppButton>
          <AppButton
            :aria-label="t('groupDelete')"
            size="none"
            variant="ghost"
            @click="onDeleteSelect(group)"
          >
            <AppIconTrash />
          </AppButton>
        </li>
      </ul>
      <AppAlert v-if="errorMessages?.length" variant="error">
        <AppSpanList :span="errorMessages" />
      </AppAlert>
    </div>
    <ContactGroupDeleteDrawer
      v-if="groupToDelete"
      v-model:open="isDeleteDrawerOpen"
      :group="groupToDelete"
    />
  </AppDrawer>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import { getContactGroupNamesNormalized } from '~~/shared/utils/contactGroup'

interface ContactGroupDrawerGroup {
  name: string
  rowId: string
}

const { groups } = defineProps<{
  groups: ContactGroupDrawerGroup[]
}>()

const { t } = useI18n()

// data
const groupToDelete = ref<ContactGroupDrawerGroup>()
const isDeleteDrawerOpen = ref(false)
const isOpen = defineModel<boolean>('open')
const names = ref<Record<string, string>>({})

// api data
const updateContactGroupByRowIdMutation = useMutation(
  graphql(`
    mutation UpdateContactGroupByRowId(
      $input: UpdateContactGroupByRowIdInput!
    ) {
      updateContactGroupByRowId(input: $input) {
        contactGroup {
          ...ContactGroupItem
        }
      }
    }
  `),
)
const api = await useApiData([updateContactGroupByRowIdMutation])

// computations
const errorMessages = computed(() =>
  api.value.errors
    ? getCombinedErrorMessages(api.value.errors, {
        postgres23505: t('groupExisting'),
      })
    : undefined,
)
const groupsSorted = computed(() =>
  [...groups].sort((a, b) => a.name.localeCompare(b.name)),
)

// methods
const getNameNormalized = (group: ContactGroupDrawerGroup) =>
  getContactGroupNamesNormalized([names.value[group.rowId] ?? group.name])[0]
const isRenamable = (group: ContactGroupDrawerGroup) => {
  const name = getNameNormalized(group)

  return !!name && name !== group.name
}
const onDeleteSelect = (group: ContactGroupDrawerGroup) => {
  groupToDelete.value = group
  isDeleteDrawerOpen.value = true
}
const rename = async (group: ContactGroupDrawerGroup) => {
  const name = getNameNormalized(group)

  if (!name || !isRenamable(group)) return

  await updateContactGroupByRowIdMutation.executeMutation({
    input: { contactGroupPatch: { name }, rowId: group.rowId },
  })
}

// lifecycle
watch(
  () => groups,
  (current) => {
    names.value = Object.fromEntries(
      current.map(({ name, rowId }) => [rowId, names.value[rowId] ?? name]),
    )
  },
  { immediate: true },
)
</script>

<i18n lang="yaml">
de:
  description: Benenne Gruppen um oder lösche sie. Beim Löschen einer Gruppe bleiben ihre Kontakte erhalten.
  groupDelete: Gruppe löschen
  groupExisting: Eine Gruppe mit diesem Namen existiert bereits!
  groupName: Name der Gruppe
  groupRename: Gruppe umbenennen
  title: Gruppen verwalten
en:
  description: Rename groups or delete them. Deleting a group keeps its contacts.
  groupDelete: Delete group
  groupExisting: A group with this name already exists!
  groupName: Group name
  groupRename: Rename group
  title: Manage groups
</i18n>
