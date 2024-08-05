import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        coverage: {
            enabled: true,
            exclude: ['src/mail.tsx', 'dist', 'vitest.config.ts'],
            thresholds: {
                statements: 99,
                branches: 87,
                functions: 100,
                lines: 99
            }
        }
    }
})
