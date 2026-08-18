import reactConfig from '@my-app/config/eslint/react'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([globalIgnores(['dist']), ...reactConfig])
