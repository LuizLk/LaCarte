import { Column, Entity, OneToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "../base-entity";
import { Restaurante } from "../restaurante";
import { CardapioItem } from "../cardapio-item";
import { IsString, IsNotEmpty } from "class-validator";
import { Type } from 'class-transformer';

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

  @OneToMany(() => CardapioItem, item => item.cardapio)
  @Type(() => CardapioItem)
  public items: CardapioItem[];
}
