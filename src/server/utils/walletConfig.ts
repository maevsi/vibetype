import type { WalletConfigApple, WalletConfigGoogle } from './wallet'

const getEnvironmentVariable = (name: string) => {
  const value = process.env[name]

  if (!value || value === DARGSTACK_SECRET_UNUSED_THIRD_PARTY) return

  return value
}

export const getWalletConfigApple = (): WalletConfigApple | undefined => {
  const passTypeIdentifier = getEnvironmentVariable(
    'APPLE_WALLET_PASS_TYPE_IDENTIFIER',
  )
  const signerCert = getEnvironmentVariable('APPLE_WALLET_CERTIFICATE')
  const signerKey = getEnvironmentVariable('APPLE_WALLET_KEY')
  const teamIdentifier = getEnvironmentVariable('APPLE_WALLET_TEAM_IDENTIFIER')
  const wwdr = getEnvironmentVariable('APPLE_WALLET_WWDR_CERTIFICATE')

  if (
    !passTypeIdentifier ||
    !signerCert ||
    !signerKey ||
    !teamIdentifier ||
    !wwdr
  )
    return

  return {
    certificates: {
      signerCert,
      signerKey,
      signerKeyPassphrase: getEnvironmentVariable(
        'APPLE_WALLET_KEY_PASSPHRASE',
      ),
      wwdr,
    },
    passTypeIdentifier,
    teamIdentifier,
  }
}

export const getWalletConfigGoogle = (): WalletConfigGoogle | undefined => {
  const issuerId = getEnvironmentVariable('GOOGLE_WALLET_ISSUER_ID')
  const credentials = getEnvironmentVariable(
    'GOOGLE_WALLET_SERVICE_ACCOUNT_CREDENTIALS',
  )

  if (!issuerId || !credentials) return

  try {
    const { client_email, private_key } = JSON.parse(credentials)

    if (typeof client_email !== 'string' || typeof private_key !== 'string')
      throw new Error('`client_email` or `private_key` missing')

    return { clientEmail: client_email, issuerId, privateKey: private_key }
  } catch (error) {
    console.error('Failed to parse Google Wallet credentials:', error)
  }
}
