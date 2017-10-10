import { IBaseEntity } from "../base-entity";

export interface ICardapioItem extends IBaseEntity {
    nome: string;
    descricao: string;
    valor: number;
    urlImagem: string;
    // ativo: boolean;
}
