<template>
  <OgFrame>
    <div class="relative flex flex-1 items-center gap-16">
      <div class="flex w-[620px] flex-col justify-center gap-7">
        <span
          class="font-extrabold tracking-tight"
          :style="[
            getOgImageLineClamp(2),
            {
              fontSize: `${getOgImageTitleSize({ max: 84, text: title, width: 620 })}px`,
              lineHeight: 1.05,
            },
          ]"
        >
          {{ title }}
        </span>
        <div
          v-if="dateText || location || username"
          class="flex flex-col gap-4"
        >
          <div v-if="dateText" class="flex items-center gap-4">
            <svg
              fill="none"
              height="36"
              stroke="#70e884"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.25"
              viewBox="0 0 24 24"
              width="36"
            >
              <rect height="18" rx="2" width="18" x="3" y="4" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            <span
              class="text-[32px] font-semibold"
              :style="getOgImageLineClamp(1)"
            >
              {{ dateText }}
            </span>
          </div>
          <div v-if="location" class="flex items-center gap-4">
            <svg
              fill="none"
              height="36"
              stroke="#ff3167"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.25"
              viewBox="0 0 24 24"
              width="36"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span
              class="text-[32px] text-white/80"
              :style="getOgImageLineClamp(1)"
            >
              {{ location }}
            </span>
          </div>
          <div v-if="username" class="flex items-center gap-4">
            <svg
              fill="none"
              height="36"
              stroke="#68a6fd"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.25"
              viewBox="0 0 24 24"
              width="36"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21a8 8 0 0 1 16 0" />
            </svg>
            <span
              class="text-[32px] text-white/80"
              :style="getOgImageLineClamp(1)"
            >
              {{ `@${username}` }}
            </span>
          </div>
        </div>
        <span
          v-else-if="description"
          class="text-[34px] leading-snug text-white/70"
          :style="getOgImageLineClamp(3)"
        >
          {{ description }}
        </span>
      </div>
      <div class="relative flex" style="transform: rotate(4deg)">
        <img
          alt=""
          class="rounded-[40px] border-[6px] border-white/90 object-cover"
          height="400"
          :src="image || '/assets/static/images/event/party.jpg'"
          style="box-shadow: 0 40px 100px rgb(0 0 0 / 70%)"
          width="340"
        />
        <div
          v-if="day && month"
          class="absolute flex flex-col items-center overflow-hidden rounded-3xl bg-white text-black"
          style="
            top: -28px;
            left: -44px;
            width: 132px;
            transform: rotate(-10deg);
            box-shadow: 0 24px 60px rgb(0 0 0 / 55%);
          "
        >
          <span
            class="flex w-full justify-center bg-[#ff3167] py-1.5 text-2xl font-extrabold tracking-widest text-white uppercase"
          >
            {{ month }}
          </span>
          <span class="py-1 text-[68px] leading-none font-black">
            {{ day }}
          </span>
        </div>
      </div>
    </div>
  </OgFrame>
</template>

<script setup lang="ts">
const {
  description = undefined,
  image = undefined,
  locale = 'en',
  location = undefined,
  start = undefined,
  timeZone = undefined,
  title,
  username = undefined,
} = defineProps<{
  description?: string
  image?: string
  locale?: string
  location?: string
  start?: string
  timeZone?: string
  title: string
  username?: string
}>()

// formatted here instead of on the page so the url only carries raw values
const getDatePart = (options: Intl.DateTimeFormatOptions) =>
  start
    ? new Intl.DateTimeFormat(locale, { timeZone, ...options }).format(
        new Date(start),
      )
    : undefined

const dateText = getDatePart({
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  month: 'long',
  timeZoneName: 'short',
  weekday: 'short',
})
const day = getDatePart({ day: 'numeric' })
const month = getDatePart({ month: 'short' })?.replace('.', '')
</script>

<script lang="ts">
export default {
  name: 'OgImage',
}
</script>
