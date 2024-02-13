import * as core from '@actions/core'
import { expense } from './main.js'

import { CONFIRMATION_MESSAGE } from './constants.js'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
try {
    await expense()
    console.log(CONFIRMATION_MESSAGE)
} catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) {
        core.setFailed(error.message)
    }
}
