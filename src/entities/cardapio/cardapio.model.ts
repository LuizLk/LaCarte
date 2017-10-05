import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base-entity";

@Entity()
export class Cardapio extends BaseEntity {
  @Column() public nome: string;
  @Column() public descricao: string;
}
