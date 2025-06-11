import useVuelidate from '@vuelidate/core'
import slugify from 'slugify'
import type { EventVisibility } from '~~/gql/generated/graphql'
import { required, maxLength } from '@vuelidate/validators'
import type { EventFormType } from '~/types/events/eventForm'

export function useEventForm(eventSlug?: string) {
  const form = ref<EventFormType>({
    address: '',
    authorAccountId: '',
    category: '',
    city: '',
    country: '',
    coverImage: null as File | null,
    description: '',
    end: '',
    endDate: '',
    endTime: '',
    format: '',
    frequency: '',
    id: '',
    images: [] as File[],
    inviteeCountMaximum: '',
    isInPerson: false,
    isRecurring: false,
    isRemote: false,
    location: '',
    name: '',
    postcode: '',
    previewUrls: [] as string[],
    recurringEndDate: '',
    slug: '',
    start: '',
    startDate: '',
    startTime: '',
    street: '',
    url: '',
    visibility: null as EventVisibility | null,
    website: '',
  })

  const stepOneRules = {
    name: {
      required,
      maxLength: maxLength(VALIDATION_EVENT_NAME_LENGTH_MAXIMUM),
    },
    slug: VALIDATION_SLUG({
      existenceNone: validateEventSlug({
        signedInAccountId: useStore().signedInAccountId || '',
        invert: true,
        exclude: eventSlug,
      }),
    }),
    category: { required },
    format: { required },
  }

  const stepTwoRules = {
    address: { required },
    endDate: { required },
    endTime: {},
    startDate: { required },
    startTime: { required },
    postcode: { required },
    city: { required },
  }

  const stepThreeRules = {
    description: { required },
    website: { required },
  }

  const stepFiveRules = {
    visibility: { required },
    inviteeCountMaximum: { required },
  }

  const allRules = {
    ...stepOneRules,
    ...stepTwoRules,
    ...stepThreeRules,
    ...stepFiveRules,
  }

  const v$ = useVuelidate(allRules, form)

  const updateFormName = (name: string) => {
    const trimmedName = name.trim()
    form.value.name = trimmedName
    form.value.slug = slugify(trimmedName, {
      lower: true,
      strict: true,
    })
  }

  const updateImages = (
    files: File[],
    previews: string[],
    coverIndex: number,
  ) => {
    form.value.images = files
    form.value.previewUrls = previews
    form.value.coverImage = files[coverIndex] || null
  }

  const isPrimarySettingsValid = computed(() => {
    const isValid = !!(
      form.value.name?.trim() &&
      form.value.category &&
      form.value.format &&
      (form.value.isInPerson || form.value.isRemote) &&
      !v$.value.name.$invalid &&
      !v$.value.slug.$invalid
    )
    return isValid
  })

  const isDateLocationValid = computed(() => {
    return !!(
      !v$.value.startDate.$invalid &&
      !v$.value.endDate.$invalid &&
      !v$.value.address.$invalid &&
      !v$.value.postcode.$invalid &&
      !v$.value.city.$invalid
    )
  })

  const isDetailsValid = computed(() => {
    return !!(!v$.value.description.$invalid && !v$.value.website.$invalid)
  })

  //StepFour is optional so no validation function required

  const isVisibilityValid = computed(() => {
    console.log({
      visibilityInvalid: v$.value.visibility.$invalid,
      inviteeCountMaximumInvalid: v$.value.inviteeCountMaximum.$invalid,
    })
    return !!(
      !v$.value.visibility.$invalid && !v$.value.inviteeCountMaximum.$invalid
    )
  })

  const updateStartTime = (time: string) => {
    form.value.startTime = time
  }

  const updateEndTime = (time: string) => {
    form.value.endTime = time
  }

  return {
    form,
    v$,
    isPrimarySettingsValid,
    isDateLocationValid,
    isDetailsValid,
    isVisibilityValid,
    updateFormName,
    updateStartTime,
    updateEndTime,
    updateImages,
  }
}
