<template>
  <LayoutPage>
    <div class="flex flex-col gap-4 text-center">
      <AppStepIndex :count="4" :index="1" />
      <TypographyH3>
        {{ t('title') }}
      </TypographyH3>
      <PreferenceFormSize
        :id="templateIdForm"
        v-model:error="modelError"
        @success="emit('next')"
      />
    </div>
    <template #bottom>
      <ButtonColored
        :aria-label="t('button')"
        class="w-full max-w-md"
        :form="templateIdForm"
        type="submit"
      >
        {{ t('button') }}
      </ButtonColored>
    </template>
  </LayoutPage>
</template>

<script setup lang="ts">
// compiler
const emit = defineEmits<{
  next: []
}>()

// template
const modelError = defineModel<Error>('error')
const templateIdForm = useId()
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  button: Weiter
  title: Wie groß darf's sein?
en:
  button: Next
  title: How big can it be?
</i18n>
