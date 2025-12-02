# Elyvra Studio

> **Elyvra Studio** is a cinematic, AI-inspired digital product studio website — built with React, motion-first transitions, and a meticulously crafted UI.

Live site: **https://elyvra.studio**

---

## ✨ Features

- **Cinematic intro experience**
  - Timed, multi-stage intro overlay with liquid morphing, noise textures and typography reveal.
- **Custom cursor system**
  - Follows pointer with spring physics and hover states for interactive elements.
- **Particle field background**
  - Canvas-based particle network that reacts subtly to mouse movement.
- **Full-page transitions**
  - Smooth route transitions via Framer Motion (`PageTransition` component) with scroll reset.
- **Modern navigation**
  - Glassmorphism navbar with active-route pill indicator and mobile menu.
- **Responsive layout**
  - Works across desktop and mobile with Tailwind-powered utility classes.
- **Hash-based routing**
  - `react-router-dom` + `HashRouter` for simple static hosting compatibility.
- **Vercel Analytics**
  - Zero-config analytics wired via `@vercel/analytics/react`.
- **Production-grade DX**
  - Vite, TypeScript, ESLint, and React 19.

---

## 🏗 Tech Stack

- **Frontend**
  - [React 19](https://react.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vite.dev/) (bundler + dev server)
  - [react-router-dom](https://reactrouter.com/) (`HashRouter`, `Routes`, `Route`)
  - [Framer Motion](https://www.framer.com/motion/)
  - [lucide-react](https://lucide.dev/) (icon set)
  - [Tailwind CSS](https://tailwindcss.com/) via CDN in `index.html`
- **Deployment & Infra**
  - [Vercel](https://vercel.com/) – production hosting & CI
  - Custom domain: `elyvra.studio`
  - [@vercel/analytics](https://vercel.com/docs/analytics) – traffic analytics

---

## 📂 Project Structure

```text
elyvra-studio/
├─ public/
│  └─ favicon.ico                # Browser tab icon
├─ src/
│  ├─ assets/                    # (optional) static assets
│  ├─ components/
│  │  ├─ Navbar.tsx              # Top navigation with desktop & mobile menus
│  │  ├─ Cursor.tsx              # Custom cursor + hover detection
│  │  ├─ ParticleField.tsx       # Canvas-based particle background
│  │  ├─ Footer.tsx              # Footer with social & location
│  │  ├─ IntroOverlay.tsx        # Cinematic intro sequence
│  │  ├─ MagneticButton.tsx      # Magnetic CTA button interactions
│  │  └─ Transition.tsx          # PageTransition wrapper for route animations
│  ├─ pages/
│  │  ├─ Home.tsx                # Hero, philosophy, selected work
│  │  ├─ Work.tsx                # Case studies view
│  │  ├─ Services.tsx            # Capabilities overview
│  │  ├─ About.tsx               # Origin story, values, leadership
│  │  └─ Contact.tsx             # Contact form & studio details
│  ├─ App.tsx                    # Router, layout shell, analytics entrypoint
│  ├─ index.tsx                  # ReactDOM root
│  ├─ constants.ts               # Nav items, projects, services data
│  ├─ types.ts                   # Shared TypeScript types & route constants
│  ├─ App.css                    # Vite template legacy styles (mostly unused)
│  └─ index.css                  # Tailwind layer hooks
├─ index.html                    # Root HTML, Tailwind CDN, fonts, filters
├─ package.json
├─ tsconfig.*.json
└─ vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (comes with Node) or another package manager

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`) to view the site.

### 3. Build for production

```bash
npm run build
```

The optimized static assets will be output to the `dist/` directory.

### 4. Preview the production build locally

```bash
npm run preview
```

---

## 🌐 Deployment (Vercel + Custom Domain)

This project is designed to deploy cleanly on **Vercel**.

### Vercel configuration

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Framework Preset:** `Vite` (detected automatically)

Once connected to your Git repository:

1. Every push to the default branch triggers a new deployment.
2. Vercel exposes a preview URL for pull requests and feature branches.
3. Production is served from your primary domain, e.g. `elyvra.studio`.

### Custom domain (elyvra.studio)

At a high level:

1. Add `elyvra.studio` (and `www.elyvra.studio`) under **Project → Settings → Domains** in Vercel.
2. Configure DNS at your domain provider to match Vercel’s suggested records:
   - `A` record: `@` → Vercel IP
   - `CNAME` record: `www` → Vercel CNAME target
3. Wait for DNS propagation, then set `elyvra.studio` as **primary** in Vercel.

---

## 📈 Analytics

Vercel Analytics is integrated via the React entrypoint:

```tsx
import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => {
  // ...
  return (
    <Router>
      <div className="relative min-h-screen text-white selection:bg-accent selection:text-white">
        {/* UI shell ... */}
        <Footer />
        <Analytics /> {/* Vercel Analytics – no UI impact */}
      </div>
    </Router>
  );
};
```

Once deployed on Vercel, you can view traffic & performance metrics under **Analytics** in the Vercel dashboard for this project.

---

## 🧭 Routing & Pages

Routing is powered by **`react-router-dom`** with `HashRouter` for simple static hosting.

```tsx
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};
```

- Navigation (`Navbar`) reads from `NAVIGATION` in `constants.ts`.
- Page transitions are wrapped with `PageTransition` to handle enter/exit animations.
- `ScrollToTop` ensures each route starts at the top of the viewport.

---

## 📨 Contact Form

The **Contact** page (`src/pages/Contact.tsx`) includes:

- Name, Email, Message fields.
- Basic validation via `required` attributes.
- Current behaviour: **front-end only** placeholder – shows a thank-you alert and clears the form.
- Backend integration (e.g. Supabase, email provider, or dedicated API) can be wired inside `handleSubmit` without changing the visual UI.

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Placeholder: Supabase or email integration can be added here
  alert('Thank you for your inquiry. We will be in touch shortly.');
  setFormState({ name: '', email: '', message: '' });
};
```

> **Planned extension:** Persist contact submissions (e.g. to Supabase) and send automatic email responses while preserving the existing design.

---

## 🎨 Styling Notes

- **Tailwind CSS** is loaded via CDN in `index.html`, with custom configuration in an inline `tailwind.config` object.
- Global typography and colors:
  - Fonts: **Inter** (body) and **Space Grotesk** (display).
  - Colors: `background`, `surface`, `primary`, `secondary`, `accent` (indigo).
- Additional styling:
  - `.glass-panel` utility for frosted glass surfaces.
  - `.liquid-filter` SVG filter for the intro morph effect.
  - Custom cursor and scrollbar hiding for a more immersive feel.

---

## 🧪 Linting & Quality

The project uses ESLint with TypeScript & React rules:

```bash
npm run lint
```

Configuration lives in `eslint.config.js`, with:

- `@eslint/js` for core JS rules.
- `typescript-eslint` for TS-specific linting.
- `react-hooks` and `react-refresh` plugins for React best practices and HMR safety.

---

## 🛠 Development Tips

- Use `HashRouter` URLs like `/#/work` or `/#/about` when navigating directly in the browser.
- The intro overlay has a timed sequence (~10 seconds). During that time the main UI fades in gradually.
- For production-only debugging, you can inspect the built bundle in `dist/` using `npm run build && npm run preview`.

---

## 🤝 Contributing

While this project is currently tailored to Elyvra Studio’s needs, contributions that:

- Improve performance or accessibility,
- Clean up or generalize animation primitives,
- Improve developer experience (DX),

are welcome.

Suggested flow:

1. Fork the repository.
2. Create a feature branch: `feature/your-idea`.
3. Run `npm run lint` and `npm run build` locally.
4. Open a pull request with a clear description and screenshots / GIFs for visual changes.

---

## 📄 License

This project is currently closed-source / proprietary for **Elyvra Studio**.
If you’d like to reuse parts of the design or animation system, please open an issue or contact the maintainer to discuss permissions.

---

## 💬 Contact

- **Studio:** Elyvra Studio
- **Email:** `hello@elyvra.com`
- **Website:** https://elyvra.studio

> Built to showcase intelligent, cinematic digital experiences – and to inspire what your next product could look like.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
