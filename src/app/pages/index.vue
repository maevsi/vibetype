<template>
  <div
    v-if="status === 'success' && !isAchievementNoticeHidden"
    class="flex flex-col gap-32 pt-8 pb-64 md:gap-64"
  >
    <LayoutPageResult type="success">
      <div class="flex justify-center gap-4">
        <ButtonColored
          :aria-label="t('unlockDeny')"
          variant="secondary"
          @click="isAchievementNoticeHidden = true"
        >
          {{ t('unlockDeny') }}
        </ButtonColored>
        <ButtonColored
          :aria-label="t('unlockConfirm')"
          variant="primary"
          @click="toProfile"
        >
          {{ t('unlockConfirm') }}
        </ButtonColored>
      </div>
      <template #description>
        {{ t('unlockText') }}
      </template>
      <template #title>
        {{ t('unlockTitle') }}
      </template>
    </LayoutPageResult>
    <canvas
      ref="canvas"
      class="pointer-events-none fixed inset-0 h-full w-full"
    />
  </div>
  <LayoutPage v-else>
    <div class="flex flex-1 flex-col justify-center gap-10">
      <h1 class="flex flex-col items-center gap-2">
        <TypographyH3>{{ t('welcome') }}</TypographyH3>
        <span class="flex items-center gap-1">
          <IconLogo v-if="dateToday.month !== 6" class="size-10" />
          <IconLogoPride v-else class="size-16" />
          <TypographyH4 class="uppercase">
            {{ siteConfig.name }}
          </TypographyH4>
        </span>
      </h1>
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
import { getLocalTimeZone, today } from '@internationalized/date'
import { useMutation } from '@urql/vue'
import { stringifyQuery } from 'ufo'

import { graphql } from '~~/gql/generated'

definePageMeta({
  layout: 'plain',
})

// achievement
const route = useRoute()
const store = useStore()
const { t } = useI18n()
const achievementUnlockMutation = useMutation(
  graphql(`
    mutation AchievementUnlock($code: UUID!, $alias: String!) {
      achievementUnlock(input: { code: $code, alias: $alias }) {
        clientMutationId
        uuid
      }
    }
  `),
)
const { /* data, */ error, status } = await useAsyncData(
  computed(() => `achievement:${stringifyQuery(route.query)}`),
  async () => {
    if (!Object.keys(route.query).length)
      throw new Error('Short circuit for no query parameters')

    if (store.jwtDecoded?.role !== `${SITE_NAME}_account`)
      throw new Error('Short circuit for unauthorized access') // there's no way to be certain that a user tried to unlock an achievement here, so no prompt to login is thrown

    const result = await achievementUnlockMutation.executeMutation({
      code: 'c29d9fd1-e455-4f19-a62f-f89b5256a52b', // placeholder, not actually used
      alias: `?${stringifyQuery(route.query)}`,
    })

    if (result.error) {
      throw result.error
    }

    if (!result.data?.achievementUnlock?.uuid) {
      throw new Error(t('globalErrorNoData'))
    }

    return result.data.achievementUnlock.uuid
  },
)
if (error.value) {
  console.debug(error.value.message) // there's no way to be certain that a user tried to unlock an achievement here, so no error is thrown
}

// confetti
const templateCanvas = useTemplateRef('canvas')
const loadingId = Math.random()
const loadingIds = useState(STATE_LOADING_IDS_NAME, () => [loadingId])
onMounted(async () => {
  loadingIds.value.splice(loadingIds.value.indexOf(loadingId), 1)

  if (status.value === 'success') {
    if (!templateCanvas.value) {
      showAppError({ message: 'Could not get canvas', statusCode: 500 })
      return
    }

    const JSConfetti = (await import('js-confetti')).default
    const confetti = new JSConfetti({ canvas: templateCanvas.value })
    confetti.addConfetti()
  }
})
const isAchievementNoticeHidden = ref<boolean>()

// template
const localePath = useLocalePath()
const toProfile = () => {
  if (!store.jwtDecoded) return // TODO: error

  return navigateTo(
    localePath({
      name: 'account-view-username',
      params: {
        username: store.jwtDecoded.account_username,
      },
      // // TODO: highlight achievement
      // query: {
      //   achievementId: data.value,
      // },
    }),
  )
}
const { isApp } = usePlatform()
const dateToday = today(getLocalTimeZone())

// page
const siteConfig = useSiteConfig()
useHeadDefault({ title: siteConfig.name })
</script>

<i18n lang="yaml">
de:
  more: Webseite besuchen, um mehr zu erfahren
  register: Neu hier? Tritt @.upper:{'globalSiteName'} noch heute bei
  signIn: Einloggen
  unlockConfirm: Zum meinem Profil
  unlockDeny: Nicht jetzt
  unlockText: Sieh dir deine neue Errungenschaft auf deinem Profil an.
  unlockTitle: Auszeichnung freigeschaltet
  welcome: Willkommen bei
en:
  more: Visit website to find out more
  register: New here? Join @.upper:{'globalSiteName'} today
  signIn: Log in
  unlockConfirm: Go to my profile
  unlockDeny: Not now
  unlockText: Check out your new achievement on your profile.
  unlockTitle: Achievement unlocked
  welcome: Welcome to
</i18n>
