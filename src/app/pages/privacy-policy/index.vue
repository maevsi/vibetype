<template>
  <LayoutProse>
    <ContentRenderer v-if="page" :value="page" />
  </LayoutProse>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const { data: page } = await useAsyncData(() =>
  queryCollection('content').path(`/${locale.value}/privacy-policy`).first(),
)

if (!page) {
  throw createError({
    statusCode: 404,
  })
}

// initialization
useHeadDefault({ title: page.value?.title })
</script>
