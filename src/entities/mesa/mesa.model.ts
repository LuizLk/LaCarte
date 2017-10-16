import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../base-entity";
import { Restaurante } from "../restaurante";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Type } from "class-transformer";

@Entity()
export class Mesa extends BaseEntity {
  @Column()
  @IsNotEmpty({ message: "Número não pode ser vazio." })
  @IsNumber({ message: "Deve ser um número do tipo inteiro." })
  public numero: number;

  @Column({
    length: 100
  })
  @IsString()
  public qrcode: string;

  @ManyToOne(() => Restaurante, restaurante => restaurante.mesas)
  @Type(() => Restaurante)
  public restaurante: Restaurante;
}
