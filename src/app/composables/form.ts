import useVuelidate from '@vuelidate/core'

type Fields = Record<string, Ref> // TODO: inline below (https://github.com/unjs/unimport/issues/502)
export const useAppForm = <T extends Fields>({
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
