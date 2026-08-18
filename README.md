# pnpm + Turborepo monorepo

The repository uses pnpm workspaces and Turborepo.

## Structure

```text
apps/
  client/          React + TypeScript + Vite frontend
  server/          NestJS API
packages/
  config/  Shared ESLint and TypeScript configurations
  shared/  Code shared between applications
```

## Scripts

```bash
pnpm dev           # start development tasks
pnpm build         # build all workspace packages
pnpm preview       # preview the client production build
pnpm lint          # run ESLint
pnpm lint:fix      # run ESLint with --fix
pnpm test          # run unit tests
pnpm test:e2e      # run end-to-end tests
pnpm format        # format workspace packages
pnpm format:check  # check formatting
```

Run a command only for the client:

```bash
pnpm --filter @my-app/client dev
pnpm --filter @my-app/server dev
```
