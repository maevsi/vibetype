<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">
        {{ title }}
      </span>
      <template v-if="[1].includes(index)" #back>
        <ButtonIcon :aria-label="t('back')" @click="index--">
          <AppIconBack />
        </ButtonIcon>
      </template>
      <template v-if="[0, 1].includes(index)" #close>
        <ButtonIcon :aria-label="t('iconAltClose')" @click="store.navigateBack">
          <AppIconClose />
        </ButtonIcon>
      </template>
    </LayoutTopBar>
    <AppStep v-slot="attributes" :is-active="index === 0">
      <EarlyBirdWelcome v-bind="attributes" @next="index++" />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="index === 1">
      <EarlyBirdForm v-bind="attributes" @next="index++" />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="index === 2">
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

// page
const title = t('title')
useHeadDefault({ title })

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
const index = ref(0)
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
