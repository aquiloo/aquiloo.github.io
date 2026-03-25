import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date()
});

const projects = defineCollection({
  schema: baseSchema.extend({
    github: z.string().url().optional(),
    demo: z.string().url().optional()
  })
});

const blog = defineCollection({
  schema: baseSchema
});

const papers = defineCollection({
  schema: baseSchema.extend({
    pdf: z.string().url().optional(),
    doi: z.string().url().optional()
  })
});

export const collections = {
  projects,
  blog,
  papers
};
