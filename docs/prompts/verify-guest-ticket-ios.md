# Verify the PDF ticket on iOS

Use this prompt to start an agent on a Mac with Xcode to prove that https://github.com/maevsi/vibetype/issues/2481 is fixed in the iOS app.
The agent must report evidence, not opinions: every claim in the report needs a screenshot, a file, or command output behind it.

## Background

The iOS app (maevsi/ios) wraps vibetype in a `WKWebView`, where `window.print` does nothing.
The guest page `/guest/view/<guest id>` has a "Show check in code" button for accepted invitations, which opens a modal with a QR code.
When the modal opens, the page fetches a one page A5 PDF ticket from `/api/model/guest/ticket`.
Inside the iOS app, the modal must show "Share ticket" and no "Download ticket".
"Share ticket" opens the system share sheet with the PDF, which offers "Print" and "Save to Files".
The ticket shows the event name, date, location, organizer, guest name, a QR code, the guest id as text, and a hint.

## Inputs

Ask the human for whichever of these is missing before starting:

- `GUEST_URL`: the full URL of a guest page whose invitation the agent may accept, e.g. `https://vibetype.app/guest/view/<uuid>`

The app loads `rootUrl` from `vibetype/Settings.swift` in maevsi/ios, which is `https://vibetype.app`, so the vibetype fix must already be deployed there.
If the modal shows no "Share ticket" inside the app, stop and report that the deployment lacks the fix.

## Setup

1. Clone maevsi/ios and boot a simulator with a recent iOS version, e.g. `xcrun simctl boot "iPhone 16"`.
1. Build and install the app with `xcodebuild -scheme vibetype -destination 'platform=iOS Simulator,name=iPhone 16' -derivedDataPath build build` and `xcrun simctl install booted build/Build/Products/Debug-iphonesimulator/vibetype.app`.
1. Launch it with `xcrun simctl launch --console-pty booted si.maev.twa` and keep the console output for the report.
1. Drive the UI with whatever automation is available, such as XCUITest, `idb`, or direct screen control, and open `GUEST_URL` with `xcrun simctl openurl booted "$GUEST_URL"`.
   If no way to tap inside the simulator is available, stop and report that instead of guessing outcomes.

## Steps

Take a screenshot with `xcrun simctl io booted screenshot <name>.png` after every step and keep it for the report.

1. Accept the invitation on `GUEST_URL` if it is not accepted yet.
1. Tap "Show check in code" and confirm the modal shows a QR code with a white border, a "Share ticket" button that becomes enabled, a "Close" button, and no "Download ticket" button.
1. Tap "Share ticket" and confirm the share sheet opens with a PDF preview and lists "Print" and "Save to Files".
1. Tap "Print" and confirm the print options show a preview of the ticket, then cancel.
1. Tap "Share ticket" again, choose "Save to Files", and save the PDF to "On My iPhone".
1. Confirm the app is still running with `xcrun simctl spawn booted launchctl list | grep si.maev.twa` and that the console shows no crash.
1. Copy the saved PDF out of the simulator, found with `find "$(xcrun simctl get_app_container booted com.apple.DocumentsApp data)" -name '*.pdf'` or under `~/Library/Developer/CoreSimulator/Devices/<udid>/data`, and confirm with `pdfinfo` that it has one page of 420 x 595 pt.
1. Render it with `pdftoppm -png -r 150`, confirm the page shows every detail listed above in the Raleway font, and decode the QR code with `zbarimg` or an equivalent decoder to confirm it yields the guest id.
1. Cancel a share sheet without choosing a target and confirm no error toast appears.

## Pass criteria

- The modal shows "Share ticket" and no "Download ticket".
- The share sheet offers "Print" and "Save to Files", and the print preview shows the ticket.
- Saving to Files works and the app keeps running.
- The saved PDF is one A5 page that shows every detail listed above in Raleway, and its QR code decodes to the guest id.
- Cancelling the share sheet shows no error.

## Report

Reply with a table of the pass criteria, each marked pass or fail with the evidence file name next to it.
Attach the screenshots, the saved PDF, the rendered page, and the console log.
Mention the Xcode version, the simulator model and iOS version, and the maevsi/ios commit built.
If any step could not run, say which and why instead of guessing its outcome.
