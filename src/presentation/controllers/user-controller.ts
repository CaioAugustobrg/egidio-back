import { Request, Response } from "express";
import { CreateUserDriverUseCase } from "../../domain/usecases/create-user/create-user-driver";

export class UserController {
    constructor(
      private readonly createUserDriverUseCase: CreateUserDriverUseCase
    ) {}
async createUserDriver (
    request: Request, response: Response
) {
    const httpRequest = {
        body: request.body,
        params: request.params,
    };
    try {
        await this.createUserDriverUseCase.handle(httpRequest.body)
        return response.status(200).json('Caminhoneiro cadastrado com sucesso!')

    } catch (error: any) {
        // console.error('Error creating user driver:', error);
        return response.status(error.code).json({ message: error.message});
    }
}
}