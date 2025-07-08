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
      <template
        v-if="
          ['default', 'size', 'format', 'category', 'location'].includes(step)
        "
        #close
      >
        <ButtonIconBackRoute :aria-label="t('iconAltClose')">
          <AppIconClose />
        </ButtonIconBackRoute>
      </template>
    </LayoutTopBar>
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <PreferenceStepWelcome v-bind="attributes" @next="step = 'size'" />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'size'">
      <PreferenceStepSize
        v-bind="attributes"
        v-model:error="error"
        @next="step = 'format'"
      />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'format'">
      <PreferenceStepFormat
        v-bind="attributes"
        v-model:error="error"
        @next="step = 'category'"
      />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'category'">
      <PreferenceStepCategory
        v-bind="attributes"
        v-model:error="error"
        @next="step = 'location'"
      />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'location'">
      <PreferenceStepLocation
        v-bind="{ ariaHidden: attributes['aria-hidden'], ...attributes }"
        v-model:error="error"
        @next="step = 'done'"
      />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'done'">
      <PreferenceStepDone
        v-bind="attributes"
        @next="navigateTo(localePath({ name: 'dashboard' }))"
      />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'error'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="error">
          <template #description>
            <span v-if="error && error.message">
              {{ error.message }}
            </span>
          </template>
        </LayoutPageResult>
        <template #bottom>
          <ButtonColored
            :aria-label="t('errorBack')"
            class="w-full max-w-sm"
            variant="primary"
            @click="error = undefined"
          >
            {{ t('errorBack') }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </AppStep>
  </section>
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false,
})

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
  await navigateTo({
    path: localePath({
      name: 'session-create',
    }),
    query: {
      to: route.fullPath,
    },
    replace: true,
  })
}

// stepper
const { error, step, previous, title } = useStepperPage<
  'size' | 'format' | 'category' | 'location' | 'done'
>({
  steps: {
    default: {
      title: t('title'),
    },
    size: {
      previous: 'default',
    },
    format: {
      previous: 'size',
    },
    category: {
      previous: 'format',
    },
    location: {
      previous: 'category',
    },
    done: {
      previous: 'location',
    },
  },
})

// page
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  back: zurück
  errorBack: Zurück zum KI-Setup
  iconAltClose: Schließen
  title: Fühl den Vibe, finde dein Event!
en:
  back: back
  errorBack: Back to AI setup
  iconAltClose: Close
  title: Feel the Vibe, find your event!
</i18n>
