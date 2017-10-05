import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base-entity";

@Entity()
export class User extends BaseEntity {
  @Column() dataNascimento?: Date;
  @Column({ unique: true })
  email: string;
  @Column()
  cpf: string;
  @Column()
  senha: string;
  @Column()
  telefone: string;
  @Column()
  sobrenome?: string;
  @Column()
  nome: string;
}
