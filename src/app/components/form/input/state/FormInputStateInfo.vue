<template>
  <FormInputState
    v-if="
      (!formInput && !validationProperty) ||
      (formInput &&
        formInput[isValidationLive ? '$invalid' : '$error'] &&
        !formInput.$pending &&
        validationProperty &&
        validationProperty in formInput &&
        formInput[validationProperty].$invalid)
    "
    class="text-gray-500 dark:text-gray-400"
  >
    <IHeroiconsInformationCircleSolid :title="title" />
    <slot />
  </FormInputState>
</template>

<script setup lang="ts">
import type { BaseValidation } from '@vuelidate/core'

const { formInput, isValidationLive, title, validationProperty } = defineProps<{
  formInput?: BaseValidation
  isValidationLive?: boolean
  title?: string
  validationProperty?: string
}>()
</script>
