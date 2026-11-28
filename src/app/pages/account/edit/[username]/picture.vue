<template>
  <AppError
    v-if="!account"
    :error="{ data: { vibetype: t('errorAccountMissing') }, status: 404 }"
  />
  <div v-else class="flex flex-1 flex-col">
    <LayoutTopBar>
      {{ title }}
      <template #back>
        <ButtonIconBackRoute :to="redirectPath" />
      </template>
    </LayoutTopBar>
    <LayoutPage>
      <div class="flex flex-col gap-4">
        <UploadGallery
          is-readonly
          is-selectable
          @selection="selectProfilePictureUploadId"
        />
        <AppButton
          :aria-label="t('submit')"
          :disabled="!selectedUploadId"
          :loading="isSubmitting"
          @click="submit"
        >
          <span class="text-headline">{{ t('submit') }}</span>
        </AppButton>
      </div>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// validation
await useSignInRequired()
const route = useRoute()
const store = useStore()
const { createA11yError } = useA11yError()
if (
  store.signedInUsername &&
  route.params.username !== store.signedInUsername
) {
  throw createA11yError({
    status: 403,
  })
}

// api data
const query = useApiQuery({
  query: graphql(`
    query AccountProfilePicture($username: String!) {
      accountByUsername(username: $username) {
        id
        profilePictureByAccountId {
          id
          rowId
        }
        rowId
      }
    }
  `),
  variables: {
    username: route.params.username,
  },
})
const api = await useApiData([query])
const executeUrqlRequest = useExecuteUrqlRequest()
const account = computed(() => api.value.data.accountByUsername)

// data
const selectedUploadId = ref<string | null>()
const isSubmitting = ref(false)

// computations
const localePath = useLocalePath()
const redirectPath = getRedirectPath(
  route.query.redirect,
  localePath({
    name: 'account-edit-username',
    params: { username: route.params.username },
  }),
)

useLeaveConfirmation(computed(() => !!selectedUploadId.value))

// profile picture
const createProfilePictureMutation = useMutation(
  graphql(`
    mutation CreateProfilePicture($input: CreateProfilePictureInput!) {
      createProfilePicture(input: $input) {
        profilePicture {
          accountByAccountId {
            id
            profilePictureByAccountId {
              id
              rowId
            }
            rowId
          }
          id
          rowId
          uploadId
        }
      }
    }
  `),
)
const deleteProfilePictureByRowIdMutation = useMutation(
  graphql(`
    mutation DeleteProfilePictureByRowIdMutation(
      $input: DeleteProfilePictureByRowIdInput!
    ) {
      deleteProfilePictureByRowId(input: $input) {
        clientMutationId
      }
    }
  `),
)

// methods
const selectProfilePictureUploadId = (uploadId?: string | null) => {
  selectedUploadId.value = uploadId
}
const removeProfilePicture = async () => {
  const profilePicture = account.value?.profilePictureByAccountId

  if (!profilePicture?.rowId) return true

  return await executeUrqlRequest({
    errorMessageI18n: t('errorProfilePictureDelete'),
    request: deleteProfilePictureByRowIdMutation.executeMutation({
      input: { rowId: profilePicture.rowId },
    }),
  })
}
const submit = async () => {
  if (!account.value?.rowId || !selectedUploadId.value) return

  isSubmitting.value = true

  try {
    if (!(await removeProfilePicture())) return

    const result = await executeUrqlRequest({
      errorMessageI18n: t('errorProfilePictureCreate'),
      request: createProfilePictureMutation.executeMutation({
        input: {
          profilePicture: {
            accountId: account.value.rowId,
            uploadId: selectedUploadId.value,
          },
        },
      }),
    })

    if (result) {
      selectedUploadId.value = null
      await navigateTo(redirectPath)
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<i18n lang="yaml">
de:
  errorAccountMissing: Dieses Konto existiert nicht. Es wurde möglicherweise gelöscht oder der Nutzername hat sich geändert.
  errorProfilePictureCreate: Beim Speichern des Profilbildes ist ein Problem aufgetreten
  errorProfilePictureDelete: Beim Entfernen des Profilbildes ist ein Problem aufgetreten
  submit: Profilbild übernehmen
  title: Wähle ein Profilbild
en:
  errorAccountMissing: This account doesn't exist. It may have been deleted, or the username changed.
  errorProfilePictureCreate: There was a problem saving the profile picture
  errorProfilePictureDelete: There was a problem removing the profile picture
  submit: Use profile picture
  title: Select a profile picture
</i18n>
