import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Todo API Docs',
  description: 'Documentation for Todo API with Authentication',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API Reference', link: '/api/' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/api/' },
          { text: 'Authentication', link: '/api/auth' },
        ],
      },
      {
        text: 'Endpoints',
        items: [
          { text: 'Todos', link: '/api/todos' },
        ],
      },
    ],
  },
});