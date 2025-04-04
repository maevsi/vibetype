<template>
  <div class="flex grow flex-col">
    <LayoutTopBar>
      {{ title }}
    </LayoutTopBar>
    <div class="flex grow flex-col justify-center gap-8 p-8">
      <p class="font-bold">
        {{ t('checkEmail') }}
      </p>
      <ButtonColored
        :aria-label="t('waiting')"
        :variant="buttonVariant"
        class="w-full rounded-lg px-4"
        :to="
          localePath({
            path: '/session/create',
          })
        "
      >
        {{ buttonText }}
      </ButtonColored>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'plain',
})

const localePath = useLocalePath()
const { t } = useI18n()
const title = t('title')
const buttonText = ref(t('waiting'))
const buttonVariant = ref<'secondary' | 'primary'>('secondary')

onMounted(() => {
  window.addEventListener('focus', () => {
    buttonText.value = t('signIn')
    buttonVariant.value = 'primary'
  })
})
</script>

<i18n lang="yaml">
de:
  checkEmail: Überprüfe deine E-Mails für einen Bestätigungslink.
  signIn: Anmelden
  title: Verifizierung
  waiting: Warten auf dich...

en:
  checkEmail: Check your email for a verification link.
  signIn: Sign In
  title: Email Verification Required
  waiting: Waiting for you..
</i18n>
