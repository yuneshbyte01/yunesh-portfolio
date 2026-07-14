# Yunesh Timsina Portfolio

Portfolio v2 - Phase 1 is a content-first engineering portfolio presenting Yunesh Timsina as a Backend Engineer focused on Java, Spring Boot, application security, relational databases, and maintainable REST APIs.

## Current phase

Phase 1 includes the complete homepage, shared application shell, responsive navigation, design system, route foundations, and not-found handling. The Projects, Experience, Skills, About, and Contact routes intentionally use Phase 2 content shells.

## Technology stack

- React 19 and TypeScript
- Vite
- React Router
- Maintainable CSS with centralized design tokens
- Vitest and Testing Library
- Vercel SPA rewrites

## Local setup

```bash
npm install
npm run dev
```

Vite prints the local development URL after startup.

## Commands

```bash
npm run dev       # Start the development server
npm run lint      # Run ESLint
npm test          # Run the test suite once
npm run build     # Type-check and create a production build
npm run preview   # Preview the production build locally
```

## Branch strategy

- `main` remains the currently deployed production portfolio.
- `portfolio-v2` contains Portfolio v2 development.
- Review and verify v2 before opening a pull request or merging it into `main`.
- Do not deploy unfinished phase branches as production without review.

## Vercel deployment notes

The project builds to `dist` using `npm run build`. `vercel.json` rewrites application routes to `index.html`, allowing direct visits to React Router paths such as `/projects` and `/experience`.

No production domain is hardcoded in metadata. Vercel environment variables are not required by the Phase 1 frontend.

## Public assets

- `public/Resume.pdf` - current downloadable CV
- `public/profile.jpg` - profile photograph
- `public/favicon.ico`, `logo192.png`, and `logo512.png` - retained site icons

## Future phases

Phase 2 should add full project case studies, detailed experience, skills in engineering context, education and biography content, and a validated contact workflow. Project pages should use authentic screenshots, architecture diagrams, API documentation, and verified repository links rather than fake demo links.
