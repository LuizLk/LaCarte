import { IClienteRepository } from './repositories/IClienteRepository';

export interface IUnitOfWork {

    ClienteRepository: IClienteRepository;

}