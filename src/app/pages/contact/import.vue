<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <Loader :api>
        <div class="flex flex-col gap-4">
          <AppButton
            v-if="isSupported"
            :aria-label="rows.length ? t('pickAgain') : t('pick')"
            class="self-start"
            :loading="isPicking"
            @click="pick()"
          >
            {{ rows.length ? t('pickAgain') : t('pick') }}
          </AppButton>
          <AppInputFile
            accept=".vcf,text/vcard,text/x-vcard"
            :loading="isReadingFile"
            @select="onFileChange"
          >
            <AppIconArrowUpTray class="size-8" />
            <span>{{ t('fileChoose') }}</span>
            <span class="text-body-small">{{ t('fileHint') }}</span>
          </AppInputFile>
          <template v-if="rows.length">
            <AppCheckboxGroup
              v-model="selectedIndexes"
              :aria-label="t('contacts')"
            >
              <AppCheckboxGroupItem
                v-for="(row, index) in rows"
                :key="index"
                :disabled="!isRowSelectable(row)"
                :value="index"
              >
                <span class="truncate">{{ getRowLabel(row) }}</span>
                <template #description>
                  <span class="truncate">
                    {{
                      [...row.emailAddresses, row.phoneNumber]
                        .filter(Boolean)
                        .join(' · ')
                    }}
                  </span>
                  <span v-if="row.groupNames.length" class="block truncate">
                    {{ t('groups', { names: row.groupNames.join(', ') }) }}
                  </span>
                  <span v-if="getRowHint(row, index)" class="block">
                    {{ getRowHint(row, index) }}
                  </span>
                </template>
              </AppCheckboxGroupItem>
            </AppCheckboxGroup>
            <AppButton
              :aria-label="t('import', selectedIndexes.length)"
              class="self-start"
              :disabled="!selectedIndexes.length"
              :loading="isImporting"
              @click="importSelected()"
            >
              {{ t('import', selectedIndexes.length) }}
            </AppButton>
          </template>
        </div>
      </Loader>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import type { AllContactsEmailAddressesQueryVariables } from '~~/gql/generated/graphql'
import {
  getContactGroupItem,
  getContactGroupNamesNormalized,
} from '~~/shared/utils/contactGroup'

const { t } = useI18n()
const alertError = useAlertError()
const localePath = useLocalePath()
const store = useStore()
const { isSupported, pick: pickContacts } = useContactPicker()

// validation
await useSignInRequired()

// data
const CHUNK_SIZE = 100 // keeps each call well under PostGraphile's statement timeout of 3 seconds and its request body small
const FILE_SIZE_MAXIMUM = 5 * 1024 * 1024 // a contact book export is far smaller, this only guards the browser's memory
const after = ref<string | null>()
const failures = ref<Record<number, string>>({})
const importedIndexes = ref<number[]>([])
const isImporting = ref(false)
const isPicking = ref(false)
const isReadingFile = ref(false)
const rows = ref<ContactImportRow[]>([])
const selectedIndexes = ref<number[]>([])
const title = t('title')

// api data
const contactsQuery = useApiQuery({
  query: graphql(`
    query AllContactsEmailAddresses(
      $after: Cursor
      $createdBy: UUID
      $first: Int!
    ) {
      allContacts(
        after: $after
        condition: { createdBy: $createdBy }
        first: $first
        orderBy: [PRIMARY_KEY_ASC]
      ) {
        nodes {
          emailAddresses
          firstName
          id
          lastName
          phoneNumber
          rowId
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `),
  variables: computed<AllContactsEmailAddressesQueryVariables>(() => ({
    after: after.value,
    createdBy: store.signedInAccountId,
    first: ITEMS_PER_PAGE_LARGE,
  })),
})
const updateContactByRowIdMutation = useMutation(
  graphql(`
    mutation UpdateContactByRowIdImport($input: UpdateContactByRowIdInput!) {
      updateContactByRowId(input: $input) {
        contact {
          emailAddresses
          firstName
          id
          lastName
          phoneNumber
          rowId
        }
      }
    }
  `),
)
const createContactGroupMembersMutation = useMutation(
  graphql(`
    mutation CreateContactGroupMembersImport(
      $input: CreateContactGroupMembersInput!
    ) {
      createContactGroupMembers(input: $input) {
        result {
          contactGroupId
          contactId
          id
        }
      }
    }
  `),
)
const createContactGroupsMutation = useMutation(
  graphql(`
    mutation CreateContactGroupsImport($input: CreateContactGroupsInput!) {
      createContactGroups(input: $input) {
        result {
          ...ContactGroupItem
        }
      }
    }
  `),
)
const createContactsMutation = useMutation(
  graphql(`
    mutation CreateContactsImport($input: CreateContactsInput!) {
      createContacts(input: $input) {
        result {
          emailAddresses
          id
          rowId
        }
      }
    }
  `),
)
const api = await useApiData([contactsQuery])

