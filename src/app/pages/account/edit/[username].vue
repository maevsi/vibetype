<template>
  <AppError
    v-if="!account"
    :description="t('errorAccountMissing')"
    :status-code="404"
  />
  <LayoutPage v-else>
    <div class="grid grid-cols-3 items-center">
      <AppButton
        :aria-label="t('back')"
        :to="
          localePath({
            name: 'account-view-username',
            params: { username: store.signedInUsername },
          })
        "
        class="flex size-12 justify-center justify-self-start"
      >
        <AppIconBack />
      </AppButton>
      <TypographyH3 class="justify-self-center">
        {{ t('title') }}
      </TypographyH3>
      <div />
    </div>
    <div class="flex flex-col gap-3">
      <div
        class="flex items-center justify-between gap-4 rounded-lg border border-(--semantic-base-background) bg-(--semantic-base-surface-1) p-3"
      >
        <AccountProfilePicture
          :account-id="account.id"
          class="size-15 flex-shrink-0 rounded-full"
          height="60"
          width="60"
        />
        <div class="flex gap-3">
          <ButtonColored
            :aria-label="t('replace')"
            @click="showModalUploadSelection"
          >
            <TypographyLabel v-slot="attributes">
              <div v-bind="attributes">
                {{ t('replace') }}
              </div>
            </TypographyLabel>
          </ButtonColored>
          <ButtonColored
            :aria-label="t('remove')"
            variant="secondary"
            @click="removeProfilePicture"
          >
            <TypographyLabel v-slot="attributes">
              <div v-bind="attributes">
                {{ t('remove') }}
              </div>
            </TypographyLabel>
          </ButtonColored>
        </div>
        <ModalUploadSelection @select="onUploadSelect" />
      </div>
      <div class="flex flex-col">
        <div
          class="flex flex-col gap-4 rounded-lg border border-(--semantic-base-background) bg-(--semantic-base-surface-1) p-4 shadow-xs"
        >
          <div class="flex items-center justify-between">
            <TypographyH3>
              {{ t('about') }}
            </TypographyH3>
            <AppButton
              :aria-label="isEditingDescription ? t('cancel') : t('edit')"
              class="flex h-8 items-center gap-1 text-(--semantic-base-text-tertiary)"
              @click="
                isEditingDescription
                  ? cancelEditDescription()
                  : toggleEditDescription()
              "
            >
              <div v-if="!isEditingDescription" class="flex gap-2">
                <AppIconEdit />
                <TypographySubtitleMedium class="underline underline-offset-5">
                  {{ t('edit') }}
                </TypographySubtitleMedium>
              </div>
              <TypographySubtitleMedium
                v-else
                class="underline underline-offset-5"
              >
                {{ t('cancel') }}
              </TypographySubtitleMedium>
            </AppButton>
          </div>
          <div
            class="flex flex-col gap-1.5"
            :class="{ hidden: !isEditingDescription }"
          >
            <TypographySubtitleSmall
              class="rounded-lg border border-(--semantic-base-line) bg-(--semantic-base-input-field-fill) px-4 py-3"
            >
              <textarea
                v-model="editableDescription"
                class="h-full w-full resize-none bg-transparent focus:outline-none"
                :maxlength="descriptionLengthMaximum"
                rows="5"
              />
            </TypographySubtitleSmall>
            <TypographySubtitleSmall
              class="self-end px-2 text-(--semantic-base-text-secondary)"
            >
              {{
                t('characterCount', {
                  count: editableDescription?.length || 0,
                  maximum: descriptionLengthMaximum,
                })
              }}
            </TypographySubtitleSmall>
          </div>
          <TypographyBodyMedium
            :class="{ hidden: isEditingDescription || !account.description }"
          >
            {{ account.description }}
          </TypographyBodyMedium>
          <div
            v-if="isEditingDescription"
            class="flex flex-col items-end gap-2 text-right"
          >
            <ButtonColored
              :aria-label="t('saveChanges')"
              variant="secondary"
              @click="saveDescription"
            >
              <TypographySubtitleMedium>
                {{ t('saveChanges') }}
              </TypographySubtitleMedium>
            </ButtonColored>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-4 rounded-lg border border-(--semantic-base-background) bg-(--semantic-base-surface-1) p-4 shadow-xs"
      >
        <div class="flex items-center justify-between">
          <TypographyH3>
            {{ t('imprint') }}
          </TypographyH3>
          <AppButton
            :aria-label="isEditingImprint ? t('cancel') : t('edit')"
            class="flex h-8 items-center gap-1 text-(--semantic-base-text-tertiary)"
            @click="
              isEditingImprint ? cancelEditImprint() : toggleEditImprint()
            "
          >
            <div v-if="!isEditingImprint" class="flex gap-2">
              <AppIconEdit />
              <TypographySubtitleMedium class="underline underline-offset-5">
                {{ t('edit') }}
              </TypographySubtitleMedium>
            </div>
            <TypographySubtitleMedium
              v-else
              class="underline underline-offset-5"
            >
              {{ t('cancel') }}
            </TypographySubtitleMedium>
          </AppButton>
        </div>
        <div
          class="flex flex-col gap-1.5"
          :class="{ hidden: !isEditingImprint }"
        >
          <TypographySubtitleSmall
            class="rounded-lg border border-(--semantic-base-line) bg-(--semantic-base-input-field-fill) px-4 py-3"
          >
            <textarea
              v-model="editableImprint"
              class="h-full w-full resize-none bg-transparent focus:outline-none"
              :maxlength="imprintLengthMaximum"
              rows="5"
            />
          </TypographySubtitleSmall>
          <TypographySubtitleSmall
            class="self-end px-2 text-(--semantic-base-text-secondary)"
          >
            {{
              t('characterCount', {
                count: editableImprint?.length || 0,
                maximum: imprintLengthMaximum,
              })
            }}
          </TypographySubtitleSmall>
        </div>
        <TypographyBodyMedium
          :class="{ hidden: isEditingImprint || !account.imprint }"
        >
          {{ account.imprint }}
        </TypographyBodyMedium>
        <div
          v-if="isEditingImprint"
          class="flex flex-col items-end gap-2 text-right"
        >
          <ButtonColored
            :aria-label="t('saveChanges')"
            variant="secondary"
            @click="saveImprint"
          >
            <TypographySubtitleMedium>
              {{ t('saveChanges') }}
            </TypographySubtitleMedium>
          </ButtonColored>
        </div>
      </div>
      <CardButton
        class="border-(--warning-strong) bg-(--warning-weak) text-(--warning-text)"
        :title="t('resetPassword')"
        :to="
          localePath({
            name: 'account-password-reset-request',
          })
        "
      >
        <AppIconVerifiedUser />
        <template #iconSecondary>
          <AppIconRestartAlt />
        </template>
      </CardButton>
      <ButtonColored
        :aria-label="t('deleteAccount')"
        variant="tertiary-critical"
        @click="openDeleteDrawer"
      >
        {{ t('deleteAccount') }}
      </ButtonColored>
      <AccountDeleteDrawer
        v-model:is-open="isDeleteDrawerOpen"
        :account-id="account.id"
      />
    </div>
  </LayoutPage>
