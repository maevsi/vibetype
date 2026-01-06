<template>
  <Card>
    <div class="flex items-center gap-4">
      <div class="px-2">
        <AccountProfilePicture
          :account-id
          class="size-12 rounded-full"
          height="48"
          width="48"
        />
      </div>
      <div class="flex flex-1 flex-col">
        <i18n-t keypath="message" tag="span">
          <template #username>
            <span class="font-bold">
              {{ username }}
            </span>
          </template>
        </i18n-t>
      </div>
      <div class="relative flex gap-1">
        <AppIconXCircle class="size-10 text-gray-500 dark:text-gray-400" />
        <AppIconCheckCircle class="size-10 text-green-500" />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
const { accountId, username } = defineProps<{
  accountId: string
  username: string
}>()

useI18n()
</script>

<i18n lang="yaml">
de:
  message: '{username} möchte mit dir befreundet sein'
en:
  message: '{username} wants to be your friend'
</i18n>
