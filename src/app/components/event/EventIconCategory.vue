<template>
  <AppIconPreferenceCategoryArtAndCulture
    v-if="name === 'art-and-culture'"
    :class="classProps"
    :title="t('artAndCulture')"
  />
  <AppIconPreferenceCategoryBusiness
    v-else-if="name === 'business'"
    :class="classProps"
    :title="t('business')"
  />
  <AppIconPreferenceCategoryComedy
    v-else-if="name === 'comedy'"
    :class="classProps"
    :title="t('comedy')"
  />
  <AppIconPreferenceCategoryEducation
    v-else-if="name === 'education'"
    :class="classProps"
    :title="t('education')"
  />
  <AppIconPreferenceCategoryFashionAndLifestyle
    v-else-if="name === 'fashion-and-lifestyle'"
    :class="classProps"
    :title="t('fashionAndLifestyle')"
  />
  <AppIconPreferenceCategoryFoodAndDrink
    v-else-if="name === 'food-and-drink'"
    :class="classProps"
    :title="t('foodAndDrink')"
  />
  <AppIconPreferenceCategoryLiterature
    v-else-if="name === 'literature'"
    :class="classProps"
    :title="t('literature')"
  />
  <AppIconPreferenceCategoryMusicAndEntertainment
    v-else-if="name === 'music-and-entertainment'"
    :class="classProps"
    :title="t('musicAndEntertainment')"
  />
  <AppIconPreferenceCategoryPolitics
    v-else-if="name === 'politics'"
    :class="classProps"
    :title="t('politics')"
  />
  <AppIconPreferenceCategorySocial
    v-else-if="name === 'social'"
    :class="classProps"
    :title="t('social')"
  />
  <AppIconPreferenceCategorySportsAndFitness
    v-else-if="name === 'sports-and-fitness'"
    :class="classProps"
    :title="t('sportsAndFitness')"
  />
  <AppIconPreferenceOther v-else :class="classProps" :title="t('other')" />
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

const { class: classProps = undefined, name } = defineProps<{
  class?: HtmlHTMLAttributes['class']
  name: string
}>()

const { t } = useI18n()
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
