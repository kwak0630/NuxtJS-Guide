export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sally NuxtJS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/sally.png' }
    ]
  },

  
  target: 'static', // 정적 웹사이트임을 명시
  router: {
    base: '/NuxtJS-Guide/' // github repository 이름 넣기
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
		'~assets/css/common.scss',
		'~assets/css/guide.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
