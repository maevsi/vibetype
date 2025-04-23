const headerTitle = ref('')
export function useHeaderTitle(title?: string) {
  if (title !== undefined) {
    onMounted(() => {
      headerTitle.value = title
    })

    onBeforeUnmount(() => {
      headerTitle.value = ''
    })
  }

  const setTitle = (newTitle: string) => {
    headerTitle.value = newTitle
  }

  return {
    title: readonly(headerTitle),
    setTitle,
  }
}
