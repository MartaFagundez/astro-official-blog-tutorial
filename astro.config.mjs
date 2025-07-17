// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://my-astro-official-blog-tutorial.netlify.app",
  integrations: [preact()]
});