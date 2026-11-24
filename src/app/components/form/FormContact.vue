<template>
  <form
    class="flex min-h-0 flex-col"
    novalidate
    @submit.prevent="form.handleSubmit"
  >
    <div class="flex flex-col gap-4">
      <form.Field v-slot="{ field }" name="accountUsername">
        <Field>
          <FieldLabel for="input-username">{{ t('username') }}</FieldLabel>
          <FieldContent>
            <AccountPicker
              id="input-username"
              :aria-invalid="isFieldInvalid(field)"
              :disabled="
                contact?.accountByAccountId?.rowId === store.signedInAccountId
              "
              :model-value="field.state.value"
              @blur="field.handleBlur"
              @update:model-value="field.handleChange"
            />
          </FieldContent>
          <FieldDescription
            v-if="
              contact?.accountByAccountId?.rowId !== store.signedInAccountId
            "
          >
            {{ t('usernameDescription') }}
          </FieldDescription>
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="normalizeFieldErrors(field.state.meta.errors)"
          />
          <p
            v-if="
              store.signedInUsername &&
              contact?.accountByAccountId?.username === store.signedInUsername
            "
            class="text-body text-muted-foreground"
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
        class="text-body text-muted-foreground"
      >
        {{ t('accountOverride') }}
      </p>
      <form.Field v-slot="{ field }" name="firstName">
        <Field>
          <FieldLabel for="input-first-name">{{ t('firstName') }}</FieldLabel>
          <FieldContent>
            <Input
              id="input-first-name"
              :aria-invalid="isFieldInvalid(field)"
              :model-value="field.state.value"
              :placeholder="t('globalPlaceholderFirstName')"
              type="text"
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
              :aria-invalid="isFieldInvalid(field)"
              :model-value="field.state.value"
              :placeholder="t('globalPlaceholderLastName')"
              type="text"
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
              :aria-invalid="isFieldInvalid(field)"
              :model-value="field.state.value"
              type="text"
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
              :aria-invalid="isFieldInvalid(field)"
              :model-value="field.state.value"
              type="email"
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
              :aria-invalid="isFieldInvalid(field)"
              :model-value="field.state.value"
              :placeholder="t('globalPlaceholderPhoneNumber')"
              type="tel"
              @blur="
                () => {
                  field.handleBlur()
                  field.handleChange(getPhoneNumberFormatted(field.state.value))
                }
              "
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
      <form.Field v-slot="{ field }" name="url">
        <Field>
          <FieldLabel for="input-url">{{ t('url') }}</FieldLabel>
          <FieldContent>
            <Input
              id="input-url"
              :aria-invalid="isFieldInvalid(field)"
              :model-value="field.state.value"
              :placeholder="t('globalPlaceholderUrl')"
              type="url"
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
              :aria-invalid="isFieldInvalid(field)"
              class="bg-surface-raised dark:bg-surface-raised"
              :model-value="field.state.value"
              rows="3"
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
      <FormPrivacyNotice />
      <div class="flex flex-col items-center">
        <AppButton
          :aria-label="t('save')"
          class="w-full"
          :loading="api.isFetching"
          type="submit"
        >
          {{ t('save') }}
        </AppButton>
      </div>
      <AppAlert v-if="errorMessages?.length" variant="error">
        <AppSpanList :span="errorMessages" />
      </AppAlert>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { useMutation } from '@urql/vue'
import { z } from 'zod'

import { graphql } from '~~/gql/generated'
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
const createContactMutation = useMutation(
  graphql(`
    mutation CreateContact($input: CreateContactInput!) {
      createContact(input: $input) {
        contact {
          id
        }
      }
    }
  `),
)
const updateContactByRowIdMutation = useMutation(
  graphql(`
    mutation UpdateContactByRowId($input: UpdateContactByRowIdInput!) {
      updateContactByRowId(input: $input) {
        contact {
          ...ContactItem
        }
      }
    }
  `),
)
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

      if (!getResultData(result)) return

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

      if (!getResultData(result)) return

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
  accountOverride: Angaben, die Du hier einträgst, haben Vorrang vor denen aus dem Konto oben.
  emailAddress: E-Mail-Adresse
  firstName: Vorname
  lastName: Nachname
  nickname: Spitzname
  note: Notiz
  phoneNumber: Telefonnummer
  postgres23505: Ein Kontakt mit diesem Nutzernamen existiert bereits!
  save: Speichern
  stateInfoUsernameDisabled: Du kannst Deinen Nutzernamen in den {accountSettings} ändern.
  stateInfoUsernameDisabledLink: Einstellungen Deines Kontos
  url: Weblink
  username: Nutzername
  usernameDescription: Verknüpft den Kontakt mit dem Konto der Person. Sie bekommt Deine Einladungen in der App und per E-Mail und kann sehen, was Du hier speicherst. Dass Du sie hinzugefügt hast, wird ihr nicht mitgeteilt.
en:
  accountOverride: Details you enter here take priority over the ones from the account above.
  emailAddress: Email address
  firstName: First name
  lastName: Last name
  nickname: Nickname
  note: Note
  phoneNumber: Phone number
  postgres23505: A contact with this username already exists!
  save: Save
  stateInfoUsernameDisabled: You can edit your username in {accountSettings}.
  stateInfoUsernameDisabledLink: your account's settings
  url: Weblink
  username: Username
  usernameDescription: Links this contact to their account. They get your invitations in the app and by email and can see what you save here. They aren't told that you added them.
</i18n>
