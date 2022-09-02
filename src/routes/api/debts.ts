import { Router } from 'express'
import asyncWrapper from '../../middlewares/asyncWrapper'
import { getAllDebtsController, addDebtController } from '../../controllers/debt.controller'
import debtValidationMiddleware from '../../middlewares/debtValidationMiddleware'

const debtRouter: Router = Router()

debtRouter.get('', asyncWrapper(getAllDebtsController))

debtRouter.post('/', debtValidationMiddleware, asyncWrapper(addDebtController))

export default debtRouter
