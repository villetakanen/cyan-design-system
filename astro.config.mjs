import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
  integrations: [mdx()]
});