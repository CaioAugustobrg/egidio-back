import { PrismaTruckRepository } from "../../../external/prisma/prisma-truck-repository";
import ApiError from "../../../utils/api-error";
import { Truck, TruckProps } from "../../entities/truck";
import {
  TruckBooleanProps,
  TruckBooleanValues,
} from "../../entities/truckBooleanValues";
import {
  TruckStringProps,
  TruckStringValues,
} from "../../entities/truckStringValues";

export class CreateTruckVerificationUseCase {
  constructor(private readonly prismaTruckRepository: PrismaTruckRepository) {}
  async handle(truckProps: any, selectedTruckId: string): Promise<null | ApiError> {
    const truckValues = await this.prismaTruckRepository.findTruckById(selectedTruckId);

    console.log("truck", truckValues);
    const truckBooleanValues = truckProps.map(({ checked, name }: any) => ({
      checked,
      name,
    }));
    console.log('asdasdasdasdasd', truckValues);
    //console.log(truckBooleanValues);
    let booleanValues = {
      clrv: truckBooleanValues[0].checked,
      cvv: truckBooleanValues[1].checked,
      antt: truckBooleanValues[2].checked,
      furos: truckBooleanValues[3].checked,
      vedacao: truckBooleanValues[4].checked,
      borrachasPortas: truckBooleanValues[5].checked,
      aparelhoFrio: truckBooleanValues[6].checked,
      ganchos: truckBooleanValues[7].checked,
      limpezaQuantidades: truckBooleanValues[8].checked,
      pneusIluminacao: truckBooleanValues[9].checked,
      farois: truckBooleanValues[10].checked,
      lanternas: truckBooleanValues[11].checked,
      luzInternaBau: truckBooleanValues[12].checked,
      // truckId: truckValues?.truckVerification.id,
    };
    
    let truckBooleanClass = new TruckBooleanValues(booleanValues);
    //console.log("usecase", truckBooleanClass);

    await this.prismaTruckRepository.createTruckBooleanProps(truckBooleanClass);
    // console.log(truckBooleanValues)

    const truckstringValues = truckProps.map(({ input, name }: any) => ({
      input,
      name,
    }));
    // console.log('asdasdasdasdasd', truckValues.truckVerification.id);
    let stringValues = {
      clrv: truckstringValues[0].input,
      cvv: truckstringValues[1].input,
      antt: truckstringValues[2].input,
      furos: truckstringValues[3].input,
      vedacao: truckstringValues[4].input,
      borrachasPortas: truckstringValues[5].input,
      aparelhoFrio: truckstringValues[6].input,
      ganchos: truckstringValues[7].input,
      limpezaQuantidades: truckstringValues[8].input,
      pneusIluminacao: truckstringValues[9].input,
      farois: truckstringValues[10].input,
      lanternas: truckstringValues[11].input,
      luzInternaBau: truckstringValues[12].input,
      // truckId: truckValues?.truckVerification.id,
    };
    
    let truckStringClass = new TruckStringValues(stringValues);
      await this.prismaTruckRepository.createTruckStringProps(truckStringClass);

    await this.prismaTruckRepository.createTruckVerification(
      truckBooleanClass?.id,
      truckStringClass.id,
      truckValues?.id
    )

    if (truckProps) {
      return null;
    } else {
      throw new ApiError({
        code: 409,
        message: "Já existe um curso com esse título",
      });
    }
  }
}
