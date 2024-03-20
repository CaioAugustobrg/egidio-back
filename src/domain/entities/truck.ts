import { Entity } from "../core/Entity";

export interface TruckProps {
    truckBooleanValuesId: boolean
    truckStringValuesId: boolean
}

export class Truck extends Entity<TruckProps> {
    public truckBooleanValuesId: boolean
    public truckStringValuesId: boolean
    
    public constructor(props: TruckProps) {
        super();
        this.truckBooleanValuesId = props.truckBooleanValuesId
        this.truckStringValuesId = props.truckStringValuesId
        }

    
}

