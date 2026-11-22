<template>
  <div v-bind="$attrs">
    <h2 class="text-heading-large">
      <slot name="title" />
    </h2>
    <p v-if="$slots.subtitle" class="mt-2 text-body text-fg-2">
      <slot name="subtitle" />
    </p>
  </div>
</template>
