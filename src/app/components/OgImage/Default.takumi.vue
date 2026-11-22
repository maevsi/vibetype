<template>
  <OgFrame>
    <img
      alt=""
      class="absolute"
      height="560"
      src="/assets/static/logos/app_icon.svg"
      style="
        top: -40px;
        right: -70px;
        transform: rotate(-12deg);
        filter: drop-shadow(0 30px 80px rgb(0 0 0 / 60%));
      "
      width="560"
    />
    <div
      class="relative flex max-w-[720px] flex-1 flex-col justify-center gap-8"
    >
      <div class="flex gap-2">
        <div class="h-2.5 w-16 rounded-full bg-[#0467f1]" />
        <div class="h-2.5 w-10 rounded-full bg-[#ff3167]" />
        <div class="h-2.5 w-6 rounded-full bg-[#ffe504]" />
        <div class="h-2.5 w-3 rounded-full bg-[#70e884]" />
      </div>
      <span
        class="font-extrabold tracking-tight"
        :style="[
          getOgImageLineClamp(2),
          {
            fontSize: `${getOgImageTitleSize({ text: title, width: 720 })}px`,
            lineHeight: 1.05,
          },
        ]"
      >
        {{ title }}
      </span>
      <span
        v-if="description"
        class="text-[34px] leading-snug text-white/70"
        :style="getOgImageLineClamp(2)"
      >
        {{ description }}
      </span>
    </div>
  </OgFrame>
</template>

<script setup lang="ts">
const { title, description = undefined } = defineProps<{
  title: string
  description?: string
}>()
</script>
