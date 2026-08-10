<template>
  <section :aria-labelledby="titleId" class="flex flex-col gap-3">
    <TypographyH3 :id="titleId">{{ t('title') }}</TypographyH3>

    <div v-if="!vouchers?.length">
      <div
        class="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-(--surface-active) bg-(--neutral-level-1) p-6 text-center"
      >
        <TypographySubtitleSmall class="text-(--semantic-base-text-secondary)">
          {{ t('empty') }}
        </TypographySubtitleSmall>
      </div>
    </div>

    <ul v-else class="flex flex-col gap-2">
      <li v-for="voucher in vouchers" :key="voucher.id">
        <div
          class="flex items-center justify-between rounded-2xl bg-(--neutral-level-1) p-4"
        >
          <div class="flex flex-col gap-1">
            <span class="font-mono text-(--semantic-base-text-primary)">
              {{ voucher.code }}
            </span>
            <TypographySubtitleSmall
              class="text-(--semantic-base-text-secondary)"
            >
              {{ voucher.description }}
            </TypographySubtitleSmall>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const { vouchers = undefined } = defineProps<{
  vouchers?: ReadonlyArray<{ code: string; description: string; id: string }>
}>()

const { t } = useI18n()
const titleId = useId()
</script>

<i18n lang="yaml">
de:
  empty: Noch keine Gutscheine
  title: Gutscheine
en:
  empty: No vouchers yet
  title: Vouchers
</i18n>
