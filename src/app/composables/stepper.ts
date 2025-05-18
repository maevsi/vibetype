export const useStepper = <T extends string>(options?: { initial?: T }) => {
  const { initial = 'default' as T } = options || {}
  const _step = ref<T>(initial)

  const error = ref<Error>()
  const step = computed<'error' | T>({
    get: () => (error.value ? 'error' : _step.value),
    set: (value) => (_step.value = value),
  })
  const restart = () => {
    error.value = undefined
    _step.value = 'default'
  }

  return {
    error,
    restart,
    step,
  }
}

export const useStepperPage = <T extends string>({
  initial = 'default' as T,
  steps,
}: {
  initial?: T
  steps: {
    default: {
      title?: string
    }
    error?: {
      title: string
    }
  } & {
    [K in T]: {
      title?: string
      previous?: T
    }
  }
}) => {
  const { error, step, restart } = useStepper({
    initial,
  })
  const { t } = useI18n()

  const title = computed(
    () =>
      steps[step.value]?.title ??
      (step.value === 'error' ? t('globalError') : steps[initial].title),
  )
  const previous = computed(() => steps[step.value].previous)

  return {
    error,
    previous,
    restart,
    step,
    title,
  }
}
