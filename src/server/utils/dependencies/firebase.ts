import { consola } from 'consola'
import { initializeApp, cert } from 'firebase-admin/app'

const getFirebaseAdminApp = () => {
  if (!process.env.FIREBASE_SERVICE_ACCOUNT_CREDENTIALS) {
    ;(import.meta.dev ? consola.warn : consola.error)(
      'Firebase service account credentials not set',
    )
    return
  }

  if (
    process.env.FIREBASE_SERVICE_ACCOUNT_CREDENTIALS ===
    DARGSTACK_SECRET_UNUSED_THIRD_PARTY
  ) {
    consola.warn(
      'Firebase service account credentials not set in stack as provided by third party',
    )
    return
  }

  try {
    return initializeApp({
      credential: cert(
        JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_CREDENTIALS),
      ),
    })
  } catch (error) {
    consola.error('Failed to parse Firebase credentials:', error)
  }
}

export const firebaseAdminApp = getFirebaseAdminApp()
