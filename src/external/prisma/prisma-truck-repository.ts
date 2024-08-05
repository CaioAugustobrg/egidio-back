import {
  TruckBooleanValues,
  type TruckBooleanProps,
} from "../../domain/entities/truckBooleanValues";
import {
  TruckStringProps,
  TruckStringValues,
} from "../../domain/entities/truckStringValues";
import { TruckRepository } from "../../domain/usecases/ports/truck-repository";
import { PrismaHelper } from "../helpers/prisma-helper";
import { Truck, TruckProps } from "../../domain/entities/truck";

export class PrismaTruckRepository implements TruckRepository {

 
  async createTruckStringProps(
    props: any
  ): Promise<TruckStringProps | null> {
    if (!props) {
      return null;
    }
    // let truckId = props.truckId.toString()
console.log('props', props)
    const createTruckStringValues = await PrismaHelper.truckStringValues.create(
      {
        data: {
          id: props.id,
          antt: props.antt,
          aparelhoFrio: props.aparelhoFrio,
          borrachasPortas: props.borrachasPortas,
          clrv: props.clrv,
          cvv: props.cvv,
          farois: props.farois,
          pneusIluminacao: props.pneusIluminacao,
          furos: props.furos,
          ganchos: props.ganchos,
          lanternas: props.lanternas,
          limpezaQuantidades: props.limpezaQuantidades,
          luzInternaBau: props.luzInternaBau,
          vedacao: props.vedacao,
          truckId: props.truckId
        },
      }
    );
    return createTruckStringValues as unknown as TruckStringProps;
  }

  async createTruckBooleanProps(
    props: any
  ): Promise<TruckBooleanProps | null> {
    // const create = new TruckBooleanValues(props);
    // console.log('prisma', props)
    if (!props) {
      return null;
    }
    const createTruckBooleanValues =
      await PrismaHelper.truckBooleanValues.create({
        data: {
          id: props.id,
          antt: props.antt,
          aparelhoFrio: props.aparelhoFrio,
          borrachasPortas: props.borrachasPortas,
          clrv: props.clrv,
          cvv: props.cvv,
          farois: props.farois,
          furos: props.furos,
          pneusIluminacao: props.pneusIluminacao,
          ganchos: props.ganchos,
          lanternas: props.lanternas,
          limpezaQuantidades: props.limpezaQuantidades,
          luzInternaBau: props.luzInternaBau,
          vedacao: props.vedacao,
          truckId: props.truckId
        },
      });
    return createTruckBooleanValues as unknown as TruckBooleanProps;
  }

  async createTruck(
    props: Truck,
  ): Promise<Truck | null> {
    if (!props) {
      return null;
    }
    let createTruck = await PrismaHelper.truck.create({
      data: {
        id: props.id,
        licensePlate: props.licensePlate

      },
    });
    return createTruck as unknown as Truck;
  }

  // async createLicensePlate(
  //   props: string,
  // ): Promise<LicenseP | null> {
  //   if (!props) {
  //     return null;
  //   }
  //   let createTruck = await PrismaHelper.truck.create({
  //     data: {
  //       id: props.id,
  //       licensePlate: props.lisencePlate

  //     },
  //   });
  //   return createTruck as unknown as Truck;
  // }

  async createTruckVerification(
    truckBooleanId: string,
    truckStringId: string,
    truckId: string
    ): Promise<Truck | null> {
      const updateTruckwithIds = await PrismaHelper.truckVerification.create({
        data: {
          truckBooleanValuesId: truckBooleanId,
          truckStringValuesId: truckStringId,
          truckId: truckId
          
        }
      })
      console.log('2222222222222222222222222222222', truckBooleanId)
    if (!updateTruckwithIds) {
      return null
    }
    await PrismaHelper.truckBooleanValues.update({
      where: {
        id: truckBooleanId
      }, data: {
        truckId: updateTruckwithIds.id
      }
    }).then((response) => {
      console.log("boolean", response)
    })

    await PrismaHelper.truckStringValues.update({
      where: {
        id: truckStringId
      }, data: {
        truckId: updateTruckwithIds.id
      }
    })

    return updateTruckwithIds as unknown as Truck
   }
  async findTruckById(
    selectedTruckId: string
  ): Promise<any | null> {
    const findTruck = await PrismaHelper.truck.findUnique({
      where: {
        id: selectedTruckId
      }
    })
    return findTruck as unknown as Truck
  }

  async findAllTrucks(): Promise<Truck[] | null> {
    
    let findAllTrucks = await PrismaHelper.truck.findMany()
    if (!findAllTrucks) {
      return null
    }
    return findAllTrucks as unknown as Truck[]
  }

async findTruckByLicensePlate(licensePlate: string): Promise<Truck | null> {
  let findTruckByLicensePlate = await PrismaHelper.truck.findUnique({
    where: {
      licensePlate
    }
  })
  if (!findTruckByLicensePlate) {
    return null
  }
  return findTruckByLicensePlate as unknown as Truck
}

  
}
