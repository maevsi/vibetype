<template>
  <AppError
    v-if="!account"
    :error="{ message: t('errorAccountMissing'), status: 404 }"
  />
  <div v-else class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-2">
          <span class="text-headline">{{ t('profilePicture') }}</span>
          <div class="relative size-42 self-start">
            <AccountProfilePicture
              :account-id="account.rowId"
              class="size-full overflow-hidden rounded-medium"
              height="168"
              width="168"
            />
            <button
              :aria-label="t('replace')"
              class="group absolute inset-0 rounded-medium"
              :title="t('replace')"
              type="button"
              @click="showModalUploadSelection"
            >
              <span
                class="absolute right-2 bottom-2 flex size-10 items-center justify-center rounded-full bg-action-primary text-on-action-primary group-hover:bg-action-primary-hover"
              >
                <AppIconCamera aria-hidden="true" />
              </span>
            </button>
            <button
              v-if="account.profilePictureByAccountId?.rowId"
              :aria-label="t('remove')"
              class="absolute -top-2 -right-2 flex size-8 items-center justify-center rounded-full bg-fg-1 text-surface"
              :title="t('remove')"
              type="button"
              @click="openProfilePictureRemoveDrawer"
            >
              <AppIconClose aria-hidden="true" />
            </button>
          </div>
          <span class="text-body text-fg-2">{{
            t('usernameHandle', { username: account.username })
          }}</span>
          <ModalUploadSelection
            v-model="isModalUploadSelectionOpen"
            @select="onUploadSelect"
          />
          <AccountProfilePictureRemoveDrawer
            v-if="account?.profilePictureByAccountId?.rowId"
            v-model:open="isProfilePictureRemoveDrawerOpen"
            :profile-picture-row-id="account.profilePictureByAccountId.rowId"
          />
        </div>
        <form class="flex flex-col gap-4" @submit.prevent="save">
          <Field>
            <FieldLabel for="description">
              <span class="text-headline">{{ t('about') }}</span>
            </FieldLabel>
            <Textarea
              id="description"
              v-model="description"
              :maxlength="descriptionLengthMaximum"
              name="description"
              :placeholder="t('aboutPlaceholder')"
            />
          </Field>
          <Field>
            <FieldLabel for="imprintUrl">
              <span class="text-headline">{{ t('imprint') }}</span>
            </FieldLabel>
            <Textarea
              id="imprintUrl"
              v-model="imprintUrl"
              :maxlength="imprintLengthMaximum"
              name="imprintUrl"
              :placeholder="t('imprintPlaceholder')"
            />
          </Field>
          <AppButton
            :aria-label="t('save')"
            :disabled="!isDirty"
            :loading="updateAccountByRowIdMutation.fetching.value"
            type="submit"
          >
            <span class="text-headline">{{ t('save') }}</span>
          </AppButton>
        </form>
        <section class="flex flex-col gap-4">
          <AppSeparator />
          <span class="text-headline">{{ t('profile') }}</span>
          <div class="flex flex-col">
            <AppMenuItem
              :title="t('aiSetup')"
              :to="
                localePath({
                  name: 'preference-create',
                })
              "
            >
              <AppIconNetworkIntelligence />
              <!-- <template #suffix>
              <AppIconRestartAlt />
            </template> -->
            </AppMenuItem>
            <AppMenuItem
              :title="t('earlyBirdStart')"
              :to="localePath({ name: 'early-bird-create' })"
            >
              <AppIconEarlyBird />
              <template v-if="false" #suffix>
                <AppIconClose />
              </template>
            </AppMenuItem>
          </div>
        </section>
        <section class="flex flex-col gap-4">
          <AppSeparator />
          <span class="text-headline">{{ t('display') }}</span>
          <div class="flex flex-col">
            <AppMenuItem
              :title="t('language')"
              :to="
                localePath({
                  name: 'session-edit-language',
                })
              "
            >
              <AppIconLanguage />
            </AppMenuItem>
          </div>
        </section>
        <section class="flex flex-col gap-4">
          <AppSeparator />
          <span class="text-headline">
            {{ t('interactions') }}
          </span>
          <AppMenuItem
            :title="t('accountBlock')"
            :to="
              localePath({
                name: 'account-view-username-block',
                params: { username: route.params.username },
              })
            "
          >
            <AppIconNoSymbol />
          </AppMenuItem>
        </section>
        <AppCardButton
          class="border-action-warning bg-warning-tint text-fg-1"
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
        </AppCardButton>
        <AppButton
          :aria-label="t('deleteAccount')"
          variant="tertiary-critical"
          @click="openDeleteDrawer"
        >
          {{ t('deleteAccount') }}
        </AppButton>
        <AccountDeleteDrawer v-model:is-open="isDeleteDrawerOpen" />
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
    query AccountEdit($username: String!) {
      accountByUsername(username: $username) {
        description
        id
        imprintUrl
        profilePictureByAccountId {
          id
          rowId
          uploadByUploadId {
            id
            rowId
            storageKey
          }
        }
        rowId
        username
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

// profile picture
const isModalUploadSelectionOpen = ref<boolean>()
const isProfilePictureRemoveDrawerOpen = ref(false)
const showModalUploadSelection = () => {
  isModalUploadSelectionOpen.value = true
}
const openProfilePictureRemoveDrawer = () => {
  isProfilePictureRemoveDrawerOpen.value = true
}

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
const onUploadSelect = async (uploadId?: string | null | undefined) => {
  if (!account.value?.rowId || !uploadId) return

  await removeProfilePicture()

  await executeUrqlRequest({
    errorMessageI18n: t('errorProfilePictureCreate'),
    request: createProfilePictureMutation.executeMutation({
      input: {
        profilePicture: {
          accountId: account.value?.rowId,
          uploadId,
        },
      },
    }),
  })
}

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
const removeProfilePicture = async () => {
  const profilePicture = account.value?.profilePictureByAccountId

  if (!profilePicture?.rowId) return

  await executeUrqlRequest({
    errorMessageI18n: t('errorProfilePictureDelete'),
    request: deleteProfilePictureByRowIdMutation.executeMutation({
      input: { rowId: profilePicture.rowId },
    }),
  })
}

// description and imprint
const descriptionLengthMaximum = 500
const imprintLengthMaximum = 500

const updateAccountByRowIdMutation = useMutation(
  graphql(`
    mutation UpdateAccountByRowId($input: UpdateAccountByRowIdInput!) {
      updateAccountByRowId(input: $input) {
        account {
          description
          id
          imprintUrl
          rowId
        }
      }
    }
  `),
)

const description = ref(account.value?.description?.trim() ?? '')
const imprintUrl = ref(account.value?.imprintUrl?.trim() ?? '')
const isDirty = computed(
  () =>
    description.value.trim() !== (account.value?.description?.trim() ?? '') ||
    imprintUrl.value.trim() !== (account.value?.imprintUrl?.trim() ?? ''),
)
useLeaveConfirmation(isDirty)

const save = async () => {
  if (!account.value || !isDirty.value) return

  const result = await executeUrqlRequest({
    errorMessageI18n: t('errorUpdate'),
    request: updateAccountByRowIdMutation.executeMutation({
      input: {
        rowId: account.value.rowId,
        accountPatch: {
          description: description.value.trim(),
          imprintUrl: imprintUrl.value.trim(),
        },
      },
    }),
  })

  if (result) toast.success(t('saved'))
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
  about: Über dich
  aboutPlaceholder: Erzähl ein wenig von dir! Was inspiriert dich, was machst du gern, oder verrate einfach eine lustige Tatsache.
  accountBlock: Blockierte Benutzer
  aiSetup: KI einrichten
  deleteAccount: Konto löschen
  display: Anzeige
  earlyBirdStart: Early Bird beitreten
  errorAccountMissing: Konto nicht verfügbar
  errorProfilePictureCreate: Beim Speichern des Profilbildes ist ein Problem aufgetreten
  errorProfilePictureDelete: Beim Entfernen des Profilbildes ist ein Problem aufgetreten
  errorUpdate: Beim Speichern des Profils ist ein Problem aufgetreten
  imprint: Impressum
  imprintPlaceholder: Link zu deinem Impressum
  interactions: Interaktionen mit dir
  language: Sprache
  profile: Profil
  profilePicture: Profilbild
  remove: Profilbild entfernen
  replace: Profilbild ändern
  resetPassword: Passwort zurücksetzen
  save: Profil speichern
  saved: Profil gespeichert
  title: Mein Profil
  usernameHandle: "{'@'}{username}"
en:
  about: About you
  aboutPlaceholder: Share a bit about yourself! What inspires you, what you love doing, or just a fun fact.
  accountBlock: Blocked Users
  aiSetup: Set up AI
  deleteAccount: Delete Account
  display: Display
  earlyBirdStart: Join Early Bird
  errorAccountMissing: Account unavailable
  errorProfilePictureCreate: There was a problem saving the profile picture
  errorProfilePictureDelete: There was a problem removing the profile picture
  errorUpdate: There was a problem saving the profile
  imprint: Imprint
  imprintPlaceholder: Link to your imprint
  interactions: Interactions with you
  language: Language
  profile: Profile
  profilePicture: Profile picture
  remove: Remove profile picture
  replace: Change profile picture
  resetPassword: Reset Password
  save: Save profile
  saved: Profile saved
  title: My Profile
  usernameHandle: "{'@'}{username}"
</i18n>
