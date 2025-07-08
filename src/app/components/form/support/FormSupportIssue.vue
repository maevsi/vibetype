<template>
  <form ref="form" class="flex flex-col gap-4" @submit="onSubmit">
    <!-- <FormField v-slot="{ componentField }" name="itemName">
      <FormItem>
        <FormLabel>
          <TypographySubtitleSmall>
            {{ t('itemName') }}
          </TypographySubtitleSmall>
        </FormLabel>
        <FormControl>
          <AppInput v-bind="componentField" type="text" />
        </FormControl>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField> -->
    <FormField v-slot="{ componentField }" name="itemDescription">
      <FormItem>
        <FormLabel>
          <TypographySubtitleSmall>
            {{ t('itemDescription') }}
          </TypographySubtitleSmall>
        </FormLabel>
        <FormControl>
          <Textarea v-bind="componentField" rows="8" />
        </FormControl>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField>
    <!-- <FormField v-slot="{ componentField }" name="itemUploads">
      <FormItem>
        <FormLabel>
          <TypographySubtitleSmall>
            {{ t('fileTitle') }}
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
                {{ t('fileDescription') }}
              </TypographyBodySmall>
            </div>
          </div>
        </div>
        <div v-if="uploadedFiles.length" class="flex flex-col gap-2">
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
              :aria-label="t('fileIconTrashLabel')"
              class="flex h-full justify-center"
              @click="removeFile(index)"
            >
              <IHeroiconsTrash :title="t('fileIconTrash')" />
            </AppButton>
          </div>
        </div>
      </FormItem>
    </FormField> -->
    <FormField v-slot="{ componentField }" name="userName">
      <FormItem>
        <FormLabel>
          <TypographySubtitleSmall>
            {{ t('userName') }}
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
    <FormField v-slot="{ componentField }" name="userEmailAddress">
      <FormItem>
        <FormLabel>
          <TypographySubtitleSmall>
            {{ t('userEmailAddress') }}
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
    <FormField
      v-slot="{ value, handleChange }"
      name="userConsent"
      type="checkbox"
    >
      <FormItem>
        <div class="flex gap-3">
          <FormControl class="mt-1">
            <AppCheckbox
              :model-value="value"
              required
              @update:model-value="handleChange"
            />
          </FormControl>
          <FormLabel>
            <TypographySubtitleSmall>
              <i18n-t keypath="userConsent">
                <template #contactForm>
                  <AppLink is-underlined :to="localePath('support-contact')">
                    {{ t('userConsentContactForm') }}
                  </AppLink>
                </template>
                <template #privacyPolicy>
                  <AppLink is-underlined :to="localePath('docs-legal-privacy')">
                    {{ t('userConsentPrivacyPolicy') }}
                  </AppLink>
                </template>
              </i18n-t>
            </TypographySubtitleSmall>
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

// compiler
const emit = defineEmits<{
  success: []
}>()

// // files
// const uploadedFiles = ref<{ name: string; file: File }[]>([])
// const handleFileChange = (event: Event) => {
//   const target = event.target as HTMLInputElement
//   if (target.files) {
//     const newFiles = Array.from(target.files)
//     const filesToAdd = newFiles.map((file) => ({
//       name: file.name,
//       file: file,
//     }))
//     uploadedFiles.value.push(...filesToAdd)
//     target.value = ''
//   }
// }
// const removeFile = (index: number) => {
//   uploadedFiles.value.splice(index, 1)
// }

// form
const templateForm = useTemplateRef('form')
const modelError = defineModel<Error>('error')
const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(schemaFormIssue),
})
const onSubmit = handleSubmit(async (values) => {
  try {
    await $fetch('/api/service/monday/issue', {
      method: 'POST',
      body: values,
    })
    emit('success')
  } catch (error) {
    modelError.value = error as Error
  }
})
const submit = () => {
  templateForm.value?.dispatchEvent(
    new Event('submit', { bubbles: true, cancelable: true }),
  )
}
defineExpose({
  submit,
})

// template
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  # fileDescription: Wähle Dateien zum Hochladen
  # fileIconTrash: Mülleimer
  # fileIconTrashLabel: Diese hochgeladene Datei löschen
  # fileTitle: Screenshots
  itemDescription: Beschreibung
  # itemName: Betreff
  userConsent: 'Ich habe die {privacyPolicy} zur Kenntnis genommen und stimme zu, dass meine Angaben aus diesem Formular zur Beantwortung meiner Anfrage verarbeitet werden. Meine Einwilligung zur Datenverarbeitung kann ich jederzeit über das {contactForm} widerrufen.'
  userConsentContactForm: Kontaktformular
  userConsentPrivacyPolicy: Datenschutzerklärung
  userEmailAddress: E-Mail-Adresse
  userName: Name
en:
  # fileDescription: Choose files to upload
  # fileIconTrash: Trash can
  # fileIconTrashLabel: Delete this uploaded file
  # fileTitle: Screenshots
  itemDescription: Description
  # itemName: Subject
  userConsent: 'I have read the {privacyPolicy} and agree that the information I provide in this form may be processed for the purpose of responding to my inquiry. I can withdraw my consent at any time using the {contactForm}.'
  userConsentContactForm: contact form
  userConsentPrivacyPolicy: privacy policy
  userEmailAddress: Email address
  userName: Name
</i18n>
