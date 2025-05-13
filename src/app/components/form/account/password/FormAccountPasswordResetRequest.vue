<template>
  <AppForm
    :class="classProps"
    :form="v$"
    :is-form-sent="isFormSent"
    is-button-hidden
    @submit.prevent="submit"
  >
    <FormInputEmailAddress
      :form-input="v$.emailAddress"
      @input="form.emailAddress = $event"
    />
  </AppForm>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import type { HtmlHTMLAttributes } from 'vue'

import { useAccountPasswordResetRequestMutation } from '~~/gql/documents/mutations/account/accountPasswordResetRequest'

const { class: classProps } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()

const emit = defineEmits<{
  success: []
}>()

const { locale } = useI18n()

// data
const form = reactive({
  emailAddress: ref<string>(),
})
const isFormSent = ref(false)
const modelError = defineModel<Error>('error')

// api data
const passwordResetRequestMutation = useAccountPasswordResetRequestMutation()
const api = getApiData([passwordResetRequestMutation])

// methods
const submit = async () => {
  if (!(await isFormValid({ v$, isFormSent }))) return

  const result = await passwordResetRequestMutation.executeMutation({
    emailAddress: form.emailAddress || '',
    language: locale.value,
  })

  if (result.error || !result.data) return

  emit('success')
}

// vuelidate
const rules = {
  emailAddress: VALIDATION_EMAIL_ADDRESS({ isRequired: true }),
}
const v$ = useVuelidate(rules, form)

defineExpose({
  submit,
})

watch(
  () => api.value.errors,
  (current) => {
    modelError.value = current?.length
      ? new Error(
          // TODO: Use appropriate error codes here
          getCombinedErrorMessages(current, {
            // postgres55000: t('postgres12345'),
            // postgresP0002: t('postgresP6789'),
          })[0],
        )
      : undefined
  },
)
</script>
