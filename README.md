# Yunesh Timsina Portfolio

Portfolio v2 is a fully completed, content-first engineering portfolio presenting Yunesh Timsina as a Backend Engineer focused on Java, Spring Boot, application security, relational databases, and maintainable REST APIs.

## Current Project Status

All pages and routes are fully implemented with real content (no placeholders or fake links):
- **Home**: Introducing core capabilities, selected project summaries, and contact routes.
- **Projects**: High-fidelity case studies for core systems (HamroPaisa, Hamro Chalchitraghar, Spring Auth Template) with CSS-based interactive developer visual mockups (terminal sessions, seat allocation grid, security filter chains), and secondary repository cards (WanderWise, CSV Insights, University Placement System).
- **Experience**: Vertical professional timeline tracking software development internship at KK Smartways Pvt. Ltd. and personal projects, followed by six core engineering principles cards.
- **About**: Journey history, education record, engineering philosophy cards, and current technological acquisition focus.
- **Skills**: Structured categorization of languages, backend frameworks, databases, frontend familiarity, and tools (badges and lists with no arbitrary progress graphs).
- **Contact**: Location metadata, direct verified directory links (Email, LinkedIn, GitHub), and an accessible contact form with validation, status logs, and simulated transitions.

## Technology Stack

- **Framework**: React 19 & TypeScript
- **Bundler / Server**: Vite
- **Routing**: React Router 7 (hash scrolling support for case studies)
- **Styling**: Vanilla CSS with centralized design tokens and HSL variables
- **Testing**: Vitest & React Testing Library
- **Deployment**: Vercel SPA rewrites (`vercel.json`)

## Folder Structure

```
yunesh-portfolio/
├── dist/                     # Production build output
├── public/                   # Public static assets (Resume.pdf, profile.jpg, icons)
├── src/
│   ├── components/
│   │   ├── common/           # Shared components (SectionHeading)
│   │   ├── home/             # Homepage sections
│   │   └── layout/           # AppLayout, Header, Footer
│   ├── data/                 # Static content configuration files
│   ├── pages/                # Page components (Home, Projects, Experience, About, Skills, Contact)
│   ├── styles/               # Global stylesheet (global.css with IDE theme styles)
│   ├── types/                # TypeScript interface definitions
│   ├── App.tsx               # Route configurations
│   └── main.tsx              # React mounting root
├── vercel.json               # SPA routing rewrite rule
├── package.json              # Script and dependency manifest
└── tsconfig.json             # TypeScript settings
```

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local address printed in the console.

## Commands

```bash
npm run dev       # Start the development server
npm run lint      # Run ESLint validation checks
npm test          # Run the Vitest suite
npm run build     # Compile TypeScript and bundle production assets to dist/
npm run preview   # Preview the production build locally
```

## Deployment Notes

The project builds to `dist/` using `npm run build`. `vercel.json` rewrites all application routes to `index.html`, allowing direct browser entry to SPA routes like `/projects`, `/experience`, `/about`, `/skills`, and `/contact` without receiving 404 errors on reload.

## Accessibility (a11y)

The application maintains strict web accessibility standards:
- **Skip Link**: "Skip to content" anchor in layout for keyboard-only users.
- **Keyboard Navigation**: Fully keyboard navigable menu, buttons, and form inputs.
- **Focus Indicator**: Visible, high-contrast focus rings (`:focus-visible`) for interactive elements.
- **Aria Labels**: Screen-reader labels (`aria-label`, `aria-describedby`, `aria-invalid`) on buttons and validated form controls.
- **Semantic Hierarchy**: Sequential header structure (`h1` -> `h2` -> `h3`) on all pages.
- **Reduced Motion**: Respects browser settings by converting transition timings to instantaneous durations in `@media (prefers-reduced-motion: reduce)`.
