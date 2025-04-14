<template>
  <FormInputState
    v-if="formInput && !formInput.$invalid"
    class="text-(--semantic-success-strong)"
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
