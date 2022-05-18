import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site:"https://loak.studio",
    markdown: {
        // Can be 'shiki' (default), 'prism' or false to disable highlighting
        syntaxHighlight: 'shiki',
      },
    integrations: [
        sitemap({
            filter: (page) => page !== 'https://loak.studio/send/'
          }),
    ],
});
