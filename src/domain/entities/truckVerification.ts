import { Entity } from "../core/Entity";
import { Truck } from "./truck";

export interface TruckVerificationProps {
    truckBooleanId: string
    truckStringId: string
    licensePlate: string
}

export class TruckVerification extends Entity<TruckVerificationProps> {
    public  truckBooleanId?: string
    public truckStringId?: string
    public licensePlate: string
    public constructor(props: TruckVerificationProps) {
        super();
        this.truckBooleanId = props.truckBooleanId
        this.truckStringId = props.truckStringId
        this.licensePlate = props.licensePlate
      
        }

    
}

