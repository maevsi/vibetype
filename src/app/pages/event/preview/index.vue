<template>
  <div v-if="form" class="mt-4 flex min-h-screen w-full flex-col">
    <div class="flex-1">
      <div class="relative w-full">
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
          <div class="absolute top-4 right-4 z-10 flex space-x-3">
            <button
              class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
              :aria-label="t('share')"
            >
              <Share class="h-6 w-6 text-gray-700" />
            </button>
            <button
              class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
              :aria-label="t('favorite')"
            >
              <Heart class="h-6 w-6 text-red-500" />
            </button>
            <button
              class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
              :aria-label="t('options')"
            >
              <MoreHorizontal class="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <div
            class="absolute right-4 bottom-4 z-10 rounded-full bg-black/70 px-3 py-1 text-sm text-white"
          >
            {{ currentSlide + 1 }}{{ t('slash') }}{{ form.previewUrls.length }}
          </div>
        </template>
        <template v-else>
          <div
            class="aspect-[16/9] w-full rounded-2xl border-2 border-dashed border-gray-300 p-12 md:aspect-[21/9] lg:aspect-[3/1]"
          >
            <div
              class="flex h-full flex-col items-center justify-center text-center"
            >
              <Image class="mb-4 h-12 w-12 text-gray-400" />
              <p class="text-gray-500">{{ t('noImages') }}</p>
            </div>
          </div>
        </template>
      </div>
      <div class="flex flex-col gap-6">
        <div class="flex items-start gap-6">
          <div
            class="flex flex-col items-center text-center text-lg text-(--semantic-base-text-primary) dark:text-(--semantic-base-text-primary)"
          >
            <span
              class="mt-3 text-xl font-semibold text-(--semantic-accent-accent-text)"
              >{{ formatDate(form.startDate, { weekday: 'long' }) }}</span
            ><span
              class="text-(--semantic-base-text-primary text-4xl font-semibold"
              >{{ formatDate(form.startDate, { day: 'numeric' }) }}</span
            ><span>{{ formatDate(form.startDate, { month: 'short' }) }}</span
            ><span
              class="text-xl font-semibold text-(--semantic-accent-accent-text)"
              >{{ form.startTime }}</span
            >
          </div>
          <div class="h-auto w-px self-stretch bg-gray-200"></div>
          <div class="-mt-1 -ml-4 flex-1 overflow-hidden">
            <h1
              class="break-words whitespace-pre-wrap text-(--semantic-base-text-primary) dark:text-(--semantic-base-text-primary)"
              :class="{
                'text-2xl': form.name.length > 50,
                'text-xl': form.name.length > 100,
              }"
            >
              {{ form.name }}
            </h1>
          </div>
        </div>
        <div>
          <h2 class="mb-3 text-xl font-semibold">{{ t('description') }}</h2>
          <p
            class="text-(--semantic-base-text-primary) dark:text-(--semantic-base-text-primary)"
          >
            {{ form.description }}
          </p>
        </div>
        <div class="flex flex-col gap-6">
          <div>
            <h2 class="mb-3 text-xl font-semibold">{{ t('highlights') }}</h2>

            <div v-if="form.previewUrls.length > 0" class="relative">
              <div class="grid grid-cols-6 gap-2 overflow-hidden rounded-2xl">
                <div class="relative col-span-4 aspect-[4/3]">
                  <img
                    :src="form.previewUrls[0]"
                    class="h-full w-full object-cover"
                    alt="Main highlight"
                  />
                </div>

                <div class="col-span-2 grid grid-rows-2 gap-2">
                  <div
                    v-if="form.previewUrls.length > 1"
                    class="relative aspect-[4/3]"
                  >
                    <img
                      :src="form.previewUrls[1]"
                      class="h-full w-full object-cover"
                      alt="Second highlight"
                    />
                  </div>
                  <div class="relative aspect-[4/3]">
                    <div
                      v-if="form.previewUrls.length > 2"
                      class="relative h-full"
                    >
                      <img
                        :src="form.previewUrls[2]"
                        class="h-full w-full object-cover"
                        alt="Third highlight"
                      />
                      <div
                        v-if="form.previewUrls.length > 3"
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
            <div
              v-else
              class="rounded-2xl border-2 border-dashed border-gray-300 p-12 text-center"
            >
              <div class="flex flex-col items-center">
                <Image class="mb-4 h-12 w-12 text-gray-400" />
                <p class="text-gray-500">{{ t('noHighlights') }}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 class="mb-3 text-2xl font-bold">{{ t('organizer') }}</h2>
            <div class="flex items-center gap-4">
              <AccountProfilePicture
                :account-id="store.signedInAccountId || ''"
                classes="h-16 w-16 rounded-full bg-gray-100"
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
    <div class="flex flex-col gap-4 bg-(--semantic-faint-line) py-4">
      <ButtonColored
        variant="primary"
        class="w-full rounded-lg"
        :aria-label="t('publish')"
        @click="createEvent"
      >
        {{ t('publish') }}
      </ButtonColored>
      <ButtonColored
        variant="secondary"
        class="w-full rounded-xl"
        :aria-label="t('saveDraft')"
        @click="handleDraftSave"
      >
        {{ t('saveDraft') }}
      </ButtonColored>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Share, Heart, MoreHorizontal, Grid, Image } from 'lucide-vue-next'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/scn/carousel'
