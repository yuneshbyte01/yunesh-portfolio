# Yunesh Timsina — Software Engineering Portfolio

[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-19.0-61dafb?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7.0-646cff?logo=vite&logoColor=white)](https://vite.dev)

A premium, production-ready engineering portfolio presenting Yunesh Timsina as a Backend Engineer. The application features a high-density, developer-focused IDE aesthetic, built with a mouse-reactive background gradient, modern glassmorphic UI cards, and responsive layouts.

---

## 🚀 Key Features

*   **Global Ambient Gradients**: A mouse-reactive, multi-layered background gradient tracking script that animates color nodes globally behind pages.
*   **Detailed Project Case Studies**:
    *   **HamroPaisa**: P2P wallet system ledger flow, transaction idempotency, database concurrency locking (optimistic locking), and Spring `@Transactional` handlers.
    *   **Hamro Chalchitraghar**: Movie ticketing backend with row-level seat locking (`PESSIMISTIC_WRITE`), temporary holds, and asynchronous mail invoice routing.
    *   **Spring Auth Template**: Stateless JWT authentication, rotating refresh token revocation logic, and role-based access control (RBAC).
*   **Chronological Experience Timeline**: Vertical chronology detailing professional software development internships and backend engineering principles.
*   **A11y Compliant**: Keyboard skip-link, semantic HTML structure, ARIA accessibility descriptors, high-contrast focus rings, and prefers-reduced-motion media safeguards.

---

## 🛠️ Technology Stack

| Category | Technologies Used |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, Vite 7 |
| **Styling** | Tailwind CSS v4, HSL CSS variables, custom glassmorphism design system |
| **Routing** | React Router v7 |
| **Testing** | Vitest, React Testing Library |
| **Icons** | Lucide React |

---

## 📂 Project Structure

```
yunesh-portfolio/
├── public/                   # Static assets (PDFs, images)
├── src/
│   ├── components/
│   │   ├── common/           # Shared UI elements
│   │   ├── home/             # Homepage layout sections
│   │   └── layout/           # Header, Footer, and AppLayout wrappers
│   ├── data/                 # Static content configuration files
│   ├── hooks/                # Custom React hooks (e.g., gradient animation)
│   ├── pages/                # Page components & case studies
│   ├── styles/               # global.css (Tailwind & core theme variables)
│   ├── App.tsx               # Route configurations
│   └── main.tsx              # React mounting root
├── vercel.json               # SPA routing configuration for Vercel
└── package.json              # Script and dependency manifest
```

---

## 💻 Local Setup & Development

### Prerequisites
Make sure you have [Node.js](https://nodejs.org) (v18+) installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yuneshbyte01/yunesh-portfolio.git
   cd yunesh-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Verify production compilation:**
   ```bash
   npm run build
   ```

---

## 📄 Routing & Vercel Redirection

To support deep client-side routes (e.g., `/projects/hamropaisa` or `/experience`) on reloads in static servers like Vercel, a custom rewrite rule is configured in `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

This intercepts browser lookups and maps them back to the Single Page Application root `index.html` to prevent standard `404 Not Found` responses.
