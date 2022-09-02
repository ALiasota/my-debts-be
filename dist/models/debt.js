"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const deftSchema = new mongoose_1.Schema({
    borrowerName: {
        type: String,
        required: true
    },
    borrowerPhone: {
        type: String,
        required: true
    },
    debtName: {
        type: String,
        required: true
    },
    outstandingAmount: {
        type: Number,
        required: true
    },
    interestRate: {
        type: Number,
        required: true
    },
    minimalPayment: {
        type: Number,
        required: true
    }
}, { versionKey: false, timestamps: true });
const Debt = (0, mongoose_1.model)('Debt', deftSchema);
exports.default = Debt;
//# sourceMappingURL=debt.js.map