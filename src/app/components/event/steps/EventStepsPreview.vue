<template>
  <div class="flex min-h-screen w-full flex-col">
    <div class="relative">
      <template v-if="form.previewUrls.length > 0">
        <Carousel
          v-model="currentSlide"
          class="w-full"
          @select="handleSlideChange"
        >
          <CarouselContent>
            <CarouselItem
              v-for="(url, index) in form.previewUrls"
              :key="index"
              class="w-full"
            >
              <div class="relative aspect-[16/9] w-full">
                <img
                  :src="url"
                  class="h-full w-full object-cover"
                  :alt="`Event image ${index + 1}`"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div
          class="absolute top-4 z-10 flex w-full flex-row justify-between px-4"
        >
          <div>
            <button
              class="flex size-10 items-center justify-center rounded-full bg-(--semantic-base-surface-1)"
              :aria-label="t('back')"
              @click="emit('previous')"
            >
              <AppIconBack />
            </button>
          </div>
          <div class="flex flex-row gap-2">
            <button
              class="flex size-10 items-center justify-center rounded-full bg-(--semantic-base-surface-1)"
              :aria-label="t('share')"
            >
              <AppIconShare />
            </button>
            <button
              class="flex size-10 items-center justify-center rounded-full bg-(--semantic-base-surface-1)"
              :aria-label="t('favorite')"
            >
              <AppIconFavorite class="text-(--complement-strong-1)" />
            </button>
            <button
              class="flex h-10 w-10 items-center justify-center rounded-full bg-(--semantic-base-surface-1)"
              :aria-label="t('options')"
            >
              <AppIconMoreVertical />
            </button>
          </div>
        </div>
        <div
          class="absolute right-4 bottom-4 z-10 rounded-full bg-(--semantic-base-surface-1) px-3 py-1"
        >
          {{ currentSlide + 1 }}{{ t('slash') }}{{ form.previewUrls.length }}
        </div>
      </template>
      <template v-else>
        <div
          class="aspect-[3/2] w-full rounded-2xl border-2 border-dashed p-12 md:aspect-[21/9] lg:aspect-[3/1]"
        >
          <div
            class="flex h-full flex-col items-center justify-center text-center"
          >
            <Image class="mb-4 size-12" />
            <TypographyBodySmall>{{ t('noImages') }}</TypographyBodySmall>
          </div>
        </div>
      </template>
    </div>
    <div class="mt-4 flex-1 px-4">
      <div class="flex flex-col gap-6">
        <div
          v-if="props.form.startDate && props.form.startTime"
          class="flex flex-row items-start gap-6"
        >
          <div class="mt-2 flex flex-col items-center text-center">
            <TypographyH6 class="text-(--semantic-accent-text)">
              {{ formatDate(props.form.startDate, { weekday: 'long' }) }}
            </TypographyH6>
            <TypographyH4>
              {{ formatDate(props.form.startDate, { day: 'numeric' }) }}
            </TypographyH4>
            <TypographyH6>
              {{ formatDate(props.form.startDate, { month: 'short' }) }}
            </TypographyH6>
            <TypographySubtitleLarge class="text-(--semantic-accent-text)">
              {{ props.form.startTime }}
            </TypographySubtitleLarge>
          </div>
          <div
            class="mt-6 mb-12 w-px self-stretch bg-(--semantic-base-text-primary)"
          ></div>
          <div class="min-w-0 flex-1 overflow-hidden">
            <TypographyH2 class="break-words">
              {{ props.form.name }}
            </TypographyH2>
          </div>
        </div>
        <div class="flex flex-col">
          <TypographyH3>{{ t('description') }}</TypographyH3>
          <TypographyBodyMedium>
            {{ props.form.description }}
          </TypographyBodyMedium>
        </div>
        <div class="flex flex-col gap-6">
          <div>
            <TypographyH3>
              {{ t('highlights') }}
            </TypographyH3>
            <div v-if="props.form.previewUrls.length > 0" class="relative">
              <div class="grid grid-cols-6 gap-2 overflow-hidden rounded-2xl">
                <div class="relative col-span-4 aspect-[4/3]">
                  <img
                    :src="props.form.previewUrls[0]"
                    class="h-full w-full object-cover"
                    alt="Main highlight"
                  />
                </div>
                <div class="col-span-2 grid grid-rows-2 gap-2">
                  <div
                    v-if="props.form.previewUrls.length > 1"
                    class="relative aspect-[4/3]"
                  >
                    <img
                      :src="props.form.previewUrls[1]"
                      class="h-full w-full object-cover"
                      alt="Second highlight"
                    />
                  </div>
                  <div class="relative aspect-[4/3]">
                    <div
                      v-if="props.form.previewUrls.length > 2"
                      class="relative h-full"
                    >
                      <img
                        :src="props.form.previewUrls[2]"
                        class="h-full w-full object-cover"
                        alt="Third highlight"
                      />
                      <div
                        v-if="props.form.previewUrls.length > 3"
                        class="group absolute inset-0 flex cursor-pointer items-center justify-center bg-black/50"
                      >
                        <div class="text-center text-white">
                          <div class="mb-1 flex items-center justify-center">
                            <Grid class="h-6 w-6" />
                          </div>
                          <span class="text-sm font-medium">{{
                            t('seeAll')
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="rounded-2xl p-12 text-center">
              <div class="flex flex-col items-center">
                <Image class="mb-4 size-12" />
                <TypographyBodySmall>{{
                  t('noHighlights')
                }}</TypographyBodySmall>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <TypographyH3>{{ t('organizer') }}</TypographyH3>
            <div class="flex items-center gap-4">
              <AccountProfilePicture
                :account-id="store.signedInAccountId || ''"
                classes="size-16 rounded-full"
                height="64"
                width="64"
              />
              <h3 class="text-xl font-semibold text-[#5B47D9]">
                {{ store.signedInUsername }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4 bg-(--semantic-faint-line) px-6 py-4">
      <ButtonColored
        variant="primary"
        class="w-full rounded-lg"
        :aria-label="t('publish')"
        @click="emit('next')"
      >
        {{ t('publish') }}
      </ButtonColored>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Grid, Image } from 'lucide-vue-next'
import type { EventVisibility } from '~~/gql/generated/graphql'

const store = useStore()

const props = defineProps<{
  form: {
    name: string
    description: string
    startDate: string
    startTime: string
    endDate: string
    endTime: string | null
    slug: string
    isInPerson: boolean
    isRemote: boolean
    visibility: EventVisibility | null
    inviteeCountMaximum: string
    website: string
    previewUrls: string[]
    images: File[] | null
  }
}>()

const emit = defineEmits<{
  next: []
  previous: []
}>()

const { locale, t } = useI18n()
const currentSlide = ref(0)

const handleSlideChange = (index: number) => {
  currentSlide.value = index
}

const formatDate = (
  dateString: string,
  options: Intl.DateTimeFormatOptions,
) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale.value, options).format(date)
}
</script>

<i18n lang="yaml">
de:
  back: zurück
  description: Beschreibung
  favorite: Favorit
  highlights: Highlights
  noHighlights: Keine Highlights verfügbar
  noImages: Keine Bilder verfügbar
  options: Optionen
  organizer: Organisator
  publish: Veröffentlichen
  seeAll: Alle anzeigen
  share: Teilen
  slash: /
en:
  back: back
  description: Description
  favorite: Favorite
  highlights: Highlights
  noHighlights: No highlights available
  noImages: No images available
  options: Options
  organizer: Organizer
  publish: Publish
  seeAll: See All
  share: Share
  slash: /
</i18n>
