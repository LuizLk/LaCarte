import { IBaseEntity } from "../base-entity";

export interface IMesa extends IBaseEntity {
    numero: number;
    qrcode: string;
    // ativo: boolean;
}
