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
                :disabled="row.status !== 'importable'"
                :value="index"
              >
                <span class="truncate">{{ getRowLabel(row) }}</span>
                <template #description>
                  <span class="truncate">
                    {{
                      [row.emailAddress, row.phoneNumber]
                        .filter(Boolean)
                        .join(' · ')
                    }}
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

const { t } = useI18n()
const alertError = useAlertError()
const localePath = useLocalePath()
const store = useStore()
const { isSupported, pick: pickContacts } = useContactPicker()

// validation
await useSignInRequired()

// data
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
          emailAddress
          id
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
const createContactMutation = useMutation(
  graphql(`
    mutation CreateContactImport($input: CreateContactInput!) {
      createContact(input: $input) {
        contact {
          id
        }
      }
    }
  `),
)
const api = await useApiData([contactsQuery, createContactMutation])

// computations
const existingEmailAddresses = computed(
  () =>
    api.value.data.allContacts?.nodes
      .map((node) => node?.emailAddress)
      .filter(isNeitherNullNorUndefined) ?? [],
)

// initialization
useLeaveConfirmation(computed(() => selectedIndexes.value.length > 0))

// methods
const getRowHint = (row: ContactImportRow, index: number) =>
  failures.value[index] ??
  (importedIndexes.value.includes(index)
    ? t('imported')
    : row.status === 'duplicate'
      ? t('duplicate')
      : row.status === 'missingEmailAddress'
        ? t('missingEmailAddress')
        : row.isPhoneNumberDropped
          ? t('phoneNumberDropped')
          : undefined)
const getRowLabel = (row: ContactImportRow) =>
  [row.firstName, row.lastName].filter(Boolean).join(' ') ||
  row.emailAddress ||
  t('unnamed')
const importSelected = async () => {
  if (!store.signedInAccountId) return

  isImporting.value = true
  failures.value = {}

  const indexesFailed: number[] = []
  const indexesImported: number[] = []

  for (const index of selectedIndexes.value) {
    const row = rows.value[index]

    if (!row) continue

    const result = await createContactMutation.executeMutation({
      input: {
        contact: {
          createdBy: store.signedInAccountId,
          emailAddress: row.emailAddress,
          firstName: row.firstName,
          lastName: row.lastName,
          phoneNumber: row.phoneNumber,
        },
      },
    })

    if (getResultData(result)) {
      indexesImported.push(index)
      importedIndexes.value.push(index)
    } else {
      indexesFailed.push(index)
      failures.value[index] = result.error?.message ?? t('failed')
    }
  }

  isImporting.value = false
  selectedIndexes.value = indexesFailed

  if (indexesImported.length)
    toast.success(t('importSuccess', indexesImported.length))
  if (indexesFailed.length) {
    alertError({ messageI18n: t('importFailed', indexesFailed.length) })
    return
  }

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
    existingEmailAddresses: existingEmailAddresses.value,
    parsePhoneNumber,
  })
  selectedIndexes.value = isPreselected
    ? rows.value.flatMap((row, index) =>
        row.status === 'importable' ? [index] : [],
      )
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
  fileChoose: vCard-Datei auswählen
  fileEmpty: Die Datei enthält keine Kontakte.
  fileFailed: Die Datei konnte nicht gelesen werden.
  fileHint: Exportiere Deine Kontakte als vCard-Datei (.vcf) und wähle sie hier aus. Die Datei verlässt Dein Gerät nicht.
  fileTooLarge: Die Datei ist größer als 5 MB.
  import: Keinen Kontakt importieren | 1 Kontakt importieren | {count} Kontakte importieren
  importFailed: Ein Kontakt konnte nicht importiert werden. | {count} Kontakte konnten nicht importiert werden.
  imported: Importiert
  importSuccess: 1 Kontakt importiert | {count} Kontakte importiert
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
  fileChoose: Choose vCard file
  fileEmpty: The file contains no contacts.
  fileFailed: The file could not be read.
  fileHint: Export your contacts as a vCard file (.vcf) and choose it here. The file never leaves your device.
  fileTooLarge: The file is larger than 5 MB.
  import: Import no contacts | Import 1 contact | Import {count} contacts
  importFailed: One contact could not be imported. | {count} contacts could not be imported.
  imported: Imported
  importSuccess: 1 contact imported | {count} contacts imported
  missingEmailAddress: No email address
  phoneNumberDropped: The phone number is skipped as it is invalid.
  pick: Pick contacts
  pickAgain: Pick other contacts
  pickFailed: The contacts could not be read.
  title: Import contacts
  unnamed: Unnamed
</i18n>
