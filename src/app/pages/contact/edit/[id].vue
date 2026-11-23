<template>
  <Loader :api is-page>
    <AppError
      v-if="!contact"
      :error="{ data: { vibetype: t('errorContactMissing') }, status: 404 }"
    />
    <div v-else class="flex flex-1 flex-col">
      <LayoutTopBar>
        <template #back>
          <ButtonIconBackRoute :to="redirectPath" />
        </template>
        {{ title }}
      </LayoutTopBar>
      <LayoutPage>
        <FormContact
          :contact
          :contact-group-ids
          @submit-success="navigateTo(redirectPath)"
        />
      </LayoutPage>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { graphql } from '~~/gql/generated'
import { getContactItem } from '~~/shared/utils/contact'

const localePath = useLocalePath()
const route = useRoute()
const { t } = useI18n()

// validation
await useSignInRequired()

// data
const redirectPath = getRedirectPath(
  route.query.redirect,
  localePath('contact'),
)
const title = t('title')

// api data
const contactQuery = useApiQuery({
  query: graphql(`
    query ContactByRowId($id: UUID!) {
      contactByRowId(rowId: $id) {
        ...ContactItem
        contactGroupMembersByContactId {
          nodes {
            contactGroupId
          }
        }
      }
    }
  `),
  variables: {
    id: route.params.id,
  },
})
const api = await useApiData([contactQuery])

// computations
const contact = computed(() => getContactItem(api.value.data.contactByRowId))
const contactGroupIds = computed(
  () =>
    api.value.data.contactByRowId?.contactGroupMembersByContactId.nodes.map(
      ({ contactGroupId }) => contactGroupId,
    ) ?? [],
)

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  errorContactMissing: Dieser Kontakt existiert nicht mehr. Er wurde möglicherweise gelöscht. Alle Deine Kontakte findest Du in Deinem Kontaktbuch.
  title: Kontakt bearbeiten
en:
  errorContactMissing: This contact doesn't exist anymore. It may have been deleted. You can find all your contacts in your contact book.
  title: Edit contact
</i18n>
