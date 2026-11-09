# Lockdown Mode verification prompt

This file is a prompt for an agent running on a Mac with Xcode, an iOS Simulator, and ideally a physical iPhone or iPad.
It lists what the Lockdown Mode dialog on the `feat/app/lockdown-dialog` branch assumes but could not verify without Apple hardware.
Remove this file before merging once the findings are recorded on the pull request.

## Prompt

You are verifying the Lockdown Mode detection and dialog of the vibetype web app (`maevsi/vibetype`, branch `feat/app/lockdown-dialog`) and its iOS wrapper (`maevsi/ios`, `vibetype.xcodeproj`).
Do not push, open pull requests, or comment anywhere; report your findings back as text.
Lockdown Mode needs a device restart to toggle, so batch the checks per state instead of toggling back and forth.

### Setup

1. Clone both repositories and check out `feat/app/lockdown-dialog` in `vibetype`.
2. Find out whether the iOS Simulator offers Lockdown Mode under Settings › Privacy & Security, and whether turning it on there changes WebKit's behavior.
   If it does not, say so and use a physical device for every check below.
3. Use Safari Web Inspector (Develop menu on the Mac) to evaluate JavaScript in Safari and in the wrapper's web view; the wrapper sets `isInspectable` on iOS 16.4 and later.
4. The wrapper loads `https://vibetype.app` (`rootUrl` in `vibetype/Settings.swift`, restricted by `WKAppBoundDomains` in `Info.plist`), which does not run the branch yet.
   For the dialog checks, serve the branch (`pnpm install` and `pnpm dev` in `vibetype`) and point `rootUrl`, `allowedOrigins`, and `WKAppBoundDomains` at it locally, without committing that change.

### 1. Detection signals

The branch infers Lockdown Mode in `src/app/utils/lockdown.ts`: the device is iOS by user agent, or reports `MacIntel` with more than one touch point, and both `indexedDB` and `WebGLRenderingContext` are undefined.
The signals come from WebKit's `UnifiedWebPreferences.yaml`, where `IndexedDBAPIEnabled` and `WebGLEnabled` are marked `disableInLockdownMode`.

Evaluate this expression in each of the states below, in Safari on vibetype.app and in the wrapper app:

```js
JSON.stringify({
  indexedDB: typeof indexedDB,
  maxTouchPoints: navigator.maxTouchPoints,
  platform: navigator.platform,
  rtcPeerConnection: typeof RTCPeerConnection,
  serviceWorker: 'serviceWorker' in navigator,
  userAgent: navigator.userAgent,
  webAssembly: typeof WebAssembly,
  webGl: typeof WebGLRenderingContext,
})
```

States:

- Lockdown Mode off.
- Lockdown Mode on.
- Lockdown Mode on, with vibetype.app excluded in Safari (page menu › Website Settings) and the app excluded under Settings › Privacy & Security › Lockdown Mode › Configure Web Browsing.

Answer:

- Are `indexedDB` and `webGl` both `undefined` with Lockdown Mode on, and both defined when it is off or the site or app is excluded?
- Is `webAssembly` defined with Lockdown Mode on?
  It was left out of the check because current WebKit may still run WebAssembly without the JIT.
- On an iPad, does `platform` read `MacIntel` with `maxTouchPoints` above 1?
- Use the lowest iOS version the app supports (18.5, per `src/app/supportedBrowsers.js`) and the newest one you have.

### 2. Native Lockdown Mode signal

The iOS wrapper was left unchanged because Apple's documentation for `WKWebpagePreferences.isLockdownModeEnabled` does not say whether it reflects the user excluding the app.
Add a temporary log in `createWebView` in `vibetype/WebView.swift`, for example `print(config.defaultWebpagePreferences.isLockdownModeEnabled)`, also read `webView.configuration.defaultWebpagePreferences.isLockdownModeEnabled` after the first navigation finishes, and record both values in the three states above.

Answer:

- Is the value `false` while Lockdown Mode is on and the app is excluded?
- Based on that, should the wrapper pass this value to the page as a definitive signal that the web app prefers over its heuristic?

### 3. Dialog behavior

With the branch served and Lockdown Mode on, check in Safari and in the wrapper app:

- The dialog appears on load.
- The dialog closes with its OK button, with the overlay, and with the Escape key on an iPad keyboard.
- After closing, the `vibetype_lockdown-mode-dismissed` cookie exists, and the dialog stays hidden after a reload, after force-quitting the app, and after a device restart.
- With Lockdown Mode off, or the site or app excluded, the dialog never appears.

### 4. Copy

Switch the device to German and English and compare the dialog's instructions in `src/app/app.vue` with the labels iOS actually shows.

Answer:

- Is the German path "Datenschutz & Sicherheit › Blockierungsmodus › Web-Browsing konfigurieren" correct, and is the feature called "Blockierungsmodus"?
- Is the English path "Privacy & Security › Lockdown Mode › Configure Web Browsing" correct?
- In Safari, where exactly is the per-site Lockdown Mode switch, and what is the page menu called in each language?

### 5. What actually breaks

With Lockdown Mode on and no exclusion, note which vibetype features fail, so the dialog's example ("storing data on your device") can be checked against reality:

- Signing in, and staying signed in after a reload.
- The QR code scanner on an event's attendance page, which uses `zxing-wasm`.
- The map on an event page.
- Push notifications in the Safari web app and in the wrapper app.

### Report

Reply with one table per section, listing the iOS version, the device or Simulator, the state, and the observed values.
End with a list of what in the branch should change, citing the observation behind each item.
