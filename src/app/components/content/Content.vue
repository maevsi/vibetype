<template>
  <LoaderIndicatorPing v-if="pending" />
  <AppError
    v-else-if="!data"
    :error="{ message: 'Data is missing', statusCode: 404 }"
  />
  <LayoutProse v-else>
    <ContentRenderer :value="data" />
  </LayoutProse>
</template>

<script setup lang="ts">
// compiler
const { path } = defineProps<{
  path: string
}>()

// api data
const { locale } = useI18n()
const { data, pending } = await useAsyncData(() =>
  queryCollection('content').path(`/${locale.value}/${path}`).first(),
)

// title
const model = defineModel<string>('title')
const title = computed(() => data.value?.title)
watch(title, (current) => (model.value = current), { immediate: true })
</script>
