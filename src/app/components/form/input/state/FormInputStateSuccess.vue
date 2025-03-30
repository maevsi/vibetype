<template>
  <FormInputState
    v-if="formInput && !formInput.$invalid"
    class="text-green-600"
  >
    <IHeroiconsCheckCircleSolid />
    <slot />
  </FormInputState>
</template>

<script setup lang="ts">
import type { BaseValidation } from '@vuelidate/core'

const { formInput } = defineProps<{
  formInput: BaseValidation
}>()
</script>
