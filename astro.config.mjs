// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Bis zum Relaunch läuft die Seite auf einer one.com-Testdomain;
  // site wird für Canonical-URLs, hreflang und die Sitemap genutzt.
  site: 'https://smilesafricacharity.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
