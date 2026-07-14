# Yunesh Timsina Portfolio

Portfolio v2 is a completed, production-ready engineering portfolio presenting Yunesh Timsina as a Backend Engineer focused on Java, Spring Boot, application security, relational databases, and maintainable REST APIs.

## Current Project Status

The portfolio is feature-complete, fully responsive, and audited for production deployment:
- **Home**: Technical introduction, developer location marker, selected work preview, core capabilities strip, and contact navigation.
- **Projects**: Serves as a project directory linking to individual case studies. Displays high-level summaries and stack tag sets. Includes secondary repository cards (WanderWise, CSV Insights, University Placement System) and GitHub profile CTA.
- **Project Case Studies**:
  - **HamroPaisa**: P2P wallet system case study with a double-entry ledger flow, transaction idempotency, database concurrency locking (optimistic locking), and real Java transfer methods.
  - **Hamro Chalchitraghar**: Movie ticketing backend with seat hold workflows, transactional locks (pessimistic row locks), async notifications, and showtime validations.
  - **Spring Auth Template**: Stateless JWT authentication configuration, rotating refresh token revocation logic, RBAC, and token generation code.
- **Experience**: Vertical timeline of professional software development internship work (KK Smartways Pvt. Ltd.) and academic projects, followed by six core backend engineering principles cards.
- **About**: Factual positioning timeline, education history, engineering philosophy cards, and active tech focus areas.
- **Skills**: Badges organized in five technical categories (Languages, Backend, Databases, Frontend, Tools) with no arbitrary graphical ratings.
- **Contact**: Verified contact details and an accessible contact form featuring validation, loading states, and simulated success logs.

## Design Philosophy

The site follows a strict **JetBrains-inspired, developer-focused aesthetic**:
- **High Informational Density**: Minimal clutter, low noise, and clean structural grids.
- **Developer Context**: Monospace typography (`JetBrains Mono`) for metadata, badges, terminal headers, code blocks, and diagrams.
- **Authenticity**: Visuals are rendered entirely in CSS/HTML to simulate real development contexts (terminal shells, flow diagrams, IDEs, seating grids) instead of using AI-generated or stock illustrations.
- **Honesty**: Strictly factual wording, real code snippets, verified project features, and zero exaggerated metrics.

## Technology Stack

- **Framework**: React 19 & TypeScript
- **Bundler / Server**: Vite
- **Routing**: React Router 7 (supporting dynamic page titles and relative case study paths)
- **Styling**: Vanilla CSS with centralized HSL design variables
- **Testing**: Vitest & React Testing Library
- **Deployment**: Vercel-ready routing configuration

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

## Local Setup & Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Run ESLint checks:
   ```bash
   npm run lint
   ```
4. Run the Vitest suite:
   ```bash
   npm test
   ```

## Production Build

Generate optimized static assets:
```bash
npm run build
```
This compiles TypeScript configurations and bundles assets into the `dist/` directory, ready to serve or upload.

## Vercel Deployment

Deploying the static `dist/` output is fully supported. The custom `vercel.json` rewrite file is configured at the root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
This intercepts direct browser reloads on deep client-side routes (e.g., `/projects/hamropaisa` or `/experience`) and maps them to `index.html` to prevent Vercel from returning 404 errors.

## Accessibility (a11y)

Audited and compliant with WCAG standards:
- **Skip Link**: "Skip to content" anchor at the very top of page navigation for keyboard-only users.
- **Focus Rings**: High-contrast, visible focus states (`:focus-visible`) on all interactive inputs, buttons, textareas, and links.
- **Input labels**: Form inputs are paired with semantic HTML `<label>` elements and utilize screen-reader error descriptors (`aria-invalid`, `aria-describedby`).
- **Reduced Motion**: Under `@media (prefers-reduced-motion: reduce)`, transition durations are converted to `0.01ms` to respect system-level preferences.

## Branch Strategy

- `main`: Deployed production portfolio code.
- `portfolio-v2`: Active portfolio redesign and feature migration branch. Merge into `main` only after full build verification.

## Known Limitations

- **Contact Form**: The form operates in simulated mode. Since EmailJS credentials are environment-dependent and cannot be securely checked into source control, the form validates inputs, spins a loading indicator, and displays a graceful alert showing successful execution.
