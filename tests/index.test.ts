import { vi, describe, it, expect } from 'vitest'
import * as core from '@actions/core'

import { expense } from '../src/main.js'

vi.mock('@actions/core', () => ({
    setFailed: vi.fn()
}))

vi.mock('../src/main.js', async () => ({
    expense: vi.fn().mockRejectedValueOnce(new Error('Test error'))
}))

describe('index', () => {
    it('calls run when imported', async () => {
        await import('../src/index.js')
        expect(expense).toHaveBeenCalled()
        expect(core.setFailed).toHaveBeenCalledWith('Test error')
    })
})
