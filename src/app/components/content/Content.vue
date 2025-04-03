<template>
  <LayoutProse>
    <ContentRenderer v-if="page" :value="page" />
  </LayoutProse>
</template>

<script setup lang="ts">
const model = defineModel<string>()

const { path } = defineProps<{
  path: string
}>()

const { locale } = useI18n()

const { data: page } = await useAsyncData(() =>
  queryCollection('content').path(`/${locale.value}/${path}`).first(),
)

if (!page) {
  throw createError({
    statusCode: 404,
  })
}

model.value = page.value?.title
</script>
