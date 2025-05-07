<template>
  <LayoutPage>
    <div class="flex flex-col gap-2">
      <TypographyH6>
        {{ t('title1', { username: store.signedInUsername }) }}
      </TypographyH6>
      <TypographyBodyMedium>
        {{ t('description1') }}
      </TypographyBodyMedium>
    </div>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <TypographySubtitleMedium>
          {{ t('title2') }}
        </TypographySubtitleMedium>
        <TypographyBodySmall>
          {{ t('description2') }}
        </TypographyBodySmall>
      </div>
      <div class="flex flex-col gap-2">
        <TypographySubtitleMedium>
          {{ t('title3') }}
        </TypographySubtitleMedium>
        <i18n-t keypath="description3">
          <TypographyBodySmall>
            {{ t('description3') }}
          </TypographyBodySmall>
          <template #br>
            <br />
          </template>
        </i18n-t>
      </div>
      <div class="flex flex-col gap-2">
        <TypographySubtitleMedium>
          {{ t('title4') }}
        </TypographySubtitleMedium>
        <TypographyBodySmall>
          {{ t('description4') }}
        </TypographyBodySmall>
      </div>
    </div>
    <template #bottom>
      <ButtonColored
        :aria-label="t('button')"
        class="w-full max-w-md"
        @click="emit('next')"
      >
        {{ t('button') }}
      </ButtonColored>
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
  button: Join us!
  description1: Willkommen beim Früher Vogel Programm! Sei einer der Ersten, die unsere App mitgestalten und von exklusiven Vorteilen profitieren!
  description2: Das Programm ist deine Chance, die Entwicklung unserer App aktiv zu begleiten. Du testest neue Features, gibst Feedback und wirst Teil unserer Vision für die Zukunft.
  description3: '- Exklusive Einblicke: Teste Features vor allen anderen.{br}- Direkter Einfluss: Deine Meinung formt die App!{br}- Belohnungen: Erhalte Boni für dein Engagement.'
  description4: Registriere dich mit einem Klick auf „Teilnehmen!“.
  title1: Hi, {username}!
  title2: Willkommen im Nest
  title3: Was ist der frühe Vogel?
  title4: Flieg los mit uns
en:
  button: Join us!
  description1: Welcome to the Early Bird Program! Be one of the first to help shape our app and benefit from exclusive advantages!
  description2: The program is your chance to play an active role in the development of our app. You will test new features, give feedback and become part of our vision for the future.
  description3: '- Exclusive insights: Test features before anyone else.{br}- Direct influence: Your opinion shapes the app!{br}- Rewards: Receive bonuses for your commitment.'
  description4: Register by clicking on "Join now!".
  title1: Hi, {username}!
  title2: Welcome to the nest
  title3: What is the early bird?
  title4: Take off with us
</i18n>
