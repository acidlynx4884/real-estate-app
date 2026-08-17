# React + TypeScript + Vite

Minimal React + TypeScript app powered by Vite, with ESLint and Prettier.

## Scripts

```bash
pnpm dev          # start dev server
pnpm build        # typecheck + production build
pnpm preview      # preview production build
pnpm lint         # run ESLint
pnpm lint:fix    # run ESLint with --fix
pnpm format       # format with Prettier
pnpm format:check # check Prettier formatting
```

## Tooling

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) for Fast Refresh
- ESLint flat config in `eslint.config.js` (TypeScript + React Hooks + React Refresh)
- Prettier via `.prettierrc` (ESLint conflicts disabled with `eslint-config-prettier`)
