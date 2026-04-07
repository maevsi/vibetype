import { toTypedSchema } from '@vee-validate/zod'
import type { GenericObject } from 'vee-validate'
import { useForm } from 'vee-validate'
import type { ZodSchema } from 'zod'

export const useFormSubmit = <T extends GenericObject>({
  emit,
  endpoint,
  modelError,
  schema,
}: {
  emit: (event: 'success') => void
  endpoint: string
  modelError: Ref<Error | undefined>
  schema: ZodSchema<T>
}) => {
  const templateForm = useTemplateRef<HTMLFormElement>('form')
  const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(schema),
  })

  const onSubmit = handleSubmit(async (values) => {
    try {
      await $fetch(endpoint, {
        body: values,
        method: 'POST',
      })
      emit('success')
    } catch (error) {
      modelError.value = error as Error
    }
  })

  const submit = () => {
    templateForm.value?.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true }),
    )
  }

  return {
    onSubmit,
    submit,
  }
}
