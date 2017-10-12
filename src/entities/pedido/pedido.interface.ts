import { Produto } from "./../produto/produto.model";
export interface IPedido {
  numero: string;
  valorTotal: string;
  itens: Produto[];
}
