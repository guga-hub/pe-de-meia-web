export interface SalaryInputDTO {
  salary: number
}

export interface AllocationVO {
  monthlySalary: number
  needsAmount: number
  wantsAmount: number
  investmentsAmount: number
  message: string
}

export interface FixedIncomeSimulationVO {
  productName: string
  monthlyContribution: number
  periodInMonths: number
  totalInvested: number
  totalWithReturn: number
  netReturn: number
  annualRate: number
  riskLabel: string
}

export interface VariableIncomeSimulationVO {
  productName: string
  monthlyContribution: number
  periodInMonths: number
  dividendYield: number
  historicalReturn: number
  riskLabel: string
}

export interface EmergencyFundVO {
  targetAmount: number
  currentAmount: number
  monthsToReach: number
  monthlyContribution: number
}

export interface MarketRatesVO {
  selic: number
  cdi: number
  ipca: number
  prefixedRate: number
  updatedAt: string
}

export interface GuideVO {
  allocation: AllocationVO
  emergencyFund: EmergencyFundVO
  fixedIncome: FixedIncomeSimulationVO[]
  varIncome: VariableIncomeSimulationVO[]
  steps: string[]
  ratesUsed: MarketRatesVO
  generatedAt: string
}

export interface OnboardingSessionVO {
  sessionToken: string
  guide?: GuideVO
  expiresAt: string
}
