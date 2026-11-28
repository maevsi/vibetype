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
      <form.Field v-slot="{ field }" mode="array" name="emailAddresses">
        <Field>
          <FieldLabel for="input-email-address-0">{{
            t('emailAddresses')
          }}</FieldLabel>
          <FieldContent>
            <form.Field
              v-for="(_, index) in field.state.value"
              :key="index"
              v-slot="{ field: subField }"
              :name="`emailAddresses[${index}]`"
            >
              <div class="flex items-center gap-2">
                <Input
                  :id="`input-email-address-${index}`"
                  :aria-invalid="isFieldInvalid(subField)"
                  :aria-label="t('emailAddress', { position: index + 1 })"
                  :model-value="subField.state.value"
                  type="email"
                  @blur="subField.handleBlur"
                  @input="
                    subField.handleChange(
                      ($event.target as HTMLInputElement).value,
                    )
                  "
                />
                <AppButton
                  v-if="field.state.value.length > 1"
                  :aria-label="t('emailAddressRemove', { position: index + 1 })"
                  size="none"
                  variant="ghost"
                  @click="field.removeValue(index)"
                >
                  <AppIconTrash />
                </AppButton>
              </div>
              <FieldError
                v-if="isFieldInvalid(subField)"
                :errors="subField.state.meta.errors"
              />
            </form.Field>
            <AppButton
              v-if="field.state.value.length < EMAIL_ADDRESSES_MAXIMUM"
              :aria-label="t('emailAddressAdd')"
              class="self-start"
              size="none"
              variant="tertiary"
              @click="field.pushValue('')"
            >
              <AppIconPlus />
              {{ t('emailAddressAdd') }}
            </AppButton>
            <FieldDescription v-if="field.state.value.length > 1">
              {{ t('emailAddressesDescription') }}
            </FieldDescription>
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
      <form.Field v-slot="{ field }" name="language">
        <Field>
          <FieldLabel for="input-language">{{ t('language') }}</FieldLabel>
          <FieldContent>
            <Select
              :model-value="field.state.value || LANGUAGE_NONE"
              @update:model-value="
                field.handleChange(
                  $event === LANGUAGE_NONE ? '' : ($event as Language),
                )
              "
            >
              <SelectTrigger
                id="input-language"
                :aria-invalid="isFieldInvalid(field)"
                class="w-full"
                @blur="field.handleBlur"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem :value="LANGUAGE_NONE">
                  {{ t('languageNone') }}
                </SelectItem>
                <SelectItem
                  v-for="language in languages"
                  :key="language.value"
                  :value="language.value"
                >
                  {{ language.label }}
                </SelectItem>
              </SelectContent>
            </Select>
          </FieldContent>
          <FieldDescription>{{ t('languageDescription') }}</FieldDescription>
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="normalizeFieldErrors(field.state.meta.errors)"
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
      <form.Field v-slot="{ field }" name="groupIds">
        <Field>
          <FieldLabel for="input-group-name">{{ t('groups') }}</FieldLabel>
          <FieldContent>
            <AppCheckboxGroup
              v-if="contactGroups.length"
              :aria-label="t('groups')"
              :items="groupItems"
              :model-value="field.state.value"
              @update:model-value="
                (values) => field.handleChange(values.map(String))
              "
            />
            <div class="flex items-center gap-2">
              <AppInput
                id="input-group-name"
                v-model="groupNameNew"
                :placeholder="t('groupNamePlaceholder')"
                type="text"
                @keydown.enter.prevent="groupAdd"
              />
              <AppButton
                :aria-label="t('groupAdd')"
                :disabled="!groupNameNewNormalized"
                :loading="createContactGroupMutation.fetching.value"
                size="none"
                variant="ghost"
                @click="groupAdd"
              >
                <AppIconPlus />
              </AppButton>
            </div>
          </FieldContent>
          <FieldDescription>{{ t('groupsDescription') }}</FieldDescription>
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
import type { ContactItemFragment, Language } from '~~/gql/generated/graphql'
import {
  getContactGroupItem,
  getContactGroupNamesNormalized,
} from '~~/shared/utils/contactGroup'

const { contact = undefined, contactGroupIds = [] } = defineProps<{
  contact?: Pick<
    ContactItemFragment,
    | 'accountByAccountId'
    // | 'addressByAddressId'
    | 'emailAddresses'
    | 'firstName'
    // | 'id'
    | 'language'
    | 'lastName'
    | 'nickname'
    | 'note'
    | 'phoneNumber'
    | 'rowId'
    | 'url'
  >
  contactGroupIds?: string[]
}>()

