import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site:"https://loak.studio",
    integrations: [
        sitemap({
            filter: (page) => page !== 'https://loak.studio/send/'
          }),
    ],
});
