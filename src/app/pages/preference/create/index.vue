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
      <template v-if="step === 'notification'" #actions>
        <AppButton
          :aria-label="t('skip')"
          size="small"
          variant="secondary"
          @click="step = stepFirst"
        >
          {{ t('skip') }}
        </AppButton>
      </template>
      <template
        v-else-if="
          ['default', 'size', 'format', 'category', 'location'].includes(step)
        "
        #actions
      >
        <AppButton
          :aria-label="t('later')"
          size="small"
          variant="secondary"
          @click="isSkipOpen = true"
        >
          {{ t('later') }}
        </AppButton>
      </template>
    </LayoutTopBar>
    <AppStepPanel v-slot="attributes" :is-active="step === 'default'">
      <PreferenceStepWelcome
        v-bind="attributes"
        @next="step = isNotificationStepRequired ? 'notification' : stepFirst"
      />
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'notification'">
      <PreferenceStepNotification
        v-bind="attributes"
        @next="step = stepFirst"
      />
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
    <AppDrawer v-model="isSkipOpen">
      <template #title>{{ t('skipTitle') }}</template>
      <template #description>{{ t('skipDescription1') }}</template>
      <div class="flex flex-col gap-2 text-fg-2">
        <p class="text-body">{{ t('skipDescription1') }}</p>
        <p class="text-body">{{ t('skipDescription2') }}</p>
      </div>
      <template #footer>
        <AppButton
          :aria-label="t('skipConfirm')"
          variant="primary-critical"
          @click="navigateTo(localePath({ name: 'dashboard' }))"
        >
          {{ t('skipConfirm') }}
        </AppButton>
        <AppButton
          :aria-label="t('skipCancel')"
          variant="tertiary"
          @click="isSkipOpen = false"
        >
          {{ t('skipCancel') }}
        </AppButton>
      </template>
    </AppDrawer>
  </section>
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false,
})

const { t } = useI18n()
const templateIdTitle = useId()
const isSkipOpen = ref(false)

// validation
const localePath = useLocalePath()
await useSignInRequired()

// notifications
const { isStepRequired: isNotificationStepRequired } =
  useNotificationOnboarding()

// The size step is hidden until enough users attend events for it to matter, set to `true` to restore it.
const isSizeStepEnabled = false
const stepFirst = isSizeStepEnabled ? 'size' : 'format'

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
      previous: isSizeStepEnabled ? 'size' : 'default',
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
  later: Später einrichten
  skip: Überspringen
  skipCancel: Abbrechen
  skipConfirm: Später einrichten
  skipDescription1: Ohne deine Angaben zeigen wir dir eine breite Auswahl an Veranstaltungen. Vielleicht findest du trotzdem deinen perfekten Vibe!
  skipDescription2: Du kannst deine Präferenzen jederzeit später anpassen.
  skipTitle: KI-Einrichtung auf später verschieben?
  title: KI einrichten
en:
  back: Back
  errorBack: Back to AI setup
  later: Set up later
  skip: Skip
  skipCancel: Cancel
  skipConfirm: Set up later
  skipDescription1: Without your details, we'll show you a wide selection of events. Maybe you'll still find your perfect vibe!
  skipDescription2: You can adjust your preferences anytime later.
  skipTitle: Set up AI later?
  title: Set up AI
</i18n>
