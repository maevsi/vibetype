// https://wicg.github.io/web-app-launch/#launchqueue-interface, not part of TypeScript's DOM types yet
declare global {
  interface LaunchParams {
    readonly files: readonly FileSystemFileHandle[]
    readonly targetURL?: string
  }

  interface Window {
    launchQueue?: {
      setConsumer: (consumer: (params: LaunchParams) => unknown) => void
    }
  }
}

export {}
