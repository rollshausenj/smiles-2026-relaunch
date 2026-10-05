import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog/Aktuelles. Beiträge liegen als Markdown unter src/content/blog/<sprache>/.
 * Die Sprache ergibt sich aus dem Ordner, die URL aus dem Dateinamen.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      author: z.string().default('Smiles Africa'),
      description: z.string().default(''),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      category: z
        .enum(['Meilensteine', 'Aktionen', 'Bildungswissen', 'Vereinsleben'])
        .optional(),
      /** Alte WordPress-URL, für 301-Weiterleitungen beim Relaunch. */
      legacyUrl: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

/** Seite des kenianischen Teams – wird vom Team in Nairobi selbst gepflegt. */
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

export const collections = { blog, teamKenya };
