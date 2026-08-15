<template>
  <Modal v-model="open">
    <template #header>{{ t('header') }}</template>
    <p class="break-all">{{ t('description') }}</p>
    <p class="mt-2 break-all opacity-60">{{ url }}</p>
    <template #footer>
      <ButtonColored
        :aria-label="t('cancel')"
        variant="secondary"
        @click="onCancel"
      >
        {{ t('cancel') }}
        <template #prefix>
          <AppIconXMark />
        </template>
      </ButtonColored>
      <ButtonColored :aria-label="t('continue')" @click="onSubmit">
        {{ t('continue') }}
        <template #prefix>
          <AppIconCheckCircleSolid />
        </template>
      </ButtonColored>
    </template>
  </Modal>
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
  description: Du verlässt vibetype und wirst zu folgender Adresse weitergeleitet.
  header: Du verlässt vibetype
en:
  cancel: Cancel
  continue: Continue
  description: You are leaving vibetype and will be redirected to the following address.
  header: You are leaving vibetype
</i18n>
