<template>
  <AppForm
    :class="classProps"
    :errors="api.errors"
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

const { class: classProps = undefined } = defineProps<{
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
</script>
