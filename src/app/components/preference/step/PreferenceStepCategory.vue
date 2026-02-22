<template>
  <LayoutPage>
    <div class="flex flex-col gap-4 text-center">
      <AppStepIndex :count="4" :index="3" />
      <TypographyH3>
        {{ t('title') }}
      </TypographyH3>
      <div>
        <ul class="flex flex-wrap justify-center gap-5">
          <li
            v-for="eventCategory in eventCategories"
            :key="eventCategory.rowId"
          >
            <PreferenceElement
              v-if="
                eventCategory.label &&
                eventCategory.label !== eventCategory.name
              "
              :id="eventCategory.rowId"
              :name="eventCategory.label"
              :selected="preferenceEventCategoryIds"
              @click="togglePreferenceSelection(eventCategory.rowId)"
            >
              <AppIconPreferenceCategoryArtAndCulture
                v-if="eventCategory.name === 'art-and-culture'"
              />
              <AppIconPreferenceCategoryBusiness
                v-else-if="eventCategory.name === 'business'"
              />
              <AppIconPreferenceCategoryComedy
                v-else-if="eventCategory.name === 'comedy'"
              />
              <AppIconPreferenceCategoryEducation
                v-else-if="eventCategory.name === 'education'"
              />
              <AppIconPreferenceCategoryFashionAndLifestyle
                v-else-if="eventCategory.name === 'fashion-and-lifestyle'"
              />
              <AppIconPreferenceCategoryFoodAndDrink
                v-else-if="eventCategory.name === 'food-and-drink'"
              />
              <AppIconPreferenceCategoryLiterature
                v-else-if="eventCategory.name === 'literature'"
              />
              <AppIconPreferenceCategoryMusicAndEntertainment
                v-else-if="eventCategory.name === 'music-and-entertainment'"
              />
              <AppIconPreferenceCategoryPolitics
                v-else-if="eventCategory.name === 'politics'"
              />
              <AppIconPreferenceCategorySocial
                v-else-if="eventCategory.name === 'social'"
              />
              <AppIconPreferenceCategorySportsAndFitness
                v-else-if="eventCategory.name === 'sports-and-fitness'"
              />
              <AppIconPreferenceOther
                v-else-if="eventCategory.name === 'other'"
              />
            </PreferenceElement>
          </li>
        </ul>
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
import { useAllEventCategoriesQuery } from '~~/gql/documents/queries/event/eventCategoriesAll'
import { useAllPreferenceEventCategoriesQuery } from '~~/gql/documents/queries/preference/preferenceEventCategoriesAll'
import { useCreatePreferenceEventCategoryMutation } from '~~/gql/documents/mutations/preference/preferenceEventCategoryCreate'
import { useDeletePreferenceEventCategoryByAccountIdAndCategoryIdMutation } from '~~/gql/documents/mutations/preference/preferenceEventCategoryDeleteByAccountIdAndEventCategory'
import { getPreferenceEventCategoryItem } from '~~/gql/documents/fragments/preferenceEventCategoryItem'
import { getEventCategoryItem } from '~~/gql/documents/fragments/eventCategoryItem'

const emit = defineEmits<{
  next: []
}>()

// template
const { t } = useI18n()
const translate = (nameKey: string) => {
  switch (nameKey) {
    case 'art-and-culture':
      return t('formatArtAndCulture')
    case 'business':
      return t('formatBusiness')
    case 'comedy':
      return t('formatComedy')
    case 'education':
      return t('formatEducation')
    case 'fashion-and-lifestyle':
      return t('formatFashionAndLifestyle')
    case 'food-and-drink':
      return t('formatFoodAndDrink')
    case 'literature':
      return t('formatLiterature')
    case 'music-and-entertainment':
      return t('formatMusicAndEntertainment')
    case 'other':
      return t('formatOther')
    case 'politics':
      return t('formatPolitics')
    case 'social':
      return t('formatSocial')
    case 'sports-and-fitness':
      return t('formatSportsAndFitness')
    default:
      return undefined
  }
}

// api data
const allCategoriesQuery = useAllEventCategoriesQuery()
const allPreferenceEventCategoriesQuery = useAllPreferenceEventCategoriesQuery()
const createPreferenceEventCategoryMutation =
  useCreatePreferenceEventCategoryMutation()
const deletePreferenceEventCategoryByAccountIdAndCategoryIdMutation =
  useDeletePreferenceEventCategoryByAccountIdAndCategoryIdMutation()
const api = await useApiData([
  allCategoriesQuery,
  allPreferenceEventCategoriesQuery,
  createPreferenceEventCategoryMutation,
  deletePreferenceEventCategoryByAccountIdAndCategoryIdMutation,
])

const eventCategories = computed(() =>
  api.value.data.allEventCategories?.nodes
    .map(getEventCategoryItem)
    .filter(isNeitherNullNorUndefined)
    .map((item) => ({ ...item, label: translate(item.name) }))
    .sort((a, b) => {
      if (a.name === 'other') return 1
      if (b.name === 'other') return -1
      return a.name.localeCompare(b.name)
    }),
)
const preferenceEventCategoryIds = computed(
  () =>
    api.value.data.allPreferenceEventCategories?.nodes
      .map(getPreferenceEventCategoryItem)
      .filter(isNeitherNullNorUndefined)
      .map((item) => item.categoryId) || [],
)

const store = useStore()
const togglePreferenceSelection = async (categoryId: string) => {
  if (!store.signedInAccountId) return

  if (preferenceEventCategoryIds.value.includes(categoryId)) {
    await deletePreferenceEventCategoryByAccountIdAndCategoryIdMutation.executeMutation(
      {
        input: {
          accountId: store.signedInAccountId,
          categoryId,
        },
      },
    )
  } else {
    await createPreferenceEventCategoryMutation.executeMutation({
      input: {
        accountId: store.signedInAccountId,
        categoryId,
      },
    })
  }
}

const modelError = defineModel<Error>('error')
watch(
  () => api.value.errors,
  (current) => {
    modelError.value = current?.length
      ? new Error(getCombinedErrorMessages(current)[0])
      : undefined
  },
)
</script>

<i18n lang="yaml">
de:
  button: Weiter
  formatArtAndCulture: Kunst & Kultur
  formatBusiness: Wirtschaft
  formatComedy: Komödie
  formatEducation: Bildung
  formatFashionAndLifestyle: Mode & Lifestyle
  formatFoodAndDrink: Essen & Trinken
  formatLiterature: Literatur
  formatMusicAndEntertainment: Musik & Unterhaltung
  formatOther: Andere
  formatPolitics: Politik
  formatSocial: Soziales
  formatSportsAndFitness: Sport & Fitness
  title: Welches Genre spricht dich an?
en:
  button: Next
  formatArtAndCulture: Art & Culture
  formatBusiness: Business
  formatComedy: Comedy
  formatEducation: Education
  formatFashionAndLifestyle: Fashion & Lifestyle
  formatFoodAndDrink: Food & Drink
  formatLiterature: Literature
  formatMusicAndEntertainment: Music & Entertainment
  formatOther: Other
  formatPolitics: Politics
  formatSocial: Social
  formatSportsAndFitness: Sports & Fitness
  title: Which genres spark your interest?
</i18n>
