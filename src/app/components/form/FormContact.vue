<template>
  <AppForm
    class="flex min-h-0 flex-col"
    :errors="api.errors"
    :errors-pg-ids="{
      postgres23505: t('postgres23505'),
    }"
    :form="v$"
    :is-form-sent="isFormSent"
    :submit-name="t('save')"
    @submit.prevent="submit"
  >
    <FormInput
      class="hidden"
      id-label="input-id"
      placeholder="id"
      title="id"
      type="text"
      :value="v$.rowId"
      @input="form.rowId = $event"
    />
    <FormInputUsername
      :form-input="v$.accountUsername"
      :is-disabled="
        contact?.accountByAccountId?.rowId === store.signedInAccountId
      "
      is-validatable
      @input="form.accountUsername = $event"
    >
      <template #stateInfo>
        <FormInputStateInfo
          v-if="contact?.accountByAccountId?.rowId === store.signedInAccountId"
        >
          <i18n-t keypath="stateInfoUsernameDisabled" tag="span">
            <template #accountSettings>
              <AppLink
                :aria-label="t('stateInfoUsernameDisabledLink')"
                :to="
                  localePath({
                    name: 'account-edit-username',
                    params: { username: store.signedInUsername },
                  })
                "
              >
                {{ t('stateInfoUsernameDisabledLink') }}
              </AppLink>
            </template>
          </i18n-t>
        </FormInputStateInfo>
      </template>
    </FormInputUsername>
    <!-- TODO: replace with override checkbox -->
    <FormInputStateInfo v-if="v$.accountUsername.$model">
      {{ t('accountOverride') }}
    </FormInputStateInfo>
    <FormInput
      id-label="input-first-name"
      :placeholder="t('globalPlaceholderFirstName')"
      :title="t('firstName')"
      type="text"
      :value="v$.firstName"
      @input="form.firstName = $event"
    >
      <template #stateError>
        <FormInputStateError
          :form-input="v$.firstName"
          validation-property="lengthMax"
        >
          {{ t('globalValidationLength') }}
        </FormInputStateError>
      </template>
    </FormInput>
    <FormInput
      id-label="input-last-name"
      :placeholder="t('globalPlaceholderLastName')"
      :title="t('lastName')"
      type="text"
      :value="v$.lastName"
      @input="form.lastName = $event"
    >
      <template #stateError>
        <FormInputStateError
          :form-input="v$.lastName"
          validation-property="lengthMax"
        >
          {{ t('globalValidationLength') }}
        </FormInputStateError>
      </template>
    </FormInput>
    <FormInput
      id-label="input-nickname"
      :title="t('nickname')"
      type="text"
      :value="v$.nickname"
      @input="form.nickname = $event"
    >
      <template #stateError>
        <FormInputStateError
          :form-input="v$.nickname"
          validation-property="lengthMax"
        >
          {{ t('globalValidationLength') }}
        </FormInputStateError>
      </template>
    </FormInput>
    <FormInputEmailAddress
      :form-input="v$.emailAddress"
      @input="form.emailAddress = $event"
    />
    <!-- <FormInput
      id-label="input-address"
      :title="t('address')"
      type="textarea"
      :value="v$.address"
      @input="form.address = $event"
    >
      <textarea
        v-if="v$.address"
        id="input-address"
        v-model.trim="v$.address.$model"
        :placeholder="t('globalPlaceholderAddress')"
        rows="2"
      />
      <template #stateError>
        <FormInputStateError
          :form-input="v$.address"
          validation-property="lengthMax"
        >
          {{ t('globalValidationLength') }}
        </FormInputStateError>
      </template>
    </FormInput> -->
    <FormInputPhoneNumber
      :form-input="v$.phoneNumber"
      @input="form.phoneNumber = $event"
    />
    <FormInputUrl :form-input="v$.url" @input="form.url = $event" />
    <FormInput
      id-label="input-note"
      :title="t('note')"
      type="text"
      :value="v$.note"
      @input="form.note = $event"
    >
      <Textarea
        v-if="v$.note"
        id="input-note"
        v-model.trim="v$.note.$model"
        class="bg-(--semantic-base-input-field-fill) dark:bg-(--semantic-base-input-field-fill)"
        rows="3"
      />
      <template #stateError>
        <FormInputStateError
          :form-input="v$.note"
          validation-property="lengthMax"
        >
          {{ t('globalValidationLength') }}
        </FormInputStateError>
      </template>
    </FormInput>
  </AppForm>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'

import { useCreateContactMutation } from '~~/gql/documents/mutations/contact/contactCreate'
import { useUpdateContactByRowIdMutation } from '~~/gql/documents/mutations/contact/contactUpdateByRowId'
import type { ContactItemFragment } from '~~/gql/generated/graphql'

const { contact = undefined } = defineProps<{
  contact?: Pick<
    ContactItemFragment,
    | 'accountByAccountId'
    // | 'addressByAddressId'
    | 'emailAddress'
    | 'firstName'
    // | 'id'
    | 'lastName'
    | 'nickname'
    | 'note'
    | 'phoneNumber'
    | 'rowId'
    | 'url'
  >
}>()

const emit = defineEmits<{
  submitSuccess: []
}>()

