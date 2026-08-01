import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      featured: z.boolean().default(false),
      status: z.string(),
      statusKind: z.enum(['production', 'in-progress', 'live', 'archived']).default('live'),
      tagline: z.string(),
      summary: z.string(),
      tech: z.array(z.string()),
      cover: image().optional(),
      links: z
        .object({
          live: z.url().optional(),
          demo: z.url().optional(),
          repo: z.url().optional(),
          video: z.url().optional(),
        })
        .default({}),
    }),
});

export const collections = { projects };
