import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Abschnitt des kenianischen Teams auf der Team-Seite – wird vom Team in Nairobi selbst gepflegt. */
const teamKenya = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/team-kenya' }),
  schema: z.object({
    title: z.string(),
    updated: z.coerce.date().optional(),
    members: z
      .array(z.object({ name: z.string(), role: z.string().optional() }))
      .default([]),
  }),
});

export const collections = { teamKenya };
