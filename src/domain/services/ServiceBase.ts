import { Container, Service, Inject } from 'typedi'
import { IService } from '../interfaces/services/IService';
import { IRepository } from '../interfaces/repositories/IRepository';

@Service()
export abstract class ServiceBase<T> implements IService<T>{
    
    @Inject()
    private _repository: IRepository<T>;

    Add(obj: T): T {
        throw new Error("Method not implemented.");
    }
    Get(obj: T): T {
        throw new Error("Method not implemented.");
    }
    Update(obj: T): T {
        throw new Error("Method not implemented.");
    }
    Remove(id: string): void {
        throw new Error("Method not implemented.");
    }

}