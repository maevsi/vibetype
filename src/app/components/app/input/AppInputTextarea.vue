<template>
  <div class="flex flex-col">
    <div
      class="flex flex-col gap-4 rounded-lg border border-(--semantic-base-background) bg-(--semantic-base-surface-1) p-4 shadow-xs"
    >
      <div class="flex items-center justify-between">
        <TypographyH3>
          {{ title }}
        </TypographyH3>
        <ButtonColored
          v-if="!isEditing"
          :aria-label="t('edit')"
          class="h-8 data-[size=large]:p-1"
          variant="tertiary"
          @click="edit"
        >
          <TypographySubtitleMedium>
            {{ t('edit') }}
          </TypographySubtitleMedium>
          <template #prefix>
            <AppIconEdit />
          </template>
        </ButtonColored>
        <ButtonColored
          v-else
          :aria-label="t('cancel')"
          class="h-8 data-[size=large]:p-1"
          variant="tertiary"
          @click="cancel"
        >
          <TypographySubtitleMedium>
            {{ t('cancel') }}
          </TypographySubtitleMedium>
        </ButtonColored>
      </div>
      <div class="flex flex-col gap-1.5" :class="{ hidden: !isEditing }">
        <TypographySubtitleSmall
          class="rounded-lg border border-(--semantic-base-line) bg-(--semantic-base-input-field-fill) px-4 py-3"
        >
          <textarea
            v-model="content"
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
              count: content?.length || 0,
              maximum: maxLength,
            })
          }}
        </TypographySubtitleSmall>
      </div>
      <TypographyBodyMedium
        class="whitespace-pre-line"
        :class="{ hidden: isEditing || !contentInitial }"
      >
        {{ contentInitial }}
      </TypographyBodyMedium>
      <div v-if="isEditing" class="flex flex-col items-end gap-2 text-right">
        <ButtonColored
          :aria-label="t('saveChanges')"
          variant="secondary"
          @click="save"
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
// compiler
const {
  contentInitial = undefined,
  lengthMaximum: maxLength,
  title,
} = defineProps<{
  contentInitial?: string | null
  lengthMaximum: number
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
const save = () => {
  emit('save', content.value?.trim())
  isEditing.value = false
}

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
