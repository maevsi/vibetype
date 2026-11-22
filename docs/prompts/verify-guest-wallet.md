# Verify the wallet passes

Use this prompt to start an agent with an iPhone or iOS simulator and an Android phone or emulator to prove that https://github.com/maevsi/vibetype/issues/2541 works.
The agent must report evidence, not opinions: every claim in the report needs a screenshot, a file, or command output behind it.

## Background

The guest page `/guest/view/<guest id>` has a "Show check in code" button for accepted invitations, which opens a modal with a QR code.
The modal shows the official "Add to Apple Wallet" badge on iOS and macOS, and the official "Add to Google Wallet" badge on every other system, but only for the wallets the server holds credentials for, as `/api/model/guest/wallet` reports.
The Apple badge links to `/api/model/guest/wallet/apple?guestId=<guest id>`, which returns a signed `.pkpass`.
Safari opens Wallet's add sheet on that navigation, whereas the iOS app (maevsi/ios) wraps vibetype in a `WKWebView` that downloads the link and shows it in a QuickLook preview, which is expected to offer "Add".
The Google badge links to `/api/model/guest/wallet/google?guestId=<guest id>`, which redirects to a signed `https://pay.google.com/gp/v/save/` link.
The Android app (maevsi/android) is a Trusted Web Activity, so it behaves like Chrome.
Both passes show the event name, start date and time, location, organizer and guest name, and a QR code that holds the guest id.

## Inputs

Ask the human for whichever of these is missing before starting:

- `GUEST_URL`: the full URL of a guest page whose invitation the agent may accept, e.g. `https://vibetype.app/guest/view/<uuid>`
- an Apple ID signed in on the iPhone or simulator, and a Google account with Google Wallet on the Android device

The deployment behind `GUEST_URL` must hold both wallets' credentials.
If `GUEST_URL`'s origin followed by `/api/model/guest/wallet` does not return `{"apple":true,"google":true}`, stop and report which wallet is unconfigured.

## Steps

Take a screenshot after every step and keep it for the report.

1. Accept the invitation on `GUEST_URL` if it is not accepted yet.
1. In iOS Safari, tap "Show check in code", confirm the modal shows the "Add to Apple Wallet" badge in the device's language and no Google badge, tap it, and confirm Wallet's add sheet shows the pass with every detail listed above.
1. Add the pass, open it in Wallet, and decode its QR code from a screenshot with `zbarimg` or an equivalent decoder to confirm it yields the guest id.
1. In the iOS app, open `GUEST_URL`, tap the badge, and confirm whether the preview offers "Add"; if it does not, report what it shows instead, as the app then needs native handling with `PKAddPassesViewController`.
1. On Android, both in Chrome and in the app, tap "Show check in code", confirm the modal shows the "Add to Google Wallet" badge and no Apple badge, tap it, and confirm Google Wallet's save page shows the pass with every detail listed above.
1. Save the pass, open it in Google Wallet, and decode its QR code to confirm it yields the guest id.
1. Open `/api/model/guest/wallet/apple?guestId=<guest id>` in a private browser window without the guest's cookies and confirm it answers 404 or 403 instead of a pass.

## Pass criteria

- Each platform shows only its own wallet's badge, in the page's language.
- Apple Wallet and Google Wallet both add the pass with every detail listed above.
- Both QR codes decode to the guest id.
- The iOS app either adds the pass or its behavior is reported precisely.
- A request without the guest's cookies gets no pass.

## Report

Reply with a table of the pass criteria, each marked pass or fail with the evidence file name next to it.
Attach the screenshots and the decoder output.
Mention the device models, operating system versions, and the app commits used.
If any step could not run, say which and why instead of guessing its outcome.
