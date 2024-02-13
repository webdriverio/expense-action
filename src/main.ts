import * as core from '@actions/core'
import crypto from 'node:crypto'
import { Resend } from 'resend'
import { Octokit } from '@octokit/rest'

import Email from './mail.js'
import {
    CONFIRMATION_COMMENT,
    CONFIRMATION_MESSAGE,
    FROM as from,
    BCC as bcc
} from './constants.js'

/**
 * create a authentication key for contributor
 */
const randomString = crypto.randomUUID()
const secretKey = crypto.createHash('sha256').update(randomString).digest('hex')

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
    try {
        await expense()
        console.log(CONFIRMATION_MESSAGE)
    } catch (error) {
        // Fail the workflow run if an error occurs
        if (error instanceof Error) {
            core.setFailed(error.message)
        }
    }
}

export async function expense(): Promise<void> {
    /**
     * check if `GH_TOKEN` environment variable is set to interact with GitHub API
     */
    if (!process.env.GH_TOKEN) {
        throw new Error(
            'Please export a "GH_TOKEN" access token to generate the changelog.\n' +
                'See also https://github.com/webdriverio/webdriverio/blob/main/CONTRIBUTING.md#release-new-version'
        )
    }

    /**
     * ensure that Resend API key is given
     */
    if (!process.env.RESEND_API_KEY) {
        throw new Error(
            'Please export a "RESEND_API_KEY" access token into the environment.'
        )
    }

    const owner = core.getInput('org', { required: true })
    const repo = core.getInput('repo', { required: true })
    const prNumber = parseInt(core.getInput('prNumber', { required: true }), 10)
    const expenseAmount = parseInt(
        core.getInput('amount', { required: true }),
        10
    )
    const prURL = `https://github.com/${owner}/${repo}/pull/${prNumber}`

    const api = new Octokit({ auth: process.env.GH_TOKEN })
    const options = {
        owner,
        repo,
        pull_number: prNumber
    } as const
    const commits = await api.pulls.listCommits(options)
    const pr = await api.pulls.get(options)

    if (!pr.data.merge_commit_sha) {
        throw new Error('Pull request has not been merged yet!')
    }

    if (pr.data.labels.find(label => label.name.includes('Expensable'))) {
        throw new Error('Pull request has already been expensed!')
    }

    /**
     * currently we only support one author per PR, so the person
     * who makes the first commit receives the funds
     */
    const prAuthors = new Set(
        commits.data.map(commit => commit.commit.author?.email).filter(Boolean)
    )
    const prAuthorEmail = prAuthors.values().next().value

    console.log(`Send expense email to ${prAuthorEmail} for PR #${prNumber}`)
    console.log(`Amount to be expensed: $${expenseAmount}`)

    const resend = new Resend(process.env.RESEND_API_KEY)
    const subject = 'Thank you for contributing to WebdriverIO!'
    const data = await resend.emails.send({
        from,
        to: prAuthorEmail,
        bcc,
        subject,
        text: subject,
        react: Email({
            username: pr.data.user.login,
            prNumber,
            prURL,
            expenseAmount,
            secretKey
        })
    })

    if (data.error) {
        throw new Error(`Could not send email: ${data.error}`)
    }

    /**
     * Add a comment to the PR that an expense email has been sent out
     */
    console.log(`Adding comment to PR #${prNumber}, letting user know...`)
    await api.issues.createComment({
        owner,
        repo,
        issue_number: prNumber,
        body: `Hey __${pr.data.user.login}__ 👋\n\n${CONFIRMATION_COMMENT}`
    })

    console.log(`Adding expense label to PR #${prNumber}...`)
    await api.issues.addLabels({
        owner,
        repo,
        issue_number: prNumber,
        labels: [`Expensable $${expenseAmount} 💸`]
    })
}
