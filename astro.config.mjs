// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/anomaly',
  site: 'https://cmudsc.com',
  integrations: [tailwind()]
});