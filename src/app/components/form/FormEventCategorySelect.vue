<template>
  <ul class="flex flex-wrap gap-5">
    <li v-for="eventCategory in eventCategories" :key="eventCategory.rowId">
      <PreferenceElement
        v-if="eventCategory.label"
        :id="eventCategory.rowId"
        :name="eventCategory.label"
        :selected="modelValue"
        @click="toggle(eventCategory.rowId)"
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
        <AppIconPreferenceOther v-else-if="eventCategory.name === 'other'" />
      </PreferenceElement>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'

import { graphql } from '~~/gql/generated'

const modelValue = defineModel<string[]>({ default: () => [] })

// template
const { t } = useI18n()
const translate = (nameKey: string) => {
  switch (nameKey) {
    case 'art-and-culture':
      return t('categoryArtAndCulture')
    case 'business':
      return t('categoryBusiness')
    case 'comedy':
      return t('categoryComedy')
    case 'education':
      return t('categoryEducation')
    case 'fashion-and-lifestyle':
      return t('categoryFashionAndLifestyle')
    case 'food-and-drink':
      return t('categoryFoodAndDrink')
    case 'literature':
      return t('categoryLiterature')
    case 'music-and-entertainment':
      return t('categoryMusicAndEntertainment')
    case 'other':
      return t('categoryOther')
    case 'politics':
      return t('categoryPolitics')
    case 'social':
      return t('categorySocial')
    case 'sports-and-fitness':
      return t('categorySportsAndFitness')
    default:
      return undefined
  }
}

// api data
const allEventCategoriesQuery = useQuery({
  query: graphql(`
    query AllEventCategoriesFormEvent {
      allEventCategories {
        nodes {
          id
          name
          rowId
        }
      }
    }
  `),
})
const api = await useApiData([allEventCategoriesQuery])

const eventCategories = computed(() =>
  api.value.data.allEventCategories?.nodes
    .filter(isNeitherNullNorUndefined)
    .map((item) => ({ ...item, label: translate(item.name) }))
    .sort((a, b) => {
      if (a.name === 'other') return 1
      if (b.name === 'other') return -1
      return a.name.localeCompare(b.name)
    }),
)

// methods
const toggle = (categoryId: string) => {
  modelValue.value = modelValue.value.includes(categoryId)
    ? modelValue.value.filter((id) => id !== categoryId)
    : [...modelValue.value, categoryId]
}
</script>

<i18n lang="yaml">
de:
  categoryArtAndCulture: Kunst & Kultur
  categoryBusiness: Wirtschaft
  categoryComedy: Komödie
  categoryEducation: Bildung
  categoryFashionAndLifestyle: Mode & Lifestyle
  categoryFoodAndDrink: Essen & Trinken
  categoryLiterature: Literatur
  categoryMusicAndEntertainment: Musik & Unterhaltung
  categoryOther: Andere
  categoryPolitics: Politik
  categorySocial: Soziales
  categorySportsAndFitness: Sport & Fitness
en:
  categoryArtAndCulture: Art & Culture
  categoryBusiness: Business
  categoryComedy: Comedy
  categoryEducation: Education
  categoryFashionAndLifestyle: Fashion & Lifestyle
  categoryFoodAndDrink: Food & Drink
  categoryLiterature: Literature
  categoryMusicAndEntertainment: Music & Entertainment
  categoryOther: Other
  categoryPolitics: Politics
  categorySocial: Social
  categorySportsAndFitness: Sports & Fitness
</i18n>
