import { User, UserProps } from "../../domain/entities/user";
import { UserRepository } from "../../domain/usecases/ports/user-repository";
import { PrismaHelper } from "../helpers/prisma-helper";

export class PrismaUserRepository implements UserRepository {
    async createUserDriver(
        props: User
    ): Promise<User | null> {
        if (!props) {
            return null;
          }
         
          const createUserDriver = await PrismaHelper.user.create({
            data: {
                email: props.email,
                name: props.name,
                systemRole: props.systemRole,
                id: props.id,
                createdAt: props.createdAt,
                updateAt: props.updateAt
            }
          })
          return createUserDriver as unknown as User;
    }

    async findUserByEmail(
        email: string
    ): Promise<User | null> {
        if (!email) {
            return null
        }
        const findUserByEmail = await PrismaHelper.user.findUnique({
            where: {
                email
            }
        })
        return findUserByEmail as unknown as User
    }
}