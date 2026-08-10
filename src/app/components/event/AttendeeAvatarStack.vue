<template>
  <div
    :aria-label="t('groupLabel')"
    class="flex items-center [&>*+*]:-ml-2"
    role="group"
  >
    <div
      v-for="item in visibleItems"
      :key="item.id"
      :class="[
        sizeClass,
        'overflow-hidden rounded-[16px] border-2 border-white bg-(--neutral-level-1)',
      ]"
    >
      <img
        v-if="item.imageSrc"
        :alt="item.label"
        class="size-full object-cover"
        height="40"
        loading="lazy"
        :src="item.imageSrc"
        width="40"
      />
      <div
        v-else
        class="flex size-full items-center justify-center text-xs font-semibold text-(--semantic-base-text-secondary)"
      >
        {{ item.fallback }}
      </div>
    </div>
    <div
      v-if="showBadge"
      :aria-label="t('moreAttendees', { count: remainingCount })"
      :class="[
        sizeClass,
        '-ml-2 flex items-center justify-center rounded-[16px] bg-(--accent-strong) text-xs font-semibold text-white',
      ]"
    >
      {{ t('badgeText', { count: remainingCount }) }}
    </div>
  </div>
</template>

<script setup lang="ts">
type AttendeeAvatar = {
  alt: string
  id: string
  src?: string
}

type Attendee = {
  avatarUrl?: string | null
  username: string
}

const props = withDefaults(
  defineProps<{
    attendees?: ReadonlyArray<Attendee>
    avatars?: ReadonlyArray<AttendeeAvatar>
    max?: number
    size?: 'sm' | 'md'
    visibleCount?: number
  }>(),
  {
    attendees: undefined,
    avatars: undefined,
    max: 3,
    size: 'md',
    visibleCount: undefined,
  },
)

const { t } = useI18n()

const itemLimit = computed(() => props.visibleCount ?? props.max)

const normalizedItems = computed(() => {
  if (props.attendees?.length) {
    return props.attendees.map((attendee, index) => ({
      fallback: attendee.username.charAt(0).toUpperCase(),
      id: attendee.username || String(index),
      imageSrc: attendee.avatarUrl ?? undefined,
      label: attendee.username,
    }))
  }

  return (props.avatars ?? []).map((avatar, index) => ({
    fallback: avatar.alt.charAt(0).toUpperCase(),
    id: avatar.id || String(index),
    imageSrc: avatar.src,
    label: avatar.alt,
  }))
})

const remainingCount = computed(
  () => normalizedItems.value.length - itemLimit.value,
)

const showBadge = computed(() => normalizedItems.value.length > itemLimit.value)

const sizeClass = computed(() => (props.size === 'sm' ? 'size-8' : 'size-10'))

const visibleItems = computed(() =>
  normalizedItems.value.slice(0, itemLimit.value),
)
</script>

<i18n lang="yaml">
en:
  badgeText: '+{count}'
  groupLabel: Attendees
  moreAttendees: '{count} more attendees'
de:
  badgeText: '+{count}'
  groupLabel: Teilnehmende
  moreAttendees: '{count} weitere Teilnehmende'
</i18n>
