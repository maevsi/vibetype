<template>
  <div class="flex flex-col gap-3">
    <div>
      <AppInputPassword
        :aria-invalid="!!passwordError"
        :aria-label="passwordPlaceholder"
        autocomplete="new-password"
        :model-value="passwordValue"
        :placeholder="passwordPlaceholder"
        @blur="$emit('password-blur')"
        @update:model-value="$emit('update:password-value', $event)"
      >
        <template #prefix>
          <IHeroiconsKey />
        </template>
      </AppInputPassword>
      <Progress
        v-if="showStrength"
        class="mt-2"
        :model-value="passwordStrength"
      />
      <p v-if="passwordError" class="mt-1 text-caption text-error">
        {{ passwordError }}
      </p>
    </div>
    <div>
      <AppInputPassword
        :aria-invalid="!!repetitionError"
        :aria-label="repetitionPlaceholder"
        autocomplete="new-password"
        :model-value="repetitionValue"
        :placeholder="repetitionPlaceholder"
        @blur="$emit('repetition-blur')"
        @update:model-value="$emit('update:repetition-value', $event)"
      >
        <template #prefix>
          <IHeroiconsKey />
        </template>
      </AppInputPassword>
      <p v-if="repetitionError" class="mt-1 text-caption text-error">
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
