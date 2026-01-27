export const useAppLayout = () => {
  const colorMode = useColorMode()
  const siteConfig = useSiteConfig()
  const { isApp } = usePlatform()

  if (import.meta.server) {
    // app
    if (isApp) {
      useHeadSafe({
        meta: [
          {
            content:
              'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
            name: 'viewport',
          },
        ],
      })
    }

    // style
    useHeadSafe({
      bodyAttrs: {
        class:
          'bg-(--semantic-base-background) text-(--semantic-base-text-primary) max-lg:select-none',
      },
    })

    // favicon (https://vite-pwa-org.netlify.app/assets-generator/)
    useHeadSafe({
      link: [
        {
          href: `/favicon.ico?v=${CACHE_VERSION}`,
          rel: 'icon',
          sizes: '48x48',
        },
        {
          href: `/assets/static/favicon/favicon.svg?v=${CACHE_VERSION}`,
          rel: 'icon',
          sizes: 'any',
          type: 'image/svg+xml',
        },
        {
          href: `/assets/static/favicon/apple-touch-icon-180x180.png?v=${CACHE_VERSION}`,
          rel: 'apple-touch-icon',
        },
      ],
    })

    // seo
    useSeoMeta({
      twitterSite: SEO_META_TWITTER_SITE,
    })
  }

  if (import.meta.client) {
    // theme
    const updateThemeColor = () => {
      useSeoMeta({
        themeColor: colorMode.value === 'dark' ? THEME_COLOR_DARK : THEME_COLOR,
      })
    }
    updateThemeColor()
    watch(() => colorMode.value, updateThemeColor)
  }

  // seo
  useSeoMeta({
    titleTemplate: (title) =>
      TITLE_TEMPLATE({
        siteName: siteConfig.name,
        title,
      }),
  })
}

export const useHeadDefault = (input: Parameters<typeof useSeoMeta>[0]) => {
  const siteConfig = useSiteConfig()

  const description =
    toValue(input.description) || (siteConfig.description as string)
  const title = TITLE_TEMPLATE({
    siteName: siteConfig.name,
    title: toValue(input.title)?.toString() || undefined,
  })

  useSeoMeta({
    ...(description
      ? {
          description,
          ogDescription: description,
          twitterDescription: description,
        }
      : {}),
    ...(title ? { title, ogTitle: title, twitterTitle: title } : {}),
    ...input,
  })
}

const POLYFILLS_URL = `https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?features=${POLYFILLS.join(
  '%2C',
)}&flags=gated`

export const usePolyfills = () => {
  if (!POLYFILLS.length) return

  if (import.meta.server) {
    useHead({
      link: [
        {
          rel: 'preload',
          href: POLYFILLS_URL,
          crossorigin: 'anonymous',
          as: 'script',
          'data-testid': 'polyfill-preload',
        },
      ],
      script: [
        {
          src: POLYFILLS_URL,
          crossorigin: 'anonymous',
          'data-testid': 'polyfill-script',
        },
      ],
    })
  }
}
