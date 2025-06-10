type StepKey<T extends string> = T | 'default'
type StepValue<T extends string> = T | 'default' | 'error'

export const useStepper = <T extends string>(options?: {
  initial?: StepKey<T>
}) => {
  const { initial = 'default' } = options || {}
  const _step = ref<StepKey<T>>(initial)

  const error = ref<Error>()
  const step = computed<StepValue<T>>({
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
  initial = 'default',
  steps,
}: {
  initial?: StepKey<T>
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
      previous?: StepKey<T>
    }
  }
}) => {
  const { error, step, restart } = useStepper<T>({
    initial,
  })
  const { t } = useI18n()

  const title = computed(
    () =>
      steps[step.value]?.title ??
      (step.value === 'error' ? t('globalError') : steps['default'].title),
  )
  const previous = computed(
    () => step.value !== 'error' && steps[step.value]?.previous,
  )

  return {
    error,
    previous,
    restart,
    step,
    title,
  }
}
