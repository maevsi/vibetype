<template>
  <LayoutPage>
    <div class="flex flex-col gap-4">
      <AppStepIndex :count="5" :index="1" />
      <TypographyH3 class="text-center">
        {{ t('title') }}
      </TypographyH3>
      <div class="flex justify-center">
        <PreferenceFormAge
          ref="form"
          v-model:error="modelError"
          @success="emit('next')"
        />
      </div>
    </div>
    <template #bottom>
      <ButtonColored
        :aria-label="t('button')"
        class="w-full max-w-md"
        @click="templateForm?.submit"
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
const templateForm = useTemplateRef('form')

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  button: Weiter
  title: Beginnen wir mit deinem Geburtsdatum!
en:
  button: Next
  title: Let's start with your birth date!
</i18n>
