import { createNodeConfig } from '@my-app/config/eslint/node'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  ...createNodeConfig({ tsconfigRootDir: import.meta.dirname }),
])
