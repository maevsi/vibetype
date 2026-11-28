<template>
  <LayoutPage>
    <div class="flex flex-col items-start gap-3">
      <AppStepProgress class="justify-start" :count="2" :index="2" />
      <span class="text-heading-large text-balance">
        {{ t('title') }}
      </span>
      <span class="text-body text-fg-2">
        {{ t('description') }}
      </span>
    </div>
    <FormEarlyBird
      :id="templateIdForm"
      v-model:error="modelError"
      v-model:is-submitting="isSubmitting"
      @success="emit('next')"
    />
    <template #bottom>
      <AppButton
        :aria-label="t('button')"
        class="w-full max-w-md"
        :form="templateIdForm"
        :loading="isSubmitting"
        type="submit"
      >
        {{ t('button') }}
      </AppButton>
    </template>
  </LayoutPage>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  next: []
}>()

const modelError = defineModel<Error>('error')
const isSubmitting = ref(false)
const { t } = useI18n()
const templateIdForm = useId()
</script>

<i18n lang="yaml">
de:
  button: Weiter
  description: Wir halten Dich gern auf dem Laufenden. Gib uns Deinen Namen und Deine E-Mail-Adresse, und wir informieren Dich über das Früher-Vogel-Programm und Deinen Beitrag dazu.
  title: Wir freuen uns, Dich dabei zu haben!
en:
  button: Next
  description: We'd love to keep you in the loop. Share your name and email, and we'll update you about the Early Bird program and your part in it.
  title: We are happy to have you on the program!
</i18n>
