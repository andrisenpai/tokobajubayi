export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    title: 'Adiba Store',
    htmlAttrs: {
      lang: 'en'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Kami menyediakan berbagai jenis Tas Selempang, Tas Sekolah, Tas Kerja untuk menemani keseharian Kamu' },
      { name: 'format-detection', content: 'telephone=no' },
      {name: 'google-site-verification',
      content: '8SCObHfkQAr7VuZ11_JUtmZg6B2V4wAJVc1CnrJLhtU'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/girl.ico' },
      { href: '	https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css', rel: 'stylesheet' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap', crossorigin: true },
      { href: "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap", rel: "stylesheet" }
    ],

    script: [
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' },

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  axios:{
    proxy: true
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', '@nuxt/image','@nuxtjs/sitemap','@nuxtjs/google-analytics'],
  // http://localhost:3000/products/taswaist/Tas-Waist-Bag-Pria-Outvin-TL-706?taswaist40
  sitemap: {
    hostname: 'https://backpacku.my.id',
    gzip: true,
    exclude: [
    ],
    routes:[
        '/products/:category/:detail'
    ]
  },
  plugins: [
    { src: '~/plugins/persist', ssr: false },
    { src: '~/plugins/owl', ssr: false },

  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  googleAnalytics: {
    id: 'AW-693433591'
  }
}
