<template>
  <LayoutPage>
    <div class="flex flex-1 flex-col justify-center gap-10">
      <div class="flex flex-col items-center gap-2">
        <TypographyH3>{{ t('welcome') }}</TypographyH3>
        <div class="flex items-center gap-1">
          <IconLogo class="h-10" />
          <TypographyH4 class="uppercase">
            {{ siteConfig.name }}
          </TypographyH4>
        </div>
      </div>
      <div class="flex flex-col gap-4 self-stretch">
        <ButtonColored
          :aria-label="t('signIn')"
          :to="$localePath('session-create')"
        >
          {{ t('signIn') }}
        </ButtonColored>
        <ButtonColored
          :aria-label="t('register')"
          :to="$localePath('account-create')"
          variant="tertiary"
        >
          <TypographySubtitleMedium class="text-center">
            {{ t('register') }}
          </TypographySubtitleMedium>
        </ButtonColored>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <ButtonColored
        v-if="!isApp"
        :aria-label="t('more')"
        to="https://vibetype.de"
        variant="tertiary"
      >
        {{ t('more') }}
      </ButtonColored>
      <ContentLegalFooter />
    </div>
  </LayoutPage>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'plain',
})

const { isApp } = usePlatform()
const { t } = useI18n()
const siteConfig = useSiteConfig()
</script>

<i18n lang="yaml">
de:
  more: Webseite besuchen, um mehr zu erfahren
  register: Neu hier? Tritt VIBETYPE noch heute bei
  signIn: Einloggen
  welcome: Willkommen bei
en:
  more: Visit website to find out more
  register: New here? Join VIBETYPE today
  signIn: Log in
  welcome: Welcome to
</i18n>
