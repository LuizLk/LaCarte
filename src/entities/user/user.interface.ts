import { IBaseEntity } from "../../entities/base-entity";

export interface IUser extends IBaseEntity {
  dataNascimento?: Date;
  email: string;
  cpf: string;
  senha: string;
  telefone: string;
  sobrenome?: string;
  nome: string;
}
