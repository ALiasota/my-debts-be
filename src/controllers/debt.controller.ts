import { getAllDebts, addDebt } from '../services/debt.service'
import { IDebt } from 'types/debt.type'
import { Request } from 'express'

export const getAllDebtsController = async (): Promise<IDebt[]> => {
  const debts = await getAllDebts()
  return debts
}

export const addDebtController = async (req: Request): Promise<IDebt> => {
  const newDebt = req.body
  const debt = await addDebt(newDebt)
  return debt
}
