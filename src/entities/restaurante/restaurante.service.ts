import { Restaurante } from "./restaurante.model";
import { Cliente } from "../cliente";
import { Service } from "typedi";
import { IServiceBase } from "../base-entity";
import { OrmRepository } from "typeorm-typedi-extensions";
import { Repository } from "typeorm";
import { validate } from "class-validator";
import { ResponseData } from "../response-data";

@Service()
export class RestauranteService implements IServiceBase<Restaurante> {
  @OrmRepository(Restaurante) private repository: Repository<Restaurante>;
  @OrmRepository(Cliente) private repository: Repository<Restaurante>;

  create(props: Restaurante, ...params: any[]): Promise<ResponseData> {
    let idCliente = params[0];
    let responseData = new ResponseData();
    return validate(props).then(errors => {
      if (errors.length > 0) {
        errors.forEach(function (val) {
          responseData.mensagens.push(val.value);
        });
        responseData.status = false;
        responseData.objeto = props;
      } else {
        responseData.mensagens.push("OK!");

        responseData.objeto = this.repository.persist(props);
      }
      return responseData;
    });
  }
  readOne(id: number): Promise<Restaurante> {
    let result: any = {};
    try {
      result = this.repository
        .findOneById(id)
        .then()
        .catch(res => (result = res));
    } catch {
      // console.log(Error);
    }
    return result;
  }
  update(props: Restaurante): Promise<Restaurante> {
    return this.repository.persist(props);
  }
  drop(id: number): Promise<Restaurante> {
    let result: any = {};
    try {
      result = this.readOne(id)
        .then(res => (result = res))
        .catch(res => (result = res));

      result = this.repository
        .remove(result)
        .then()
        .catch(res => (result = res));
    } catch {
      // console.log(Error);
    }
    return result;
  }
  readAll(...params: any[]): Promise<Restaurante[]> {
    return this.repository.find();
  }
}
