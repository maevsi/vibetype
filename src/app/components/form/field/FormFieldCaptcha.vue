<template>
  <form.Field v-slot="{ field }" name="captcha">
    <div
      :class="{
        hidden:
          !isCaptchaVisible &&
          !(field.state.meta.isTouched && !field.state.meta.isValid),
      }"
    >
      <NuxtTurnstile
        :key="`${themeColor}-${resetCount}`"
        :class="{
          'flex justify-center': true,
          'h-16.25': isCaptchaVisible,
        }"
        :options="{
          'error-callback': () => (isCaptchaLoading = false),
          'expired-callback': () => field.handleChange(''),
          theme: themeColor,
        }"
        @update:model-value="
          (value: string) => {
            isCaptchaLoading = false
            modelCaptchaIsUsed = false
            field.handleChange(value)
          }
        "
      />
    </div>
  </form.Field>
</template>

<script setup lang="ts">
import type { AnyVueForm } from '~/utils/form'

const { form } = defineProps<{
  form: AnyVueForm
}>()

const modelCaptchaIsUsed = defineModel<boolean>('captchaIsUsed')

const { isCaptchaLoading, isCaptchaVisible, themeColor } = useCaptcha()

const resetCount = ref(0)

watch(modelCaptchaIsUsed, (isUsed) => {
  if (!isUsed) return

  form.setFieldValue('captcha', '')
  resetCount.value++
})
</script>
