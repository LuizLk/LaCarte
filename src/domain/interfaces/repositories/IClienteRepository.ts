import { Cliente } from "../../entities/Cliente";
import { IRepository } from "./IRepository";

export interface IClienteRepository extends IRepository<Cliente> {}