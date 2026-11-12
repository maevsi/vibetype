import type { PwaModuleOptions } from '@vite-pwa/nuxt'

import deLocaleMessages from '../../i18n/locales/de.json'
import enLocaleMessages from '../../i18n/locales/en.json'
import { CACHE_VERSION, THEME_COLOR } from './index.ts'

// the `manifest` option of the pwa module, minus its `false` form which disables the manifest entirely
type PwaManifest = Exclude<NonNullable<PwaModuleOptions['manifest']>, false>

// the localized members of the web app manifest spec, which the pwa plugin does not type yet
// (https://github.com/maevsi/vibetype/issues/2577)
type PwaLocalizedManifest = PwaManifest & {
  description_localized?: Record<PwaManifestLocale, string>
  name_localized?: Record<PwaManifestLocale, string>
  short_name_localized?: Record<PwaManifestLocale, string>
}

const LOCALE_MESSAGES = {
  de: deLocaleMessages,
  en: enLocaleMessages,
} as const

type PwaManifestLocale = keyof typeof LOCALE_MESSAGES

// the manifest the plugin writes to the build for the default locale and the one the `de` server route serves,
// which share every identity-carrying member (the `id`, the `scope`, the icons, ...) so the browser keeps the
// installed app when it switches languages, differ in the language of their text members, and carry the localized
// members of the spec so the browsers that parse them display the app in the user's
// language regardless of the locale the app was installed from
export const getPwaManifest = ({
  locale,
}: {
  locale: PwaManifestLocale
}): PwaLocalizedManifest => {
  const messages = LOCALE_MESSAGES[locale].nuxtSiteConfig
  const localePath = (path: string) => (locale === 'de' ? `/de${path}` : path)

  return {
    background_color: THEME_COLOR,
    categories: ['events'],
    description: messages.description,
    description_localized: {
      de: deLocaleMessages.nuxtSiteConfig.description,
      en: enLocaleMessages.nuxtSiteConfig.description,
    },
    dir: 'ltr',
    display: 'standalone',
    display_override: ['window-controls-overlay', 'standalone', 'browser'],
    edge_side_panel: {
      preferred_width: 400,
    },
    file_handlers: [
      {
        action: localePath('/event/create'), // prefills the event form from the file
        accept: {
          'text/calendar': ['.ics'],
        },
      },
    ],
    handle_links: 'preferred',
    iarc_rating_id: '4bc30419-7452-4496-b02b-5feac10842dc',
    // https://vite-pwa-org.netlify.app/assets-generator/
    icons: [
      {
        sizes: '64x64',
        src: `/assets/static/favicon/pwa-64x64.png?v=${CACHE_VERSION}`,
        type: 'image/png',
      },
      {
        sizes: '192x192',
        src: `/assets/static/favicon/pwa-192x192.png?v=${CACHE_VERSION}`,
        type: 'image/png',
      },
      {
        purpose: 'any',
        sizes: '512x512',
        src: `/assets/static/favicon/pwa-512x512.png?v=${CACHE_VERSION}`,
        type: 'image/png',
      },
      {
        purpose: 'maskable',
        sizes: '512x512',
        src: `/assets/static/favicon/maskable-icon-512x512.png?v=${CACHE_VERSION}`,
        type: 'image/png',
      },
      {
        purpose: 'monochrome',
        sizes: '512x512',
        src: `/assets/static/favicon/monochrome-icon-512x512.png?v=${CACHE_VERSION}`,
        type: 'image/png',
      },
    ],
    id: 'bbe5f2d7-4968-4cff-a9e8-16622ada2135',
    lang: locale,
    launch_handler: {
      client_mode: ['auto'],
    },
    name: messages.name,
    name_localized: {
      de: deLocaleMessages.nuxtSiteConfig.name,
      en: enLocaleMessages.nuxtSiteConfig.name,
    },
    prefer_related_applications: false,
    protocol_handlers: [
      {
        protocol: 'web+vibetype',
        url: localePath('/open') + '?url=%s',
      },
    ],
    related_applications: [
      {
        platform: 'play',
        url: 'https://play.google.com/store/apps/details?id=si.maev.twa',
        id: 'si.maev.twa',
      },
    ],
    scope: '/',
    screenshots: [
      {
        src: '/assets/static/screenshots/narrow/root.png',
        sizes: '432x768',
        type: 'image/png',
        form_factor: 'narrow',
        label: messages.pwa.screenshotLabelRoot,
      },
      {
        src: '/assets/static/screenshots/narrow/events.png',
        sizes: '432x768',
        type: 'image/png',
        form_factor: 'narrow',
        label: messages.pwa.screenshotLabelEvents,
      },
      {
        src: '/assets/static/screenshots/wide/root.png',
        sizes: '1920x1080',
        type: 'image/png',
        form_factor: 'wide',
        label: messages.pwa.screenshotLabelRoot,
      },
      {
        src: '/assets/static/screenshots/wide/events.png',
        sizes: '1920x1080',
        type: 'image/png',
        form_factor: 'wide',
        label: messages.pwa.screenshotLabelEvents,
      },
    ],
    short_name: messages.name,
    short_name_localized: {
      de: deLocaleMessages.nuxtSiteConfig.name,
      en: enLocaleMessages.nuxtSiteConfig.name,
    },
    // orientation: ..., // No need to restrict the system's orientation setting
    shortcuts: [
      {
        description: messages.pwa.shortcutDescription,
        name: messages.pwa.shortcutName,
        short_name: messages.pwa.shortcutShortName,
        url: localePath('/event'),
      },
    ],
    // the installed app opens in the locale it was installed in, and the detection of the root route then keeps it there
    start_url: `${locale === 'de' ? '/de' : '/'}?source=pwa`,
    scope_extensions: [
      { origin: 'https://maev.si', type: 'origin' },
      { origin: 'https://vibetype.app', type: 'origin' },
    ],
    // share_target: {
    //   action: '/collect-files',
    //   method: 'POST',
    //   enctype: 'multipart/form-data',
    //   params: {
    //     title: 'title',
    //     text: 'text',
    //     url: 'url',
    //     files: [
    //       {
    //         name: 'lists',
    //         accept: ['text/csv', '.csv'],
    //       },
    //     ],
    //   },
    // },
    theme_color: THEME_COLOR,
    // widgets: [
    //   {
    //     name: 'PWAmp mini player',
    //     description: 'widget to control the PWAmp music player',
    //     tag: 'pwamp',
    //     template: 'pwamp-template',
    //     ms_ac_template: 'widgets/mini-player-template.json',
    //     data: 'widgets/mini-player-data.json',
    //     type: 'application/json',
    //     screenshots: [
    //       {
    //         src: './screenshot-widget.png',
    //         sizes: '600x400',
    //         label: 'The PWAmp mini-player widget',
    //       },
    //     ],
    //     icons: [
    //       {
    //         src: './favicon-16.png',
    //         sizes: '16x16',
    //       },
    //     ],
    //     auth: false,
    //     update: 86400,
    //   },
    // ],
  }
}
