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
    class="text-(--semantic-critic-text)"
  >
    <slot />
  </FormInputState>
</template>

<script setup lang="ts">
import type { BaseValidation } from '@vuelidate/core'

const {
  formInput = undefined,
  isValidationLive,
  validationProperty = undefined,
} = defineProps<{
  formInput?: BaseValidation
  isValidationLive?: boolean
  validationProperty?: string
}>()
</script>
