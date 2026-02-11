# Repository Guidelines

## Project Structure & Module Organization
- `server.js` starts the Express app, wires config, routes, and i18n, and renders Pug views from `views/`.
- `config/` handles env vars, Express middleware, MongoDB init, and shared data loading from `datas/` and `i18n/`.
- `Routes/` exposes feature routes (e.g., `Users`, `Projects`) backed by Mongoose models in `Models/`.
- Frontend source lives in `app/` (`components/`, `pages/`, `animation/`, `utils/`, `factories/`); Vite builds `app.js` + `main.css` into `public/` (do not hand-edit).
- Presentation assets sit in `styles/` (SCSS) and `shared/` (icons, fonts, media); content snippets and metadata live in `datas/`.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — Vite build in watch mode, emits assets to `public/`; keep running during frontend work alongside the server.
- `npm run build` — production Vite build; cleans `public/`, copies `shared/` assets, and writes `app.js`/`main.css`.
- `npm run server` — start the Express server with nodemon for API and Pug rendering.
- Quick lint: `npx eslint app server.js Routes config` to catch style issues before pushes.

## Coding Style & Naming Conventions
- JavaScript targets ES2021 via Babel; ESLint `eslint:recommended` with no semicolons and 2-space indent. Prefer single quotes and trailing commas as in existing files.
- Use PascalCase for classes (`Smoothscroll`), camelCase for functions/variables, and kebab-case for SCSS/Pug class names.
- Keep modules small and colocated: page-specific logic under `app/pages/`, reusable UI/behavior in `app/components/`, shared helpers in `app/utils/`.
- Avoid editing generated `public/` files; source assets belong in `shared/` and get imported by the Vite build.

## Testing Guidelines
- No automated test suite yet; validate changes by running `npm run dev` + `npm run server` and clicking through `/`, `/about`, and `/photographies`.
- For data-driven updates, confirm `datas/` content loads correctly in rendered Pug templates and inspect console/network for errors.
- When adding new routes, exercise them with sample payloads (via browser or curl) before opening a PR.

## Commit & Pull Request Guidelines
- Use short, imperative commit messages (e.g., `Add preload cleanup`, `Fix project card scroll`) and group related changes.
- For pull requests: include a summary of intent, affected areas (`app/pages/home`, `Routes/Projects`), manual test steps, and screenshots/GIFs for UI tweaks.
- Reference relevant issues or TODOs if they exist, call out breaking changes or required `.env` updates (see `.example.env` for expected keys), and ensure the branch builds with `npm run build`.
