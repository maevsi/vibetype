<script setup lang="ts">
// keeps old links to the account list working, with their query and locale prefix
definePageMeta({
  middleware: (to) =>
    navigateTo(
      {
        path: to.path.replace(/account\/?$/, 'discover'),
        query: { ...to.query, type: 'people' },
      },
      { redirectCode: 301 },
    ),
})
</script>
