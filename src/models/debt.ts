import { Model, model, Schema } from 'mongoose'
import { IDebt } from '../types/debt.type'

const deftSchema = new Schema<IDebt>(
  {
    borrowerName: {
      type: String,
      required: true
    },
    borrowerPhone: {
      type: String,
      required: true
    },
    debtName: {
      type: String,
      required: true
    },
    outstandingAmount: {
      type: Number,
      required: true
    },
    interestRate: {
      type: Number,
      required: true
    },
    minimalPayment: {
      type: Number,
      required: true
    },
    expiryDate: {
      type: Object,
      required: true
    }
  },
  { versionKey: false, timestamps: true }
)

const Debt: Model<IDebt> = model('Debt', deftSchema)

export default Debt
