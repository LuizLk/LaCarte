import { ItemPedido } from "./../pedido-item/pedido-item.model";
import { User } from "../user/user.model";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../base-entity";
import { IsNumber, IsBoolean, IsEnum } from "class-validator";
import { Type } from "class-transformer";

export enum StatusPedido {
  Pendente,
  Aceito,
  Recusado
}

@Entity()
export class Pedido extends BaseEntity {
  @Column({
    nullable: true,
    precision: 10
  })
  @IsNumber({ message: "Deve ser um número do tipo inteiro." })
  public valorTotal: number;

  @Column({
    default: false
  })
  @IsBoolean()
  public pago: boolean;

  @Column({
    type: "int"
  })
  @IsEnum(StatusPedido)
  public status: StatusPedido;

  @ManyToOne(type => (type = User), user => user.pedidos)
  @Type(() => User)
  public user: User;

  @OneToMany(type => (type = ItemPedido), item => item.pedido)
  @Type(() => ItemPedido)
  public itens: ItemPedido[];
}
