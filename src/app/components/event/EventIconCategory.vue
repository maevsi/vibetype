<template>
  <component
    :is="category.component"
    :class="classProps"
    :title="category.title()"
  />
</template>

<script setup lang="ts">
import type { Component, HtmlHTMLAttributes } from 'vue'

import {
  AppIconPreferenceCategoryArtAndCulture,
  AppIconPreferenceCategoryBusiness,
  AppIconPreferenceCategoryComedy,
  AppIconPreferenceCategoryEducation,
  AppIconPreferenceCategoryFashionAndLifestyle,
  AppIconPreferenceCategoryFoodAndDrink,
  AppIconPreferenceCategoryLiterature,
  AppIconPreferenceCategoryMusicAndEntertainment,
  AppIconPreferenceCategoryPolitics,
  AppIconPreferenceCategorySocial,
  AppIconPreferenceCategorySportsAndFitness,
  AppIconPreferenceOther,
} from '#components'

const { class: classProps = undefined, name } = defineProps<{
  class?: HtmlHTMLAttributes['class']
  name: string
}>()

const { t } = useI18n()

const categories: Record<
  string,
  { component: Component; title: () => string }
> = {
  'art-and-culture': {
    component: AppIconPreferenceCategoryArtAndCulture,
    title: () => t('artAndCulture'),
  },
  business: {
    component: AppIconPreferenceCategoryBusiness,
    title: () => t('business'),
  },
  comedy: {
    component: AppIconPreferenceCategoryComedy,
    title: () => t('comedy'),
  },
  education: {
    component: AppIconPreferenceCategoryEducation,
    title: () => t('education'),
  },
  'fashion-and-lifestyle': {
    component: AppIconPreferenceCategoryFashionAndLifestyle,
    title: () => t('fashionAndLifestyle'),
  },
  'food-and-drink': {
    component: AppIconPreferenceCategoryFoodAndDrink,
    title: () => t('foodAndDrink'),
  },
  literature: {
    component: AppIconPreferenceCategoryLiterature,
    title: () => t('literature'),
  },
  'music-and-entertainment': {
    component: AppIconPreferenceCategoryMusicAndEntertainment,
    title: () => t('musicAndEntertainment'),
  },
  politics: {
    component: AppIconPreferenceCategoryPolitics,
    title: () => t('politics'),
  },
  social: {
    component: AppIconPreferenceCategorySocial,
    title: () => t('social'),
  },
  'sports-and-fitness': {
    component: AppIconPreferenceCategorySportsAndFitness,
    title: () => t('sportsAndFitness'),
  },
}

const category = computed(
  () =>
    categories[name] ?? {
      component: AppIconPreferenceOther,
      title: () => t('other'),
    },
)
</script>

<i18n lang="yaml">
de:
  artAndCulture: Kunst & Kultur
  business: Wirtschaft
  comedy: Komödie
  education: Bildung
  fashionAndLifestyle: Mode & Lifestyle
  foodAndDrink: Essen & Trinken
  literature: Literatur
  musicAndEntertainment: Musik & Unterhaltung
  other: Andere
  politics: Politik
  social: Soziales
  sportsAndFitness: Sport & Fitness
en:
  artAndCulture: Art & Culture
  business: Business
  comedy: Comedy
  education: Education
  fashionAndLifestyle: Fashion & Lifestyle
  foodAndDrink: Food & Drink
  literature: Literature
  musicAndEntertainment: Music & Entertainment
  other: Other
  politics: Politics
  social: Social
  sportsAndFitness: Sports & Fitness
</i18n>
