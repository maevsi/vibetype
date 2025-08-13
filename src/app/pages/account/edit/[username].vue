<template>
  <AppError
    v-if="!account"
    :error="{ message: t('errorAccountMissing'), statusCode: 404 }"
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
      <AppInputTextarea
        :content-initial="account.description"
        :length-maximum="descriptionLengthMaximum"
        :title="t('about')"
        @save="saveDescription"
      />
      <AppInputTextarea
        :content-initial="account.imprint"
        :length-maximum="imprintLengthMaximum"
        :title="t('imprint')"
        @save="saveImprint"
      />
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
import type { AccountEditQueryVariables } from '~~/gql/generated/graphql'

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
    fatal: true,
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
  } satisfies MaybeRefObj<AccountEditQueryVariables>,
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

// description and imprint
const descriptionLengthMaximum = 500
const imprintLengthMaximum = 500

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

const saveDescription = async (content?: string) => {
  if (!account.value) return

  const result = await updateAccountByIdMutation.executeMutation({
    id: account.value.id,
    accountPatch: { description: content },
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

const saveImprint = async (content?: string) => {
  if (!account.value) return

  const result = await updateAccountByIdMutation.executeMutation({
    id: account.value.id,
    accountPatch: { imprint: content },
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
  deleteAccount: Konto löschen
  errorAccountMissing: Konto nicht verfügbar
  imprint: Impressum
  remove: Bild entfernen
  replace: Bild ersetzen
  resetPassword: Passwort zurücksetzen
  title: Mein Profil
en:
  about: About
  back: Back
  deleteAccount: Delete Account
  errorAccountMissing: Account unavailable
  imprint: Imprint
  remove: Remove Image
  replace: Replace Image
  resetPassword: Reset Password
  title: My Profile
</i18n>
