import { Entity } from "../core/Entity";
import { Truck } from "./truck";

export interface TruckStringProps {
    clrv?: string
    cvv?: string
    antt?: string
    furos?: string
    vedacao?: string
    borrachasPortas?: string
    aparelhoFrio?: string
    ganchos?: string
    limpezaQuantidades?: string
    pneusIluminacao?: string
    farois?: string
    lanternas?: string
    luzInternaBau?: string
    truckId?: string
}

export class TruckStringValues extends Entity<TruckStringProps> {
    public clrv?: string
    public cvv?: string
    public antt?: string
    public furos?: string
    public vedacao?: string
    public borrachasPortas?: string
    public aparelhoFrio?: string
    public ganchos?: string
    public pneusIluminacao?: string
    public limpezaQuantidades?: string
    public farois?: string
    public lanternas?: string
    public luzInternaBau?: string
    public truckId?: string
    public constructor(props: TruckStringProps) {
        super();
        this.clrv = props.clrv
        this.cvv = props.cvv
        this.antt = props.antt
        this.furos = props.furos
        this.vedacao = props.vedacao
        this.borrachasPortas = props.borrachasPortas
        this.aparelhoFrio = props.aparelhoFrio
        this.ganchos = props.ganchos
        this.pneusIluminacao = props.pneusIluminacao
        this.limpezaQuantidades = props.limpezaQuantidades
        this.farois = props.farois
        this.lanternas = props.lanternas
        this.luzInternaBau = props.luzInternaBau
        this.truckId = props.truckId
        }

    
}

