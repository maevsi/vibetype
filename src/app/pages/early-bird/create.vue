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
      <EarlyBirdForm v-bind="attributes" @next="step = 'submission'" />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'submission'">
      <EarlyBirdSubmission v-bind="attributes" />
    </AppStep>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default-no-header',
})

const { t } = useI18n()
const templateIdTitle = useId()

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

// stepper
const { step, previous, title } = useStepperPage<'form' | 'submission'>({
  steps: {
    default: {
      title: t('title'),
    },
    form: {
      previous: 'default',
    },
    submission: {},
  },
})

// page
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  back: zurück
  iconAltClose: Schließen
  title: Früher Vogel Programm
en:
  back: back
  iconAltClose: Close
  title: Early Bird Program
</i18n>
