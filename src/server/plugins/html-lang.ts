// i18n sets `lang` only while rendering a page, which client only routes like the `/offline` shell skip
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    if (html.htmlAttrs.some((attributes) => /\blang=/.test(attributes))) return

    html.htmlAttrs.push(
      `lang="${useRuntimeConfig().public.i18n.defaultLocale}"`,
    )
  })
})
