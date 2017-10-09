import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../base-entity";
import { Cardapio } from "../cardapio";
import { IsString, IsNotEmpty, IsNumber, IsUrl } from "class-validator";
import { Exclude } from "class-transformer";

@Entity()
export class CardapioItem extends BaseEntity {
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

    @ManyToOne(type => Cardapio, cardapio => cardapio.items)
    public cardapio: Cardapio;
}
