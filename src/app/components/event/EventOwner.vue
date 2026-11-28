<template>
  <i18n-t class="max-w-full truncate-overflow" keypath="eventAuthor" tag="span">
    <template #username>
      <AppLink
        v-if="link"
        :to="
          localePath({
            name: 'account-view-username',
            params: { username },
          })
        "
      >
        {{ displayName || t('username', { username }) }}
      </AppLink>
      <span v-else>
        {{ displayName || t('username', { username }) }}
      </span>
    </template>
  </i18n-t>
</template>

<script setup lang="ts">
const {
  displayName = undefined,
  link,
  username,
} = defineProps<{
  displayName?: string | null
  link?: boolean
  username: string
}>()

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  eventAuthor: von {username}
  username: "{'@'}{username}"
en:
  eventAuthor: by {username}
  username: "{'@'}{username}"
</i18n>