// computations
const existingContacts = computed(
  () =>
    api.value.data.allContacts?.nodes.map((node) => ({
      ...node,
      emailAddresses: node.emailAddresses?.filter(isNeitherNullNorUndefined),
    })) ?? [],
)

// methods
const getRowHint = (row: ContactImportRow, index: number) =>
  failures.value[index] ??
  (importedIndexes.value.includes(index)
    ? t('imported')
    : row.status === 'mergeable'
      ? t('mergeable', { fields: getRowPatchFields(row) })
      : row.status === 'duplicate'
        ? t('duplicate')
        : row.status === 'missingEmailAddress'
          ? t('missingEmailAddress')
          : row.isPhoneNumberDropped
            ? t('phoneNumberDropped')
            : undefined)
const getRowPatchFields = (row: ContactImportRow) =>
  [
    ...(row.contactPatch?.emailAddresses ? [t('fieldEmailAddresses')] : []),
    ...(row.contactPatch?.firstName ? [t('fieldFirstName')] : []),
    ...(row.contactPatch?.lastName ? [t('fieldLastName')] : []),
    ...(row.contactPatch?.phoneNumber ? [t('fieldPhoneNumber')] : []),
  ].join(', ')
const isRowSelectable = (row: ContactImportRow) =>
  row.status === 'importable' || row.status === 'mergeable'
const getRowLabel = (row: ContactImportRow) =>
  [row.firstName, row.lastName].filter(Boolean).join(' ') ||
  row.emailAddresses[0] ||
  t('unnamed')
