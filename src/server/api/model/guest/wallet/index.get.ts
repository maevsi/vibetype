// lets the guest page offer only the wallets the server can sign passes for
export default defineEventHandler(() => ({
  apple: !!getWalletConfigApple(),
  google: !!getWalletConfigGoogle(),
}))
