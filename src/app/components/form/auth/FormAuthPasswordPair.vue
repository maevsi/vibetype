<template>
  <div class="flex flex-col gap-3">
    <div>
      <FormAuthInputPassword
        :aria-invalid="!!passwordError"
        :model-value="passwordValue"
        :placeholder="passwordPlaceholder"
        @blur="$emit('password-blur')"
        @input="$emit('update:password-value', $event)"
      />
      <Progress
        v-if="showStrength"
        :model-value="passwordStrength"
        class="mt-2"
      />
      <p v-if="passwordError" class="mt-1 text-sm text-red-600">
        {{ passwordError }}
      </p>
    </div>
    <div>
      <FormAuthInputPassword
        :aria-invalid="!!repetitionError"
        :model-value="repetitionValue"
        :placeholder="repetitionPlaceholder"
        @blur="$emit('repetition-blur')"
        @input="$emit('update:repetition-value', $event)"
      />
      <p v-if="repetitionError" class="mt-1 text-sm text-red-600">
        {{ repetitionError }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    passwordError?: string
    passwordPlaceholder: string
    passwordStrength?: number
    passwordValue: string
    repetitionError?: string
    repetitionPlaceholder: string
    repetitionValue: string
    showStrength?: boolean
  }>(),
  {
    passwordError: '',
    passwordStrength: 0,
    repetitionError: '',
    showStrength: false,
  },
)

defineEmits<{
  'password-blur': []
  'repetition-blur': []
  'update:password-value': [value: string]
  'update:repetition-value': [value: string]
}>()
</script>
