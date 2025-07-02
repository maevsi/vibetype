<template>
  <div class="flex flex-col">
    <div
      class="flex flex-col gap-4 rounded-lg border border-(--semantic-base-background) bg-(--semantic-base-surface-1) p-4 shadow-xs"
    >
      <div class="flex items-center justify-between">
        <TypographyH3>
          {{ title }}
        </TypographyH3>
        <AppButton
          :aria-label="isEditing ? t('cancel') : t('edit')"
          class="flex h-8 items-center gap-1 text-(--semantic-base-text-tertiary)"
          @click="isEditing ? cancelEdit() : toggleEdit()"
        >
          <div v-if="!isEditing" class="flex gap-2">
            <AppIconEdit />
            <TypographySubtitleMedium class="underline underline-offset-5">
              {{ t('edit') }}
            </TypographySubtitleMedium>
          </div>
          <TypographySubtitleMedium v-else class="underline underline-offset-5">
            {{ t('cancel') }}
          </TypographySubtitleMedium>
        </AppButton>
      </div>
      <div class="flex flex-col gap-1.5" :class="{ hidden: !isEditing }">
        <TypographySubtitleSmall
          class="rounded-lg border border-(--semantic-base-line) bg-(--semantic-base-input-field-fill) px-4 py-3"
        >
          <textarea
            v-model="editableContent"
            class="h-full w-full resize-none bg-transparent focus:outline-none"
            :maxlength="maxLength"
            rows="5"
          />
        </TypographySubtitleSmall>
        <TypographySubtitleSmall
          class="self-end px-2 text-(--semantic-base-text-secondary)"
        >
          {{
            t('characterCount', {
              count: editableContent?.length || 0,
              maximum: maxLength,
            })
          }}
        </TypographySubtitleSmall>
      </div>
      <TypographyBodyMedium :class="{ hidden: isEditing || !content }">
        {{ content }}
      </TypographyBodyMedium>
      <div v-if="isEditing" class="flex flex-col items-end gap-2 text-right">
        <ButtonColored
          :aria-label="t('saveChanges')"
          variant="secondary"
          @click="saveContent"
        >
          <TypographySubtitleMedium>
            {{ t('saveChanges') }}
          </TypographySubtitleMedium>
        </ButtonColored>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const {
  title,
  content = undefined,
  maxLength,
} = defineProps<{
  title: string
  content?: string | null
  maxLength: number
}>()

const emit = defineEmits<{
  save: [content: string]
}>()

const isEditing = ref<boolean>()
const editableContent = ref<string>()

const toggleEdit = () => {
  if (!isEditing.value) {
    editableContent.value = content?.trim() || ''
  }
  isEditing.value = !isEditing.value
}

const cancelEdit = () => {
  editableContent.value = content?.trim() || ''
  isEditing.value = false
}

const saveContent = () => {
  emit('save', editableContent.value || '')
  isEditing.value = false
}
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
