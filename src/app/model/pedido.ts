import {Item} from '../model/item';

export interface Pedido {
  numero: number;
  data: string;
  itens: Item[];
}
