<template>
  <LayoutPage>
    <div class="flex flex-1 flex-col items-center justify-between">
      <div class="flex w-full flex-col gap-8">
        <TypographyBodyMedium>
          {{ t('reason') }}
        </TypographyBodyMedium>
        <FormAccountRegistrationAge
          ref="form"
          @success="emit('success', $event)"
        />
      </div>
      <ContentLegalFooter />
    </div>
    <template #bottom>
      <ButtonColored
        :aria-label="t('next')"
        class="w-full max-w-md"
        @click="templateForm?.submit"
      >
        {{ t('next') }}
      </ButtonColored>
    </template>
  </LayoutPage>
</template>

<script setup lang="ts">
// compiler
const emit = defineEmits<{
  success: [string]
}>()

// template
const templateForm = useTemplateRef('form')
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  reason: Für den richtigen Vibe und deine Sicherheit zeigt dir Vibetype nur Events, die zu deinem Alter passen.
  next: Weiter
en:
  reason: To keep things fun and safe, Vibetype curates just the right events for your age and vibe.
  next: Next
</i18n>