import type { EventStorageStrategy } from '~/types/events/EventStorageStrategy'
import { LocalStorageStrategy } from '~/utils/storage/LocalStorageStrategy'
import { useCreateEventMutation } from '~~/gql/documents/mutations/event/eventCreate'
import { useUploadCreateMutation } from '~~/gql/documents/mutations/upload/uploadCreate'
import { EventVisibility } from '~~/gql/generated/graphql'
import Tus from '@uppy/tus'
import Uppy from '@uppy/core'

const { locale, t } = useI18n()
const currentSlide = ref(0)
const store = useStore()
const storageStrategy = ref<EventStorageStrategy>(
  LocalStorageStrategy.getInstance(),
)
const localePath = useLocalePath()
const TUSD_FILES_URL = useTusdFilesUrl()
const createEventMutation = useCreateEventMutation()
const uploadCreateMutation = useUploadCreateMutation()
const { setTitle } = useHeaderTitle()
const runtimeConfig = useRuntimeConfig()
const form = computed(() => store.previewForm)

onMounted(() => {
  setTitle(t('previewEvent'))
})

onBeforeUnmount(() => {
  setTitle('')
})

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

const handleDraftSave = async () => {
  if (!form.value) {
    return
  }
  await storageStrategy.value.saveEvent(form.value)
  await navigateTo(
    localePath({
      name: 'event-view-username',
      params: { username: store.signedInUsername },
    }),
  )
  showToast({ title: t('draftSaved') })
}

const createEvent = async () => {
  if (!form.value) {
    return
  }
  const result = await createEventMutation.executeMutation({
    createEventInput: {
      event: {
        createdBy: store.signedInAccountId,
        name: form.value.name,
        slug: form.value.slug,
        description: form.value.description || null,
        isInPerson: form.value.isInPerson,
        isRemote: form.value.isRemote,
        start: form.value.startDate || null,
        end: form.value.endDate || null,
        visibility: form.value.visibility || EventVisibility.Private,
        guestCountMaximum: form.value.inviteeCountMaximum
          ? +form.value.inviteeCountMaximum
          : null,
        url: form.value.website,
      },
    },
  })
  if (result.error || !result.data) {
    throw new Error('Event creation failed')
  }
  if (form.value.images?.length) {
    try {
      for (const file of form.value.images) {
        const uploadResult = await uploadCreateMutation.executeMutation({
          uploadCreateInput: {
            sizeByte: file.size,
          },
        })
        if (!uploadResult.data?.uploadCreate?.upload?.id) {
          throw new Error('Upload creation failed')
        }
        const uppy = new Uppy({
          id: 'event-images',
          debug: !runtimeConfig.public.vio.isInProduction,
          restrictions: {
            maxFileSize: 1048576,
            maxNumberOfFiles: 6,
            minNumberOfFiles: 0,
            allowedFileTypes: ['image/*'],
          },
          meta: {
            maevsiUploadUuid: uploadResult.data.uploadCreate.upload.id,
          },
        })
        uppy.use(Tus, {
          endpoint: TUSD_FILES_URL,
          limit: 6,
          removeFingerprintOnSuccess: true,
        })
        uppy.addFile({
          source: 'event-images',
          name: `/event-images/${file.name}`,
          type: file.type,
          data: file,
        })
        const result = await uppy.upload()
        if (result && result.failed && result.failed.length > 0) {
          console.error()
        }
      }
    } catch (uploadError) {
      console.error('Image upload failed:', uploadError)
    }
  }
  showToast({ title: t('eventCreateSuccess') })
  if (!store.signedInUsername || !form.value.slug) {
    throw new Error(
      'Aborting navigation: required data for path templating is missing!',
    )
  }
  await navigateTo(
    localePath({
      name: 'event-view-username-event_name-published',
      params: {
        username: store.signedInUsername,
        event_name: form.value.slug,
      },
    }),
  )
}
</script>

<style scoped>
.text-primary {
  color: #5b47d9;
}
</style>

<i18n lang="yaml">
de:
  description: Beschreibung
  draftSaved: Entwurf erfolgreich gespeichert
  eventCreateSuccess: Veranstaltung erfolgreich erstellt.
  favorite: Favorit
  highlights: Highlights
  noHighlights: Keine Highlights verfügbar
  noImages: Keine Bilder verfügbar
  options: Optionen
  organizer: Organisator
  previewEvent: Veranstaltungsvorschau
  publish: Veröffentlichen
  saveDraft: Als Entwurf speichern
  seeAll: Alle anzeigen
  share: Teilen
  slash: /
en:
  description: Description
  draftSaved: Draft saved successfully
  eventCreateSuccess: Event created successfully.
  favorite: Favorite
  highlights: Highlights
  noHighlights: No highlights available
  noImages: No images available
  options: Options
  organizer: Organizer
  previewEvent: Event Preview
  publish: Publish
  saveDraft: Save as Draft
  seeAll: See All
  share: Share
  slash: /
</i18n>
