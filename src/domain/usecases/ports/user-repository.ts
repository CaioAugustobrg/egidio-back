import { User, UserProps } from "../../entities/user";

export interface UserRepository {
    createUserDriver: (props: User) => Promise<User | null>
    findUserByEmail: (email: string) => Promise<User | null>
 }