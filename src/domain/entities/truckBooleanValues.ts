import { Entity } from "../core/Entity";
import { Truck } from "./truck";

export interface TruckBooleanProps {
    clrv: boolean
    cvv: boolean
    antt: boolean
    furos: boolean
    vedacao: boolean
    borrachasPortas: boolean
    aparelhoFrio: boolean
    ganchos: boolean
    limpezaQuantidades: boolean
    pneusIluminacao: boolean
    farois: boolean
    lanternas: boolean
    luzInternaBau: boolean
    truckId: String
}

export class TruckBooleanValues extends Entity<TruckBooleanProps> {
    public clrv: boolean
    public cvv: boolean
    public antt: boolean
    public furos: boolean
    public vedacao: boolean
    public borrachasPortas: boolean
    public aparelhoFrio: boolean
    public ganchos: boolean
    public limpezaQuantidades: boolean
    public farois: boolean
    public lanternas: boolean
    public luzInternaBau: boolean
    public truckId: String
    public constructor(props: TruckBooleanProps) {
        super();
        this.clrv = props.clrv
        this.cvv = props.cvv
        this.antt = props.antt
        this.furos = props.furos
        this.vedacao = props.vedacao
        this.borrachasPortas = props.borrachasPortas
        this.aparelhoFrio = props.aparelhoFrio
        this.ganchos = props.ganchos
        this.limpezaQuantidades = props.limpezaQuantidades
        this.farois = props.farois
        this.lanternas = props.lanternas
        this.luzInternaBau = props.luzInternaBau
        this.truckId = props.truckId
        }

    
}

