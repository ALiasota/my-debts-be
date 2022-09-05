"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calc = void 0;
const calc = (debtSum, payment, rate) => {
    let month = 0;
    let sum = debtSum;
    do {
        const debtBody = payment - (sum * rate) / 100 / 12;
        sum = sum - debtBody;
        month += 1;
    } while (sum > 0);
    const years = Math.floor(month / 12);
    const monthes = month - years * 12;
    const totalSum = month * payment;
    return { years, monthes, totalSum };
};
exports.calc = calc;
//# sourceMappingURL=calcService.js.map