import { Router } from 'express'
import asyncWrapper from '../../middlewares/asyncWrapper'
import { getAllDebtsController, addDebtController, notifyController } from '../../controllers/debt.controller'
import debtValidationMiddleware from '../../middlewares/debtValidationMiddleware'

const debtRouter: Router = Router()

debtRouter.get('', asyncWrapper(getAllDebtsController))

debtRouter.post('/', debtValidationMiddleware, asyncWrapper(addDebtController))

debtRouter.post('/:id', asyncWrapper(notifyController))

export default debtRouter
