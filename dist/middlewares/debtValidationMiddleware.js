"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __importStar(require("joi"));
const debtValidationMiddleware = (req, res, next) => {
    const schema = Joi.object({
        borrowerName: Joi.string().min(3).max(30).required(),
        borrowerPhone: Joi.string().length(13).required(),
        debtName: Joi.string().min(3).max(30).required(),
        outstandingAmount: Joi.number().min(1).required(),
        interestRate: Joi.number().min(1).max(100).required(),
        minimalPayment: Joi.number().min(1).required(),
        _id: Joi.string()
    });
    const valid = schema.validate(req.body);
    if (valid.error) {
        return res.status(400).json({
            status: valid.error
        });
    }
    next();
};
exports.default = debtValidationMiddleware;
//# sourceMappingURL=debtValidationMiddleware.js.map