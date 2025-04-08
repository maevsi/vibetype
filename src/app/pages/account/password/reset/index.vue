<template>
  <section :aria-labelledby="templateIdTitle">
    <h1 :id="templateIdTitle">{{ title }}</h1>
    <FormAccountPasswordReset
      v-if="route.query.code && !Array.isArray(route.query.code)"
      :code="route.query.code"
    />
  </section>
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false,
})

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// validation
const route = useRoute()
if (
  !route.query.code ||
  Array.isArray(route.query.code) ||
  !REGEX_UUID.test(route.query.code)
) {
  throw createError({ statusCode: 400 })
}

// accessibility
const templateIdTitle = useId()
</script>

<i18n lang="yaml">
de:
  title: Passwort zurücksetzen
en:
  title: Reset password
</i18n>
