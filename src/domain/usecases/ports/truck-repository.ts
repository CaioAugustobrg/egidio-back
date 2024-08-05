import { Truck } from "../../entities/truck";
import { type TruckBooleanProps } from "../../entities/truckBooleanValues";
import { type TruckStringProps } from "../../entities/truckStringValues";

export interface TruckRepository {
    createTruckBooleanProps: (props: TruckBooleanProps ) => Promise<TruckBooleanProps | null>
    createTruckStringProps: (props: TruckStringProps ) => Promise<TruckStringProps | null>
    createTruck: (props: Truck) => Promise<Truck | null>
    createTruckVerification: (id: string,truckStringId: string, truckBooleanId: string) => Promise<Truck | null>
    findTruckById: (selectedTruckId: string) => Promise<Truck | null>
    findAllTrucks: () => Promise<Truck[] | null>
    findTruckByLicensePlate: (licensePlate: string) => Promise<Truck | null>


}