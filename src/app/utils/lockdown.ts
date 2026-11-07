// Lockdown Mode has no detection API, so this infers it from globals WebKit removes in it:
// `WebGLEnabled` and `IndexedDBAPIEnabled` are `disableInLockdownMode` in WebKit's
// `UnifiedWebPreferences.yaml` and gate these interfaces via `EnabledBySetting`.
// Requiring both keeps a browser that merely lacks one from triggering.
export const getIsLockdownModeLikely = (globalObject: {
  indexedDB?: unknown
  navigator: { maxTouchPoints: number; platform: string; userAgent: string }
  WebGLRenderingContext?: unknown
}) => {
  const { navigator } = globalObject

  const isIos =
    /iPhone|iPad|iPod/.test(navigator.userAgent) ||
    // iPadOS reports itself as a Mac
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

  return (
    isIos &&
    typeof globalObject.indexedDB === 'undefined' &&
    typeof globalObject.WebGLRenderingContext === 'undefined'
  )
}
