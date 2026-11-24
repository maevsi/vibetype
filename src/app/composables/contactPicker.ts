const EVENT_CANCEL = 'contact-pick-cancel'
const EVENT_ERROR = 'contact-pick-error'
const EVENT_RESULT = 'contact-pick-result'

const getContactFromInfo = ({
  email,
  name,
  tel,
}: ContactInfo): ContactPicked => ({
  emailAddresses: email ?? [],
  groupNames: [],
  ...getContactNamesFromFullName(name?.[0]),
  phoneNumbers: tel ?? [],
})

const pickFromApp = () =>
  new Promise<ContactPicked[]>((resolve, reject) => {
    const cleanUp = () => {
      window.removeEventListener(EVENT_CANCEL, onCancel)
      window.removeEventListener(EVENT_ERROR, onError)
      window.removeEventListener(EVENT_RESULT, onResult)
    }
    const onCancel = () => {
      cleanUp()
      resolve([])
    }
    const onError = ({ detail }: CustomEvent<string>) => {
      cleanUp()
      reject(new Error(detail))
    }
    const onResult = ({ detail }: CustomEvent<string>) => {
      cleanUp()

      try {
        const contacts: {
          emailAddresses: string[]
          familyName: string
          givenName: string
          phoneNumbers: string[]
        }[] = JSON.parse(detail)

        resolve(
          contacts.map(
            ({ emailAddresses, familyName, givenName, phoneNumbers }) => ({
              emailAddresses,
              firstName: givenName || undefined,
              groupNames: [],
              lastName: familyName || undefined,
              phoneNumbers,
            }),
          ),
        )
      } catch (error) {
        reject(error)
      }
    }

    window.addEventListener(EVENT_CANCEL, onCancel)
    window.addEventListener(EVENT_ERROR, onError)
    window.addEventListener(EVENT_RESULT, onResult)
    window.webkit?.messageHandlers['contact-pick']?.postMessage('contact-pick')
  })

/** Picks contacts with the Contact Picker API (Android) or the iOS app's bridge, and is unsupported elsewhere. */
export const useContactPicker = () => {
  // data
  const isSupported = ref(false)

  // methods
  /** Has to be called from a user gesture. */
  const pick = async (): Promise<ContactPicked[]> => {
    if (window.webkit?.messageHandlers?.['contact-pick']) return pickFromApp()

    if (!navigator.contacts) return []

    return (
      await navigator.contacts.select(['email', 'name', 'tel'], {
        multiple: true,
      })
    ).map(getContactFromInfo)
  }

  // lifecycle
  onMounted(() => {
    isSupported.value =
      ('contacts' in navigator && 'ContactsManager' in window) ||
      window.webkit?.messageHandlers?.['contact-pick'] !== undefined
  })

  return { isSupported, pick }
}
