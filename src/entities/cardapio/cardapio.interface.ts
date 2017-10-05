import { IBaseEntity } from "../base-entity";

export interface ICardapio extends IBaseEntity {
  nome: string;
  descricao: string;
}
