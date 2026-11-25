import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import {
  awaitWithPendingState,
  PENDING_DELAY_MILLISECONDS,
  PENDING_MINIMUM_MILLISECONDS,
} from '#src/app/utils/pending'

const settleAfter = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))

describe('awaitWithPendingState', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  test('reports nothing for a promise that settles within the delay', async () => {
    const states: boolean[] = []
    const done = awaitWithPendingState(
      settleAfter(PENDING_DELAY_MILLISECONDS - 1),
      (isPending) => states.push(isPending),
    )

    await vi.runAllTimersAsync()
    await done

    expect(states).toEqual([])
  })

  test('keeps a shown state for the minimum', async () => {
    const states: boolean[] = []
    const done = awaitWithPendingState(
      settleAfter(PENDING_DELAY_MILLISECONDS + 1),
      (isPending) => states.push(isPending),
    )

    await vi.advanceTimersByTimeAsync(PENDING_DELAY_MILLISECONDS)
    expect(states).toEqual([true])

    await vi.advanceTimersByTimeAsync(PENDING_MINIMUM_MILLISECONDS - 1)
    expect(states).toEqual([true])

    await vi.advanceTimersByTimeAsync(1)
    await done
    expect(states).toEqual([true, false])
  })

  test('resets the state and rethrows when the promise rejects', async () => {
    const states: boolean[] = []
    const done = awaitWithPendingState(
      settleAfter(PENDING_DELAY_MILLISECONDS + 1).then(() => {
        throw new Error('failure')
      }),
      (isPending) => states.push(isPending),
    )
    const assertion = expect(done).rejects.toThrow('failure')

    await vi.runAllTimersAsync()
    await assertion
    expect(states).toEqual([true, false])
  })
})
