import { defu } from 'defu'

export const useAppLayout = () => {
  const colorMode = useColorMode()
  const siteConfig = useSiteConfig()

  if (import.meta.server) {
    // style
    useHeadSafe({
      bodyAttrs: {
        class:
          'bg-(--semantic-base-background) text-(--semantic-base-text-primary)',
      },
    })

    // favicon (https://vite-pwa-org.netlify.app/assets-generator/)
    useServerHeadSafe({
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

    // i18n
    useHeadSafe(useLocaleHead().value)

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

export const useHeadDefault = ({
  extension,
  title,
}: {
  extension?: Parameters<typeof useServerSeoMeta>[0]
  title: string | ComputedRef<string>
}) => {
  const siteConfig = useSiteConfig()
  const { t } = useI18n()

  const defaults: Parameters<typeof useServerSeoMeta>[0] = {
    description: t('globalSeoSiteDescription'), // TODO: remove (https://github.com/harlan-zw/nuxt-site-config/issues/11)
    title,
    twitterDescription: t('globalSeoSiteDescription'),
    twitterTitle: ref(
      TITLE_TEMPLATE({
        siteName: siteConfig.name,
        title: toValue(title),
      }),
    ), // TODO: remove `ref`
  }

  useSeoMeta(defu(extension, defaults)) // TODO: use `useServerSeoMeta`
}

export const usePolyfills = () => {
  if (!POLYFILLS.length) return

  const polyfillsUrl = `https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?features=${POLYFILLS.join(
    '%2C',
  )}&flags=gated`

  useServerHead({
    link: [
      {
        rel: 'preload',
        href: polyfillsUrl,
        crossorigin: 'anonymous',
        as: 'script',
        'data-testid': 'polyfill-preload',
      },
    ],
    script: [
      {
        src: polyfillsUrl,
        crossorigin: 'anonymous',
        'data-testid': 'polyfill-script',
      },
    ],
  })
}
