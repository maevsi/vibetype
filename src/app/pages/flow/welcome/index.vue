<template>
  <div class="flex grow flex-col items-center p-6">
    <div
      class="flex max-w-md flex-1 flex-col items-center justify-center gap-10"
    >
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
    <ContentLegalFooter />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'plain',
})

const { t } = useI18n()
const siteConfig = useSiteConfig()
</script>

<i18n lang="yaml">
de:
  register: Neu hier? Tritt VIBETYPE noch heute bei
  signIn: Einloggen
  welcome: Willkommen bei
en:
  register: New here? Join VIBETYPE today
  signIn: Log in
  welcome: Welcome to
</i18n>
