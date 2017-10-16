import { IBaseEntity } from "../base-entity";

export interface ICliente extends IBaseEntity {
  nome: string;
  cnpj: string;
  senha: string;
  telefone: string;
}
