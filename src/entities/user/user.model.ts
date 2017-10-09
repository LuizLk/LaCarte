import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base-entity";
import { Length, IsEmail, IsDate, IsNumberString, IsString } from "class-validator";

@Entity()
export class User extends BaseEntity {
  @Column()
  @IsDate()
  dataNascimento?: Date;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @Length(11, 11)
  @IsNumberString()
  cpf: string;

  @Column()
  senha: string;

  @Column()
  @IsNumberString()
  telefone: string;

  @Column()
  @IsString()
  sobrenome?: string;

  @Column()
  @IsString()
  nome: string;
}
