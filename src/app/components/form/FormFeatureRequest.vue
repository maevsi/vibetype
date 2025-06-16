<template>
  <form ref="form" class="flex flex-col gap-4" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="featureName">
      <FormItem>
        <FormLabel>
          <TypographySubtitleSmall>
            {{ t('featureName') }}
          </TypographySubtitleSmall>
        </FormLabel>
        <FormControl>
          <AppInput v-bind="componentField" type="text" />
        </FormControl>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="featureDescription">
      <FormItem>
        <FormLabel>
          <TypographySubtitleSmall>
            {{ t('featureDescription') }}
          </TypographySubtitleSmall>
        </FormLabel>
        <FormControl>
          <Textarea v-bind="componentField" />
        </FormControl>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="screenshots">
      <FormItem>
        <FormLabel>
          <TypographySubtitleSmall>
            {{ t('screenshots') }}
          </TypographySubtitleSmall>
        </FormLabel>
        <div class="relative rounded-lg border-2 border-dashed p-8 text-center">
          <FormControl>
            <input
              v-bind="componentField"
              type="file"
              multiple
              accept="image/*,.pdf"
              class="absolute inset-0 opacity-0"
              @change="handleFileChange"
            />
          </FormControl>
          <div class="flex flex-col items-center gap-2">
            <AppIconAdd />
            <div>
              <TypographyBodySmall>
                {{ t('choose') }}
              </TypographyBodySmall>
            </div>
          </div>
        </div>
        <div v-if="uploadedFiles.length > 0" class="flex flex-col gap-2">
          <div
            v-for="(file, index) in uploadedFiles"
            :key="index"
            class="flex items-center justify-between rounded-lg border p-2"
          >
            <div class="flex items-center gap-3">
              <TypographyBodySmall>
                {{ file.name }}
              </TypographyBodySmall>
            </div>
            <AppButton
              :aria-label="t('iconTrashLabel')"
              class="flex h-full justify-center"
              @click="removeFile(index)"
            >
              <IHeroiconsTrash :title="t('iconTrash')" />
            </AppButton>
          </div>
        </div>
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="emailAddress">
      <FormItem>
        <FormLabel>
          <TypographySubtitleSmall>
            {{ t('emailAddress') }}
          </TypographySubtitleSmall>
        </FormLabel>
        <FormControl>
          <AppInput v-bind="componentField" type="text" />
        </FormControl>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel>
          <TypographySubtitleSmall>
            {{ t('name') }}
          </TypographySubtitleSmall>
        </FormLabel>
        <FormControl>
          <AppInput v-bind="componentField" type="text" />
        </FormControl>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField>
    <FormField v-slot="{ value, handleChange }" name="consent" type="checkbox">
      <FormItem>
        <div class="flex gap-3">
          <FormControl class="mt-1">
            <Checkbox :model-value="value" @update:model-value="handleChange" />
          </FormControl>
          <FormLabel>
            <TypographySubtitleMedium>
              {{ t('consent') }}
            </TypographySubtitleMedium>
          </FormLabel>
        </div>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField>
  </form>
</template>
<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'

const emit = defineEmits<{ success: [] }>()
const modelError = defineModel<Error>('error')

const { t } = useI18n()
const templateForm = useTemplateRef('form')

const uploadedFiles = ref<{ name: string; file: File }[]>([])

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files) {
    const newFiles = Array.from(target.files)
    const filesToAdd = newFiles.map((file) => ({
      name: file.name,
      file: file,
    }))
    uploadedFiles.value.push(...filesToAdd)
    target.value = ''
  }
}

const removeFile = (index: number) => {
  uploadedFiles.value.splice(index, 1)
}

const submit = () => {
  templateForm.value?.dispatchEvent(
    new Event('submit', { bubbles: true, cancelable: true }),
  )
}

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(schemaFormFeatureRequest),
})

const onSubmit = handleSubmit(async (values) => {
  try {
    await $fetch('/api/monday/feature-request', {
      method: 'POST',
      body: values,
    })
    emit('success')
  } catch (error) {
    modelError.value = error as Error
  }
})

defineExpose({
  submit,
})
</script>

<i18n lang="yaml">
de:
  choose: Wählen Sie eine Datei zum Hochladen
  consent: Ich bin damit einverstanden, dass meine persönlichen Daten zum Zweck der Kontaktaufnahme und für statistische Analysen verwendet werden.
  emailAddress: E-Mail-Adresse
  featureDescription: Gewünschte Feature-Beschreibung
  featureName: Gewünschte Feature-Name
  iconTrash: löschen
  iconTrashLabel: Dieses hochgeladene Bild löschen.
  name: Name
  screenshots: Screenshots
en:
  choose: Choose a file to upload
  consent: I consent that my personal data is used for the purpose of contacting me and for statistical analysis.
  emailAddress: Email address
  featureDescription: Wished feature description
  featureName: Wished feature name
  iconTrash: trash
  iconTrashLabel: Delete this image upload.
  name: Name
  screenshots: Screenshots
</i18n>
