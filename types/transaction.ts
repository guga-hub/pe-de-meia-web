export type TransactionType = 'INCOME' | 'EXPENSE'
export type AccountType = 'CHECKING' | 'SAVINGS' | 'WALLET'

export interface TransactionVO {
  id: string
  description: string
  amount: number
  type: TransactionType
  date: string
  categoryName: string
  accountName: string
  createdAt: string
}

export interface CreateTransactionDTO {
  accountId: string
  categoryId: string
  amount: number
  description: string
  type: TransactionType
  date: string
}

export interface UpdateTransactionDTO extends CreateTransactionDTO {
  id: string
}

export interface AccountVO {
  id: string
  name: string
  type: AccountType
  balance: number
  currency: string
  createdAt: string
}

export interface CreateAccountDTO {
  name: string
  type: AccountType
  currency: string
  initialBalance?: number
}

export interface CategoryVO {
  id: string
  name: string
  type: 'INCOME' | 'EXPENSE'
  color: string
  icon: string
  createdAt: string
}

export interface CreateCategoryDTO {
  name: string
  type: 'INCOME' | 'EXPENSE'
  color: string
  icon: string
}

export interface SummaryVO {
  totalIncome: number
  totalExpense: number
  balance: number
  period: string
}

export interface CategorySummaryVO {
  categoryName: string
  total: number
  percentage: number
}

export interface MonthlySummaryVO {
  month: string
  income: number
  expense: number
  balance: number
}
