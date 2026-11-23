<template>
  <AppDrawer v-model="open">
    <template #title>{{ t('header') }}</template>
    <p class="break-all">{{ t('description') }}</p>
    <p class="mt-2 break-all opacity-60">{{ url }}</p>
    <template #footer>
      <AppButton :aria-label="t('continue')" @click="onSubmit">
        {{ t('continue') }}
        <template #prefix>
          <AppIconCheckCircleSolid />
        </template>
      </AppButton>
      <AppButton
        :aria-label="t('cancel')"
        variant="secondary"
        @click="onCancel"
      >
        {{ t('cancel') }}
        <template #prefix>
          <AppIconXMark />
        </template>
      </AppButton>
    </template>
  </AppDrawer>
</template>

<script setup lang="ts">
const { url } = defineProps<{
  url: string
}>()

const open = defineModel<boolean>()
const { t } = useI18n()

// methods
const onCancel = () => {
  open.value = false
}
const onSubmit = () => {
  open.value = false
  navigateTo(url, { external: true, open: { target: '_blank' } })
}
</script>

<i18n lang="yaml">
de:
  cancel: Abbrechen
  continue: Fortfahren
  description: Prüfe zu Deiner Sicherheit, wohin dieser Link führt, bevor Du weitergehst.
  header: Du verlässt @.upper:{'globalSiteName'}
en:
  cancel: Cancel
  continue: Continue
  description: For your safety, check where this link leads before you continue.
  header: You're leaving @.upper:{'globalSiteName'}
</i18n>
