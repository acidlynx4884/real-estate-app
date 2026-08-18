import baseConfig from '@my-app/config/eslint/base'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([globalIgnores(['dist']), ...baseConfig])
