<template>
  <Loader :api="api" indicator="ping">
    <div class="flex flex-col gap-4">
      <LayoutPageTitle v-if="store.jwtDecoded" :title="route.params.username" />
      <section class="flex justify-center">
        <Button
          :aria-label="t('profilePictureChange')"
          @click="showModalUploadSelection"
        >
          <div class="flex items-center gap-4">
            <AccountProfilePicture
              :account-id="account?.id"
              class="h-24 w-24 rounded-sm"
              height="96"
              width="96"
            />
            <IHeroiconsPencil />
          </div>
        </Button>
        <ModalUploadSelection @select="onUploadSelect" />
      </section>
      <section>
        <h2>{{ t('titlePasswordChange') }}</h2>
        <FormAccountPasswordChange />
      </section>
      <section>
        <h2>{{ t('titleAccountDelete') }}</h2>
        <FormDelete
          id="deleteAccount"
          :error-pg-ids="{
            postgres23503: t('postgres23503'),
            postgres28P01: t('postgres28P01'),
          }"
          :item-name-deletion="t('formDeleteItemNameDeletion')"
          :item-name-success="t('formDeleteItemNameSuccess')"
          :mutation="accountDeleteMutation"
          @success="signOut"
        />
      </section>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { useAccountDeleteMutation } from '~~/gql/documents/mutations/account/accountDelete'
import { useProfilePictureSetMutation } from '~~/gql/documents/mutations/profilePicture/profilePictureSet'
import { useAccountByUsernameQuery } from '~~/gql/documents/queries/account/accountByUsername'
import { getAccountItem } from '~~/gql/documents/fragments/accountItem'

const store = useStore()
const { signOut } = await useSignOut()
const { t } = useI18n()

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
const accountDeleteMutation = useAccountDeleteMutation()
const accountByUsernameQuery = await zalgo(
  useAccountByUsernameQuery({
    username: route.params.username,
  }),
)
const account = getAccountItem(
  accountByUsernameQuery.data.value?.accountByUsername,
)
const profilePictureSetMutation = useProfilePictureSetMutation()
const api = getApiData([accountByUsernameQuery, profilePictureSetMutation])

// methods
const onUploadSelect = async (uploadId?: string | null | undefined) =>
  await profilePictureSetMutation.executeMutation({
    uploadId,
  })
const showModalUploadSelection = () => {
  store.modals.push({ id: 'ModalUploadSelection' })
}
</script>

<i18n lang="yaml">
de:
  formDeleteItemNameDeletion: Konto
  formDeleteItemNameSuccess: Konto
  postgres23503: Dir gehören noch Daten! Lösche erst all deine Veranstaltungen, Kontakte und Bilder.
  postgres28P01: Passwort falsch! Überprüfe, ob du alles richtig geschrieben hast.
  profilePictureChange: Profilbild ändern
  settings: Bearbeiten
  titleAccountDelete: Konto löschen
  titlePasswordChange: Password des Kontos ändern
en:
  formDeleteItemNameDeletion: account
  formDeleteItemNameSuccess: Account
  postgres23503: There's still some data connected to your account! Delete all your events, contacts and images first.
  postgres28P01: Password incorrect! Check for spelling mistakes.
  profilePictureChange: Change profile picture
  settings: edit
  titleAccountDelete: Delete account
  titlePasswordChange: Change account password
</i18n>
