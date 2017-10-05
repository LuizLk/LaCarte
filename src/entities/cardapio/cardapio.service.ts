import { Service } from 'typedi';
import { Cardapio } from "./cardapio.model";
import { ICardapio } from "./cardapio.interface";
import { IService } from "../base-entity/base-entity.service";

@Service()
export class CardapioService implements IService<ICardapio, Cardapio> {
  create(props: ICardapio): Promise<Cardapio> {
    throw new Error("Method not implemented.");
  }
  readOne(id: number): Promise<Cardapio> {
    throw new Error("Method not implemented.");
  }
  update(props: ICardapio): Promise<Cardapio> {
    throw new Error("Method not implemented.");
  }
  drop(id: number): Promise<Cardapio> {
    throw new Error("Method not implemented.");
  }
  readAll(): Promise<Cardapio[]> {
    throw new Error("Method not implemented.");
  }
}
