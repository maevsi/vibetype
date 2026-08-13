import { ZxcvbnFactory } from '@zxcvbn-ts/core'
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import * as zxcvbnDePackage from '@zxcvbn-ts/language-de'
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en'

// Score 3 ("safely unguessable") is zxcvbn's own threshold for resisting an
// offline, slow-hash attack; see https://github.com/zxcvbn-ts/zxcvbn
export const PASSWORD_STRENGTH_SCORE_MINIMUM = 3
const PASSWORD_STRENGTH_SCORE_MAXIMUM = 4

const zxcvbn = new ZxcvbnFactory({
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnDePackage.dictionary,
    ...zxcvbnEnPackage.dictionary,
  },
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
  translations: zxcvbnEnPackage.translations,
})

export const getPasswordStrengthScore = (password: string): number =>
  password ? zxcvbn.check(password).score : 0

// Scales zxcvbn's 0-4 score to a 0-100 range for the strength meter.
export const calculatePasswordStrength = (password: string): number =>
  (getPasswordStrengthScore(password) / PASSWORD_STRENGTH_SCORE_MAXIMUM) * 100
