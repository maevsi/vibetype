<template>
  <section
    :aria-labelledby="templateIdTitle"
    class="relative flex flex-1 flex-col gap-10"
  >
    <LayoutTopBar>
      <span :id="templateIdTitle">{{ title }}</span>
      <template v-if="[0].includes(index)" #close>
        <ButtonIcon
          :aria-label="t('iconAltClose')"
          @click="navigateTo(localePath('session-create'))"
        >
          <AppIconClose />
        </ButtonIcon>
      </template>
    </LayoutTopBar>
    <LayoutPageContent
      :class="{
        hidden: index !== 0,
      }"
    >
      <TypographyH3 class="text-center">
        {{ t('instructionsRequest') }}
      </TypographyH3>
      <div class="flex justify-center">
        <FormAccountPasswordResetRequest
          ref="form"
          class="w-full max-w-sm"
          @success="index++"
        />
      </div>
      <template #bottom-navigation-extension>
        <ButtonColored
          :aria-label="t('send')"
          class="w-full max-w-sm"
          @click="templateForm?.submit"
        >
          {{ t('send') }}
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
          {{ t('instructionsInboxDescription') }}
        </template>
        <template #title>
          {{ t('instructionsInboxHeading') }}
        </template>
      </LayoutPageResult>
    </LayoutPageContent>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default-no-header',
})

const localePath = useLocalePath()

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// template
const templateIdTitle = useId()
const templateForm = useTemplateRef('form')

// stepper
const index = ref(0)
</script>

<i18n lang="yaml">
de:
  iconAltClose: X-Icon
  instructionsInboxDescription: Überprüfe dein Postfach
  instructionsInboxHeading: Befolge die Anweisungen in der E-Mail, um das Passwort zurückzusetzen.
  instructionsRequest: Gib deine E-Mail-Adresse ein, um dein Passwort zurückzusetzen.
  send: Link zum Zurücksetzen senden
  title: Passwort zurücksetzen
en:
  iconAltClose: X icon
  instructionsInboxDescription: Follow the instructions in the email to reset your password.
  instructionsInboxHeading: Check your inbox
  instructionsRequest: Enter your email address to reset your password.
  send: Send reset link
  title: Reset password
</i18n>
