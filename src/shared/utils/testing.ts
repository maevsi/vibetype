export const TESTING_ACCOUNT_ROW_ID = 'a3f8f6c2-6b1e-4b6a-9b9a-9f7d6a2e6c1a'
export const TESTING_ACCOUNT_ID =
  'QWNjb3VudDphM2Y4ZjZjMi02YjFlLTRiNmEtOWI5YS05ZjdkNmEyZTZjMWE='
export const TESTING_ACCOUNT_USERNAME = 'e2e-test-account'
export const TESTING_ACCOUNT_DESCRIPTION =
  'Building vibetype, one event at a time.'
export const TESTING_ATTENDANCE_ROW_ID = 'e1f2a3b4-c5d6-4e7f-8a9b-0c1d2e3f4a5b'
export const TESTING_CONTACT_ROW_ID = 'd9e0f1a2-b3c4-4d5e-8f6a-7b8c9d0e1f2a'
export const TESTING_EVENT_NAME = 'Community Meetup'
export const TESTING_EVENT_ROW_ID = 'b7e2c9a4-3d1f-4c8e-9a5b-6f0d2e8c1b3a'
export const TESTING_EVENT_SLUG = 'community-meetup'
export const TESTING_GUEST_ROW_ID = 'c4d8e1f2-5a6b-4c7d-8e9f-0a1b2c3d4e5f'

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