const emit = defineEmits<{
  submitSuccess: []
}>()

const { $urql } = useNuxtApp()
const store = useStore()
const localePath = useLocalePath()
const { t, locales } = useI18n()

// data
const LANGUAGE_NONE = 'none' // a select item cannot have an empty value
const languages = locales.value
  .map((locale) =>
    locale.name ? { label: locale.name, value: locale.code } : undefined,
  )
  .filter(isNeitherNullNorUndefined)

// data
const groupNameNew = ref('')

// api data
const { contactGroups, query: contactGroupsQuery } = useContactGroupsQuery()
const createContactGroupMemberMutation = useMutation(
  graphql(`
    mutation CreateContactGroupMember($input: CreateContactGroupMemberInput!) {
      createContactGroupMember(input: $input) {
        contactGroupMember {
          contactGroupId
          contactId
        }
      }
    }
  `),
)
const createContactGroupMutation = useMutation(
  graphql(`
    mutation CreateContactGroup($input: CreateContactGroupInput!) {
      createContactGroup(input: $input) {
        contactGroup {
          ...ContactGroupItem
        }
      }
    }
  `),
)
const createContactMutation = useMutation(
  graphql(`
    mutation CreateContact($input: CreateContactInput!) {
      createContact(input: $input) {
        contact {
          id
          rowId
        }
      }
    }
  `),
)
const deleteContactGroupMemberMutation = useMutation(
  graphql(`
    mutation DeleteContactGroupMemberByContactGroupIdAndContactId(
      $input: DeleteContactGroupMemberByContactGroupIdAndContactIdInput!
    ) {
      deleteContactGroupMemberByContactGroupIdAndContactId(input: $input) {
        clientMutationId
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
  contactGroupsQuery,
  createContactGroupMemberMutation,
  createContactGroupMutation,
  createContactMutation,
  deleteContactGroupMemberMutation,
  updateContactByRowIdMutation,
])

// form
const EMAIL_ADDRESSES_MAXIMUM = 10 // the `contact` table's limit
const getEmailAddressesInput = (emailAddresses: string[]) => {
  const emailAddressesFilled = emailAddresses.filter(Boolean)

  return emailAddressesFilled.length ? emailAddressesFilled : null
}
const formSchema = z
  .object({
    accountUsername: SCHEMA_USERNAME_OPTIONAL,
    emailAddresses: z
      .array(SCHEMA_EMAIL_ADDRESS_OPTIONAL)
      .max(EMAIL_ADDRESSES_MAXIMUM),
    firstName: SCHEMA_NAME_FIRST_OPTIONAL,
    groupIds: z.array(z.string()),
    language: z.enum(['', 'de', 'en']),
    lastName: SCHEMA_NAME_LAST_OPTIONAL,
    nickname: SCHEMA_NAME_NICK_OPTIONAL,
    note: SCHEMA_NOTE_OPTIONAL,
    phoneNumber: SCHEMA_PHONE_NUMBER_OPTIONAL,
    rowId: z.string().or(z.literal('')),
    url: SCHEMA_URL_HTTPS_OPTIONAL,
  })
  // mirrors the database's contact_identity_check
  .superRefine((data, context) => {
    if (
      data.accountUsername ||
      data.emailAddresses.some(Boolean) ||
      data.phoneNumber
    )
      return

    for (const path of ['accountUsername', 'emailAddresses', 'phoneNumber']) {
      context.addIssue({
        code: 'custom',
        message: t('contactWayRequired'),
        path: [path],
      })
    }
  })

const form = useForm({
  defaultValues: {
    accountUsername: contact?.accountByAccountId?.username ?? '',
    emailAddresses: contact?.emailAddresses?.length
      ? [...contact.emailAddresses]
      : [''],
    firstName: contact?.firstName ?? '',
    groupIds: [...contactGroupIds],
    language: (contact?.language ?? '') as '' | Language,
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
            emailAddresses: getEmailAddressesInput(value.emailAddresses),
            firstName: value.firstName || null,
            language: value.language || null,
            lastName: value.lastName || null,
            nickname: value.nickname || null,
            note: value.note || null,
            phoneNumber: value.phoneNumber || null,
            url: value.url || null,
          },
        },
      })

      if (!getResultData(result)) return

      if (
        !(await groupsSave({
          contactId: value.rowId,
          groupIds: value.groupIds,
        }))
      )
        return

      form.reset(value)

      emit('submitSuccess')
    } else {
      // Add
      if (!store.signedInAccountId) return

      const result = await createContactMutation.executeMutation({
        input: {
          contact: {
            accountId: account?.rowId || null,
            createdBy: store.signedInAccountId,
            emailAddresses: getEmailAddressesInput(value.emailAddresses),
            firstName: value.firstName || null,
            language: value.language || null,
            lastName: value.lastName || null,
            nickname: value.nickname || null,
            note: value.note || null,
            phoneNumber: value.phoneNumber || null,
            url: value.url || null,
          },
        },
      })

      const contactId = getResultData(result)?.createContact?.contact?.rowId

      if (!contactId) return

      if (!(await groupsSave({ contactId, groupIds: value.groupIds }))) return

      form.reset(value)

      emit('submitSuccess')
    }
  },
})

// methods
const groupAdd = async () => {
  const name = groupNameNewNormalized.value

  if (!name || !store.signedInAccountId) return

  const groupExisting = contactGroups.value.find(
    (group) => group.name.toLowerCase() === name.toLowerCase(),
  )
  const groupId =
    groupExisting?.rowId ??
    getContactGroupItem(
      getResultData(
        await createContactGroupMutation.executeMutation({
          input: {
            contactGroup: { createdBy: store.signedInAccountId, name },
          },
        }),
      )?.createContactGroup?.contactGroup,
    )?.rowId

  if (!groupId) return

  groupNameNew.value = ''

  if (!form.getFieldValue('groupIds').includes(groupId))
    form.setFieldValue('groupIds', [...form.getFieldValue('groupIds'), groupId])
}
const groupsSave = async ({
  contactId,
  groupIds,
}: {
  contactId: string
  groupIds: string[]
}) => {
  const results = await Promise.all([
    ...groupIds
      .filter((groupId) => !contactGroupIds.includes(groupId))
      .map((contactGroupId) =>
        createContactGroupMemberMutation.executeMutation({
          input: { contactGroupMember: { contactGroupId, contactId } },
        }),
      ),
    ...contactGroupIds
      .filter((groupId) => !groupIds.includes(groupId))
      .map((contactGroupId) =>
        deleteContactGroupMemberMutation.executeMutation({
          input: { contactGroupId, contactId },
        }),
      ),
  ])

  return results.every((result) => !result.error)
}

useFormLeaveConfirmation(form)

// computations
const groupItems = computed(() =>
  [...contactGroups.value]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ name, rowId }) => ({ label: name, value: rowId })),
)
const groupNameNewNormalized = computed(
  () => getContactGroupNamesNormalized([groupNameNew.value])[0],
)
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
  contactWayRequired: Gib einen Nutzernamen, eine E-Mail-Adresse oder eine Telefonnummer an.
  emailAddress: E-Mail-Adresse {position}
  emailAddressAdd: E-Mail-Adresse hinzufügen
  emailAddressRemove: E-Mail-Adresse {position} entfernen
  emailAddresses: E-Mail-Adressen
  emailAddressesDescription: Einladungen gehen an die erste E-Mail-Adresse.
  firstName: Vorname
  groupAdd: Gruppe hinzufügen
  groupNamePlaceholder: Neue Gruppe
  groups: Gruppen
  groupsDescription: Gruppen sind nur für Dich sichtbar. Mit ihnen findest Du Kontakte beim Einladen schneller.
  language: Sprache
  languageDescription: In dieser Sprache gehen die Einladungs-E-Mails an diesen Kontakt raus. Ohne Auswahl sind sie in Deiner Sprache.
  languageNone: Nicht festgelegt
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
  contactWayRequired: Enter a username, an email address, or a phone number.
  emailAddress: Email address {position}
  emailAddressAdd: Add email address
  emailAddressRemove: Remove email address {position}
  emailAddresses: Email addresses
  emailAddressesDescription: Invitations go to the first email address.
  firstName: First name
  groupAdd: Add group
  groupNamePlaceholder: New group
  groups: Groups
  groupsDescription: Groups are only visible to you. They help you find contacts faster when inviting.
  language: Language
  languageDescription: Invitation emails to this contact are sent in this language. If not set, they are sent in yours.
  languageNone: Not set
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
