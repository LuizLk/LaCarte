import { Cardapio } from "../cardapio";
import { TipoProduto } from "../produto-tipo";
import { BaseEntity } from "../base-entity";
import { Column, Entity, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { IsString, IsNotEmpty, IsNumber, IsUrl } from "class-validator";
import { Exclude, Type } from "class-transformer";

@Entity()
export class Produto extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @IsString()
  public nome: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  public descricao: string;

  @Column()
  @IsNumber()
  public valor: number;

  @Column()
  @IsUrl()
  public urlImagem: string;

  @Column()
  @Exclude()
  public ativo: boolean;

  @ManyToMany(type => Cardapio, cardapio => cardapio.produtos)
  @JoinTable()
  public cardapios: Cardapio[];

  @ManyToOne(type => TipoProduto, tipoProduto => tipoProduto.produtos)
  @Type(() => TipoProduto)
  public tipoProduto: TipoProduto;
}
