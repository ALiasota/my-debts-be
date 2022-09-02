import Debt from 'models/debt'
import { IDebt } from 'types/debt.type'
import { sendSMS } from 'smsService/twillo'

export const getAllDebts = async (): Promise<IDebt[]> => {
  const debts = Debt.find()
  return debts
}

export const addDebt = async (debt: IDebt): Promise<IDebt> => {
  const { borrowerName, borrowerPhone, debtName, outstandingAmount, minimalPayment } = debt
  const NewDebt = new Debt(debt)
  await NewDebt.save()
  await sendSMS({ borrowerName, borrowerPhone, outstandingAmount, debtName, minimalPayment })
  return debt
}
