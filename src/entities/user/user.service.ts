import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { IUser } from './user.interface';
import { User } from './user.model';

@Service()
export class UserService {
  constructor(
    @OrmRepository(User) private repository: Repository<User>
  ) { }

  public create(props: IUser): Promise<User> {
    return this.repository.persist(props);
  }

  public readOne(id: number): Promise<User> {
    let result: any = {};
    try {
      result = this.repository.findOneById(id)
        .then()
        .catch(res => result = res);
    }
    catch{
      // console.log(Error);
    }
    return result;
  }

  public update(props: IUser): Promise<User> {
    return this.repository.persist(props);
  }

  public drop(id: number): Promise<User> {
    let user: User;
    this.readOne(id).then(res => user = res);
    return this.repository.remove(user);
  }

  public readAll(): Promise<User[]> {
    return this.repository.find();
  }
}
