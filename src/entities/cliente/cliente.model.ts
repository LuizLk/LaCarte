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
  public email: string;

  @Column()
  @Length(14, 14)
  @IsNotEmpty()
  @IsNumberString()
  public cnpj: string;

  @Column()
  @IsNotEmpty()
  public senha: string;

  @Column({
    nullable: true
  })
  @IsOptional()
  @IsNumberString()
  public telefone: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  public nome: string;

  @Column({
    nullable: true
  })
  @IsOptional()
  @IsString()
  public token: string;

  @OneToMany(() => Restaurante, r => r.cliente, {
    lazy: true
  })
  @Type(() => Restaurante)
  public restaurantes: Restaurante[];
}
