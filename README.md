# WebdriverIO Expense Action

[![GitHub Super-Linter](https://github.com/actions/typescript-action/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter) ![CI](https://github.com/actions/typescript-action/actions/workflows/ci.yml/badge.svg) [![Check dist/](https://github.com/actions/typescript-action/actions/workflows/check-dist.yml/badge.svg)](https://github.com/actions/typescript-action/actions/workflows/check-dist.yml)

---

> A GitHub Action that enables WebdriverIO TSC members to grant expense requests for contributed PRs to the project.

## Usage

Create a workflow file in a WebdriverIO ecosystem project:

```yaml
name: Expense Contribution

on:
  workflow_dispatch:
    inputs:
      prNumber:
        description: "Number of the PR (without #)"
        required: true
      amount:
        description: "The expense amount you like to grant for the contribution in $"
        required: true
        type: choice
        default: "patch"
        options:
          - 25
          - 50
          - 100
          - 150
          - 200
          - 250
          - 300
          - 350
          - 400
          - 450
          - 500
          - 550
          - 600
          - 650
          - 700
          - 750
          - 800
          - 850
          - 900
          - 950
          - 1000

jobs:
  authorize:
    runs-on: ubuntu-latest
    steps:
      - uses: octokit/request-action@v2.1.9
        with:
          route: GET /orgs/:organisation/teams/:team/memberships/${{ github.actor }}
          team: technical-steering-committee
          organisation: webdriverio
        env:
          GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}
  expense:
    permissions:
      contents: write
      id-token: write
    needs: [authorize]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          ref: 'main'
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 20.x
      - name: Run Expense Flow
        uses: webdriverio/expense-action
        with:
          org: webdriverio
          repo: webdriverio
          prNumber: ${{ github.event.inputs.prNumber }}
          amount: ${{ github.event.inputs.amount }}
        env:
          RESEND_API_KEY: ${{ secrets.RESEND_API_KEY }}
          GH_TOKEN: ${{ secrets.WDIO_BOT_GITHUB_TOKEN }}
```
