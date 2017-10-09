import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../base-entity";
import { CardapioItem } from "../cardapio-item";
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

  @OneToMany(type => CardapioItem, item => item.cardapio)
  items: CardapioItem[];
}
