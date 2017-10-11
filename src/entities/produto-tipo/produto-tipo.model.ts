import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../base-entity";
import { Produto } from "../produto";
import { IsString, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

@Entity()
export class TipoProduto extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @IsString()
  public nome: string;

  @OneToMany(type => Produto, produto => produto.tipoProduto)
  @Type(() => Produto)
  public produtos: Produto[];
}