</template>

<script setup lang="ts">
import { useMutation, useQuery } from '@urql/vue'

import { graphql } from '~~/gql/generated'

// compiler
definePageMeta({
  layout: 'default-no-header',
})

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// validation
const route = useRoute('account-edit-username___en')
const store = useStore()
if (route.params.username !== store.signedInUsername) {
  throw createError({
    statusCode: 403,
  })
}

// api data
const query = useQuery({
  query: graphql(`
    query AccountEdit($username: String!) {
      accountByUsername(username: $username) {
        description
        id
        imprint
        profilePictureByAccountId {
          id
          uploadByUploadId {
            id
            storageKey
          }
        }
        username
      }
    }
  `),
  variables: {
    username: route.params.username,
  },
})
const api = await useApiData([query])
const account = computed(() => api.value.data.accountByUsername)
const apiErrorMessages = computed(() =>
  getCombinedErrorMessages(api.value.errors),
)

// profile picture
const showModalUploadSelection = () => {
  store.modals.push({ id: 'ModalUploadSelection' })
}

const createProfilePictureMutation = useMutation(
  graphql(`
    mutation CreateProfilePicture($input: ProfilePictureInput!) {
      createProfilePicture(input: { profilePicture: $input }) {
        profilePicture {
          accountId
          id
          uploadId
        }
        accountByAccountId {
          id
          profilePictureByAccountId {
            id
            uploadId
          }
        }
      }
    }
  `),
)
const onUploadSelect = async (uploadId?: string | null | undefined) => {
  await removeProfilePicture()
  const result = await createProfilePictureMutation.executeMutation({
    input: {
      accountId: account.value?.id,
      uploadId,
    },
  })

  if (result.error) {
    // TODO: confirm design
    await showToast({
      icon: 'error',
      text: apiErrorMessages.value.join('\n'),
      title: t('globalError'),
    })
    return
  }

  if (!result.data) {
    // TODO: confirm design
    await showToast({
      icon: 'error',
      text: t('globalErrorNoData'),
      title: t('globalError'),
    })
    return
  }
}

