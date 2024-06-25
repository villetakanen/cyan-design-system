import { defineCollection, z } from 'astro:content';

export const elements = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    nodename: z.string(),
    noun: z.string().optional(),
  }),
});

export const layout = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    html: z.string(),
    noun: z.string().optional(),
  }),
});

export const inputs = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    html: z.string(),
    noun: z.string().optional(),
  }),
});

export const css = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    class: z.string().optional(),
    noun: z.string().optional(),
  }),
});
