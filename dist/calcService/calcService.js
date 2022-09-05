"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calc = void 0;
const calc = (debtSum, payment, rate) => {
    let month = 0;
    let sum = debtSum;
    do {
        const paymentBody = payment - (sum * rate) / 100 / 12;
        sum = sum - paymentBody;
        month += 1;
    } while (sum > payment);
    const years = Math.floor(month / 12);
    const months = month - years * 12;
    const totalSum = Math.ceil(month * payment + sum);
    return { years, months, totalSum };
};
exports.calc = calc;
//# sourceMappingURL=calcService.js.map