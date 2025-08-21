import { defineCollection, z } from 'astro:content';

const tracksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    duration: z.string(),
    level: z.enum(['foundation', 'specialization', 'advanced']),
    description: z.string(),
    capstone: z.string().optional(),
    outcomes: z.array(z.string()),
    months: z.array(z.object({
      title: z.string(),
      skills: z.array(z.string())
    })),
    order: z.number(),
    featured: z.boolean().default(false),
  })
});

export const collections = {
  'tracks': tracksCollection,
};