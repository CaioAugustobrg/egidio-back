import { CreateTruckUseCase } from "../../domain/usecases/create-truck/create-truck";
import { CreateTruckVerificationUseCase } from "../../domain/usecases/create-truck/create-truck-values";
import { FindAllTrucksUseCase } from "../../domain/usecases/find-truck/find-all-trucks";
import { PrismaTruckRepository } from "../../external/prisma/prisma-truck-repository";
import { TruckController } from "../../presentation/controllers/truck-controller";

const prismaTruckRepository = new PrismaTruckRepository()

const createTruckVerificationUseCase = new CreateTruckVerificationUseCase(
    prismaTruckRepository
)

const createTruck = new CreateTruckUseCase(
    prismaTruckRepository
)
const findAllTrucks = new FindAllTrucksUseCase(
    prismaTruckRepository
)

const truckController = new TruckController(
    createTruckVerificationUseCase,
    createTruck,
    findAllTrucks
)
export {truckController}