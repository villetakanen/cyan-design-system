import { z, defineCollection } from 'astro:content';

export const elements = defineCollection({
    type: 'content',
    schema: z.object({
      name: z.string(),
      nodename: z.string(),
      noun: z.string().optional(),
    }),
  });