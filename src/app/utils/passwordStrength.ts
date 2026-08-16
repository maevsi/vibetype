import type { ZxcvbnFactory as ZxcvbnFactoryType } from '@zxcvbn-ts/core'

// This configuration must match postgraphile's src/presets/passwordStrength.ts; see the
// shared contract at stack:docs/password-strength.md.
// TODO: consider extracting this into a shared @maevsi package instead of duplicating it.
// Score 3 ("safely unguessable") is zxcvbn's own threshold for resisting an
// offline, slow-hash attack; see https://github.com/zxcvbn-ts/zxcvbn
export const PASSWORD_STRENGTH_SCORE_MINIMUM = 3
const PASSWORD_STRENGTH_SCORE_MAXIMUM = 4

// zxcvbn's dictionaries are multiple MB uncompressed; importing them eagerly would put that
// weight in the bundle of every route, including ones that never touch a password field. This
// loads them only once the first password actually needs scoring, and only once overall.
let zxcvbnPromise: Promise<InstanceType<typeof ZxcvbnFactoryType>> | undefined

const getZxcvbn = () => {
  zxcvbnPromise ??= (async () => {
    const [
      { ZxcvbnFactory },
      zxcvbnCommonPackage,
      zxcvbnDePackage,
      zxcvbnEnPackage,
    ] = await Promise.all([
      import('@zxcvbn-ts/core'),
      import('@zxcvbn-ts/language-common'),
      import('@zxcvbn-ts/language-de'),
      import('@zxcvbn-ts/language-en'),
    ])

    return new ZxcvbnFactory({
      dictionary: {
        ...zxcvbnCommonPackage.dictionary,
        ...zxcvbnDePackage.dictionary,
        ...zxcvbnEnPackage.dictionary,
      },
      graphs: zxcvbnCommonPackage.adjacencyGraphs,
      translations: zxcvbnEnPackage.translations,
    })
  })()

  return zxcvbnPromise
}

// The strength meter and the field validator both score the same in-flight password value on
// every keystroke; caching the latest result avoids running zxcvbn's check twice per input.
let lastPassword: string | undefined
let lastScore = 0

export const getPasswordStrengthScore = async (
  password: string,
): Promise<number> => {
  if (!password) return 0
  if (password === lastPassword) return lastScore

  const zxcvbn = await getZxcvbn()
  lastScore = zxcvbn.check(password).score
  lastPassword = password

  return lastScore
}

// Scales zxcvbn's 0-4 score to a 0-100 range for the strength meter.
export const calculatePasswordStrength = async (
  password: string,
): Promise<number> =>
  ((await getPasswordStrengthScore(password)) /
    PASSWORD_STRENGTH_SCORE_MAXIMUM) *
  100
