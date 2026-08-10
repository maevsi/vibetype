<template>
  <div class="grid grid-cols-3 gap-3">
    <button
      v-for="category in normalizedCategories"
      :key="category.id"
      :aria-label="category.label"
      class="flex flex-col items-center gap-2 rounded-2xl bg-(--neutral-level-1) p-4 transition-colors hover:bg-(--surface-active-hover) active:bg-(--surface-active)"
      type="button"
      @click="emit('select', category.id)"
    >
      <div class="flex size-8 items-center justify-center text-2xl">
        {{ getCategoryEmoji(category.name) }}
      </div>
      <span
        class="w-full truncate text-center text-sm font-medium text-(--semantic-base-text-primary)"
      >
        {{ category.label }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
type CategoryGridCategory = {
  id?: string
  label?: string
  name: string
  rowId?: string
}

const { categories } = defineProps<{
  categories: ReadonlyArray<CategoryGridCategory>
}>()
const emit = defineEmits<{ select: [categoryId: string] }>()

const { t } = useI18n()

const CATEGORY_EMOJIS: Record<string, string> = {
  art: '🎨',
  business: '💼',
  charity: '❤️',
  comedy: '😂',
  conference: '🎙️',
  culture: '🏛️',
  demo: '🖥️',
  education: '📚',
  exhibition: '🖼️',
  fashion: '👗',
  festival: '🎪',
  film: '🎬',
  food: '🍕',
  fundraiser: '💰',
  gaming: '🎮',
  hackathon: '💡',
  lecture: '📖',
  literature: '📖',
  media: '📺',
  meetup: '🤝',
  music: '🎵',
  networking: '🤝',
  outdoor: '🏕️',
  party: '🎉',
  performance: '🎭',
  politics: '🗳️',
  seminar: '📋',
  social: '👥',
  sport: '⚽',
  tech: '💻',
  travel: '✈️',
  wellness: '🧘',
  workshop: '🔧',
}

const getCategoryEmoji = (name: string): string => {
  const key = name.toLowerCase()
  for (const [k, emoji] of Object.entries(CATEGORY_EMOJIS)) {
    if (key.includes(k)) return emoji
  }
  return '🎉'
}

const translate = (nameKey: string) => {
  switch (nameKey) {
    case 'art-and-culture':
      return t('artAndCulture')
    case 'business':
      return t('business')
    case 'comedy':
      return t('comedy')
    case 'education':
      return t('education')
    case 'fashion-and-lifestyle':
      return t('fashionAndLifestyle')
    case 'food-and-drink':
      return t('foodAndDrink')
    case 'literature':
      return t('literature')
    case 'music-and-entertainment':
      return t('musicAndEntertainment')
    case 'other':
      return t('other')
    case 'politics':
      return t('politics')
    case 'social':
      return t('social')
    case 'sports-and-fitness':
      return t('sportsAndFitness')
    default:
      return undefined
  }
}

const normalizedCategories = computed(() =>
  categories.map((category) => ({
    id: category.id ?? category.rowId ?? category.name,
    label: translate(category.name) ?? category.label ?? category.name,
    name: category.name,
  })),
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
