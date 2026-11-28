<script setup lang="ts">
// keeps old links to the event list working, with their query and locale prefix
definePageMeta({
  middleware: (to) =>
    navigateTo(
      { path: to.path.replace(/event\/?$/, 'discover'), query: to.query },
      { redirectCode: 301 },
    ),
})
</script>
