<template>
  <div class="flex min-h-screen lg:h-screen 2xl:h-auto" :class="pageBackground">
    <LayoutMenuSidebar class="hidden lg:block 2xl:hidden" />
    <div class="flex min-w-0 flex-1 flex-col">
      <div
        class="container flex flex-1 flex-col gap-4 self-center overflow-hidden p-4 md:px-8 2xl:gap-8"
      >
        <LayoutHeader />
        <main>
          <slot />
        </main>
      </div>
      <LayoutMenuBottomNavigation class="lg:hidden" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { $dayjs } = useNuxtApp()
// const localePath = useLocalePath()
// const switchLocalePath = useSwitchLocalePath()
const { /* availableLocales, t, */ locale } = useI18n()
// const store = useStore()
const route = useRoute()

const loadingId = Math.random()
const loadingIds = useState(STATE_LOADING_IDS_NAME, () => [loadingId])

const pageBackground = computed(() =>
  route.path.includes('/event') ? 'bg-[var(--semantic-base-background)]' : '',
)
// // methods
// const getLocaleName = (locale: string) => {
//   const locales = LOCALES.filter((localeObject) => localeObject.code === locale)

//   if (locales.length) {
//     return locales[0].name
//   } else {
//     return undefined
//   }
// }

// computations
const isLoading = computed(() => !!loadingIds.value.length)

// lifecycle
onMounted(() => loadingIds.value.splice(loadingIds.value.indexOf(loadingId), 1))

// initialization
$dayjs.locale(locale.value)
</script>

<!-- <i18n lang="yaml">
de:
  colorScheme: Farbschema
  contact: Kontakt & Feedback
  features: Funktionen
  githubLinkTitle: maevsi auf GitHub
  languages: Sprachen
  legal: Rechtliches
  legalNotice: Impressum
  overview: Überblick
  # pricing: Preise
  privacyPolicy: Datenschutz
  product: Produkt
  quickLinks: Quick Links
  session: Sitzung
  sourceCode: Quellcode
  status: Status
  # team: Team
en:
  colorScheme: Color scheme
  contact: Contact & feedback
  features: Features
  githubLinkTitle: maevsi on GitHub
  languages: Languages
  legal: Legal
  legalNotice: Legal notice
  overview: Overview
  # pricing: Pricing
  privacyPolicy: Privacy
  product: Product
  quickLinks: Quick Links
  session: Session
  sourceCode: Source code
  status: Status
  # team: Team
</i18n> -->
