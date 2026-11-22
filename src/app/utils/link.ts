// links in `v-html` content bypass `AppLink`, so clicks on them are routed here:
// same-origin links navigate client-side instead of reloading the document, which would drop the Android app's platform header,
// and links leaving the site get the confirmation modal; other schemes like `mailto:` keep their native behavior
export const getLinkNavigation = (href: string, origin: string) => {
  const url = new URL(href, origin)

  if (url.origin === origin)
    return { path: `${url.pathname}${url.search}${url.hash}` }

  if (/^(ftp|https?):$/.test(url.protocol)) return { url: url.href }
}
