<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">
        {{ title }}
      </span>
      <template v-if="previous" #back>
        <ButtonIcon :aria-label="t('back')" @click="step = previous">
          <AppIconBack />
        </ButtonIcon>
      </template>
      <template v-if="['default', 'form'].includes(step)" #close>
        <ButtonIconBackRoute :aria-label="t('iconAltClose')">
          <AppIconClose />
        </ButtonIconBackRoute>
      </template>
    </LayoutTopBar>
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <EarlyBirdWelcome v-bind="attributes" @next="step = 'form'" />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'form'">
      <EarlyBirdForm
        v-model:error="error"
        v-bind="attributes"
        @next="step = 'submission'"
      />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'submission'">
      <EarlyBirdSubmission v-bind="attributes" />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'error'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="error">
          <template #description>
            {{ t('errorDescription') }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <ButtonColored
            :aria-label="t('backToEarlyBird')"
            class="w-full max-w-sm"
            variant="primary"
            @click="restart"
          >
            {{ t('backToEarlyBird') }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </AppStep>
  </section>
</template>

<script setup lang="ts">
// compiler
definePageMeta({
  layout: 'default-no-header',
})

// validation
const store = useStore()
const localePath = useLocalePath()
const route = useRoute()
if (!store.signedInUsername) {
  await navigateTo(
    localePath({
      name: 'session-create',
      query: {
        to: route.fullPath,
      },
    }),
  )
}

// head
const { t } = useI18n()
const { error, step, previous, restart, title } = useStepperPage<
  'form' | 'submission'
>({
  steps: {
    default: {
      title: t('title'),
    },
    error: {
      title: t('errorTitle'),
    },
    form: {
      previous: 'default',
    },
    submission: {},
  },
})
useHeadDefault({ title })

// template
const templateIdTitle = useId()
</script>

<i18n lang="yaml">
de:
  back: zurück
  backToEarlyBird: Zurück zur Registrierung
  errorTitle: Fehler
  iconAltClose: Schließen
  title: Früher Vogel Programm
  errorDescription: Die Anmeldung für das Early Bird-Programm scheint nicht geklappt zu haben. Bitte versuche es noch einmal oder wende dich an den Support, wenn das Problem weiterhin besteht.
en:
  back: back
  backToEarlyBird: Back to Registration
  errorTitle: Error
  iconAltClose: Close
  title: Early Bird Program
  errorDescription: The registration for the Early Bird program does not seem to have worked. Please try again or contact support if the problem persists.
</i18n>
