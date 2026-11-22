declare global {
  interface Window {
    [key: `ga-disable-${string}`]: boolean | undefined
  }
}

export {}