const deleteProfilePictureByIdMutation = useMutation(
  graphql(`
    mutation DeleteProfilePictureByIdMutation($id: UUID!) {
      deleteProfilePictureById(input: { id: $id }) {
        clientMutationId
      }
    }
  `),
)
const removeProfilePicture = async () => {
  const profilePicture = account.value?.profilePictureByAccountId

  if (!profilePicture?.id) return

  const result = await deleteProfilePictureByIdMutation.executeMutation({
    id: profilePicture.id,
  })

  if (result.error) {
    // TODO: confirm design
    await showToast({
      icon: 'error',
      text: apiErrorMessages.value.join('\n'),
      title: t('globalError'),
    })
    return
  }

  if (!result.data) {
    // TODO: confirm design
    await showToast({
      icon: 'error',
      text: t('globalErrorNoData'),
      title: t('globalError'),
    })
    return
  }
}

// description
const descriptionLengthMaximum = 500
const isEditingDescription = ref<boolean>()
const editableDescription = ref<string>()
const toggleEditDescription = () => {
  if (!isEditingDescription.value) {
    editableDescription.value = account.value?.description?.trim() || ''
  }
  isEditingDescription.value = !isEditingDescription.value
}
const cancelEditDescription = () => {
  editableDescription.value = account.value?.description?.trim() || ''
  isEditingDescription.value = false
}

// imprint
const imprintLengthMaximum = 500
const isEditingImprint = ref<boolean>()
const editableImprint = ref<string>()
const toggleEditImprint = () => {
  if (!isEditingImprint.value) {
    editableImprint.value = account.value?.imprint?.trim() || ''
  }
  isEditingImprint.value = !isEditingImprint.value
}
const cancelEditImprint = () => {
  editableImprint.value = account.value?.imprint?.trim() || ''
  isEditingImprint.value = false
}

const updateAccountByIdMutation = useMutation(
  graphql(`
    mutation UpdateAccountById($id: UUID!, $accountPatch: AccountPatch!) {
      updateAccountById(input: { id: $id, accountPatch: $accountPatch }) {
        account {
          description
          id
          imprint
        }
      }
    }
  `),
)
const saveDescription = async () => {
  if (!account.value) return

  const result = await updateAccountByIdMutation.executeMutation({
    id: account.value.id,
    accountPatch: { description: editableDescription.value },
  })

  if (result.error) {
    // TODO: confirm design
    await showToast({
      icon: 'error',
      text: apiErrorMessages.value.join('\n'),
      title: t('globalError'),
    })
    return
  }

  if (!result.data) {
    // TODO: confirm design
    await showToast({
      icon: 'error',
      text: t('globalErrorNoData'),
      title: t('globalError'),
    })
    return
  }

  isEditingDescription.value = false
}

const saveImprint = async () => {
  if (!account.value) return

  const result = await updateAccountByIdMutation.executeMutation({
    id: account.value.id,
    accountPatch: { imprint: editableImprint.value },
  })

  if (result.error) {
    // TODO: confirm design
    await showToast({
      icon: 'error',
      text: apiErrorMessages.value.join('\n'),
      title: t('globalError'),
    })
    return
  }

  if (!result.data) {
    // TODO: confirm design
    await showToast({
      icon: 'error',
      text: t('globalErrorNoData'),
      title: t('globalError'),
    })
    return
  }

  isEditingImprint.value = false
}

// account
const isDeleteDrawerOpen = ref<boolean>()
const openDeleteDrawer = () => {
  isDeleteDrawerOpen.value = true
}

// template
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  about: Über
  back: Zurück
  cancel: Abbrechen
  characterCount: '{count}/{maximum}'
  deleteAccount: Konto löschen
  edit: Bearbeiten
  errorAccountMissing: Konto nicht verfügbar
  imprint: Impressum
  remove: Bild entfernen
  replace: Bild ersetzen
  resetPassword: Passwort zurücksetzen
  saveChanges: Änderungen speichern
  title: Mein Profil
en:
  about: About
  back: Back
  cancel: Cancel
  characterCount: '{count}/{maximum}'
  deleteAccount: Delete Account
  edit: Edit
  errorAccountMissing: Account unavailable
  imprint: Imprint
  remove: Remove Image
  replace: Replace Image
  resetPassword: Reset Password
  saveChanges: Save Changes
  title: My Profile
</i18n>
