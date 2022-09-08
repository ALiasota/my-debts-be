import * as Joi from 'joi'
import { Request, Response, NextFunction } from 'express'
import { IDebt } from '../types/debt.type'

const debtValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const schema: Joi.ObjectSchema<IDebt> = Joi.object({
    borrowerName: Joi.string().min(3).max(30).required(),
    borrowerPhone: Joi.string().length(13).required(),
    debtName: Joi.string().min(3).max(30).required(),
    outstandingAmount: Joi.number().min(1).required(),
    interestRate: Joi.number().min(1).max(100).required(),
    minimalPayment: Joi.number().min(1).required(),
    expiryDate: Joi.date().required(),
    _id: Joi.string()
  })
  const valid = schema.validate(req.body)

  if (valid.error) {
    return res.status(400).json({
      status: valid.error
    })
  }
  next()
}

export default debtValidationMiddleware
