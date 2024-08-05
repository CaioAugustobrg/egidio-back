import { Entity } from "../core/Entity";

export interface TruckProps {
    licensePlate: string
}

export class Truck extends Entity<TruckProps> {
    public licensePlate: string
    
    public constructor(props: TruckProps) {
        super();
       
        this.licensePlate = props.licensePlate
        }
}

