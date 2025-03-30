import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ExpenseEmail } from '../../src/mail'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ExpenseEmail
            repo="repo"
            owner="owner"
            prURL="prURL"
            prNumber={123}
            prTitle="prTitle"
            username="username"
            secretKey="secretKey"
            expenseAmount={456}
            key={0}
        />
    </StrictMode>
)
