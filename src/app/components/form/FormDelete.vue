<template>
  <AppForm
    :errors="api.errors"
    :errors-pg-ids="errorsPgIds"
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
    <template #submit-icon>
      <IHeroiconsTrash />
    </template>
  </AppForm>
</template>

<script setup lang="ts">
import type { AnyVariables, UseMutationResponse } from '@urql/vue'
import { useVuelidate } from '@vuelidate/core'

const {
  errorsPgIds = undefined,
  itemNameDeletion,
  itemNameSuccess,
  mutation,
  variables = undefined,
} = defineProps<{
  errorsPgIds?: Record<string, string>
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

  await showToast({
    title: t('success', {
      item: itemNameSuccess,
    }),
  })
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
      ? new Error(
          getCombinedErrorMessages(current, {
            postgres23503: t('postgres23503'),
            postgres28P01: t('postgres28P01'),
          })[0],
        )
      : undefined
  },
)
</script>

<i18n lang="yaml">
de:
  deletion: '{item} löschen'
  passwordAccount: Konto-Passwort
  postgres23503: Dir gehören noch Daten! Lösche erst all deine Veranstaltungen, Kontakte und Bilder.
  postgres28P01: Passwort falsch! Überprüfe, ob du alles richtig geschrieben hast.
  success: '{item} erfolgreich gelöscht.'
en:
  deletion: 'Delete {item}'
  passwordAccount: Account password
  postgres23503: There's still some data connected to your account! Delete all your events, contacts and images first.
  postgres28P01: Password incorrect! Check for spelling mistakes.
  success: '{item} deleted successfully.'
</i18n>
