import { Service } from "typedi";
import { Repository, EntityRepository } from "typeorm";
import { OrmCustomRepository } from "typeorm-typedi-extensions";
import { Cliente } from '../../../domain/entities/Cliente';
import { IClienteRepository } from '../../../domain/interfaces/repositories/IClienteRepository';

@Service()
@EntityRepository(Cliente)
export class ClienteRepository extends Repository<Cliente> implements IClienteRepository {

    Add(obj: Cliente): Promise<Cliente> {
       return this.persist(obj);
    }
    Get(obj: Cliente): Promise<Cliente> {
        return this.findOneById(obj.Id);
    }
    Update(obj: Cliente): void {
        this. ('cliente.id = :obj.id', obj);
    }
    Remove(obj: Cliente): void {
        this.remove(obj);
    }



}