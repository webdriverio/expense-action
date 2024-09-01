import * as core from '@actions/core'
import crypto from 'node:crypto'
import { Resend } from 'resend'
import { Octokit } from '@octokit/rest'

import Email from './mail.js'
import {
    CONFIRMATION_COMMENT,
    CONFIRMATION_COMMENT_GHNOREPLY,
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

export async function expense(
    { actionRepo, resendAPIKey, githubToken } = {
        actionRepo: process.env.GITHUB_REPOSITORY,
        resendAPIKey: process.env.RESEND_API_KEY,
        githubToken: process.env.GH_TOKEN
    }
): Promise<void> {
    /**
     * check if `GH_TOKEN` environment variable is set to interact with GitHub API
     */
    if (!githubToken) {
        throw new Error(
            'Please export a "GH_TOKEN" access token into the environment.'
        )
    }

    /**
     * ensure that Resend API key is given
     */
    if (!resendAPIKey) {
        throw new Error(
            'Please export a "RESEND_API_KEY" access token into the environment.'
        )
    }

    /**
     * get PR information from environment variables
     */
    if (!actionRepo) {
        throw new Error(
            'Could not get repository information from environment, make sure `GITHUB_REPOSITORY` is defined in the environment'
        )
    }

    const [owner, repo] = actionRepo.split('/')
    const prNumber = parseInt(core.getInput('prNumber', { required: true }), 10)
    const expenseAmount = parseInt(
        core.getInput('amount', { required: true }),
        10
    )
    console.log(
        `Expensing PR ${owner}/${repo}#${prNumber} for $${expenseAmount}`
    )

    const prURL = `https://github.com/${owner}/${repo}/pull/${prNumber}`

    const api = new Octokit({ auth: githubToken })
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
    const prAuthorEmail = prAuthors.values().next().value as string

    /**
     * Checks if the email address ends up with the Github no reply.
     * There is an issue with GitHub not redirecting emails to the user
     * See issue #86 for more information
     */
    const isNoReplyGithubEmail = prAuthorEmail.endsWith(
        '@users.noreply.github.com'
    )

    console.log(`Send expense email to ${prAuthorEmail} for PR #${prNumber}`)
    console.log(`Amount to be expensed: $${expenseAmount}`)

    const resend = new Resend(resendAPIKey)
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
            owner,
            repo,
            prURL,
            expenseAmount,
            secretKey
        })
    })

    if (data.error) {
        throw new Error(`Could not send email: ${data.error}`)
    }

    const issueOptions = {
        owner,
        repo,
        issue_number: prNumber
    } as const

    const comment = isNoReplyGithubEmail
        ? CONFIRMATION_COMMENT_GHNOREPLY
        : CONFIRMATION_COMMENT

    /**
     * Add a comment to the PR that an expense email has been sent out
     */
    console.log(`Adding comment to PR #${prNumber}, letting user know...`)
    await api.issues.createComment({
        ...issueOptions,
        body: `Hey __${pr.data.user.login}__ 👋\n\n${comment}`
    })

    console.log(`Adding expense label to PR #${prNumber}...`)
    await api.issues.addLabels({
        ...issueOptions,
        labels: [`Expensable $${expenseAmount} 💸`]
    })
}
