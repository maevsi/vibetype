import type { DefineNuxtConfig } from 'nuxt/config'

import { CACHE_VERSION, THEME_COLOR } from '../../shared/utils/constants'

export const pwaConfig: ReturnType<DefineNuxtConfig> = {
  pwa: {
    devOptions: {
      enabled: true,
      type: 'module', // must be developed in Chrome
    },
    client: {
      periodicSyncForUpdates: 3600,
      installPrompt: true,
    },
    filename: 'sw.ts',
    manifest: {
      background_color: THEME_COLOR,
      categories: ['events'],
      description: 'Find events, guests and friends 💙❤️💚',
      dir: 'ltr',
      display: 'standalone',
      display_override: ['window-controls-overlay', 'standalone', 'browser'],
      edge_side_panel: {
        preferred_width: 400,
      },
      file_handlers: [
        // {
        //   action: '/open-ics',
        //   accept: {
        //     'text/calendar': ['.ics'],
        //   },
        //   icons: [
        //     {
        //       src: 'ics-icon.png',
        //       sizes: '256x256',
        //       type: 'image/png',
        //     },
        //   ],
        //   launch_type: 'single-client',
        // },
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
      lang: 'en',
      launch_handler: {
        client_mode: ['auto'],
      },
      name: 'Vibetype',
      short_name: 'Vibetype',
      // orientation: ..., // Disabled to respect system's rotation setting
      scope: '/',
      screenshots: [
        {
          src: '/assets/static/screenshots/narrow/root.png',
          sizes: '432x768',
          type: 'image/png',
          form_factor: 'narrow',
          label: 'root',
        },
        {
          src: '/assets/static/screenshots/narrow/events.png',
          sizes: '432x768',
          type: 'image/png',
          form_factor: 'narrow',
          label: 'events',
        },
        {
          src: '/assets/static/screenshots/wide/root.png',
          sizes: '1920x1080',
          type: 'image/png',
          form_factor: 'wide',
          label: 'root',
        },
        {
          src: '/assets/static/screenshots/wide/events.png',
          sizes: '1920x1080',
          type: 'image/png',
          form_factor: 'wide',
          label: 'events',
        },
      ],
      start_url: '/?source=pwa',
      prefer_related_applications: false,
      protocol_handlers: [
        // {
        //   protocol: `web+${SITE_NAME}`,
        //   url: '/events/%s',
        // },
      ],
      related_applications: [
        {
          platform: 'play',
          url: 'https://play.google.com/store/apps/details?id=si.maev.twa',
          id: 'si.maev.twa',
        },
      ],
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
      shortcuts: [
        {
          description: 'See a list of events.',
          short_name: 'Events',
          name: 'Explore events',
          url: '/event',
        },
      ],
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
    },
    srcDir: 'service-worker',
    strategies: 'injectManifest',
  },
}
