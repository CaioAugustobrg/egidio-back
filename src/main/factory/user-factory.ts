import { CreateTruckUseCase } from "../../domain/usecases/create-truck/create-truck";
import { CreateTruckVerificationUseCase } from "../../domain/usecases/create-truck/create-truck-values";
import { CreateUserDriverUseCase } from "../../domain/usecases/create-user/create-user-driver";
import { FindAllTrucksUseCase } from "../../domain/usecases/find-truck/find-all-trucks";
import { PrismaTruckRepository } from "../../external/prisma/prisma-truck-repository";
import { PrismaUserRepository } from "../../external/prisma/prisma-user-repository";
import { TruckController } from "../../presentation/controllers/truck-controller";
import { UserController } from "../../presentation/controllers/user-controller";

const prismaUserRepository = new PrismaUserRepository()

const createUserDriverUseCase = new CreateUserDriverUseCase(
    prismaUserRepository
)


const userController = new UserController(
    createUserDriverUseCase
)
export {userController}