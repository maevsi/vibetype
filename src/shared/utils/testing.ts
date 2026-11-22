export const TESTING_ACCOUNT_ROW_ID = 'a3f8f6c2-6b1e-4b6a-9b9a-9f7d6a2e6c1a'
export const TESTING_ACCOUNT_ID =
  'QWNjb3VudDphM2Y4ZjZjMi02YjFlLTRiNmEtOWI5YS05ZjdkNmEyZTZjMWE='
export const TESTING_ACCOUNT_PASSWORD = 'e2e-test-password'
export const TESTING_ACCOUNT_USERNAME = 'e2e-test-account'
export const TESTING_ACCOUNT_DESCRIPTION =
  'Building vibetype, one event at a time.'
export const TESTING_ATTENDANCE_ROW_ID = 'e1f2a3b4-c5d6-4e7f-8a9b-0c1d2e3f4a5b'
export const TESTING_CONTACT_ROW_ID = 'd9e0f1a2-b3c4-4d5e-8f6a-7b8c9d0e1f2a'
export const TESTING_EVENT_NAME = 'Community Meetup'
export const TESTING_EVENT_RECOMMENDATION_ROW_IDS = [
  '5c1d7e9a-2b3f-4a6c-8d0e-1f2a3b4c5d6e',
  '9a8b7c6d-5e4f-4a3b-8c2d-1e0f9a8b7c6d',
] as const
export const TESTING_EVENT_ROW_ID = 'b7e2c9a4-3d1f-4c8e-9a5b-6f0d2e8c1b3a'
export const TESTING_EVENT_SLUG = 'community-meetup'
// one account per state its friendship with the testing account is in, as seen by the testing account
export const TESTING_FRIENDSHIP_ACCOUNTS = {
  accepted: {
    rowId: '0b6f3c1e-7a2d-4e5f-9c8b-1a2b3c4d5e6f',
    username: 'e2e-friend-account',
  },
  none: {
    rowId: '3e9a1d7c-2b4f-4a6e-8d0c-5f6a7b8c9d0e',
    username: 'e2e-stranger-account',
  },
  requestReceived: {
    rowId: 'c8d2e4f6-1a3b-4c5d-9e7f-2b4c6d8e0f1a',
    username: 'e2e-requesting-account',
  },
  requestSent: {
    rowId: 'e7f1a3b5-9c2d-4e6f-8a0b-4d6e8f0a2c3b',
    username: 'e2e-requested-account',
  },
}
export const TESTING_GUEST_ROW_ID = 'c4d8e1f2-5a6b-4c7d-8e9f-0a1b2c3d4e5f'
export const TESTING_OWN_CONTACT_ROW_ID = 'f6a7b8c9-d0e1-4f2a-9b3c-4d5e6f7a8b9c'

// Test-only ES256 key pair used to sign and verify JSON web tokens while
// `isTesting` is active, so e2e specs can sign in without a real
// postgraphile instance. Never used unless the testing flag is on, so it
// carries no production trust and is safe to commit.
export const TESTING_JWT_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE1QI8ralafKPzwdy4YlATA3yro5oi
/7vlgZzdIzkoq2sAaw2S4I6rjNZF9G1AvdRzyYXJJHm8oyjrMY54Hv90SQ==
-----END PUBLIC KEY-----
`
export const TESTING_JWT_PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQguPdjPulHNvhoPJXG
T/7rEDXwXK1X0Qetqx7cSFYWOHGhRANCAATVAjytqVp8o/PB3LhiUBMDfKujmiL/
u+WBnN0jOSirawBrDZLgjquM1kX0bUC91HPJhckkebyjKOsxjnge/3RJ
-----END PRIVATE KEY-----
`
