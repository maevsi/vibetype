<template>
  <AppForm
    button-variant="primary-critical"
    :form="v$"
    :is-form-sent="isFormSent"
    :submit-name="t('deletion', { item: itemNameDeletion })"
    @submit.prevent="submit"
  >
    <FormInputPassword
      :form-input="v$.password"
      :title="t('passwordAccount')"
      @input="form.password = $event"
    />
  </AppForm>
</template>

<script setup lang="ts">
import type { AnyVariables, UseMutationResponse } from '@urql/vue'
import { useVuelidate } from '@vuelidate/core'

const {
  errorsPgIds = undefined,
  isToastHidden = undefined,
  itemNameDeletion,
  itemNameSuccess,
  mutation,
  variables = undefined,
} = defineProps<{
  errorsPgIds?: Record<string, string>
  isToastHidden?: boolean
  itemNameDeletion: string
  itemNameSuccess: string
  mutation: UseMutationResponse<unknown, AnyVariables>
  variables?: Record<string, unknown>
}>()

const modelError = defineModel<Error>('error')

const emit = defineEmits<{
  success: []
}>()

const { t } = useI18n()

// data
const form = reactive({
  password: ref<string>(),
})
const isFormSent = ref(false)

// api data
const api = await useApiData([mutation])

// methods
const submit = async () => {
  if (!(await isFormValid({ v$, isFormSent }))) return

  const result = await mutation.executeMutation({
    password: form.password,
    ...variables,
  })

  if (result.error) return

  if (!isToastHidden) {
    await showToast({
      title: t('success', {
        item: itemNameSuccess,
      }),
    })
  }

  emit('success')
}

// vuelidate
const rules = {
  password: VALIDATION_PASSWORD(),
}
const v$ = useVuelidate(rules, form)

watch(
  () => api.value.errors,
  (current) => {
    modelError.value = current?.length
      ? new Error(getCombinedErrorMessages(current, errorsPgIds)[0])
      : undefined
  },
)
</script>

<i18n lang="yaml">
de:
  deletion: '{item} endgültig löschen'
  passwordAccount: Konto-Passwort
  success: '{item} erfolgreich gelöscht.'
en:
  deletion: 'Delete {item} permanently'
  passwordAccount: Account password
  success: '{item} deleted successfully.'
</i18n>
