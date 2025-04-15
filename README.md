# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## Project Structure

This project follows a feature-based structure, organizing files primarily by pages or major application sections.

```
src/
├── assets/         # Static assets (images, fonts, etc.)
├── components/     # Global, reusable UI components
│   └── layout/     # Layout components (Header, Footer)
├── pages/          # Page-level components (Views)
│   └── home/       # Components specific to the Home page
│       ├── Hero.vue         # Section component
│       ├── Features.vue     # Section component
│       ├── CallToAction.vue # Section component
│       └── index.vue      # Main component for the Home page, assembling sections
├── styles/         # Global stylesheets
│   ├── _variables.css  # CSS custom properties (colors, fonts, etc.)
│   ├── _reset.css      # CSS reset/normalization
│   ├── _base.css       # Base HTML element styling
│   └── main.css        # Main CSS entry point, imports others
├── config.js       # Application configuration constants (e.g., company name)
├── App.vue         # Root Vue component, holds router view (if added) and base layout
└── main.js         # Main application entry point (Vue initialization, global CSS import)
```

### Key Concepts:

*   **Pages (`src/pages/`):** Each top-level page or view of the application gets its own folder (e.g., `home`). Inside, an `index.vue` file typically orchestrates the components specific to that page.
*   **Components (`src/components/`):** Contains UI components intended for reuse across different pages. Global layout components like `Header` and `Footer` reside in `src/components/layout/`.
*   **Scoped Styles:** Components primarily use `<style scoped>` for styles that only affect that specific component, preventing CSS conflicts.
*   **Global Styles (`src/styles/`):** Application-wide styles (resets, base element styling, CSS variables) are defined here and imported once in `src/main.js`.
*   **Configuration (`src/config.js`):** Centralizes constants and configuration values (like company names or settings) that might be used in multiple places.