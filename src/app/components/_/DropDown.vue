<template>
  <div>
    <div class="flex items-center justify-center" @click="toggleIsOpen">
      <slot />
    </div>
    <div
      class="fixed inset-0 z-10 transition"
      :class="
        isOpen
          ? 'backdrop-blur-xs backdrop-brightness-75'
          : 'backdrop-blur-0 invisible backdrop-brightness-100'
      "
      @click="toggleIsOpen"
    />
    <div
      v-if="isOpen"
      ref="dropdown"
      class="bg-background-brighten dark:bg-background-darken fixed z-20 mt-2 flex -translate-x-full flex-col items-stretch gap-4 rounded-md p-4 shadow-lg"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
const templateDropdown = useTemplateRef('dropdown')

// data
const isOpen = ref(false)

// methods
const toggleIsOpen = async (e: MouseEvent) => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    document.body.classList.add('overflow-hidden')

    await nextTick()

    if (templateDropdown.value) {
      templateDropdown.value.style.top = e.clientY + 'px'
      templateDropdown.value.style.left = e.clientX + 'px'
    }
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}

// lifecycle
onUnmounted(() => document.body.classList.remove('overflow-hidden'))
</script>
