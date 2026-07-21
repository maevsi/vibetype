import { exec } from 'node:child_process'
import { promisify } from 'node:util'

const execPromise = promisify(exec)

export const RELEASE_NAME = async () => {
  if (process.env.RELEASE_NAME) return process.env.RELEASE_NAME
  try {
    return (await execPromise('git describe --tags')).stdout.trim()
  } catch (error) {
    console.error(
      'RELEASE_NAME not set and `git describe --tags` failed:',
      error,
    )
    return 'unknown'
  }
}
