<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">{{ title }}</span>
      <template v-if="['default'].includes(step)" #close>
        <ButtonIconBackRoute :aria-label="t('iconAltClose')">
          <AppIconClose />
        </ButtonIconBackRoute>
      </template>
    </LayoutTopBar>
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <LayoutPage v-bind="attributes">
        <TypographyH3 class="text-center">
          {{ t('instructionsRequest') }}
        </TypographyH3>
        <div class="flex justify-center">
          <FormAccountPasswordResetRequest
            ref="form"
            class="w-full max-w-md"
            @success="step = 'success'"
          />
        </div>
        <template #bottom>
          <ButtonColored
            :aria-label="t('send')"
            class="w-full max-w-md"
            @click="templateForm?.submit"
          >
            {{ t('send') }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'success'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="success">
          <template #description>
            {{ t('instructionsInboxDescription') }}
          </template>
          <template #title>
            {{ t('instructionsInboxHeading') }}
          </template>
        </LayoutPageResult>
      </LayoutPage>
    </AppStep>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default-no-header',
})

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// template
const templateIdTitle = useId()
const templateForm = useTemplateRef('form')

// stepper
const { step } = useStepper<'success'>()
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
