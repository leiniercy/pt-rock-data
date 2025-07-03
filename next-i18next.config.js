const path = require('path')

let namespaces = ['dashboard'] // Valor por defecto

// ✅ Solo ejecutamos `fs` en el servidor
if (typeof window === 'undefined') {
  const fs = require('fs')

  const localesDir = path.join(process.cwd(), 'public/locales/es') // Ruta de traducciones en español
  if (fs.existsSync(localesDir)) {
    namespaces = fs
      .readdirSync(localesDir)
      .filter((file) => file.endsWith('.json'))
      .map((file) => file.replace('.json', '')) // Extrae los nombres de los archivos sin la extensión
  }
}

module.exports = {
  i18n: {
    defaultLocale: 'es',
    // locales: ['en', 'es']
    locales: ['es']
  },
  // Ruta base para los archivos de traducción
  localePath: path.join(process.cwd(), 'public/locales'), // Mejor compatibilidad con entornos como Vercel

  // Desactivar la detección automática del idioma
  localeDetection: false,

  // Opciones adicionales de next-i18next
  reloadOnPrerender: process.env.NODE_ENV === 'development', // Recargar traducciones en desarrollo

  // Opciones de caché (mejora el rendimiento en producción)
  serializeConfig: false, // Evita serializar la configuración en el HTML

  // Namespaces por defecto
  defaultNS: 'dashboard', // Namespace predeterminado para las traducciones
  ns: namespaces, // Agrega todos los namespaces que uses en tu aplicación

  // Interpolación personalizada
  interpolation: {
    prefix: '{{', // Prefijo para las interpolaciones
    suffix: '}}', // Sufijo para las interpolaciones
    escapeValue: false // No escapar valores por defecto (evita problemas con React)
  },

  // Configuración de fallback (idioma de respaldo)
  fallbackLng: 'es', // Idioma de respaldo si no se encuentra una traducción

  // Preload de idiomas (cargar todos los idiomas al inicio)
  // preload: ['en', 'es'],
  preload: ['es'],

  // Configuración de detección de idioma
  detection: {
    order: ['cookie', 'header'], // Orden de detección del idioma
    caches: ['cookie'] // Usar cookies para almacenar el idioma seleccionado
  },

  react: {
    useSuspense: false // Desactiva Suspense si usas carga manual de traducciones
  }
}
