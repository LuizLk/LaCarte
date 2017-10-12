import { ItemPedido } from "./../pedido-item/pedido-item.model";
import { User } from "../user/user.model";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../base-entity";
import { IsNumber, IsBoolean } from "class-validator";
import { Type } from "class-transformer";

@Entity()
export class Pedido extends BaseEntity {
  @Column({
    nullable: true
  })
  @IsNumber({ message: "Deve ser um número do tipo inteiro." })
  public valorTotal: number;

  @Column()
  @IsBoolean()
  public fechado: boolean;

  @ManyToOne(type => User, user => user.pedidos)
  @Type(() => User)
  public user: User;

  @OneToMany(type => ItemPedido, item => item.pedido)
  @Type(() => ItemPedido)
  public itens: ItemPedido[];
}
