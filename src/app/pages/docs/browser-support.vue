<template>
  <div>
    <LayoutPageTitle :title />
    <LayoutProse>
      <section>
        <p>
          {{ t('description1') }}
        </p>
        <p>
          {{ t('description2') }}
        </p>
      </section>
    </LayoutProse>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// data
const title = t('title')
</script>

<i18n lang="yaml">
de:
  description1: Wenn du ein Banner siehst, das darauf hinweist, dass dein Browser nicht alle von @.upper:{'globalSiteName'} angebotenen Funktionen unterstützt, liegt das wahrscheinlich daran, dass du eine veraltete Version von iOS verwendest. In diesem Fall stehen dir die Benachrichtigungen möglicherweise nicht zur Verfügung. Während wir aktiv an Verbesserungen der @.upper:{'globalSiteName'}-Benachrichtigungen arbeiten, um diese Einschränkung zu beheben, empfehlen wir Ihnen, Ihr Betriebssystem und Ihren Browser zu aktualisieren — vor allem, wenn Sie kein iOS verwenden.
  description2: "@.upper:{'globalSiteName'} funktioniert am besten in Google Chrome und unterstützt offiziell Firefox, Safari, Opera, Edge und einige andere weniger verbreitete Browser. Stelle einfach sicher, dass dein Browser auf dem neuesten Stand ist, damit er optimal funktioniert."
  title: Browser-Unterstützung
en:
  description1: If you encounter a banner indicating that your browser doesn't support all the features offered by @.upper:{'globalSiteName'}, it's likely because you're using an outdated version of iOS. In this case, notifications may not be available to you. While we're actively working on enhancements to @.upper:{'globalSiteName'}'s notifications to address this limitation, we recommend updating your operating system and browser — especially if you're not using iOS.
  description2: "@.upper:{'globalSiteName'} works best in Google Chrome and officially supports Firefox, Safari, Opera, Edge, and several other less common browsers. Just ensure that your browser is up to date for optimal functionality."
  title: Browser Support
</i18n>
