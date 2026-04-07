<template>
  <div class="flex flex-col items-center gap-4">
    <form class="flex w-full flex-col gap-4" @submit="onSubmit">
      <form.Field
        v-slot="{ field }"
        name="username"
        :validators="{
          onBlurAsync: async ({ value: val }) => {
            if (!val) return undefined

            const isAvailable = await validateUsername(true)(val)
            return isAvailable ? undefined : t('usernameAlreadyTaken')
          },
        }"
      >
        <Field>
          <FieldLabel>
            <TypographySubtitleSmall>
              {{ t('username') }}
            </TypographySubtitleSmall>
          </FieldLabel>
          <FieldContent>
            <Input
              type="text"
              :model-value="field.state.value"
              :aria-invalid="isFieldInvalid(field)"
              @blur="field.handleBlur"
              @input="
                field.handleChange(($event.target as HTMLInputElement).value)
              "
            />
          </FieldContent>
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="normalizeFieldErrors(field.state.meta.errors)"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="emailAddress">
        <Field>
          <FieldLabel>
            <TypographySubtitleSmall>
              {{ t('emailAddress') }}
            </TypographySubtitleSmall>
          </FieldLabel>
          <FieldContent>
            <Input
              type="email"
              :model-value="field.state.value"
              :aria-invalid="isFieldInvalid(field)"
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
            <Progress
              :model-value="calculatePasswordStrength(field.state.value)"
              class="my-2"
            />
          </FieldContent>
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="passwordRepetition">
        <Field>
          <FieldLabel>
            <TypographySubtitleSmall>
              {{ t('passwordRepetition') }}
            </TypographySubtitleSmall>
          </FieldLabel>
          <FieldContent>
            <div class="relative">
              <Input
                :type="isPasswordRepVisible ? 'text' : 'password'"
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
                @click="isPasswordRepVisible = !isPasswordRepVisible"
              >
                <AppIconEye v-if="!isPasswordRepVisible" />
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
      <ButtonColored :aria-label="t('register')" class="w-full" type="submit">
        {{ t('register') }}
      </ButtonColored>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ t('accountDeletionNotice') }}
      </p>
    </form>
    <ButtonColored
      :aria-label="t('signIn')"
      class="w-full"
      :to="localePath('session-create')"
      variant="tertiary"
    >
      {{ t('signIn') }}
    </ButtonColored>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

const emit = defineEmits<{
  submit: [
    values: {
      captcha: string
      emailAddress: string
      password: string
      username: string
    },
  ]
}>()

const { t } = useI18n()
const localePath = useLocalePath()
const isPasswordVisible = ref(false)
const isPasswordRepVisible = ref(false)
const captchaIsUsed = defineModel<boolean>('captcha-is-used')

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

// form
const formSchema = z
  .object({
    captcha: z.string().min(1),
    emailAddress: z.string().min(1).email().max(1000),
    password: z.string().min(VALIDATION_PASSWORD_LENGTH_MINIMUM),
    passwordRepetition: z.string().min(1),
    username: z
      .string()
      .min(1)
      .max(VALIDATION_USERNAME_LENGTH_MAXIMUM)
      .regex(REGEX_SLUG),
  })
  .refine((data) => data.password === data.passwordRepetition, {
    message: t('passwordMismatch'),
    path: ['passwordRepetition'],
  })

const form = useForm({
  defaultValues: {
    captcha: '',
    emailAddress: '',
    password: '',
    passwordRepetition: '',
    username: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    emit('submit', {
      captcha: value.captcha,
      emailAddress: value.emailAddress,
      password: value.password,
      username: value.username,
    })
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
  accountDeletionNotice: Du wirst deinen Account jederzeit löschen können.
  emailAddress: E-Mail-Adresse
  password: Passwort
  passwordMismatch: Die Passwörter stimmen nicht überein
  passwordRepetition: Passwort bestätigen
  register: Registrieren
  signIn: 'Du hast bereits ein Konto? Anmelden'
  username: Nutzername
  usernameAlreadyTaken: Dieser Nutzername ist bereits vergeben
  visibilityToggle: Sichtbarkeit umschalten
en:
  accountDeletionNotice: "You'll be able to delete your account at any time."
  emailAddress: Email address
  password: Password
  passwordMismatch: The passwords do not match
  passwordRepetition: Confirm password
  register: Sign Up
  signIn: Already have an account? Log in
  username: Username
  usernameAlreadyTaken: This username is already taken
  visibilityToggle: Toggle visibility
</i18n>
