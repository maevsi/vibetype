<template>
  <AppForm
    :form="v$"
    :is-form-sent="isFormSent"
    is-button-hidden
    @submit.prevent="submit"
  >
    <FormInputPassword
      :form-input="v$.password"
      is-strength-shown
      :title="t('passwordNew')"
      @input="form.password = $event"
    />
  </AppForm>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { useAccountPasswordResetMutation } from '~~/gql/documents/mutations/account/accountPasswordReset'

const { code } = defineProps<{
  code: string
}>()

const emit = defineEmits<{
  success: []
}>()

const { t } = useI18n()

// data
const form = reactive({
  password: ref<string>(),
})
const isFormSent = ref(false)
const modelError = defineModel<Error>('error')

// api data
const passwordResetMutation = useAccountPasswordResetMutation()
const api = getApiData([passwordResetMutation])

// methods
const submit = async () => {
  if (!(await isFormValid({ v$, isFormSent }))) return

  const result = await passwordResetMutation.executeMutation({
    code,
    password: form.password || '',
  })

  if (result.error || !result.data) return

  emit('success')
}

// vuelidate
const rules = {
  password: VALIDATION_PASSWORD(),
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
          getCombinedErrorMessages(current, {
            postgres22023: t('postgres22023'),
            postgresP0002: t('postgresP0002'),
            postgres55000: t('postgres55000'),
          })[0],
        )
      : undefined
  },
)
</script>

<i18n lang="yaml">
de:
  passwordNew: Gib dein neues Passwort ein
  postgres22023: Das Passwort ist zu kurz! Überlege dir ein längeres.
  postgresP0002: Unbekannter Zurücksetzungslink! Hast du dein Passwort vielleicht schon zurückgesetzt?
  postgres55000: Der Zurücksetzungslink ist abgelaufen!
en:
  passwordNew: Enter new password
  postgres22023: This password is too short! Think of a longer one.
  postgresP0002: Invalid reset link! Have you perhaps already reset your password?
  postgres55000: Your reset link has expired!
</i18n>
