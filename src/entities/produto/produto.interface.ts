import { IBaseEntity } from "../base-entity";

export interface IProduto extends IBaseEntity {
    nome: string;
    descricao: string;
    valor: number;
    urlImagem: string;
    // ativo: boolean;
}