// A chunk's contacts are created first, so a failure of the group calls afterwards must not mark them failed, as a retry would create them twice.
const importChunk = async (indexes: number[], createdBy: string) => {
  const chunkRows = indexes.flatMap((index) => {
    const row = rows.value[index]

    return row ? [{ index, row }] : []
  })
  const contactsResult = await createContactsMutation.executeMutation({
    input: {
      contacts: chunkRows.map(({ row }) => ({
        createdBy,
        emailAddresses: row.emailAddresses,
        firstName: row.firstName,
        lastName: row.lastName,
        phoneNumber: row.phoneNumber,
      })),
    },
  })
  const contactsCreated = getResultData(contactsResult)?.createContacts?.result

  if (!contactsCreated) {
    for (const { index } of chunkRows)
      failures.value[index] = contactsResult.error?.message ?? t('failed')

    return { failed: chunkRows.map(({ index }) => index), groupsFailed: [] }
  }

  importedIndexes.value.push(...chunkRows.map(({ index }) => index))

  const rowsGrouped = chunkRows.filter(({ row }) => row.groupNames.length)
  const names = getContactGroupNamesNormalized(
    rowsGrouped.flatMap(({ row }) => row.groupNames),
  )

  if (!names.length) return { failed: [], groupsFailed: [] }

  const groupsFailed = rowsGrouped.map(({ index }) => index)
  const groupsResult = await createContactGroupsMutation.executeMutation({
    input: { names },
  })
  const groupsCreated = getResultData(groupsResult)?.createContactGroups?.result

  if (!groupsCreated) {
    for (const index of groupsFailed)
      failures.value[index] = groupsResult.error?.message ?? t('groupsFailed')

    return { failed: [], groupsFailed }
  }

  // each imported contact's addresses are distinct from all others, so its primary address identifies it
  const contactIdsByEmailAddress = new Map(
    contactsCreated.flatMap((contact) => {
      const emailAddress = contact.emailAddresses?.[0]

      return emailAddress ? [[emailAddress.toLowerCase(), contact.rowId]] : []
    }),
  )
  const groupIdsByName = new Map(
    groupsCreated.flatMap((group) => {
      const item = getContactGroupItem(group)

      return item ? [[item.name.toLowerCase(), item.rowId]] : []
    }),
  )
  const contactGroupIds: string[] = []
  const contactIds: string[] = []

  for (const { row } of rowsGrouped) {
    const contactId = contactIdsByEmailAddress.get(
      row.emailAddresses[0]?.toLowerCase() ?? '',
    )

    for (const name of getContactGroupNamesNormalized(row.groupNames)) {
      const groupId = groupIdsByName.get(name.toLowerCase())

      if (contactId && groupId) {
        contactGroupIds.push(groupId)
        contactIds.push(contactId)
      }
    }
  }

  if (!contactIds.length) return { failed: [], groupsFailed: [] }

  const membersResult = await createContactGroupMembersMutation.executeMutation(
    { input: { contactGroupIds, contactIds } },
  )

  if (!getResultData(membersResult)?.createContactGroupMembers?.result) {
    for (const index of groupsFailed)
      failures.value[index] = membersResult.error?.message ?? t('groupsFailed')

    return { failed: [], groupsFailed }
  }

  return { failed: [], groupsFailed: [] }
}
const importSelected = async () => {
  if (!store.signedInAccountId) return

  isImporting.value = true
  failures.value = {}

  const indexesFailed: number[] = []
  const indexesGroupsFailed: number[] = []
  const indexesSelected = [...selectedIndexes.value]

  const indexesMergeable = indexesSelected.filter(
    (index) => rows.value[index]?.status === 'mergeable',
  )
  const indexesCreatable = indexesSelected.filter(
    (index) => rows.value[index]?.status !== 'mergeable',
  )

  for (const index of indexesMergeable) {
    const row = rows.value[index]

    if (!row?.contactRowId || !row.contactPatch) continue

    const result = await updateContactByRowIdMutation.executeMutation({
      input: { contactPatch: row.contactPatch, rowId: row.contactRowId },
    })

    if (getResultData(result)?.updateContactByRowId?.contact) {
      importedIndexes.value.push(index)
    } else {
      failures.value[index] = result.error?.message ?? t('failed')
      indexesFailed.push(index)
    }
  }

  const chunks = Array.from(
    { length: Math.ceil(indexesCreatable.length / CHUNK_SIZE) },
    (_, chunkIndex) =>
      indexesCreatable.slice(
        chunkIndex * CHUNK_SIZE,
        (chunkIndex + 1) * CHUNK_SIZE,
      ),
  )

  for (const chunk of chunks) {
    const { failed, groupsFailed } = await importChunk(
      chunk,
      store.signedInAccountId,
    )

    indexesFailed.push(...failed)
    indexesGroupsFailed.push(...groupsFailed)
  }

  isImporting.value = false
  selectedIndexes.value = indexesFailed

  const importedCount = indexesSelected.length - indexesFailed.length

  if (importedCount) toast.success(t('importSuccess', importedCount))
  if (indexesGroupsFailed.length)
    alertError({
      messageI18n: t('importGroupsFailed', indexesGroupsFailed.length),
    })
  if (indexesFailed.length) {
    alertError({ messageI18n: t('importFailed', indexesFailed.length) })
    return
  }

  if (indexesGroupsFailed.length) return

  await navigateTo(localePath('contact'))
}
const onFileChange = async ([file]: File[]) => {
  if (!file) return

  isReadingFile.value = true

  try {
    if (file.size > FILE_SIZE_MAXIMUM) {
      alertError({ messageI18n: t('fileTooLarge') })
      return
    }

    const contacts = getContactsFromVcard(await file.text())

    if (!contacts.length) {
      alertError({ messageI18n: t('fileEmpty') })
      return
    }

    await showContacts(contacts, { isPreselected: false })
  } catch (error) {
    alertError({
      error: error instanceof Error ? error : undefined,
      messageI18n: t('fileFailed'),
    })
  } finally {
    isReadingFile.value = false
  }
}
const pick = async () => {
  isPicking.value = true

  try {
    await showContacts(await pickContacts(), { isPreselected: true })
  } catch (error) {
    alertError({
      error: error instanceof Error ? error : undefined,
      messageI18n: t('pickFailed'),
    })
  } finally {
    isPicking.value = false
  }
}
// a file's contacts are not chosen one by one, so nothing is preselected for them (App Store guideline 5.1.2)
const showContacts = async (
  contacts: ContactPicked[],
  { isPreselected }: { isPreselected: boolean },
) => {
  if (!contacts.length) return

  const parsePhoneNumber = await getContactImportPhoneNumberParser(
    navigator.language,
  )

  failures.value = {}
  importedIndexes.value = []
  rows.value = getContactImportRows({
    contacts,
    existingContacts: existingContacts.value,
    parsePhoneNumber,
  })
  selectedIndexes.value = isPreselected
    ? rows.value.flatMap((row, index) => (isRowSelectable(row) ? [index] : []))
    : []
}

