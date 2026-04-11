<template>
  <form
    class="flex min-h-0 flex-col"
    novalidate
    @submit.prevent="form.handleSubmit"
  >
    <div class="flex flex-col gap-4">
      <form.Field
        v-slot="{ field }"
        name="accountUsername"
        :validators="{
          onBlurAsync: async ({ value: val }) => {
            if (!val) return undefined

            const exists = await validateUsername()(val)
            return exists ? undefined : t('usernameNotFound')
          },
          onBlurAsyncDebounceMs: 300,
        }"
      >
        <Field>
          <FieldLabel for="input-username">{{ t('username') }}</FieldLabel>
          <FieldContent>
            <Input
              id="input-username"
              type="text"
              :disabled="
                contact?.accountByAccountId?.rowId === store.signedInAccountId
              "
              :model-value="field.state.value"
              :aria-invalid="isFieldInvalid(field)"
              @blur="field.handleBlur"
              @input="
                field.handleChange(($event.target as HTMLInputElement).value)
              "
            />
          </FieldContent>
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="normalizeFieldErrors(field.state.meta.errors)"
          />
          <p
            v-if="
              contact?.accountByAccountId?.rowId === store.signedInAccountId
            "
            class="text-muted-foreground text-sm"
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
          </p>
        </Field>
      </form.Field>
      <p
        v-if="form.getFieldValue('accountUsername')"
        class="text-muted-foreground text-sm"
      >
        {{ t('accountOverride') }}
      </p>
      <form.Field v-slot="{ field }" name="firstName">
        <Field>
          <FieldLabel for="input-first-name">{{ t('firstName') }}</FieldLabel>
          <FieldContent>
            <Input
              id="input-first-name"
              type="text"
              :placeholder="t('globalPlaceholderFirstName')"
              :model-value="field.state.value"
              :aria-invalid="isFieldInvalid(field)"
              @blur="field.handleBlur"
              @input="
                field.handleChange(($event.target as HTMLInputElement).value)
              "
            />
          </FieldContent>
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="lastName">
        <Field>
          <FieldLabel for="input-last-name">{{ t('lastName') }}</FieldLabel>
          <FieldContent>
            <Input
              id="input-last-name"
              type="text"
              :placeholder="t('globalPlaceholderLastName')"
              :model-value="field.state.value"
              :aria-invalid="isFieldInvalid(field)"
              @blur="field.handleBlur"
              @input="
                field.handleChange(($event.target as HTMLInputElement).value)
              "
            />
          </FieldContent>
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="nickname">
        <Field>
          <FieldLabel for="input-nickname">{{ t('nickname') }}</FieldLabel>
          <FieldContent>
            <Input
              id="input-nickname"
              type="text"
              :model-value="field.state.value"
              :aria-invalid="isFieldInvalid(field)"
              @blur="field.handleBlur"
              @input="
                field.handleChange(($event.target as HTMLInputElement).value)
              "
            />
          </FieldContent>
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="emailAddress">
        <Field>
          <FieldLabel for="input-email-address">{{
            t('emailAddress')
          }}</FieldLabel>
          <FieldContent>
            <Input
              id="input-email-address"
              type="email"
              :model-value="field.state.value"
              :aria-invalid="isFieldInvalid(field)"
              @blur="field.handleBlur"
              @input="
                field.handleChange(($event.target as HTMLInputElement).value)
              "
            />
          </FieldContent>
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="phoneNumber">
        <Field>
          <FieldLabel for="input-phone-number">{{
            t('phoneNumber')
          }}</FieldLabel>
          <FieldContent>
            <Input
              id="input-phone-number"
              type="tel"
              :placeholder="t('globalPlaceholderPhoneNumber')"
              :model-value="field.state.value"
              :aria-invalid="isFieldInvalid(field)"
              @blur="field.handleBlur"
              @input="
                field.handleChange(($event.target as HTMLInputElement).value)
              "
            />
          </FieldContent>
          <p
            v-if="
              field.state.meta.isTouched &&
              field.state.value &&
              !REGEX_PHONE_NUMBER.test(field.state.value)
            "
            class="text-muted-foreground text-sm"
          >
            {{ t('phoneNumberFormat') }}
          </p>
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="url">
        <Field>
          <FieldLabel for="input-url">{{ t('url') }}</FieldLabel>
          <FieldContent>
            <Input
              id="input-url"
              type="url"
              :placeholder="t('globalPlaceholderUrl')"
              :model-value="field.state.value"
              :aria-invalid="isFieldInvalid(field)"
              @blur="field.handleBlur"
              @input="
                field.handleChange(($event.target as HTMLInputElement).value)
              "
            />
          </FieldContent>
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="note">
        <Field>
          <FieldLabel for="input-note">{{ t('note') }}</FieldLabel>
          <FieldContent>
            <Textarea
              id="input-note"
              class="bg-(--semantic-base-input-field-fill) dark:bg-(--semantic-base-input-field-fill)"
              rows="3"
              :model-value="field.state.value"
              :aria-invalid="isFieldInvalid(field)"
              @blur="field.handleBlur"
              @input="
                field.handleChange(($event.target as HTMLInputElement).value)
              "
            />
          </FieldContent>
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <div class="flex flex-col items-center">
        <ButtonColored :aria-label="t('save')" class="w-full" type="submit">
          {{ t('save') }}
        </ButtonColored>
      </div>
      <CardStateAlert v-if="errorMessages?.length">
        <AppSpanList :span="errorMessages" />
      </CardStateAlert>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

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

