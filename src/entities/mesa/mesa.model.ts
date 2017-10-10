import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../base-entity";
import { Restaurante } from "../restaurante";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Type } from "class-transformer";

@Entity()
export class Mesa extends BaseEntity {
    @Column()
    @IsNotEmpty()
    @IsNumber()
    public numero: number;

    @Column()
    @IsString()
    public qrcode: string;

    @ManyToOne(() => Restaurante, restaurante => restaurante.mesas)
    @Type(() => Restaurante)
    public restaurante: Restaurante;
}
