# Verify sharing and printing the check in code on Android

Use this prompt to start an agent on a machine with the Android SDK (`adb`, `emulator`) to prove that https://github.com/maevsi/vibetype/issues/2481 is fixed on Android.
The agent must report evidence, not opinions: every claim in the report needs a screenshot, a pulled file, or command output behind it.

## Background

The Android app (maevsi/android) is a Trusted Web Activity, so it renders vibetype in the device's Chrome and sends the request header `vibetype_platform: android`.
The guest page `/guest/view/<guest id>` has a "Show check in code" button for accepted invitations, which opens a modal with a QR code.
In that modal, Android must show both a "Print" and a "Share" button.
"Print" opens Chrome's print dialog with only the QR code on the page.
"Share" opens the system share sheet with a PNG of the QR code that has a white border around it.

## Inputs

Ask the human for whichever of these is missing before starting:

- `MODE`: `app` to test the installed Android app against a deployment that contains the fix, or `dev` to test a local checkout of the pull request before it is merged
- `GUEST_URL`: the full URL of a guest page whose invitation the agent may accept, e.g. `https://vibetype.app/guest/view/<uuid>` (for `dev`, the same path on `https://localhost:3000`)

## Setup

1. Boot an emulator with Google Play services (API 34 or newer) or connect a device, and confirm it with `adb devices`.
1. For `MODE=app`, install the Android app from Google Play or build it from maevsi/android with `./gradlew installDebug`, then open `GUEST_URL` in the app through `adb shell am start -a android.intent.action.VIEW -d "$GUEST_URL" si.maev.twa`.
1. For `MODE=dev`, follow the vibetype README to run `pnpm dev` with the backend stack, then run `adb reverse tcp:3000 tcp:3000` so the device reaches `https://localhost:3000`.
1. For `MODE=dev`, open Chrome on the device, run `adb forward tcp:9222 localabstract:chrome_devtools_remote`, and drive Chrome through the DevTools protocol on `localhost:9222`.
   Call `Security.setIgnoreCertificateErrors` with `ignore: true` for the development certificate, and set the cookie `vibetype_platform=android` for `localhost` before loading `GUEST_URL`, so the server renders the page as the Android app would.

## Steps

Take a screenshot with `adb exec-out screencap -p > <name>.png` after every step and keep it for the report.

1. Load `GUEST_URL` and accept the invitation if it is not accepted yet.
1. Tap "Show check in code" and confirm the modal shows a QR code with a white border, a "Print" button, a "Share" button, and a "Close" button.
1. Tap "Share" and confirm the system share sheet opens with an image preview.
1. Save the image through the share sheet, e.g. with "Files" or a similar target, then find it with `adb shell find /sdcard -name '*.png' -newer /sdcard/Android -mmin -5` and pull it with `adb pull`.
1. Decode the pulled PNG with `zbarimg` or an equivalent QR decoder and confirm it yields the guest id from `GUEST_URL`.
1. Back in the modal, tap "Print", choose "Save as PDF", save the file, pull it with `adb pull`, and render it with `pdftoppm -png`.
1. Confirm the rendered PDF shows the QR code and nothing else from the page, and that decoding it also yields the guest id.
1. Cancel a share sheet without choosing a target and confirm no error toast appears.

## Pass criteria

- The modal shows both "Print" and "Share".
- The shared PNG decodes to the guest id and has a visible white border.
- The printed PDF contains only the QR code, and it decodes to the guest id.
- Cancelling the share sheet shows no error.

## Report

Reply with a table of the pass criteria, each marked pass or fail with the evidence file name next to it.
Attach the screenshots, the pulled PNG, and the rendered PDF page.
Mention the emulator image or device model, the Android version, the Chrome version (`adb shell dumpsys package com.android.chrome | grep versionName`), and the `MODE`.
If any step could not run, say which and why instead of guessing its outcome.
