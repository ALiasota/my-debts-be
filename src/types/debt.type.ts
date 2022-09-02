import { Document } from 'mongoose'

export interface IDebt extends Document {
  borrowerName: string
  borrowerPhone: string
  debtName: string
  outstandingAmount: number
  interestRate?: number
  minimalPayment: number
  _id?: string
}
