export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== 'production' }, // Solo habilitar devtools en desarrollo
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    'dayjs-nuxt',
    '@samk-dev/nuxt-vcalendar',
    '@nuxt/image',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-tiptap-editor',
    '@ant-design-vue/nuxt', // Ant Design Vue integration
  ],
  dayjs: {
    plugins: ['relativeTime', 'customParseFormat'], // Day.js plugins
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000', // Dynamic API base URL
    },
  },
  routeRules: {
    '/**': { ssr: false }, // Globally disable SSR, revisar si se necesita en el futuro
    '/synco/**': { ssr: false },
    '/parents/**': { ssr: false },
  },
  image: {
    inject: true, // Inject Nuxt Image helpers
  },
  piniaPersistedstate: {
    storage: 'sessionStorage', // Use session storage for state persistence
  },
  tiptap: {
    prefix: 'Tiptap', // Prefix for Tiptap components
  },
  antd: {}, // Default Ant Design Vue configuration
  vite: {
    resolve: {
      alias: {
        'ant-design-vue/es': 'ant-design-vue', // Redirect imports to avoid Rollup issues
      },
    },
    build: {
      sourcemap: false, // Deshabilitar source maps para reducir el consumo de memoria
      rollupOptions: {
        external: ['ant-design-vue'], // Externaliza ant-design-vue para evitar conflictos de Rollup
        output: {
          manualChunks(id) {
            // Divide dependencias grandes en chunks
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
      minify: false, // Deshabilitar temporalmente la minificación si consume demasiada memoria
    },
    chunkSizeWarningLimit: 1000, // Aumentar el límite de advertencia para chunks grandes
  },
  build: {
    analyze: process.env.NODE_ENV !== 'production', // Habilita el analizador en desarrollo
    extractCSS: true, // Extrae CSS en archivos separados para optimizar el tamaño del bundle
    transpile: ['ant-design-vue'], // Asegura que ant-design-vue sea procesado correctamente
  },
  ssr: false, // Asegura que el modo SPA esté habilitado
  generate: {
    dir: 'dist', // Especifica el directorio de salida como dist
    fallback: true, // Genera un archivo 404.html para manejar rutas no encontradas
  },
});
