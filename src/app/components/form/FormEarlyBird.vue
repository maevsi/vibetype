<template>
  <form ref="form" class="flex flex-col gap-4" @submit="onSubmit">
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
    <FormField
      v-slot="{ value, handleChange }"
      name="agreement"
      type="checkbox"
    >
      <FormItem>
        <div class="flex gap-3">
          <FormControl class="mt-1">
            <Checkbox :model-value="value" @update:model-value="handleChange" />
          </FormControl>
          <FormLabel>
            <TypographySubtitleMedium>
              {{ t('agreement') }}
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

const emit = defineEmits<{
  submit: []
  success: []
}>()

const { t } = useI18n()
const templateForm = useTemplateRef('form')
const fetchError = ref(null)
const modelError = defineModel<Error>('error')

// form
const submit = () => {
  templateForm.value?.dispatchEvent(
    new Event('submit', { bubbles: true, cancelable: true }),
  )
}
const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(schemaFormEarlyBird),
})
const onSubmit = handleSubmit(async (values) => {
  try {
    fetchError.value = null

    await $fetch('/api/service/monday/early-bird', {
      method: 'POST',
      body: values,
    })

    emit('success')
  } catch (error) {
    fetchError.value = error
  }
})

watch(
  () => fetchError.value,
  (error) => {
    modelError.value = error ? new Error() : undefined
  },
)

defineExpose({
  submit,
})
</script>

<i18n lang="yaml">
de:
  agreement: Mit deiner Teilnahme stimmst du zu, dass wir deine Kontaktdaten speichern und dich im Rahmen des Programms kontaktieren dürfen.
  emailAddress: E-Mail-Adresse
  name: Name
en:
  agreement: By participating, you agree that we may save your contact details and contact you as part of the program.
  emailAddress: Email address
  name: Name
</i18n>
