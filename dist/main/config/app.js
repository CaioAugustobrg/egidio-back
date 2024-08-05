"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import router from '../routes'
const cors_1 = __importDefault(require("cors"));
// setupExpressSession(app)
const express_session_1 = __importDefault(require("express-session"));
// import { setupExpressSession } from './express-session'
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(router)
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)('keyboard cat'));
app.use((0, cors_1.default)({
    origin: 'http://127.0.0.1:5173',
    credentials: true
}));
app.use((0, express_session_1.default)({
    // store:
    secret: (_a = process.env.SESSION_SECRET) !== null && _a !== void 0 ? _a : 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 3
    }
}));
exports.default = app;
