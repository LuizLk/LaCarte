import { Service } from 'typedi';
import { Cardapio } from "./cardapio.model";
import { ICardapio } from "./cardapio.interface";
import { IServiceBase } from "../base-entity/base-entity.service";
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';

@Service()
export class CardapioService implements IServiceBase<ICardapio, Cardapio> {

  @OrmRepository(Cardapio) repository: Repository<Cardapio>;

  create(props: ICardapio): Promise<Cardapio> {
    return this.repository.persist(props);
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
  update(props: ICardapio): Promise<Cardapio> {
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
