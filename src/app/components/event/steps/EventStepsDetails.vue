<template>
  <div class="mt-8 flex flex-col gap-4">
    <AppStepIndex :count="5" :index="3" />
    <TypographyH3>{{ t('title') }}</TypographyH3>
    <TypographyH6>{{ t('eventDescription') }}</TypographyH6>

    <div class="rounded-lg border border-(--semantic-base-line) p-4 shadow-sm">
      <textarea
        :value="props.form.description"
        class="min-h-[400px] w-full resize-none border-0 focus:outline-none"
        :placeholder="t('eventDescriptionPlaceholder')"
        maxlength="2500"
        @input="onDescriptionInput"
      />
    </div>
    <div class="text-right">
      <TypographySubtitleSmall>
        {{ t('maxCharacters', { count: props.form.description.length }) }}
      </TypographySubtitleSmall>
    </div>
    <div class="flex flex-col gap-2">
      <TypographyH6>
        {{ t('websiteUrl') }}
      </TypographyH6>
      <div
        class="flex items-center rounded-lg border border-(--semantic-base-line) p-4 shadow-sm"
        :class="{
          'border-(--semantic-critic-strong)':
            props.form.website && !isValidWebsite,
        }"
      >
        <input
          :value="props.form.website"
          type="url"
          class="flex-1 focus:border-transparent focus:ring-0 focus:outline-none"
          :placeholder="t('urlPlaceholder')"
          @input="onWebsiteInput"
        />
        <Link2 class="size-6 text-(--semantic-base-icon-primary)" />
      </div>
      <TypographyBodySmall
        v-if="props.form.website && !isValidWebsite"
        class="text-(--semantic-critic-strong)"
      >
        {{ t('pleaseEnterValidUrl') }}
      </TypographyBodySmall>
    </div>
    <ButtonColored
      :disabled="!props.isDetailsValid"
      variant="primary"
      class="w-full"
      :aria-label="t('button')"
      @click="emit('next')"
    >
      {{ t('button') }}
    </ButtonColored>
  </div>
</template>

<script setup lang="ts">
import type { BaseValidation } from '@vuelidate/core'
import { Link2 } from 'lucide-vue-next'

const props = defineProps<{
  form: {
    description: string
    website: string
  }
  validation: BaseValidation
  isDetailsValid: boolean
}>()

const emit = defineEmits<{
  updateForm: [value: Partial<typeof props.form>]
  next: []
}>()

const { t } = useI18n()

const isValidWebsite = ref(false)

const validateWebsite = (url: string) => {
  try {
    if (!url.startsWith('https://')) return false
    const urlObj = new URL(url)
    const validTLDs = /\.(com|org|net|edu|gov|io|co|[a-z]{2})$/i
    const hasValidHostname =
      urlObj.hostname.includes('.') &&
      urlObj.hostname.length > 3 &&
      /^[a-zA-Z0-9][a-zA-Z0-9-._]+[a-zA-Z0-9]$/.test(urlObj.hostname) &&
      validTLDs.test(urlObj.hostname)
    return hasValidHostname
  } catch {
    return false
  }
}

const onDescriptionInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('updateForm', { description: target.value })
}

const onWebsiteInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  isValidWebsite.value = validateWebsite(target.value)
  emit('updateForm', { website: target.value })
}
</script>
<i18n lang="yaml">
de:
  button: Weiter
  eventDescription: Veranstaltungsbeschreibung
  eventDescriptionPlaceholder: Beschreibe deine Veranstaltung...
  maxCharacters: '{count}/2500 Zeichen'
  pleaseEnterValidUrl: Bitte gib eine gültige URL ein
  title: Weitere Details
  urlPlaceholder: Gib die URL deiner Website ein
  websiteUrl: Website URL

en:
  button: Next
  eventDescription: Description
  eventDescriptionPlaceholder: Describe your event...
  maxCharacters: '{count}/2500 characters'
  pleaseEnterValidUrl: Please enter a valid URL
  title: More Details
  urlPlaceholder: Enter the URL of your website
  websiteUrl: Website URL
</i18n>
