import express, { type Request, type Response } from 'express'
import { truckController } from '../factory/truck-factory'
import { userController } from '../factory/user-factory'
const router = express.Router()
router.get(
    '/teste',
    async (request: Request, response: Response) => {
        console.log(response.json)
        return response.send('oi')
      }
)
router.post(
    '/truck/:selectedTruckId',
    async (request: Request, response: Response) => {
      return await truckController.createTruckVerification(request, response)
    }
  )

  router.post(
    '/create/truck',
    async (request: Request, response: Response) => {
      return await truckController.createTruck(request, response)
    }
  )

  router.get(
    '/find-all-trucks',
    async (request: Request, response: Response) => {
      return await truckController.findAllTrucks(request, response)
    }
  )

  router.post(
    '/create-user-driver',
    async (request: Request, response: Response) => {
      return await userController.createUserDriver(request, response)
    }
  )
  
  export default router