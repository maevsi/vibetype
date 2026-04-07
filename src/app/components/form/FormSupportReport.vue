<template>
  <form ref="form" class="flex flex-col gap-4" @submit="onSubmit">
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
    <FormFieldConsent name="userConsentAccuracy">
      {{ t('userConsentAccuracy') }}
    </FormFieldConsent>
    <FormFieldConsent name="userConsentProcessing">
      <i18n-t keypath="userConsentProcessing">
        <template #contactForm>
          <AppLink is-underlined :to="localePath('support-contact')">
            {{ t('userConsentProcessingContactForm') }}
          </AppLink>
        </template>
        <template #privacyPolicy>
          <AppLink is-underlined :to="localePath('docs-legal-privacy')">
            {{ t('userConsentProcessingPrivacyPolicy') }}
          </AppLink>
        </template>
      </i18n-t>
    </FormFieldConsent>
  </form>
</template>

<script setup lang="ts">
// compiler
const emit = defineEmits<{
  success: []
}>()

// form
const modelError = defineModel<Error>('error')
const { onSubmit, submit } = useFormSubmit({
  emit,
  endpoint: '/api/service/zammad/report',
  modelError,
  schema: schemaFormReport,
})
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
  userConsentAccuracy: Ich stelle sicher, nach bestem Wissen und Gewissen, dass alle oben offengelegten Informationen korrekt und wahrheitsgemäß sind.
  userConsentProcessing: 'Ich stimme zu, dass meine Angaben aus diesem Formular gemäß der {privacyPolicy} zur Beantwortung meiner Anfrage verarbeitet werden. Meine Einwilligung zur Datenverarbeitung kann ich jederzeit über das {contactForm} widerrufen.'
  userConsentProcessingContactForm: Kontaktformular
  userConsentProcessingPrivacyPolicy: Datenschutzerklärung
  userEmailAddress: E-Mail-Adresse
  userName: Name
en:
  itemDescription: Description
  userConsentAccuracy: I ensure, to the best of my ability and knowledge, that all the information disclosed above is accurate and true.
  userConsentProcessing: 'I agree that the information I provide in this form may be processed in accordance with the {privacyPolicy} for the purpose of responding to my inquiry. I can withdraw my consent at any time using the {contactForm}.'
  userConsentProcessingContactForm: contact form
  userConsentProcessingPrivacyPolicy: privacy policy
  userEmailAddress: Email address
  userName: Name
</i18n>
