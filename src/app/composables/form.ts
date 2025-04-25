import useVuelidate from '@vuelidate/core'

export const useAppForm = <T extends Record<string, Ref>>({
  fields,
  rules,
  onSubmit,
}: {
  fields: T
  rules: Record<string, unknown>
  onSubmit: () => void
}) => {
  const form = reactive(fields)
  const isFormSent = ref(false)
  const v$ = useVuelidate(rules, form)
  const formSubmit = async () => {
    if (!(await isFormValid({ v$, isFormSent }))) return
    onSubmit()
  }

  return {
    form,
    isFormSent,
    formSubmit,
    v$,
  }
}
