"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDebtController = exports.getAllDebtsController = void 0;
const debt_service_1 = require("../services/debt.service");
const getAllDebtsController = () => __awaiter(void 0, void 0, void 0, function* () {
    const debts = yield (0, debt_service_1.getAllDebts)();
    return debts;
});
exports.getAllDebtsController = getAllDebtsController;
const addDebtController = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const newDebt = req.body;
    const debt = yield (0, debt_service_1.addDebt)(newDebt);
    return debt;
});
exports.addDebtController = addDebtController;
//# sourceMappingURL=debt.controller.js.map