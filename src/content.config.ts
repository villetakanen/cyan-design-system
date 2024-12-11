import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const principles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/principles' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
  }),
});
export const css = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/css' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
  }),
});
export const layout = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/layout' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
  }),
});
export const inputs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/inputs' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
  }),
});
export const elements = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md[x]', base: './src/content/elements' }),
  schema: z.object({
    title: z.string(),
    nodename: z.string(),
    icon: z.string().optional(),
  }),
});
