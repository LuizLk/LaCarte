import { IServiceBase } from "../base-entity";
import { ResponseData } from "../response-data";
import { Service } from "typedi";
import { Repository } from "typeorm";
import { OrmRepository } from "typeorm-typedi-extensions";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import { validate } from "class-validator";

@Service()
export class UserService implements IServiceBase<IUser, ResponseData | User> {
  constructor( @OrmRepository(User) private repository: Repository<User>) { }

  public create(props: IUser): Promise<ResponseData> {
    let response = new ResponseData();
    return validate(props).then(errors => {
      if (errors.length > 0) {
        errors.forEach(function (val) {
          response.mensagens.push(val.value);
        });
        response.status = false;
        response.objeto = props;
      }
      else {
        response.mensagens.push("OK!");
        response.objeto = this.repository.persist(props);
      }
      return response;
    });
  }

  public readOne(id: number): Promise<User | ResponseData> {
    let promise = new Promise<User | ResponseData>((resolve, reject) => {
      resolve(this.repository.findOneById(id));
      let response = new ResponseData();
      response.mensagens.push("Id não encontrado.");
      response.status = false;
      reject(response);
    });

    return promise;
  }

  public update(props: IUser): Promise<User> {
    return this.repository.persist(props);
  }

  public drop(id: number): Promise<User> {
    let user: User;
    this.readOne(id).then((res: User) => user = res);
    return this.repository.remove(user);
  }

  public readAll(): Promise<User[]> {
    return this.repository.find();
  }
}
