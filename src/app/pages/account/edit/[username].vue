<template>
  <Loader :api="api" indicator="ping">
    <LayoutPage v-if="account">
      <div class="grid grid-cols-3 items-center">
        <AppButton
          :aria-label="t('back')"
          :to="
            localePath({
              name: 'account-view-username',
              params: { username: store.signedInUsername },
            })
          "
          class="justify-self-start"
        >
          <AppIconBack class="size-8" />
        </AppButton>
        <TypographyH3 class="justify-self-center">
          {{ t('myProfile') }}
        </TypographyH3>
        <div></div>
      </div>
      <div class="flex flex-col gap-4">
        <div
          class="flex items-center gap-4 rounded-lg border border-(--semantic-base-background) bg-(--semantic-base-surface-1) p-3"
        >
          <AccountProfilePicture
            :account-id="account.id"
            class="size-15 flex-shrink-0 rounded-full"
            height="60"
            width="60"
          />
          <div class="flex flex-1 gap-3">
            <ButtonColored
              size="compact"
              :aria-label="t('replace')"
              class="flex-1"
              @click="showModalUploadSelection"
            >
              <TypographyLabel>
                {{ t('replace') }}
              </TypographyLabel>
            </ButtonColored>
            <ButtonColored
              variant="secondary"
              size="compact"
              :aria-label="t('remove')"
              class="flex-1"
            >
              <TypographyLabel>
                {{ t('remove') }}
              </TypographyLabel>
            </ButtonColored>
          </div>
          <ModalUploadSelection @select="onUploadSelect" />
        </div>
        <div class="flex flex-col">
          <div
            class="flex flex-col rounded-lg border border-(--semantic-base-background) bg-(--semantic-base-surface-1) p-4"
          >
            <div class="mb-4 flex items-center justify-between">
              <TypographyH3>
                {{ t('about') }}
              </TypographyH3>
              <button
                class="flex items-center gap-1"
                @click="isEditing ? cancelEdit() : toggleEdit()"
              >
                <template v-if="!isEditing">
                  <AppIconEdit
                    class="size-5 text-(--semantic-base-text-tertiary)"
                  />
                  <TypographySubtitleMedium
                    class="text-(--semantic-base-text-tertiary) underline underline-offset-2"
                  >
                    {{ t('editInfo') }}
                  </TypographySubtitleMedium>
                </template>
                <TypographySubtitleMedium
                  v-if="isEditing"
                  class="text-(--semantic-base-text-tertiary) underline underline-offset-2"
                >
                  {{ t('cancel') }}
                </TypographySubtitleMedium>
              </button>
            </div>
            <div
              v-if="isEditing"
              class="h-35 rounded-lg border border-(--semantic-base-line) bg-(--semantic-base-input-field-fill) p-3"
            >
              <textarea
                v-model="editableDescription"
                class="h-full w-full resize-none bg-transparent focus:outline-none"
                maxlength="500"
              />
            </div>
            <TypographyBodyMedium v-else>
              {{ account?.description }}
            </TypographyBodyMedium>
          </div>
          <div
            v-if="isEditing"
            class="flex flex-col items-end gap-2 text-right"
          >
            <TypographySubtitleSmall
              class="text-(--semantic-base-text-secondary)"
            >
              {{
                t('maxCharacters', { count: editableDescription?.length || 0 })
              }}
            </TypographySubtitleSmall>
            <ButtonColored
              variant="secondary"
              :aria-label="t('saveChanges')"
              @click="saveDescription"
            >
              <TypographyLabel>
                {{ t('saveChanges') }}
              </TypographyLabel>
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
        <div class="flex justify-center">
          <TypographySubtitleMedium
            class="cursor-pointer text-(--semantic-critic-text) underline underline-offset-2"
            @click="openDeleteDrawer"
          >
            {{ t('deleteAccount') }}
          </TypographySubtitleMedium>
        </div>
        <AccountDeleteDrawer
          v-model:is-open="isDeleteDrawerOpen"
          :account-id="account?.id"
        />
      </div>
    </LayoutPage>
  </Loader>
</template>

<script setup lang="ts">
import { useProfilePictureSetMutation } from '~~/gql/documents/mutations/profilePicture/profilePictureSet'
import { useAccountByUsernameQuery } from '~~/gql/documents/queries/account/accountByUsername'
import { getAccountItem } from '~~/gql/documents/fragments/accountItem'
import { useAccountDescriptionUpdateMutation } from '~~/gql/documents/mutations/account/accountDescriptionUpdate'

definePageMeta({
  layout: 'default-no-header',
})

const store = useStore()
const localePath = useLocalePath()
const { t } = useI18n()

const isEditing = ref(false)
const editableDescription = ref('')
const isDeleteDrawerOpen = ref(false)
const accountDescriptionMutation = useAccountDescriptionUpdateMutation()

// page
const route = useRoute('account-edit-username___en')
const title = t('settings')
useHeadDefault({ title })

// validation
if (route.params.username !== store.signedInUsername) {
  throw createError({
    statusCode: 403,
  })
}

// api data
const accountByUsernameQuery = useAccountByUsernameQuery({
  username: route.params.username,
})
const profilePictureSetMutation = useProfilePictureSetMutation()
const api = await useApiData([
  accountByUsernameQuery,
  profilePictureSetMutation,
])
const account = getAccountItem(api.value.data.accountByUsername)

// methods
const onUploadSelect = async (uploadId?: string | null | undefined) =>
  await profilePictureSetMutation.executeMutation({
    uploadId,
  })
const showModalUploadSelection = () => {
  store.modals.push({ id: 'ModalUploadSelection' })
}

const toggleEdit = () => {
  if (!isEditing.value) {
    editableDescription.value = account?.description?.trim() || ''
  }
  isEditing.value = !isEditing.value
}

const cancelEdit = () => {
  editableDescription.value = account?.description?.trim() || ''
  toggleEdit()
}

const openDeleteDrawer = () => {
  isDeleteDrawerOpen.value = true
}

const saveDescription = async () => {
  if (!account?.username) return
  await accountDescriptionMutation.executeMutation({
    username: account.username,
    accountPatch: { description: editableDescription.value },
  })
  toggleEdit()
}
</script>

<i18n lang="yaml">
de:
  about: Über
  back: Zurück
  cancel: Abbrechen
  deleteAccount: Konto löschen
  editInfo: Info bearbeiten
  maxCharacters: '{count}/500'
  myProfile: Mein Profil
  remove: Bild entfernen
  replace: Bild ersetzen
  resetPassword: Passwort zurücksetzen
  saveChanges: Änderungen speichern
  settings: Bearbeiten
en:
  about: About
  back: Back
  cancel: Cancel
  deleteAccount: Delete Account
  editInfo: Edit Info
  myProfile: My Profile
  maxCharacters: '{count}/500'
  remove: Remove Image
  replace: Replace Image
  resetPassword: Reset Password
  settings: edit
  saveChanges: Save Changes
</i18n>
