export const CONFIRMATION_MESSAGE = 'All good 🎉 feels good to give back!'

const COMMENT_HEADER = `Thank you for your contribution to WebdriverIO! Your pull request has been marked as an "Expensable" contribution.

We've sent you an email with further instructions on how to claim your expenses from our development fund.\n`

const EMAIL_WARNING =
    'Please make sure to check your spam folder as well. If you have any questions, feel free to reach out to us at __expense@webdriver.io__ or in the contributing channel on [Discord](https://discord.webdriver.io).\n\n'
const EMAIL_WARNING_GHNOREPLY =
    "⚠️ You seemed to have committed using an email address ending up with `@users.noreply.github.com`, if you don't receive the email please feel free to reach out to us at __expense@webdriver.io__ or in the contributing channel on [Discord](https://discord.webdriver.io).\n\n"

const COMMENT_FOOTER = `We are looking forward to more contributions from you in the future 🙌

Have a nice day,
The WebdriverIO Team 🤖`

export const CONFIRMATION_COMMENT =
    COMMENT_HEADER + EMAIL_WARNING + COMMENT_FOOTER

export const CONFIRMATION_COMMENT_GHNOREPLY =
    COMMENT_HEADER + EMAIL_WARNING_GHNOREPLY + COMMENT_FOOTER

export const FROM = 'WebdriverIO Team <sponsor@webdriver.io>'
export const BCC = 'expense@webdriver.io'
