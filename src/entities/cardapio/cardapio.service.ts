import { Service } from 'typedi';
import { Cardapio } from "./cardapio.model";
import { IServiceBase } from "../base-entity/base-entity.service";
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';
import { validate } from "class-validator";
import { ResponseData } from "../response-data";


@Service()
export class CardapioService implements IServiceBase<Cardapio> {

  @OrmRepository(Cardapio) repository: Repository<Cardapio>;

  public create(props: Cardapio): Promise<Cardapio | ResponseData> {
    let response = new ResponseData();
    return validate(props).then(errors => {
      if (errors.length > 0) {
        errors.forEach(function(val) {
          response.mensagens.push(val.value);
        });
        response.status = false;
        response.objeto = props;
      } else {
        response.mensagens.push("OK!");
        response.objeto = this.repository.persist(props);
      }
      return response;
    });
  }
  readOne(id: number): Promise<Cardapio> {
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
  update(props: Cardapio): Promise<Cardapio> {
    return this.repository.persist(props);
  }
  drop(id: number): Promise<Cardapio> {
    let result: any = {};
    try {
      result = this.readOne(id)
        .then(res => (result = res))
        .catch(res => (result = res));

      result = this.repository.remove(result)
        .then()
        .catch(res => (result = res));
    } catch {
      // console.log(Error);
    }
    return result;
  }
  readAll(): Promise<Cardapio[]> {
    return this.repository.find();
  }
}
