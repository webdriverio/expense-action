/**
 * JWT payload interface for expense keys
 */
export interface ExpenseJWTPayload {
    owner: string
    repo: string
    prNumber: number
    amount: number
    email: string
    iat: number
    exp: number
}
