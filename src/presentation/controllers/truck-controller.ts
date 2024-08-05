import { type Request, type Response } from 'express';
import { CreateTruckVerificationUseCase } from '../../domain/usecases/create-truck/create-truck-values';
import { saveCsvToFileAndOpen } from '../../utils/jsonToCsv';
import fs from 'fs';
import { IMessage, generateWelcomeEmailToProfessorContent } from '../../external/mail-service/implementation/generate-email';
import EmailSender from '../../external/mail-service/implementation/send-grid-mail-provider';
import { CreateTruckUseCase } from '../../domain/usecases/create-truck/create-truck';
import { FindAllTrucksUseCase } from '../../domain/usecases/find-truck/find-all-trucks';

export class TruckController {
    constructor(
        private readonly createTruckVerificationUseCase: CreateTruckVerificationUseCase,
        private readonly createTruckUseCase: CreateTruckUseCase,
        private readonly findAllTrucksUseCase: FindAllTrucksUseCase
    ) {}

    async createTruckVerification(request: Request, response: Response) {
        const httpRequest = {
            body: request.body,
            params: request.params,
        };
    
        try {
            console.log('controller', httpRequest.params)
            // Lida com o caso de criação do caminhão
            await this.createTruckVerificationUseCase.handle(httpRequest.body, httpRequest.params.selectedTruckId);
    
            // Salva o CSV e retorna o caminho do arquivo
            // const filePath = await saveCsvToFileAndOpen(request.body, './output.csv');
    
            console.log('CSV file saved at:', );
    
            // Verifique se o arquivo existe antes de ler
            if (fs.existsSync('output.csv')) {
                // Lê o conteúdo do arquivo em base64
                const fileContent = fs.readFileSync('output.csv').toString("base64")
                
                console.log('File content read successfully', fileContent);
                
        
                const attachments = [{
                    filename: 'output.csv',
                    contentType: 'application/csv',
                    content: fileContent,
                    disposition: 'attachment',
                }];
    
                const emailContent: IMessage = generateWelcomeEmailToProfessorContent('kaanko75@gmail.com', attachments);
                
               console.log('Email content generated:', attachments);
                
                const emailSender = new EmailSender(process.env.SENDGRID_API_KEY!)
                
                await emailSender.sendEmail(emailContent);
                
               // console.log('Email sent successfully');
    
                return response.status(201).json(httpRequest.body);
            } else {
               // console.error('CSV file does not exist:', filePath);
                return response.status(404).json({ error: 'CSV file not found' });
            }
        } catch (error: any) {
            console.error('Error creating truck:', error);
            return response.status(error.code).json({ message: error.message});
        }
    }


    async createTruck(request: Request, response: Response) {
        const httpRequest = {
            body: request.body,
        }
        console.log(httpRequest)
        try {
            await this.createTruckUseCase.handle(httpRequest.body)
            return response.status(200).json('Caminhão cadastrado com sucesso!')
        } catch (error: any) {
            return response.status(error.code).json({ message: error.message});
        }
    }

    async findAllTrucks(request: Request, response: Response) {
        
        try {
            let findAllTrucks = await this.findAllTrucksUseCase.handle()
            console.log( 'controller',findAllTrucks)
            return response.status(200).json({findAllTrucks})
        } catch (error: any) {
            console.error('Error finding truck:', error);
            return response.status(error.code).json({ message: error.message});
        }
    }

    // async createTruck(request: Request, response: Response) {
    //     const httpRequest = {
    //         body: request.body,
    //         params: request.params,
    //     };

    //     try {
    //         await this.
    //     } catch (error) {
    //         console.error('Error creating truck:', error);
    //         return response.status(500).json({ error: 'Internal Server Error' });
    //     }
    // }
}
