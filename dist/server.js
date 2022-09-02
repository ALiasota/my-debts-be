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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const connection_1 = __importDefault(require("./db/connection"));
const debts_1 = __importDefault(require("./routes/api/debts"));
const app = (0, express_1.default)();
(0, dotenv_1.config)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/debts', debts_1.default);
const port = process.env.PORT || 3021;
app.use((_, res) => {
    res.status(404).json({ message: 'Not found' });
});
app.use((err, _, res, _1) => {
    res.status(500).json({ message: err.message });
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connection_1.default)();
    app.listen(port, () => {
        console.log(`Server running. Use our API on port: ${port}`);
    });
});
start();
//# sourceMappingURL=server.js.map