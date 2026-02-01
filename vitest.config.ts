import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        coverage: {
            enabled: true,
            exclude: [
                'src/mail.tsx',
                'dist',
                'vite.config.ts',
                'vitest.config.ts',
                'eslint.config.mjs',
                'sandbox'
            ],
            thresholds: {
                statements: 95,
                branches: 84,
                functions: 100,
                lines: 95
            }
        }
    }
})
