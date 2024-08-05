import { PrismaTruckRepository } from "../../../external/prisma/prisma-truck-repository";
import ApiError from "../../../utils/api-error";
import { User } from "../../entities/user";
import { TruckVerificationProps } from "../../entities/truckVerification";
import { PrismaUserRepository } from "../../../external/prisma/prisma-user-repository";

export class CreateUserDriverUseCase {
  constructor(private readonly prismaUserRepository: PrismaUserRepository) {}
  async handle(userProps: User): Promise<null | ApiError> {
    let userDriver = new User(userProps)


    let findUserByEmail = await this.prismaUserRepository.findUserByEmail(userProps.email)

 if (findUserByEmail) {
      throw new ApiError({
        code: 409,
        message: "Já existe um caminhoneiro com esse email",
      });
    }
    let createUserDriver =
      await this.prismaUserRepository.createUserDriver(
        userDriver
      );
    if (!createUserDriver) {
      throw new ApiError({
        code: 409,
        message: "Já existe um curso com esse título",
      });
    }
    return null;
  }
}
