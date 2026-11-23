<template>
  <LayoutPage>
    <div class="flex flex-col items-start gap-3">
      <div
        aria-hidden="true"
        class="flex size-16 items-center justify-center rounded-full bg-surface-raised text-action-primary"
      >
        <AppIconEarlyBird class="size-8" />
      </div>
      <AppStepProgress class="justify-start" :count="2" :index="1" />
      <span class="text-heading-large text-balance">
        {{ t('title1', { username: store.signedInUsername }) }}
      </span>
      <span class="text-body text-fg-2">
        {{ t('description1') }}
      </span>
    </div>
    <ul class="flex flex-col gap-3">
      <li class="flex flex-col gap-1 rounded-medium bg-surface-raised p-4">
        <span class="text-headline">
          {{ t('title2') }}
        </span>
        <span class="text-body-small text-fg-2">
          {{ t('description2') }}
        </span>
      </li>
      <li class="flex flex-col gap-1 rounded-medium bg-surface-raised p-4">
        <span class="text-headline">
          {{ t('title3') }}
        </span>
        <i18n-t
          class="text-body-small text-fg-2"
          keypath="description3"
          tag="span"
        >
          <template #br>
            <br />
          </template>
        </i18n-t>
      </li>
      <li class="flex flex-col gap-1 rounded-medium bg-surface-raised p-4">
        <span class="text-headline">
          {{ t('title4') }}
        </span>
        <span class="text-body-small text-fg-2">
          {{ t('description4') }}
        </span>
      </li>
    </ul>
    <template #bottom>
      <AppButton
        :aria-label="t('button')"
        class="w-full max-w-md"
        @click="emit('next')"
      >
        {{ t('button') }}
      </AppButton>
    </template>
  </LayoutPage>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  next: []
}>()

const { t } = useI18n()
const store = useStore()
</script>

<i18n lang="yaml">
de:
  button: Teilnehmen!
  description1: Willkommen beim Früher Vogel Programm! Sei einer der Ersten, die unsere App mitgestalten und von exklusiven Vorteilen profitieren!
  description2: Das Programm ist Deine Chance, die Entwicklung unserer App aktiv zu begleiten. Du testest neue Features, gibst Feedback und wirst Teil unserer Vision für die Zukunft.
  description3: '- Exklusive Einblicke: Teste Features vor allen anderen.{br}- Direkter Einfluss: Deine Meinung formt die App!{br}- Belohnungen: Erhalte Boni für Dein Engagement.'
  description4: Registriere Dich mit einem Klick auf „Teilnehmen!“.
  title1: Hi, {username}!
  title2: Willkommen im Nest
  title3: Was ist der frühe Vogel?
  title4: Flieg los mit uns
en:
  button: Join now!
  description1: Welcome to the Early Bird Program! Be one of the first to help shape our app and benefit from exclusive advantages!
  description2: The program is your chance to play an active role in the development of our app. You will test new features, give feedback and become part of our vision for the future.
  description3: '- Exclusive insights: Test features before anyone else.{br}- Direct influence: Your opinion shapes the app!{br}- Rewards: Receive bonuses for your commitment.'
  description4: Register by clicking on "Join now!".
  title1: Hi, {username}!
  title2: Welcome to the nest
  title3: What is the early bird?
  title4: Take off with us
</i18n>
