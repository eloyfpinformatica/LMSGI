import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/LMSGI/',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/LMSGI/img/logo.png' }]
  ],
  // Metadatos por idioma (guía i18n)
  locales: {
    root: {
      label: 'Español',
      lang: 'es-ES',
      link: '/',
      title: 'Lenguajes de Marcas y Sistemas de Gestión de la Información',
      description: 'Apuntes del módulo Lenguajes de Marcas y Sistemas de Gestión de la Información',
      themeConfig: {
        siteTitle: 'Apuntes LMSGI',
        outline: { label: 'En esta página' },
          docFooter: { prev: 'Anterior', next: 'Siguiente' },
          nav: [
            { text: '🏠 Inicio', link: '/' },
            { 
              text: '📚 Contenidos', 
              items: [
                { text: '1. Introducción', link: '/contenidos/1-introduccion' },
                { text: '2. Diapositivas', link: '/contenidos/diapositivas' },
                { text: '3. Manipulación de objectos con JavaScript', link: '/contenidos/3-javascript' },

              ]
            },            
          ],
      }
    },
  },
  // Tema por idioma
  themeConfig: {
    logo: '/img/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/eloyfpinformatica' }
    ],
    sidebar: {
      '/': [
        {
          text: '📚 Contenidos',
          collapsed: false,
          items: [
            { text: '1. Introducción', link: '/contenidos/1-introduccion' },
            { text: '2. HTML y CSS', link: '/contenidos/2-htmlcss' },
            { text: '3. Manipulación de objectos con JavaScript', link: '/contenidos/3-javascript' },
          ]
        },
       /* {
              text: '🗂️ Ejercicios',
              collapsed: true,
              items: [
                { text: 'Inicio', link: '/ejercicios/' },
                { text: 'Ejercicio', link: '/ejercicios/ejercicio' },
                { text: 'Final', link: '/ejercicios/final' }
              ]
            },*/
        {
          items: [
            //{ text: '<img src="/LMSGI/img/logo-autor.png" class="logo-anim" style="vertical-align:middle; height:165px; margin:0 auto;">', link: '' },
            { text: '<img src="/LMSGI/img/logo-gva.png" class="logo" style="vertical-align:middle; height:60px; margin:0 auto;">', link: '' },
            { text: '<img src="/LMSGI/img/logo-centro.png" class="logo" style="vertical-align:middle; height:90px; margin:0 auto;">', link: '' }
          ]
        }
      ],
    },
    footer: {
      message: '<img src="/LMSGI/img/logo-autor.png" alt="Autor" style="height:75px; margin: 0 auto; display:block;" />',
      copyright: 'Copyright © 2025'
    }
  }
})
