import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Helper schema for bilingual string pairs
export const localizedString = z.object({
  es: z.string(),
  en: z.string(),
});

export const localizedStringArray = z.object({
  es: z.array(z.string()),
  en: z.array(z.string()),
});

// 1. Projects Collection
export const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.enum(['backend', 'fullstack', 'database']),
    categoryName: localizedString,
    year: z.string(),
    badge: localizedString.optional(),
    kicker: localizedString.optional(),
    summary: localizedString.optional(),
    description: localizedString,
    impact: localizedString,
    architecture: localizedString.optional(),
    points: localizedStringArray.optional(),
    tags: z.array(z.string()),
    repo: z.string().url(),
    frontendRepo: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

// 2. Certificates Collection (Strictly matches all 10 PDFs in public/certificates/)
export const certificates = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/certificates' }),
  schema: z.object({
    id: z.string(),
    file: z.string(), // Exact filename matching public/certificates/<file>
    title: localizedString,
    issuer: z.string(),
    institution: z.enum([
      'University of Michigan',
      'Meta',
      'Oracle',
      'University of Cape Town',
      'Udemy',
      'Especialización',
    ]),
    category: localizedString,
    icon: z.string(),
    skillsValidated: localizedStringArray,
    credentialId: z.string().optional(),
    verificationUrl: z.string().url().optional(),
    issueDate: z.string(), // ISO date or formatted string
    duration: z.string().optional(),
    order: z.number().default(99),
  }),
});

// 3. Technical Skills Collection
export const skills = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/skills' }),
  schema: z.object({
    id: z.string(),
    category: z.enum(['backend', 'database', 'frontend', 'devops']),
    label: localizedString,
    icon: z.string(), // Icon identifier, e.g. 'Server', 'Database', 'Globe', 'Cpu'
    summary: localizedString,
    order: z.number(),
    competencies: z.array(
      z.object({
        name: z.string(),
        levelText: localizedString,
        levelPercent: z.number().min(0).max(100),
        description: localizedString,
        tags: z.array(z.string()),
      })
    ),
  }),
});

// 4. Services Collection
export const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: z.object({
    id: z.string(),
    tag: localizedString,
    name: localizedString,
    description: localizedString,
    icon: z.string(), // 'Layers', 'Server', 'Database', 'Sparkles'
    points: localizedStringArray,
    order: z.number(),
  }),
});

// 5. Profile & Resume Data Collection
export const profile = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/profile' }),
  schema: z.object({
    id: z.string(),
    personal: z.object({
      name: z.string(),
      fullName: z.string(),
      title: localizedString,
      university: z.string(),
      degree: localizedString,
      location: localizedString,
      availability: localizedString,
      email: z.string().email(),
      phone: z.string(),
      whatsappUrl: z.string().url(),
      linkedinUrl: z.string().url(),
      githubUrl: z.string().url(),
      bioParagraphs: localizedStringArray,
    }).optional(),
    capabilities: z.array(
      z.object({
        title: localizedString,
        description: localizedString,
        icon: z.string(),
        tags: localizedStringArray,
      })
    ).optional(),
    testimonials: z.array(
      z.object({
        name: localizedString,
        role: localizedString,
        text: localizedString,
        tags: z.array(z.string()),
      })
    ).optional(),
  }),
});

export const collections = {
  projects,
  certificates,
  skills,
  services,
  profile,
};
