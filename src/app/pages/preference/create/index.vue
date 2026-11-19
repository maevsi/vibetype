<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">
        {{ title }}
      </span>
      <template #back>
        <!-- a slot holding only a false `v-if` falls back to the default back button, which would duplicate the close button -->
        <AppButton
          v-if="previous"
          :aria-label="t('back')"
          size="none"
          variant="ghost"
          @click="step = previous"
        >
          <AppIconBack />
        </AppButton>
        <div v-else />
      </template>
      <template
        v-if="
          [
            'default',
            'notification',
            'size',
            'format',
            'category',
            'location',
          ].includes(step)
        "
        #actions
      >
        <ButtonIconBackRoute :aria-label="t('iconAltClose')">
          <AppIconClose />
        </ButtonIconBackRoute>
      </template>
    </LayoutTopBar>
    <AppStepPanel v-slot="attributes" :is-active="step === 'default'">
      <PreferenceStepWelcome
        v-bind="attributes"
        @next="step = isNotificationStepRequired ? 'notification' : 'size'"
      />
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'notification'">
      <PreferenceStepNotification v-bind="attributes" @next="step = 'size'" />
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'size'">
      <PreferenceStepSize
        v-bind="attributes"
        v-model:error="error"
        @next="step = 'format'"
      />
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'format'">
      <PreferenceStepFormat
        v-bind="attributes"
        v-model:error="error"
        @next="step = 'category'"
      />
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'category'">
      <PreferenceStepCategory
        v-bind="attributes"
        v-model:error="error"
        @next="step = 'location'"
      />
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'location'">
      <PreferenceStepLocation
        v-bind="attributes"
        v-model:error="error"
        @next="step = 'done'"
      />
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'done'">
      <PreferenceStepDone
        v-bind="attributes"
        @next="navigateTo(localePath({ name: 'dashboard' }))"
      />
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'error'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult :message="error?.message" type="error">
          <template #description>
            {{ t('globalTryAgain') }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <AppButton
            :aria-label="t('errorBack')"
            class="w-full max-w-sm"
            variant="primary"
            @click="error = undefined"
          >
            {{ t('errorBack') }}
          </AppButton>
        </template>
      </LayoutPage>
    </AppStepPanel>
  </section>
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false,
})

const { t } = useI18n()
const templateIdTitle = useId()

// validation
const localePath = useLocalePath()
await useSignInRequired()

// notifications
const { isStepRequired: isNotificationStepRequired } =
  useNotificationOnboarding()

// stepper
const { error, step, previous, title } = useStepperPage<
  'notification' | 'size' | 'format' | 'category' | 'location' | 'done'
>({
  steps: {
    default: {
      title: t('title'),
    },
    notification: {
      previous: 'default',
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
  back: Zurück
  errorBack: Zurück zum KI-Setup
  iconAltClose: Schließen
  title: KI einrichten
en:
  back: Back
  errorBack: Back to AI setup
  iconAltClose: Close
  title: Set up AI
</i18n>
