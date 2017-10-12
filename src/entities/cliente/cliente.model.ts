import { Restaurante } from "../restaurante/restaurante.model";
import { Type } from "class-transformer";
import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../base-entity";
import {
  Length,
  IsEmail,
  IsNumberString,
  IsString,
  IsNotEmpty,
  IsOptional
} from "class-validator";

@Entity()
export class Cliente extends BaseEntity {
  @Column({ unique: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column()
  @Length(14, 14)
  @IsNumberString()
  cnpj: string;

  @Column() senha: string;

  @Column()
  @IsNumberString()
  telefone: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  nome: string;

  @Column()
  @IsOptional()
  @IsString()
  token: string;

  @OneToMany(() => Restaurante, r => r.cliente, {
    lazy: true
  })
  @Type(() => Restaurante)
  public restaurantes: Restaurante[];
}
