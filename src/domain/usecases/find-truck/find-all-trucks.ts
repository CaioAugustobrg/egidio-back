import { PrismaTruckRepository } from "../../../external/prisma/prisma-truck-repository";
import ApiError from "../../../utils/api-error";
import { Truck } from "../../entities/truck";

export class FindAllTrucksUseCase {
    constructor(private readonly prismaTruckRepository: PrismaTruckRepository) {}
    async handle(): Promise<Truck[] | ApiError> {
        const findAllTrucks = await this.prismaTruckRepository.findAllTrucks()
        if (!findAllTrucks) {
            throw new ApiError({
                code: 409,
                message: "Já existe um curso com esse título",
              });
        }
        return findAllTrucks
    }
}