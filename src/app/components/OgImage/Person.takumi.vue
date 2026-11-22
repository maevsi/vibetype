<template>
  <OgFrame>
    <div class="relative flex flex-1 items-center gap-16">
      <div class="relative flex">
        <div
          class="absolute rounded-full"
          style="
            inset: -40px;
            background: conic-gradient(
              #0467f1,
              #70e884,
              #ffe504,
              #ff3167,
              #0467f1
            );
            filter: blur(60px);
            opacity: 0.55;
          "
        />
        <div
          class="relative flex rounded-full p-2.5"
          style="
            background: conic-gradient(
              from 210deg,
              #0467f1,
              #70e884,
              #ffe504,
              #ff3167,
              #0467f1
            );
          "
        >
          <div class="flex rounded-full bg-[#0b0c0b] p-2">
            <img
              alt=""
              class="rounded-full object-cover"
              height="300"
              :src="image || '/assets/static/images/blank-profile-picture.svg'"
              width="300"
            />
          </div>
        </div>
      </div>
      <div class="flex w-[640px] flex-col justify-center gap-6">
        <span
          class="font-extrabold tracking-tight"
          :style="[
            getOgImageLineClamp(1),
            {
              fontSize: `${getOgImageTitleSize({
                max: 88,
                text: `@${username}`,
                width: 640,
              })}px`,
              lineHeight: 1.1,
            },
          ]"
        >
          <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
          <span class="text-[#ff3167]">@</span>{{ username }}
        </span>
        <span
          v-if="description"
          class="text-[34px] leading-snug text-white/70"
          :style="getOgImageLineClamp(3)"
        >
          {{ description }}
        </span>
      </div>
    </div>
  </OgFrame>
</template>

<script setup lang="ts">
const {
  description = undefined,
  image = undefined,
  username,
} = defineProps<{
  description?: string
  image?: string
  username: string
}>()
</script>

<script lang="ts">
export default {
  name: 'OgImage',
}
</script>
