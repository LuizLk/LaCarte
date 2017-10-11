import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../base-entity";
import { Restaurante } from "../restaurante";
import { IsString, IsNotEmpty } from "class-validator";

@Entity()
export class Cardapio extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @IsString()
  public nome: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  public descricao: string;

  @Column()
  public ativo: boolean;

  @ManyToOne(() => Restaurante, restaurante => restaurante.cardapios)
  public restaurante: Restaurante;
}
