import { ref, readonly } from 'vue'

const headerTitle = ref('')

export function useHeaderTitle() {
  const setTitle = (title: string) => {
    headerTitle.value = title
  }
  return {
    title: readonly(headerTitle),
    setTitle,
  }
}
