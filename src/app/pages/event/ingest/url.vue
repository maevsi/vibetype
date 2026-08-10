<template>
  <div class="flex flex-col gap-2 px-4 py-2">
    <div class="flex flex-col gap-2 p-2">
      <AppTypographyTitle1 variant="emphasized">
        {{ t('title') }}
      </AppTypographyTitle1>
      <AppTypographySubheadline
        class="text-(--figma-neutral-level-4)"
        variant="emphasized"
      >
        {{ t('subtitle') }}
      </AppTypographySubheadline>
    </div>
    <form @submit.prevent="form.handleSubmit">
      <form.Field v-slot="{ field }" name="url">
        <div class="p-2">
          <Field :data-invalid="isFieldInvalid(field)">
            <FormAuthInput
              :id="field.name"
              :aria-invalid="isFieldInvalid(field)"
              :model-value="field.state.value"
              :placeholder="t('enterEventLink')"
              type="url"
              @blur="field.handleBlur"
              @input="field.handleChange($event)"
            >
              <template #icon>
                <IHeroiconsLink />
              </template>
            </FormAuthInput>
            <FieldError
              v-if="isFieldInvalid(field)"
              :errors="field.state.meta.errors"
            />
          </Field>
        </div>
      </form.Field>
      <div class="p-2">
        <ButtonColored
          :aria-label="t('next')"
          class="w-full"
          :disabled="isSubmitting"
          type="submit"
        >
          <AppTypographySubheadline variant="emphasized">
            {{ t('next') }}
          </AppTypographySubheadline>
        </ButtonColored>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'

definePageMeta({
  layout: 'plain',
})

const { t } = useI18n()
const alertError = useAlertError()
const { $csrfFetch } = useNuxtApp()

const isSubmitting = ref(false)

const form = useForm({
  defaultValues: { url: '' },
  validators: {
    onSubmit: schemaFormEventIngestUrl,
  },
  onSubmit: async ({ value }) => {
    isSubmitting.value = true

    try {
      const { output } = await $csrfFetch<{ output: Record<string, unknown> }>(
        '/api/model/event/ingest/url',
        {
          body: { url: value.url },
          method: 'POST',
        },
      )

      await $csrfFetch('/api/service/zammad/ingest/url', {
        body: output,
        method: 'POST',
      })
    } catch (error) {
      alertError({
        ...(error instanceof Error ? { error } : {}),
        messageI18n: t('submitFailed'),
      })
    } finally {
      isSubmitting.value = false
    }
  },
})
</script>

<i18n lang="yaml">
de:
  enterEventLink: Veranstaltungslink eingeben
  next: Weiter
  submitFailed: Übermittlung fehlgeschlagen
  subtitle: Wir nutzen ihn, um die Daten der Veranstaltung zu laden.
  title: Link zur Veranstaltung
en:
  enterEventLink: Enter event link
  next: Next
  submitFailed: Submission failed
  subtitle: We'll use it to fetch the data of the event.
  title: Provide link to event
</i18n>
