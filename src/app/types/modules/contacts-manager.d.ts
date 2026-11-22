// Contact Picker API: https://w3c.github.io/contact-picker/

interface ContactInfo {
  email?: string[]
  name?: string[]
  tel?: string[]
}

interface ContactsManager {
  select: (
    properties: ('email' | 'name' | 'tel')[],
    options?: { multiple?: boolean },
  ) => Promise<ContactInfo[]>
}

interface Navigator {
  contacts?: ContactsManager
}
