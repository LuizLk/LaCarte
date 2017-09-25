import { Container, Service, Inject } from 'typedi'
import { ConnectionManager } from "typeorm";
import { IUnitOfWork } from '../../../domain/interfaces/IUnitOfWork'
import { IClienteRepository } from '../../../domain/interfaces/repositories/IClienteRepository';

@Service()
export class UnitOfWork implements IUnitOfWork {

    @Inject()
    private readonly _clienteRepository: IClienteRepository;

    ClienteRepository: IClienteRepository;

}
