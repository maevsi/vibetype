import type { ZxcvbnFactory as ZxcvbnFactoryType } from '@zxcvbn-ts/core'

// This configuration must match postgraphile's src/presets/passwordStrength.ts; see the shared contract at stack:docs/password-strength.md.
// TODO: consider extracting this into a shared @maevsi package instead of duplicating it.
// Score 3 ("safely unguessable") is zxcvbn's own threshold for resisting an offline, slow-hash attack; see https://github.com/zxcvbn-ts/zxcvbn
export const PASSWORD_STRENGTH_SCORE_MINIMUM = 3
const PASSWORD_STRENGTH_SCORE_MAXIMUM = 4

// Must match the locales configured in `config/modules/i18n.ts`.
const zxcvbnLanguagePackImporters = {
  de: () => import('@zxcvbn-ts/language-de'),
  en: () => import('@zxcvbn-ts/language-en'),
}

type ZxcvbnLocale = keyof typeof zxcvbnLanguagePackImporters

const isZxcvbnLocale = (locale: string): locale is ZxcvbnLocale =>
  Object.hasOwn(zxcvbnLanguagePackImporters, locale)

// Falls back to English when the given locale has no matching zxcvbn language package.
const getZxcvbnLocale = (locale: string): ZxcvbnLocale =>
  isZxcvbnLocale(locale) ? locale : 'en'

// zxcvbn's dictionaries are multiple MB uncompressed; importing them eagerly would put that weight in the bundle of every route, including ones that never touch a password field, and importing every language pack would waste bandwidth on locales a visitor never uses.
// This loads only the active locale's package, only once the first password actually needs scoring, and only once per locale.
const zxcvbnPromises = new Map<
  ZxcvbnLocale,
  Promise<InstanceType<typeof ZxcvbnFactoryType>>
>()

const getZxcvbn = (locale: ZxcvbnLocale) => {
  const cachedZxcvbnPromise = zxcvbnPromises.get(locale)
  if (cachedZxcvbnPromise) return cachedZxcvbnPromise

  const zxcvbnPromise = (async () => {
    const [{ ZxcvbnFactory }, zxcvbnCommonPackage, zxcvbnLanguagePackage] =
      await Promise.all([
        import('@zxcvbn-ts/core'),
        import('@zxcvbn-ts/language-common'),
        zxcvbnLanguagePackImporters[locale](),
      ])

    return new ZxcvbnFactory({
      dictionary: {
        ...zxcvbnCommonPackage.dictionary,
        ...zxcvbnLanguagePackage.dictionary,
      },
      graphs: zxcvbnCommonPackage.adjacencyGraphs,
      translations: zxcvbnLanguagePackage.translations,
    })
  })()

  zxcvbnPromises.set(locale, zxcvbnPromise)

  return zxcvbnPromise
}

// The strength meter and the field validator both score the same in-flight password value on
// every keystroke; caching the latest result avoids running zxcvbn's check twice per input.
let lastPassword: string | undefined
let lastLocale: ZxcvbnLocale | undefined
let lastScore = 0

export const getPasswordStrengthScore = async (
  password: string,
  locale: string,
): Promise<number> => {
  if (!password) return 0

  const zxcvbnLocale = getZxcvbnLocale(locale)
  if (password === lastPassword && zxcvbnLocale === lastLocale) return lastScore

  const zxcvbn = await getZxcvbn(zxcvbnLocale)
  lastScore = zxcvbn.check(password).score
  lastPassword = password
  lastLocale = zxcvbnLocale

  return lastScore
}

// Scales zxcvbn's 0-4 score to a 0-100 range for the strength meter.
export const calculatePasswordStrength = async (
  password: string,
  locale: string,
): Promise<number> =>
  ((await getPasswordStrengthScore(password, locale)) /
    PASSWORD_STRENGTH_SCORE_MAXIMUM) *
  100
