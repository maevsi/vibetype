<template>
  <AppDrawer v-model="isOpen">
    <form class="flex flex-col gap-4 pb-4" @submit.prevent="onSubmit">
      <Field>
        <FieldLabel for="companion-count-approve">
          {{ t('label') }}
        </FieldLabel>
        <FieldContent>
          <Input
            id="companion-count-approve"
            v-model="value"
            :max="maximum"
            :min="minimum"
            name="companionCount"
            required
            type="number"
          />
        </FieldContent>
      </Field>
      <AppButton
        :aria-label="t('submit')"
        :disabled="!isValid"
        :loading="isPending"
        type="submit"
      >
        {{ t('submit') }}
      </AppButton>
    </form>
    <template #title>{{ t('title') }}</template>
    <template #description>{{ t('description') }}</template>
  </AppDrawer>
</template>

<script setup lang="ts">
const {
  maximum,
  minimum,
  isPending = false,
} = defineProps<{
  isPending?: boolean
  maximum: number
  minimum: number
}>()
const emit = defineEmits<{
  confirm: [count: number]
}>()

const isOpen = defineModel<boolean>('open')

const { t } = useI18n()

// data
const value = ref(String(minimum))

// computations
const isValid = computed(() => {
  const count = Number(value.value)

  return Number.isInteger(count) && count >= minimum && count <= maximum
})

// methods
const onSubmit = () => {
  if (!isValid.value) return

  emit('confirm', Number(value.value))
}

// lifecycle
watch(isOpen, (isOpenValue) => {
  if (isOpenValue) value.value = String(minimum)
})
</script>

<i18n lang="yaml">
de:
  description: Lege fest, wie viele weitere Gäste mitkommen dürfen.
  label: Anzahl weiterer Gäste
  submit: Zusagen
  title: Weniger weitere Gäste zusagen
en:
  description: Choose how many additional guests may come.
  label: Number of additional guests
  submit: Approve
  title: Approve fewer additional guests
</i18n>
