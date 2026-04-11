<template>
  <div class="flex flex-col items-center gap-4">
    <form class="flex w-full flex-col gap-4" @submit="onSubmit">
      <form.Field v-slot="{ field }" name="username">
        <Field>
          <FieldLabel>
            <TypographySubtitleSmall>
              {{ t('emailAddressOrUsername') }}
            </TypographySubtitleSmall>
          </FieldLabel>
          <FieldContent>
            <Input
              :model-value="field.state.value"
              :aria-invalid="isFieldInvalid(field)"
              autocomplete="username"
              @blur="field.handleBlur"
              @input="
                field.handleChange(($event.target as HTMLInputElement).value)
              "
            />
          </FieldContent>
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="password">
        <Field>
          <FieldLabel>
            <TypographySubtitleSmall>
              {{ t('password') }}
            </TypographySubtitleSmall>
          </FieldLabel>
          <FieldContent>
            <div class="relative">
              <Input
                :type="isPasswordVisible ? 'text' : 'password'"
                :model-value="field.state.value"
                :aria-invalid="isFieldInvalid(field)"
                @blur="field.handleBlur"
                @input="
                  field.handleChange(($event.target as HTMLInputElement).value)
                "
              />
              <ButtonIcon
                :aria-label="t('visibilityToggle')"
                class="absolute top-1/2 right-2 -translate-y-1/2"
                @click="isPasswordVisible = !isPasswordVisible"
              >
                <AppIconEye v-if="!isPasswordVisible" />
                <AppIconEyeSlash v-else />
              </ButtonIcon>
            </div>
          </FieldContent>
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="captcha">
        <div
          :class="{
            hidden:
              !isCaptchaVisible &&
              !(field.state.meta.isTouched && !field.state.meta.isValid),
          }"
        >
          <NuxtTurnstile
            ref="turnstile"
            :key="themeColor"
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
                captchaIsUsed = false
                field.handleChange(value)
              }
            "
          />
        </div>
      </form.Field>
      <ButtonColored :aria-label="t('signIn')" class="w-full" type="submit">
        {{ t('signIn') }}
      </ButtonColored>
    </form>
    <ButtonColored
      :aria-label="t('register')"
      class="w-full"
      :to="localePath('account-create')"
      variant="secondary"
    >
      {{ t('register') }}
    </ButtonColored>
    <ButtonColored
      :aria-label="t('passwordReset')"
      class="w-full"
      :to="localePath('account-password-reset-request')"
      variant="tertiary"
    >
      {{ t('passwordReset') }}
    </ButtonColored>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

const emit = defineEmits<{
  'signed-in': []
}>()

const { t } = useI18n()
const localePath = useLocalePath()

// data
const isPasswordVisible = ref(false)
const modelError = defineModel<Error>('error')

// captcha
const runtimeConfig = useRuntimeConfig()
const colorMode = useColorMode()
const themeColor = ref<'auto' | 'light' | 'dark'>()
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
  (currentValue) => (themeColor.value = getThemeColor(currentValue)),
)
const isCaptchaVisible = computed(() => !runtimeConfig.public.vio.isTesting)
const isCaptchaLoading = ref(true)
const captchaIsUsed = ref<boolean>()

// form
const loading = ref<boolean>()
const alertError = useAlertError()
const store = useStore()
const { $csrfFetch, $urqlReset } = useNuxtApp()

const formSchema = z.object({
  captcha: z.string().min(1),
  password: z.string().min(1),
  username: z.union([
    z.string().min(1).email().max(254),
    z
      .string()
      .min(1)
      .max(100)
      .regex(/^[-A-Za-z0-9]+$/),
  ]),
})

const form = useForm({
  defaultValues: {
    captcha: '',
    password: '',
    username: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    try {
      loading.value = true
      const { jwtPayload } = await $csrfFetch('/api/model/jwt', {
        body: {
          password: value.password,
          username: value.username,
        },
        headers: {
          ...(value.captcha ? { [TURNSTILE_HEADER_KEY]: value.captcha } : {}),
        },
        method: 'POST',
      })

      if (!jwtPayload) {
        throw new Error(t('error'))
      }

      store.jwtSet(jwtPayload)
      $urqlReset()
      emit('signed-in')
    } catch (error) {
      alertError({
        ...(error instanceof Error ? { error } : {}),
        messageI18n: t('error'),
      })
      modelError.value = new Error(t('error'), { cause: error })
    } finally {
      captchaIsUsed.value = true
      loading.value = false
    }
  },
})

const onSubmit = (e: Event) => {
  e.preventDefault()
  e.stopPropagation()
  form.handleSubmit()
}
</script>

<i18n lang="yaml">
de:
  emailAddressOrUsername: E-Mail-Adresse oder Benutzername
  error: Es gab ein Problem bei der Anmeldung. Versuche es nochmal oder kontaktiere den Support, wir helfen dir gerne weiter.
  password: Passwort
  passwordReset: Passwort zurücksetzen
  register: Konto erstellen
  signIn: Einloggen
  visibilityToggle: Sichtbarkeit umschalten
en:
  emailAddressOrUsername: Email address or username
  error: There was a problem signing in. Please try again or contact support, we are happy to help.
  password: Password
  passwordReset: I forgot my password
  register: Create an account
  signIn: Log in
  visibilityToggle: Toggle visibility
</i18n>
