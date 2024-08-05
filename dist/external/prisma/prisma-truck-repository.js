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
exports.PrismaTruckRepository = void 0;
const truckBooleanValues_1 = require("../../domain/entities/truckBooleanValues");
const truckStringValues_1 = require("../../domain/entities/truckStringValues");
const prisma_helper_1 = require("../helpers/prisma-helper");
const truck_1 = require("../../domain/entities/truck");
class PrismaTruckRepository {
    createTruckStringProps(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const create = new truckStringValues_1.TruckStringValues(props);
            if (!create) {
                return null;
            }
            const createTruckStringValues = yield prisma_helper_1.PrismaHelper.truckStringValues.create({
                data: {
                    id: create.id,
                    antt: create.antt,
                    aparelhoFrio: create.aparelhoFrio,
                    borrachasPortas: create.borrachasPortas,
                    clrv: create.clrv,
                    cvv: create.cvv,
                    farois: create.farois,
                    furos: create.furos,
                    ganchos: create.ganchos,
                    lanternas: create.lanternas,
                    limpezaQuantidades: create.limpezaQuantidades,
                    luzInternaBau: create.luzInternaBau,
                    vedacao: create.vedacao,
                },
            });
            return createTruckStringValues;
        });
    }
    createTruckBooleanProps(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const create = new truckBooleanValues_1.TruckBooleanValues(props);
            if (!create) {
                return null;
            }
            const createTruckBooleanValues = yield prisma_helper_1.PrismaHelper.truckBooleanValues.create({
                data: {
                    id: create.id,
                    antt: create.antt,
                    aparelhoFrio: create.aparelhoFrio,
                    borrachasPortas: create.borrachasPortas,
                    clrv: create.clrv,
                    cvv: create.cvv,
                    farois: create.farois,
                    furos: create.furos,
                    ganchos: create.ganchos,
                    lanternas: create.lanternas,
                    limpezaQuantidades: create.limpezaQuantidades,
                    luzInternaBau: create.luzInternaBau,
                    vedacao: create.vedacao,
                },
            });
            return createTruckBooleanValues;
        });
    }
    create(truckBooleanId, truckStringId) {
        return __awaiter(this, void 0, void 0, function* () {
            const create = new truck_1.Truck(truckBooleanId, truckStringId);
            if (!create) {
                return null;
            }
            yield prisma_helper_1.PrismaHelper.truck.create({
                data: {
                    id: create.id,
                    truckBooleanValuesId: create.truckBooleanId,
                    truckStringValuesId: create.truckStringId,
                },
            });
            return create;
        });
    }
}
exports.PrismaTruckRepository = PrismaTruckRepository;
