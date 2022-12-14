import { getAllDebts, addDebt, notify, notifyExtra } from '../services/debt.service'
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

export const notifyController = async (req: Request) => {
  const { id } = req.params
  const response = await notify(id)
  return response
}

export const notifyExtraController = async (req: Request) => {
  const { id } = req.params
  const request: { extraPayment: number } = req.body
  const response = await notifyExtra(id, request.extraPayment)
  return response
}
