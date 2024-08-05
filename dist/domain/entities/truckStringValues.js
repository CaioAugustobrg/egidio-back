"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckStringValues = void 0;
const Entity_1 = require("../core/Entity");
class TruckStringValues extends Entity_1.Entity {
    constructor(props) {
        super();
        this.clrv = props.clrv;
        this.cvv = props.cvv;
        this.antt = props.antt;
        this.furos = props.furos;
        this.vedacao = props.vedacao;
        this.borrachasPortas = props.borrachasPortas;
        this.aparelhoFrio = props.aparelhoFrio;
        this.ganchos = props.ganchos;
        this.limpezaQuantidades = props.limpezaQuantidades;
        this.farois = props.farois;
        this.lanternas = props.lanternas;
        this.luzInternaBau = props.luzInternaBau;
        this.truckId = props.truckId;
    }
}
exports.TruckStringValues = TruckStringValues;
