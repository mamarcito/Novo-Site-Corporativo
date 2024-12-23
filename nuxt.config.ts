// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "BCS",
      meta: [
        { charset: "utf-8" },
        { name: "author", content: "Digital Factory, Dorivaldo Valentim, Hernany Simão" },
        { name: "keyword", content: "BCS" },
        { name: "description", content: "BCS" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'og:title', property: 'og:title', content: 'BCS' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'BCS' },
        { property: 'og:description', content: 'BCS' },
        { hid: 'og:url', property: 'og:url', content: './' },
        { hid: 'og:image', property: 'og:image', content: `./favicon.ico` },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: `./favicon.ico` },
        { property: 'og:locale', content: 'pt_AO' }
      ],
      link: [
        { rel: "icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "https://cdn.datatables.net/2.0.3/css/dataTables.dataTables.css" },
        { rel: "stylesheet", href: "https://cdn.datatables.net/buttons/3.0.1/css/buttons.dataTables.css" }
      ],
      script: [
        {
          type: "text/javascript",
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        },
        {
          type: "text/javascript",
          src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js"
        },
        {
          type: "text/javascript",
          src:"https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js"
        }
      ]
    },
  },
  css: [
    '~/assets/sass/main.sass'
  ],
  modules: [
    "@nuxtjs/apollo",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxt/content",
    "nuxt-aos"
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: `${process.env.SQUIDEX_URL}/api/content/${process.env.SQUIDEX_APP_NAME}/graphql`,
      }
    },
  },
  i18n: {
    defaultLocale: 'pt',
    langDir: "lang",
    strategy: 'prefix_except_default',
    customRoutes: 'page',
    locales: [
      { code: 'pt', name: 'Português', file: 'pt.ts' },
      { code: 'en', name: 'Inglês', file: 'en.ts' }
    ],
    compilation: {
      strictMessage: false
    }
  },
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 150, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
  },
  runtimeConfig: {
    app: {
      appName: process.env.APP_NAME,
      apiBaseURL: `${process.env.SQUIDEX_URL}/api/content/${process.env.SQUIDEX_APP_NAME}/`,
      api: `${process.env.SQUIDEX_URL}/api/apps/${process.env.SQUIDEX_APP_NAME}`,
      apiBaseAssetsURL: `${process.env.SQUIDEX_URL}/api/apps/${process.env.SQUIDEX_APP_NAME}/assets`,
      squidex: {
        url: process.env.SQUIDEX_URL,
        appName: process.env.SQUIDEX_APP_NAME,
        clientId: process.env.SQUIDEX_CLIENT_ID,
        clientSecret: process.env.SQUIDEX_CLIENT_SECRET
      }
    }
  },
  devtools: { enabled: true },
  ssr: false,
})