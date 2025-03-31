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
                statements: 99,
                branches: 87,
                functions: 100,
                lines: 99
            }
        }
    }
})
