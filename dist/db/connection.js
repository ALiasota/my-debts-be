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
const mongoose_1 = __importDefault(require("mongoose"));
const connectMongoose = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mangooseConnect = yield mongoose_1.default.connect(process.env.MANGO_URL, {
            dbName: 'db-debts'
        });
        console.log('Database connection successful');
        return mangooseConnect;
    }
    catch (err) {
        if (err instanceof TypeError) {
            console.error(err.message);
        }
        // Exit process with failure
        process.exit(1);
    }
});
exports.default = connectMongoose;
//# sourceMappingURL=connection.js.map