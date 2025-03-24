<template>
  <div>
    <LayoutPageTitle :title="title" />
    <LayoutProse>
      <h2>{{ t('attributionTitle') }}</h2>
      <p>
        <i18n-t keypath="attributionDescription">
          <template #author>
            {{ t('heroiconsAuthor') }}
          </template>
          <template #license>
            <AppLink
              is-external
              to="https://github.com/tailwindlabs/heroicons/blob/master/LICENSE"
            >
              {{ t('licenseMIT') }}
            </AppLink>
          </template>
          <template #title>
            {{ t('heroicons') }}
          </template>
        </i18n-t>
        <br />
        <i18n-t keypath="attributionDescription">
          <template #author>
            {{ t('materialSymbolsAuthor') }}
          </template>
          <template #license>
            <AppLink
              is-external
              to="https://github.com/google/material-design-icons/blob/master/LICENSE"
            >
              {{ t('licenseApache20') }}
            </AppLink>
          </template>
          <template #title>
            {{ t('materialSymbols') }}
          </template>
        </i18n-t>
        <br />
        <i18n-t keypath="attributionDescription">
          <template #author>
            {{ t('solarAuthor') }}
          </template>
          <template #license>
            <AppLink
              is-external
              to="https://creativecommons.org/licenses/by/4.0/"
            >
              {{ t('licenseCCBY40') }}
            </AppLink>
          </template>
          <template #title>
            {{ t('solar') }}
          </template>
        </i18n-t>
      </p>
    </LayoutProse>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// data
const title = t('title')

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  attributionDescription: '{title} von {author}, {license}'
  attributionTitle: Zuschreibungen
  heroicons: HeroIcons
  heroiconsAuthor: Refactoring UI Inc
  licenseApache20: Apache 2.0
  licenseCCBY40: CC BY 4.0
  licenseMIT: MIT
  materialSymbols: Material Symbols
  materialSymbolsAuthor: Google
  solar: Solar
  solarAuthor: 480 Design
  title: Impressum
en:
  attributionDescription: '{title} by {author}, {license}'
  attributionTitle: Attributions
  heroicons: HeroIcons
  heroiconsAuthor: Refactoring UI Inc
  licenseApache20: Apache 2.0
  licenseCCBY40: CC BY 4.0
  licenseMIT: MIT
  materialSymbols: Material Symbols
  materialSymbolsAuthor: Google
  solar: Solar
  solarAuthor: 480 Design
  title: Legal notice
</i18n>
