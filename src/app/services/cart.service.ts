import { Injectable } from '@angular/core';
import {Pedido} from '../model/pedido';
import {Item} from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private pedido: Pedido;

  constructor() { }

  public addItem(item: Item){
    if(!this.pedido){
      this.novoPedido();
    }
    this.pedido.itens.push(item);
  }

  public getPedido(){
    return this.pedido;
  }

  public novoPedido(){
    this.pedido = {
      "numero":0,
      "data": "",
      "itens":[]};
  }
}
