# Verify the PDF ticket on Android

Use this prompt to start an agent on a machine with the Android SDK (`adb`, `emulator`) to prove that https://github.com/maevsi/vibetype/issues/2481 is fixed on Android.
The agent must report evidence, not opinions: every claim in the report needs a screenshot, a pulled file, or command output behind it.

## Background

The Android app (maevsi/android) is a Trusted Web Activity, so it renders vibetype in the device's Chrome and sends the request header `vibetype_platform: android`.
The guest page `/guest/view/<guest id>` has a "Show check in code" button for accepted invitations, which opens a modal with a QR code.
When the modal opens, the page fetches a one page A5 PDF ticket from `/api/model/guest/ticket`.
On Android, the modal must show a "Share ticket" and a "Download ticket" button.
"Share ticket" opens the system share sheet with the PDF.
"Download ticket" saves the PDF, which can then be opened and printed, since Android's share sheet usually lacks a print target.
The ticket shows the event name, date, location, organizer, guest name, a QR code, the guest id as text, and a hint.

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
1. Tap "Show check in code" and confirm the modal shows a QR code with a white border, a "Share ticket" button, a "Download ticket" button, and a "Close" button, and that both ticket buttons become enabled.
1. Tap "Download ticket", find the PDF with `adb shell find /sdcard/Download -name '*.pdf' -mmin -5`, and pull it with `adb pull`.
1. Confirm with `pdfinfo` that the PDF has one page of 420 x 595 pt, then render it with `pdftoppm -png -r 150`.
1. Confirm the rendered page shows the event name, date, location, organizer, guest name, QR code, guest id, and hint, all in the Raleway font and without missing glyphs.
1. Decode the rendered page with `zbarimg` or an equivalent QR decoder and confirm it yields the guest id from `GUEST_URL`.
1. Open the downloaded PDF on the device, print it through the viewer's "Print" option with "Save as PDF", pull that file, and confirm it shows the same ticket.
1. Back in the modal, tap "Share ticket" and confirm the share sheet opens with the PDF attached.
1. Cancel the share sheet without choosing a target and confirm no error toast appears.

## Pass criteria

- The modal shows "Share ticket" and "Download ticket", and both become enabled.
- The downloaded PDF is one A5 page that shows every detail listed above in Raleway.
- The QR code in the PDF decodes to the guest id.
- The downloaded PDF can be printed on the device.
- The share sheet receives the PDF, and cancelling it shows no error.

## Report

Reply with a table of the pass criteria, each marked pass or fail with the evidence file name next to it.
Attach the screenshots, the pulled PDFs, and the rendered pages.
Mention the emulator image or device model, the Android version, the Chrome version (`adb shell dumpsys package com.android.chrome | grep versionName`), and the `MODE`.
If any step could not run, say which and why instead of guessing its outcome.