// api data
const createContactMutation = useCreateContactMutation()
const updateContactByRowIdMutation = useUpdateContactByRowIdMutation()
const api = await useApiData([
  createContactMutation,
  updateContactByRowIdMutation,
])

// form
const formSchema = z.object({
  accountUsername: SCHEMA_USERNAME_OPTIONAL,
  emailAddress: SCHEMA_EMAIL_ADDRESS_OPTIONAL,
  firstName: SCHEMA_NAME_FIRST_OPTIONAL,
  lastName: SCHEMA_NAME_LAST_OPTIONAL,
  nickname: SCHEMA_NAME_NICK_OPTIONAL,
  note: SCHEMA_NOTE_OPTIONAL,
  phoneNumber: SCHEMA_PHONE_NUMBER_OPTIONAL,
  rowId: z.string().or(z.literal('')),
  url: SCHEMA_URL_HTTPS_OPTIONAL,
})

const form = useForm({
  defaultValues: {
    accountUsername: contact?.accountByAccountId?.username ?? '',
    emailAddress: contact?.emailAddress ?? '',
    firstName: contact?.firstName ?? '',
    lastName: contact?.lastName ?? '',
    nickname: contact?.nickname ?? '',
    note: contact?.note ?? '',
    phoneNumber: contact?.phoneNumber ?? '',
    rowId: contact?.rowId ?? '',
    url: contact?.url ?? '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    const account = value.accountUsername
      ? await getAccountByUsername({
          $urql,
          username: value.accountUsername,
        })
      : undefined

    if (value.rowId) {
      // Edit
      const result = await updateContactByRowIdMutation.executeMutation({
        input: {
          rowId: value.rowId,
          contactPatch: {
            accountId: account?.rowId || null,
            createdBy: store.signedInAccountId,
            emailAddress: value.emailAddress || null,
            firstName: value.firstName || null,
            lastName: value.lastName || null,
            nickname: value.nickname || null,
            note: value.note || null,
            phoneNumber: value.phoneNumber || null,
            url: value.url || null,
          },
        },
      })

      if (result.error || !result.data) return

      emit('submitSuccess')
    } else {
      // Add
      if (!store.signedInAccountId) return

      const result = await createContactMutation.executeMutation({
        input: {
          contact: {
            accountId: account?.rowId || null,
            createdBy: store.signedInAccountId,
            emailAddress: value.emailAddress || null,
            firstName: value.firstName || null,
            lastName: value.lastName || null,
            nickname: value.nickname || null,
            note: value.note || null,
            phoneNumber: value.phoneNumber || null,
            url: value.url || null,
          },
        },
      })

      if (result.error || !result.data) return

      emit('submitSuccess')
    }
  },
})

// computations
const errorMessages = computed(() =>
  api.value.errors
    ? getCombinedErrorMessages(api.value.errors, {
        postgres23505: t('postgres23505'),
      })
    : undefined,
)
</script>

<i18n lang="yaml">
de:
  accountOverride: Falls angegeben, nutzt @.upper:{'globalSiteName'} die folgenden Daten anstelle der Daten des oben genannten Kontos.
  emailAddress: E-Mail-Adresse
  firstName: Vorname
  lastName: Nachname
  nickname: Spitzname
  note: Notiz
  phoneNumber: Telefonnummer
  phoneNumberFormat: Sollte mit einem Plus beginnen, wonach nur Ziffern folgen (z.B. +1234567890)
  postgres23505: Ein Kontakt mit dieser Nutzernamen existiert bereits!
  save: Speichern
  stateInfoUsernameDisabled: Du kannst deinen Nutzernamen in den {accountSettings} ändern.
  stateInfoUsernameDisabledLink: Einstellungen deines Kontos
  url: Weblink
  username: Nutzername
  usernameNotFound: Dieser Nutzername wurde nicht gefunden
en:
  accountOverride: If given, @.upper:{'globalSiteName'} will prefer to use the following data instead of the data given by the account above.
  emailAddress: Email address
  firstName: First name
  lastName: Last name
  nickname: Nickname
  note: Note
  phoneNumber: Phone number
  phoneNumberFormat: Should start with a plus followed only by digits (e.g. +1234567890)
  postgres23505: A contact with this username already exists!
  save: Save
  stateInfoUsernameDisabled: You can edit your username in {accountSettings}.
  stateInfoUsernameDisabledLink: your account's settings
  url: Weblink
  username: Username
  usernameNotFound: This username was not found
</i18n>
