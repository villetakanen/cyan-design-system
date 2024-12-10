import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const principles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/principles" }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
  }),
})