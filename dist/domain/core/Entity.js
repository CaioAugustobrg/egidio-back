"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const crypto_1 = __importDefault(require("crypto"));
class Entity {
    constructor(id, createdAt, updateAt) {
        this.id = id !== null && id !== void 0 ? id : crypto_1.default.randomUUID();
        this.createdAt = createdAt !== null && createdAt !== void 0 ? createdAt : new Date();
        this.updateAt = updateAt !== null && updateAt !== void 0 ? updateAt : new Date();
    }
}
exports.Entity = Entity;