// lifecycle
watch(
  () => api.value.data.allContacts?.pageInfo,
  (pageInfo) => {
    if (import.meta.client && pageInfo?.hasNextPage)
      after.value = pageInfo.endCursor
  },
  { immediate: true },
)

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  contacts: Kontakte
  duplicate: Bereits in Deinen Kontakten
  failed: Der Kontakt konnte nicht importiert werden.
  fieldEmailAddresses: E-Mail-Adressen
  fieldFirstName: Vorname
  fieldLastName: Nachname
  fieldPhoneNumber: Telefonnummer
  fileChoose: vCard-Datei auswählen
  fileEmpty: Die Datei enthält keine Kontakte.
  fileFailed: Die Datei konnte nicht gelesen werden.
  fileHint: Exportiere Deine Kontakte als vCard-Datei (.vcf) und wähle sie hier aus. Die Datei verlässt Dein Gerät nicht.
  fileTooLarge: Die Datei ist größer als 5 MB.
  import: Keinen Kontakt importieren | 1 Kontakt importieren | {count} Kontakte importieren
  importFailed: Ein Kontakt konnte nicht importiert werden. | {count} Kontakte konnten nicht importiert werden.
  groups: 'Gruppen: {names}'
  groupsFailed: Die Gruppen konnten nicht zugewiesen werden.
  imported: Importiert
  importGroupsFailed: Bei einem Kontakt konnten die Gruppen nicht zugewiesen werden. | Bei {count} Kontakten konnten die Gruppen nicht zugewiesen werden.
  importSuccess: 1 Kontakt importiert | {count} Kontakte importiert
  mergeable: 'Bereits in Deinen Kontakten, ergänzt: {fields}'
  missingEmailAddress: Keine E-Mail-Adresse
  phoneNumberDropped: Die Telefonnummer wird nicht übernommen, da sie ungültig ist.
  pick: Kontakte auswählen
  pickAgain: Andere Kontakte auswählen
  pickFailed: Die Kontakte konnten nicht gelesen werden.
  title: Kontakte importieren
  unnamed: Ohne Namen
en:
  contacts: Contacts
  duplicate: Already in your contacts
  failed: The contact could not be imported.
  fieldEmailAddresses: email addresses
  fieldFirstName: first name
  fieldLastName: last name
  fieldPhoneNumber: phone number
  fileChoose: Choose vCard file
  fileEmpty: The file contains no contacts.
  fileFailed: The file could not be read.
  fileHint: Export your contacts as a vCard file (.vcf) and choose it here. The file never leaves your device.
  fileTooLarge: The file is larger than 5 MB.
  import: Import no contacts | Import 1 contact | Import {count} contacts
  importFailed: One contact could not be imported. | {count} contacts could not be imported.
  groups: 'Groups: {names}'
  groupsFailed: The groups could not be assigned.
  imported: Imported
  importGroupsFailed: The groups of one contact could not be assigned. | The groups of {count} contacts could not be assigned.
  importSuccess: 1 contact imported | {count} contacts imported
  mergeable: 'Already in your contacts, adds: {fields}'
  missingEmailAddress: No email address
  phoneNumberDropped: The phone number is skipped as it is invalid.
  pick: Pick contacts
  pickAgain: Pick other contacts
  pickFailed: The contacts could not be read.
  title: Import contacts
  unnamed: Unnamed
</i18n>