const { $urql } = useNuxtApp()
const store = useStore()
const localePath = useLocalePath()
const { t } = useI18n()

// data
const form = reactive({
  accountUsername: ref<string>(),
  address: ref<string>(),
  emailAddress: ref<string>(),
  firstName: ref<string>(),
  lastName: ref<string>(),
  nickname: ref<string>(),
  note: ref<string>(),
  phoneNumber: ref<string>(),
  rowId: ref<string>(),
  url: ref<string>(),
})
const isFormSent = ref(false)

// api data
const createContactMutation = useCreateContactMutation()
const updateContactByRowIdMutation = useUpdateContactByRowIdMutation()
const api = await useApiData([
  createContactMutation,
  updateContactByRowIdMutation,
])

// methods
const submit = async () => {
  if (!(await isFormValid({ v$, isFormSent }))) return

  const account = form.accountUsername
    ? await getAccountByUsername({
        $urql,
        username: form.accountUsername,
      })
    : undefined

  if (form.rowId) {
    // Edit
    const result = await updateContactByRowIdMutation.executeMutation({
      id: form.rowId,
      contactPatch: {
        accountId: account?.rowId || null,
        // address: form.address || null,
        createdBy: store.signedInAccountId,
        emailAddress: form.emailAddress || null,
        firstName: form.firstName || null,
        lastName: form.lastName || null,
        nickname: form.nickname || null,
        note: form.note || null,
        phoneNumber: form.phoneNumber || null,
        url: form.url || null,
      },
    })

    if (result.error || !result.data) return

    emit('submitSuccess')
  } else {
    // Add
    if (!store.signedInAccountId) return

    const result = await createContactMutation.executeMutation({
      contactInput: {
        accountId: account?.rowId || null,
        // address: form.address || null,
        createdBy: store.signedInAccountId,
        emailAddress: form.emailAddress || null,
        firstName: form.firstName || null,
        lastName: form.lastName || null,
        nickname: form.nickname || null,
        note: form.note || null,
        phoneNumber: form.phoneNumber || null,
        url: form.url || null,
      },
    })

    if (result.error || !result.data) return

    emit('submitSuccess')
  }
}
const updateForm = (
  data?: Pick<
    ContactItemFragment,
    | 'accountByAccountId'
    // | 'addressByAddressId'
    | 'emailAddress'
    | 'firstName'
    // | 'id'
    | 'lastName'
    | 'nickname'
    | 'note'
    | 'phoneNumber'
    | 'rowId'
    | 'url'
  >,
) => {
  if (!data) return

  form.accountUsername = data.accountByAccountId?.username
  // form.address = data.address || undefined
  form.emailAddress = data.emailAddress || undefined
  form.firstName = data.firstName || undefined
  form.lastName = data.lastName || undefined
  form.nickname = data.nickname || undefined
  form.note = data.note || undefined
  form.phoneNumber = data.phoneNumber || undefined
  form.rowId = data.rowId
  form.url = data.url || undefined
}

// vuelidate
const rules = {
  accountUsername: VALIDATION_USERNAME({
    validateExistence: true,
  }),
  address: VALIDATION_PRIMITIVE({
    lengthMax: VALIDATION_ADDRESS_LENGTH_MAXIMUM,
  }),
  emailAddress: VALIDATION_EMAIL_ADDRESS({}),
  firstName: VALIDATION_PRIMITIVE({
    lengthMax: VALIDATION_NAME_FIRST_LENGTH_MAXIMUM,
  }),
  lastName: VALIDATION_PRIMITIVE({
    lengthMax: VALIDATION_NAME_LAST_LENGTH_MAXIMUM,
  }),
  nickname: VALIDATION_PRIMITIVE({
    lengthMax: VALIDATION_NAME_NICK_LENGTH_MAXIMUM,
  }),
  note: VALIDATION_PRIMITIVE({
    lengthMax: VALIDATION_NOTE_LENGTH_MAXIMUM,
  }),
  phoneNumber: {},
  rowId: {},
  url: VALIDATION_URL(),
}
const v$ = useVuelidate(rules, form)

// initialization
updateForm(contact)
</script>

<i18n lang="yaml">
de:
  accountOverride: Falls angegeben, nutzt @.upper:{'globalSiteName'} die folgenden Daten anstelle der Daten des oben genannten Kontos.
  # address: Adresse
  firstName: Vorname
  lastName: Nachname
  nickname: Spitzname
  note: Notiz
  postgres23505: Ein Kontakt mit dieser Nutzernamen existiert bereits!
  save: Speichern
  stateInfoUsernameDisabled: Du kannst deinen Nutzernamen in den {accountSettings} ändern.
  stateInfoUsernameDisabledLink: Einstellungen deines Kontos
en:
  accountOverride: If given, @.upper:{'globalSiteName'} will prefer to use the following data instead of the data given by the account above.
  # address: Address
  firstName: First name
  lastName: Last name
  nickname: Nickname
  note: Note
  postgres23505: A contact with this username already exists!
  save: Save
  stateInfoUsernameDisabled: You can edit your username in {accountSettings}.
  stateInfoUsernameDisabledLink: your account's settings
</i18n>
