<template>
  <form
    ref="formRef"
    class="flex flex-col gap-4"
    @submit.prevent="form.handleSubmit"
  >
    <FieldGroup>
      <form.Field v-slot="{ field }" name="itemDescription">
        <Field :data-invalid="isFieldInvalid(field)">
          <FieldLabel :for="field.name">
            <TypographySubtitleSmall>
              {{ t('itemDescription') }}
            </TypographySubtitleSmall>
          </FieldLabel>
          <Textarea
            :id="field.name"
            :name="field.name"
            :model-value="field.state.value"
            :aria-invalid="isFieldInvalid(field)"
            rows="8"
            @blur="field.handleBlur"
            @input="
              field.handleChange(($event.target as HTMLTextAreaElement).value)
            "
          />
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="userName">
        <Field :data-invalid="isFieldInvalid(field)">
          <FieldLabel :for="field.name">
            <TypographySubtitleSmall>
              {{ t('userName') }}
            </TypographySubtitleSmall>
          </FieldLabel>
          <AppInput
            :id="field.name"
            :name="field.name"
            :model-value="field.state.value"
            :aria-invalid="isFieldInvalid(field)"
            type="text"
            @blur="field.handleBlur"
            @input="
              field.handleChange(($event.target as HTMLInputElement).value)
            "
          />
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="userEmailAddress">
        <Field :data-invalid="isFieldInvalid(field)">
          <FieldLabel :for="field.name">
            <TypographySubtitleSmall>
              {{ t('userEmailAddress') }}
            </TypographySubtitleSmall>
          </FieldLabel>
          <AppInput
            :id="field.name"
            :name="field.name"
            :model-value="field.state.value"
            :aria-invalid="isFieldInvalid(field)"
            type="email"
            @blur="field.handleBlur"
            @input="
              field.handleChange(($event.target as HTMLInputElement).value)
            "
          />
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="userConsentAccuracy">
        <Field orientation="horizontal" :data-invalid="isFieldInvalid(field)">
          <AppCheckbox
            :id="field.name"
            :model-value="field.state.value"
            required
            class="mt-1"
            @update:model-value="
              (checked) => field.handleChange(checked === true)
            "
          />
          <div class="flex flex-col gap-1">
            <FieldLabel :for="field.name">
              <TypographySubtitleSmall>
                {{ t('userConsentAccuracy') }}
              </TypographySubtitleSmall>
            </FieldLabel>
            <FieldError
              v-if="isFieldInvalid(field)"
              :errors="field.state.meta.errors"
            />
          </div>
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="userConsentProcessing">
        <Field orientation="horizontal" :data-invalid="isFieldInvalid(field)">
          <AppCheckbox
            :id="field.name"
            :model-value="field.state.value"
            required
            class="mt-1"
            @update:model-value="
              (checked) => field.handleChange(checked === true)
            "
          />
          <div class="flex flex-col gap-1">
            <FieldLabel :for="field.name">
              <TypographySubtitleSmall>
                <i18n-t keypath="userConsentProcessing">
                  <template #contactForm>
                    <AppLink is-underlined :to="localePath('support-contact')">
                      {{ t('userConsentProcessingContactForm') }}
                    </AppLink>
                  </template>
                  <template #privacyPolicy>
                    <AppLink
                      is-underlined
                      :to="localePath('docs-legal-privacy')"
                    >
                      {{ t('userConsentProcessingPrivacyPolicy') }}
                    </AppLink>
                  </template>
                </i18n-t>
              </TypographySubtitleSmall>
            </FieldLabel>
            <FieldError
              v-if="isFieldInvalid(field)"
              :errors="field.state.meta.errors"
            />
          </div>
        </Field>
      </form.Field>
    </FieldGroup>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

// compiler
const emit = defineEmits<{
  success: []
}>()

// form
const modelError = defineModel<Error>('error')
const formRef = useTemplateRef<HTMLFormElement>('formRef')

const formSchema = z.object({
  itemDescription: z.string().min(1).max(10000),
  userConsentAccuracy: z.boolean().refine((value) => value === true),
  userConsentProcessing: z.boolean().refine((value) => value === true),
  userEmailAddress: z.string().email().max(1000).or(z.literal('')),
  userName: z.string().max(100),
})

const form = useForm({
  defaultValues: {
    itemDescription: '',
    userConsentAccuracy: false,
    userConsentProcessing: false,
    userEmailAddress: '',
    userName: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    try {
      await $fetch('/api/service/zammad/report', {
        body: {
          ...value,
          userEmailAddress: value.userEmailAddress || undefined,
          userName: value.userName || undefined,
        },
        method: 'POST',
      })
      emit('success')
    } catch (error) {
      modelError.value = error as Error
    }
  },
})

const submit = () => {
  formRef.value?.dispatchEvent(
    new Event('submit', { bubbles: true, cancelable: true }),
  )
}
defineExpose({ submit })

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
