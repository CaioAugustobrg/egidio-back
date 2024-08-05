import { PrismaTruckRepository } from "../../../external/prisma/prisma-truck-repository";
import ApiError from "../../../utils/api-error";
import { Truck } from "../../entities/truck";
import { TruckVerificationProps } from "../../entities/truckVerification";

export class CreateTruckUseCase {
  constructor(private readonly prismaTruckRepository: PrismaTruckRepository) {}
  async handle(truckProps: Truck): Promise<null | ApiError> {
    console.log('121222', truckProps)
   
      let licensePlate = truckProps.licensePlate
      let findTruckByLicensePlate = await this.prismaTruckRepository.findTruckByLicensePlate(licensePlate)
      if (findTruckByLicensePlate) {
        throw new ApiError({
          code: 409,
          message: "Já existe um caminhão cadastrado com essa placa",
        });
      }
      //   const 
      // const findTruckByLicensePlate = await this.prismaTruckRepository.findTruckByLicensePlate(truckProps.licensePlate);
      // if (findTruckByLicensePlate) {
      //   throw new ApiError({
      //     code: 409,
      //     message: "Já existe um caminhão cadastrado com essa placa",
      //   });
      // }
      let createTruck =
      await this.prismaTruckRepository.createTruck(
     truckProps
      );

    if (!createTruck) {
      throw new ApiError({
        code: 409,
        message: "Já existe um curso com esse título",
      });
    }
    return null;
  }
}
