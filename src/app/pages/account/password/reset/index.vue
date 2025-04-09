<template>
  <section
    :aria-labelledby="templateIdTitle"
    class="relative flex flex-1 flex-col gap-10"
  >
    <LayoutTopBar>
      <!-- TODO: replace with h1 once unstyled -->
      <span :id="templateIdTitle">{{ title }}</span>
    </LayoutTopBar>
    <LayoutPageContent
      :class="{
        hidden: index !== 0,
      }"
    >
      <TypographyH3 class="text-center">
        {{ t('instructionsNew') }}
      </TypographyH3>
      <div class="flex justify-center">
        <FormAccountPasswordReset
          v-if="route.query.code && !Array.isArray(route.query.code)"
          ref="form"
          class="w-full max-w-sm"
          :code="route.query.code"
          @success="index++"
        />
      </div>
      <template #bottom-navigation-extension>
        <ButtonColored
          :aria-label="t('reset')"
          class="w-full max-w-sm"
          @click="templateForm?.submit"
        >
          {{ t('reset') }}
        </ButtonColored>
      </template>
    </LayoutPageContent>
    <LayoutPageContent
      :class="{
        hidden: index !== 1,
      }"
    >
      <LayoutPageResult type="success">
        <template #description>
          {{ t('instructionsSuccessDescription') }}
        </template>
        <template #title>
          {{ t('instructionsSuccessHeading') }}
        </template>
      </LayoutPageResult>
      <template #bottom-navigation-extension>
        <ButtonColored
          :aria-label="t('signIn')"
          class="w-full max-w-sm"
          @click="navigateTo(localePath('session-create'))"
        >
          {{ t('signIn') }}
        </ButtonColored>
      </template>
    </LayoutPageContent>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default-no-header',
})

defineRouteRules({
  robots: false,
})

const localePath = useLocalePath()

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// validation
const route = useRoute()
if (
  !route.query.code ||
  Array.isArray(route.query.code) ||
  !REGEX_UUID.test(route.query.code)
) {
  throw createError({ statusCode: 400 })
}

// template
const templateIdTitle = useId()
const templateForm = useTemplateRef('form')

// stepper
const index = ref(0)
</script>

<i18n lang="yaml">
de:
  instructionsNew: Neues Passwort
  instructionsSuccessHeading: Passwort erfolgreich zurückgesetzt
  instructionsSuccessDescription: Du kannst dich jetzt mit deinem neuen Passwort anmelden
  reset: Passwort zurücksetzen
  signIn: Einloggen
  title: Passwort zurücksetzen
en:
  instructionsNew: Set a new password
  instructionsSuccessHeading: Password reset successful
  instructionsSuccessDescription: You can now log in using your new password.
  reset: Reset password
  signIn: Log in
  title: Reset password
</i18n>
