# Original User Request

## 2026-10-22T23:44:50Z

Convert and evolve the multi-page portfolio website for Paulo Espinoza (Information Systems Engineer from Universidad Peruana de Ciencias Aplicadas — UPC) into a 100% native Astro 5 architecture with a clean, high-contrast Flat Design, full Spanish/English (`ES | EN`) bilingual support, structured Content Collections, executive CV view/print capability, and technical SEO tailored for recruiters and hiring managers.

Working directory: /Users/pauloespinoza/Desktop/developer/portfolio
Integrity mode: development

## Requirements

### R1. Native Astro 5 Architecture & Content Collections (Zero React Components)
Migrate all UI components from React (`.tsx`) to native `.astro` components using Astro 5's Island/Zero-JS-by-default paradigm, native `<ClientRouter />` (View Transitions) for smooth multi-page navigation, and lightweight client-side `<script>` tags for interactivity. Structure all portfolio data (projects/case studies, 10 official PDF certifications in `public/certificates/`, services, technical skills, and profile metadata) using strongly-typed Astro Content Collections (`src/content/`).

### R2. Professional Identity, Multi-Page Flat Design & Executive CV View
Maintain a crisp, modern Flat Design aesthetic (solid dark matte surfaces, sharp 1px borders, zero glassmorphism/neon blurs) across all dedicated pages (`/`, `/profile`, `/services`, `/portfolio`, `/certificates`, `/contact`, plus an executive printable/downloadable CV page or modal `/cv`). Present Paulo Espinoza exclusively as **Ingeniero de Sistemas de Información** / **Information Systems Engineer** (UPC), Backend & Full Stack Developer (Java/Spring Boot, C#/.NET, SQL Server, Oracle, React, Astro, AI-assisted workflows) — strictly excluding any "Ingeniero de Software" / "Software Engineer" titles and excluding any blog/articles section.

### R3. Bilingual Support (ES | EN) & Interactive Features
Provide seamless Spanish and English (`ES | EN`) language switching across the navigation, hero showcase, official candidate status panel, dual panels (Professional & Academic), services, case study filters, certificate PDF viewer modal, executive CV, and recruiter contact form. Ensure interactive filtering of case studies, collapsible official info, and embedded PDF preview/download work reliably across page navigations.

### R4. Technical SEO, Structured Data & Production Readiness
Include comprehensive SEO metadata on every page: canonical URLs, OpenGraph tags, `hreflang` attributes, an automatically generated sitemap, and valid `Schema.org` `JSON-LD` (`Person`, `EducationalOccupationalCredential` for Meta, Oracle Academy, and University of Michigan certificates, and `WebSite`). Ensure the project builds cleanly for production and passes all static type checks and automated verification tests.

## Acceptance Criteria

### Native Astro Migration & Build Integrity
- [ ] `npm run check` (`astro check`) and `npm run build` (`astro build`) complete with exit code 0 and zero TypeScript or Astro compilation errors.
- [ ] No `.tsx` or `.jsx` component files remain in `src/components/`; all components are implemented as native `.astro` files and `@astrojs/react` is no longer required to render pages.
- [ ] Astro Content Collections (`src/content.config.ts` or `src/content/config.ts`) validate all projects, certificates, skills, and services with Zod schemas.

### Pages, Identity Guardrails & Flat Design
- [ ] All primary routes (`/`, `/profile`, `/services`, `/portfolio`, `/certificates`, `/contact`, and `/cv`) generate static HTML in `dist/` and render with the flat design system (solid surfaces, 1px borders, no backdrop-filter blur).
- [ ] A case-insensitive search across `src/` and `dist/` confirms zero occurrences of `"Ingeniero de Software"`, `"Software Engineer"`, or blog/articles sections (`BlogSection`).
- [ ] All 10 PDF files in `public/certificates/` are linked, downloadable, and previewable via the native Astro modal viewer.

### Bilingual (ES | EN), SEO & Verification Suite
- [ ] Every page supports switching between Spanish (`ES`) and English (`EN`) with complete translations for UI labels, project descriptions, services, and profile content.
- [ ] Every generated HTML page in `dist/` contains valid `<script type="application/ld+json">` structured data, OpenGraph tags, and proper semantic headings.
- [ ] An automated verification script (`npm test` or `node tests/verify-build.mjs`) programmatically verifies all built HTML routes in `dist/`, asset links, JSON-LD validity, identity guardrails, and zero-React compliance.
