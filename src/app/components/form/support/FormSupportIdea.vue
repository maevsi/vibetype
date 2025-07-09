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

// form
const templateForm = useTemplateRef('form')
const modelError = defineModel<Error>('error')
const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(schemaFormIdea),
})
const onSubmit = handleSubmit(async (values) => {
  try {
    await $fetch('/api/service/monday/idea', {
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
  itemDescription: Beschreibung
  # itemName: Titel
  userConsent: 'Ich habe die {privacyPolicy} zur Kenntnis genommen und stimme zu, dass meine Angaben aus diesem Formular zur Beantwortung meiner Anfrage verarbeitet werden. Meine Einwilligung zur Datenverarbeitung kann ich jederzeit über das {contactForm} widerrufen.'
  userConsentContactForm: Kontaktformular
  userConsentPrivacyPolicy: Datenschutzerklärung
  userEmailAddress: E-Mail-Adresse
  userName: Name
en:
  itemDescription: Description
  # itemName: Title
  userConsent: 'I have read the {privacyPolicy} and agree that the information I provide in this form may be processed for the purpose of responding to my inquiry. I can withdraw my consent at any time using the {contactForm}.'
  userConsentContactForm: contact form
  userConsentPrivacyPolicy: privacy policy
  userEmailAddress: Email address
  userName: Name
</i18n>
