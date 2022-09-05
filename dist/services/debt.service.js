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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifyExtra = exports.notify = exports.addDebt = exports.getAllDebts = void 0;
const debt_1 = __importDefault(require("../models/debt"));
const twillo_1 = require("../smsService/twillo");
const calcService_1 = require("../calcService/calcService");
const getAllDebts = () => __awaiter(void 0, void 0, void 0, function* () {
    const debts = yield debt_1.default.find();
    return debts;
});
exports.getAllDebts = getAllDebts;
const addDebt = (debt) => __awaiter(void 0, void 0, void 0, function* () {
    const NewDebt = new debt_1.default(debt);
    const response = yield NewDebt.save();
    return response;
});
exports.addDebt = addDebt;
const notify = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const debt = yield debt_1.default.findOne({ _id: id });
    if (debt) {
        const { borrowerName, borrowerPhone, outstandingAmount, debtName, minimalPayment } = debt;
        yield (0, twillo_1.sendNotify)({
            borrowerName,
            borrowerPhone,
            outstandingAmount,
            debtName,
            minimalPayment
        });
    }
    return debt;
});
exports.notify = notify;
const notifyExtra = (id, extraPayment) => __awaiter(void 0, void 0, void 0, function* () {
    const debt = yield debt_1.default.findOne({ _id: id });
    if (debt) {
        const { borrowerName, borrowerPhone, outstandingAmount, minimalPayment, interestRate } = debt;
        let saveMonthes = 0;
        let saveYears = 0;
        const newPayment = extraPayment + minimalPayment;
        const currentValues = (0, calcService_1.calc)(outstandingAmount, minimalPayment, interestRate);
        const newValues = (0, calcService_1.calc)(outstandingAmount, newPayment, interestRate);
        const saveAmount = currentValues.totalSum - newValues.totalSum;
        if (newValues.monthes > currentValues.monthes) {
            saveMonthes = currentValues.monthes - newValues.monthes + 12;
            saveYears = currentValues.years - newValues.years - 1;
        }
        else {
            saveMonthes = currentValues.monthes - newValues.monthes;
            saveYears = currentValues.years - newValues.years;
        }
        yield (0, twillo_1.sendExtraNotify)({
            borrowerName,
            borrowerPhone,
            extraPayment,
            saveAmount,
            saveYears,
            saveMonthes
        });
    }
    return extraPayment;
});
exports.notifyExtra = notifyExtra;
//# sourceMappingURL=debt.service.js.map