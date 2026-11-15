<template>
  <div class="flex flex-col">
    <div class="flex flex-col gap-4 rounded-medium bg-surface-raised p-4">
      <div class="flex items-center justify-between">
        <span class="text-heading-medium text-balance">
          {{ title }}
        </span>
        <AppButton
          v-if="!isEditing"
          :aria-label="t('edit')"
          class="h-8 data-[size=large]:p-1"
          variant="tertiary"
          @click="edit"
        >
          <span class="text-headline">
            {{ t('edit') }}
          </span>
          <template #prefix>
            <AppIconEdit />
          </template>
        </AppButton>
        <AppButton
          v-else
          :aria-label="t('cancel')"
          class="h-8 data-[size=large]:p-1"
          variant="tertiary"
          @click="cancel"
        >
          <span class="text-headline">
            {{ t('cancel') }}
          </span>
        </AppButton>
      </div>
      <div class="flex flex-col gap-1.5" :class="{ hidden: !isEditing }">
        <span class="rounded-medium bg-surface-raised px-4 py-3 text-body">
          <textarea
            v-model="content"
            :aria-label="title"
            class="h-full w-full resize-none bg-transparent focus:outline-none"
            :maxlength="maxLength"
            rows="5"
          />
        </span>
        <span class="self-end px-2 text-body text-fg-2">
          {{
            t('characterCount', {
              count: content?.length || 0,
              maximum: maxLength,
            })
          }}
        </span>
      </div>
      <span
        class="text-body whitespace-pre-line"
        :class="{ hidden: isEditing || !contentInitial }"
      >
        {{ contentInitial }}
      </span>
      <div v-if="isEditing" class="flex flex-col items-end gap-2 text-right">
        <AppButton
          :aria-label="t('saveChanges')"
          :loading
          variant="secondary"
          @click="save"
        >
          <span class="text-headline">
            {{ t('saveChanges') }}
          </span>
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// compiler
const {
  contentInitial = undefined,
  lengthMaximum: maxLength,
  loading,
  title,
} = defineProps<{
  contentInitial?: string | null
  lengthMaximum: number
  loading?: boolean
  title: string
}>()

const emit = defineEmits<{
  save: [content?: string]
}>()

// input
const content = ref<string>()
const isEditing = ref<boolean>()
const edit = () => {
  content.value = contentInitial?.trim()
  isEditing.value = true
}
const cancel = () => {
  content.value = contentInitial?.trim()
  isEditing.value = false
}
const isSaving = ref(false)
const save = async () => {
  isSaving.value = true
  emit('save', content.value?.trim())

  // the caller may not actually start a loading request (e.g. a guard
  // clause returning early), in which case there is no loading
  // transition to reset `isSaving` below
  await nextTick()
  if (!loading) {
    isSaving.value = false
  }
}

// closes editing once this instance's save request settles
watch(
  () => loading,
  (loadingCurrent, loadingPrevious) => {
    if (loadingPrevious && !loadingCurrent && isSaving.value) {
      isEditing.value = false
      isSaving.value = false
    }
  },
)

// template
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  cancel: Abbrechen
  characterCount: '{count}/{maximum}'
  edit: Bearbeiten
  saveChanges: Änderungen speichern
en:
  cancel: Cancel
  characterCount: '{count}/{maximum}'
  edit: Edit
  saveChanges: Save Changes
</i18n>
