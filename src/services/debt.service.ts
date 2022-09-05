import Debt from '../models/debt'
import { IDebt } from '../types/debt.type'
import { sendNotify, sendExtraNotify } from '../smsService/twillo'
import { calc } from '../calcService/calcService'
export const getAllDebts = async (): Promise<IDebt[]> => {
  const debts = await Debt.find()
  return debts
}

export const addDebt = async (debt: IDebt): Promise<IDebt> => {
  const NewDebt = new Debt(debt)
  const response = await NewDebt.save()
  return response
}

export const notify = async (id: string) => {
  const debt = await Debt.findOne({ _id: id })
  if (debt) {
    const { borrowerName, borrowerPhone, outstandingAmount, debtName, minimalPayment } = debt
    await sendNotify({
      borrowerName,
      borrowerPhone,
      outstandingAmount,
      debtName,
      minimalPayment
    })
  }
  return debt
}

export const notifyExtra = async (id: string, extraPayment: number) => {
  const debt = await Debt.findOne({ _id: id })
  if (debt) {
    const { borrowerName, borrowerPhone, outstandingAmount, minimalPayment, interestRate } = debt
    let saveMonthes = 0
    let saveYears = 0
    const newPayment = extraPayment + minimalPayment
    const currentValues = calc(outstandingAmount, minimalPayment, interestRate!)
    const newValues = calc(outstandingAmount, newPayment, interestRate!)
    const saveAmount = currentValues.totalSum - newValues.totalSum
    if (newValues.months > currentValues.months) {
      saveMonthes = currentValues.months - newValues.months + 12
      saveYears = currentValues.years - newValues.years - 1
    } else {
      saveMonthes = currentValues.months - newValues.months
      saveYears = currentValues.years - newValues.years
    }
    await sendExtraNotify({
      borrowerName,
      borrowerPhone,
      extraPayment,
      saveAmount,
      saveYears,
      saveMonthes
    })
  }
  return extraPayment
}
