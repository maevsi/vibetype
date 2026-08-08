export const TESTING_ACCOUNT_ROW_ID = 'a3f8f6c2-6b1e-4b6a-9b9a-9f7d6a2e6c1a'
export const TESTING_ACCOUNT_ID =
  'QWNjb3VudDphM2Y4ZjZjMi02YjFlLTRiNmEtOWI5YS05ZjdkNmEyZTZjMWE='
export const TESTING_ACCOUNT_USERNAME = 'e2e-test-account'
export const TESTING_ACCOUNT_DESCRIPTION =
  'Building vibetype, one event at a time.'

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
