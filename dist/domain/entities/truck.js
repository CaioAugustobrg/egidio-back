"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = void 0;
const Entity_1 = require("../core/Entity");
class Truck extends Entity_1.Entity {
    constructor(truckBooleanId, truckStringId) {
        super();
        this.truckBooleanId = truckBooleanId;
        this.truckStringId = truckStringId;
    }
}
exports.Truck = Truck;
