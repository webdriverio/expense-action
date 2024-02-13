import { vi, describe, it, expect } from 'vitest'
import { run } from '../src/main.js'

vi.mock('@actions/core', () => ({
    setFailed: vi.fn()
}))

vi.mock('../src/main.js', () => ({
    run: vi.fn()
}))

describe('index', () => {
    it('calls run when imported', async () => {
        await import('../src/index.js')
        expect(run).toHaveBeenCalled()
    })
})
