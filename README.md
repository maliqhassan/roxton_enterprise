# Roxton Enterprises (Pvt) Ltd. — Corporate Website

Production-ready corporate website for Roxton Enterprises, a procurement, logistics, supply chain, and engineering company.

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) (CSS-first config, no `tailwind.config.ts`)
- [shadcn/ui](https://ui.shadcn.com) (Base UI primitives, Lucide icons)
- [Framer Motion](https://motion.dev) for UI animation, [GSAP](https://gsap.com) for advanced/scroll-driven sequences
- [Lenis](https://lenis.darkroom.engineering) for smooth scroll
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) for forms and validation
- [Embla Carousel](https://www.embla-carousel.com) for carousels/sliders
- ESLint + Prettier (with `prettier-plugin-tailwindcss`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                 | Purpose                          |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start dev server (Turbopack)     |
| `npm run build`        | Production build                 |
| `npm run start`        | Start production server          |
| `npm run lint`         | Lint the codebase                |
| `npm run lint:fix`     | Lint and auto-fix                |
| `npm run format`       | Format with Prettier             |
| `npm run format:check` | Check formatting without writing |
| `npm run typecheck`    | Type-check without emitting      |

## Project Structure

Feature-based architecture — routing lives in `app/`, shared building blocks live in top-level folders, and self-contained feature modules live in `features/`.

```
src/
├── app/                 # App Router routes, layouts (composition only — no business logic)
├── components/
│   ├── ui/               # shadcn/ui primitives (managed via `npx shadcn add`)
│   ├── layout/            # Header, Footer, and other structural shell components
│   └── shared/             # Reusable presentational components shared across features
├── features/             # Self-contained feature modules (components/hooks/utils/types per feature)
├── lib/                   # Framework-agnostic utilities, third-party client setup
│   └── validations/        # Shared Zod schemas
├── hooks/                 # Shared/global React hooks
├── types/                 # Shared global TypeScript types
├── config/                # Site-wide configuration (site.ts, nav, etc.)
├── constants/              # App-wide constants
└── providers/               # React context providers (theme, smooth scroll, etc.)

public/
├── fonts/
├── images/
└── icons/
```

### Path aliases

`@/*` maps to `src/*`, with scoped aliases (`@/components/*`, `@/features/*`, `@/lib/*`, `@/hooks/*`, `@/types/*`, `@/config/*`, `@/constants/*`, `@/providers/*`) defined in [tsconfig.json](tsconfig.json).

## Status

Architecture-only bootstrap. No pages/sections have been built yet.
