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
exports.sendExtraNotify = exports.sendNotify = void 0;
const twilio_1 = require("twilio");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const sendNotify = ({ borrowerName, borrowerPhone, outstandingAmount, debtName, minimalPayment }) => __awaiter(void 0, void 0, void 0, function* () {
    if (accountSid && authToken && twilioNumber && borrowerPhone) {
        const client = new twilio_1.Twilio(accountSid, authToken);
        client.messages
            .create({
            from: twilioNumber,
            to: borrowerPhone,
            body: `Hey ${borrowerName}! You have an outstanding amount of 
            ${outstandingAmount} for ${debtName}.Please don't forget 
            to pay your minimum monthly payment of ${minimalPayment} / month.`
        })
            .then(message => console.log(message.sid));
    }
    else {
        console.error('You are missing one of the variables you need to send a message');
    }
});
exports.sendNotify = sendNotify;
const sendExtraNotify = ({ borrowerName, borrowerPhone, extraPayment, saveAmount, saveYears, saveMonthes }) => __awaiter(void 0, void 0, void 0, function* () {
    if (accountSid && authToken && twilioNumber && borrowerPhone) {
        const client = new twilio_1.Twilio(accountSid, authToken);
        client.messages
            .create({
            from: twilioNumber,
            to: borrowerPhone,
            body: `Hey ${borrowerName}!
                Pay extra ${extraPayment}/month.
                And you'll save $${saveAmount} and ${saveYears} y, ${saveMonthes} months`
        })
            .then(message => console.log(message.sid));
    }
    else {
        console.error('You are missing one of the variables you need to send a message');
    }
});
exports.sendExtraNotify = sendExtraNotify;
//# sourceMappingURL=twillo.js.map