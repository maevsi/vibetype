<script setup lang="ts">
import { Text } from '@vue-email/text'
</script>

<template>
  <!-- Color: black needed for darkmode -->
  <Text style="color: #000; font-size: 16px">
    <slot />
  </Text>
</template>
