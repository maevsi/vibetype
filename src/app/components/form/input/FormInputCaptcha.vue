<template>
  <FormInput
    :class="{
      hidden: !isVisible && !formInput.$error,
    }"
    :title="t('captcha')"
    :value="formInput"
  >
    <NuxtTurnstile
      ref="turnstile"
      :key="themeColor"
      :class="{ 'flex justify-center': isCentered, 'h-[65px]': isVisible }"
      :options="{
        'error-callback': () => (isLoading = false),
        'expired-callback': () => emit('input', undefined),
        theme: themeColor,
      }"
      @update:model-value="update"
    />
    <FormInputStateError
      v-if="!isVisible"
      :form-input="formInput"
      validation-property="required"
    >
      {{ t('globalValidationRequired') }}
    </FormInputStateError>
    <template v-if="isVisible" #stateError>
      <FormInputStateError
        :form-input="formInput"
        validation-property="required"
      >
        {{ t('globalValidationRequired') }}
      </FormInputStateError>
    </template>
    <template v-if="!isVisible && isLoading" #stateInfo>
      <FormInputStateInfo>
        {{ t('globalLoading') }}
      </FormInputStateInfo>
    </template>
    <template v-if="formInput.$error" #assistance>
      <ButtonColored
        :aria-label="t('reset')"
        class="w-full"
        variant="secondary"
        @click="reset"
      >
        {{ t('reset') }}
        <template #prefix>
          <AppIconArrowPath />
        </template>
      </ButtonColored>
    </template>
  </FormInput>
</template>

<script setup lang="ts">
import type { BaseValidation } from '@vuelidate/core'

// compiler
const { isCentered } = defineProps<{
  formInput: BaseValidation
  isCentered?: boolean
}>()
const emit = defineEmits<{
  input: [event?: string]
}>()

// color mode
const themeColor = ref<'auto' | 'light' | 'dark'>()
const colorMode = useColorMode()
const getThemeColor = (colorModePreferenceOverride?: string) => {
  const colorModePreference =
    colorModePreferenceOverride || colorMode.preference

  switch (colorModePreference) {
    case 'system':
      return 'auto'
    case 'light':
    case 'dark':
      return colorModePreference
    default:
      throw new Error(`Unexpected color mode "${colorModePreference}"`)
  }
}
themeColor.value = getThemeColor()
watch(
  () => colorMode.value,
  (currentValue, _oldValue) => (themeColor.value = getThemeColor(currentValue)),
)

// template
const runtimeConfig = useRuntimeConfig()
const { t } = useI18n()

const isLoading = ref(true)
const templateTurnstile = useTemplateRef('turnstile')
const isVisible = computed(
  () => !runtimeConfig.public.vio.isTesting,
  // TODO: implement invisible widget type with fallback in case of required user interaction (https://github.com/maevsi/vibetype/issues/1239)
  // !['1x00000000000000000000BB', '2x00000000000000000000BB'].includes(
  //   config.public.turnstile.siteKey
  // )
)

const isUsed = defineModel<boolean>('is-used')
const reset = () => {
  if (!templateTurnstile.value) return

  isLoading.value = true
  templateTurnstile.value.reset()
}
watch(isUsed, (current, old) => {
  if (!old && current) {
    reset()
  }
})
const update = (e: string) => {
  isLoading.value = false
  isUsed.value = false
  emit('input', e)
}
</script>

<i18n lang="yaml">
de:
  captcha: Captcha
  reset: Captcha neu laden
en:
  captcha: Captcha
  reset: Reload captcha
</i18n>
