export type NotifyForm = {
  borrowerName: string
  borrowerPhone: string
  debtName: string
  outstandingAmount: number
  interestRate?: number
  minimalPayment: number
  _id?: string
}

export type ExtraNotifyForm = {
  borrowerName: string
  borrowerPhone: string
  extraPayment: number
  saveAmount: number
  saveYears: number
  saveMonthes: number
}
