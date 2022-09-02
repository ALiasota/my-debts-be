"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asyncWrapper_1 = __importDefault(require("../../middlewares/asyncWrapper"));
const debt_controller_1 = require("../../controllers/debt.controller");
const debtValidationMiddleware_1 = __importDefault(require("../../middlewares/debtValidationMiddleware"));
const debtRouter = (0, express_1.Router)();
debtRouter.get('', (0, asyncWrapper_1.default)(debt_controller_1.getAllDebtsController));
debtRouter.post('/', debtValidationMiddleware_1.default, (0, asyncWrapper_1.default)(debt_controller_1.addDebtController));
debtRouter.post('/:id', (0, asyncWrapper_1.default)(debt_controller_1.notifyController));
exports.default = debtRouter;
//# sourceMappingURL=debts.js.map