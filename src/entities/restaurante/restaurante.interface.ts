import { IBaseEntity } from "../base-entity";

export interface IRestaurante extends IBaseEntity {
  nome: string;
  descricao: string;
  endereco: string;
  telefone: string;
  site?: string;
}
