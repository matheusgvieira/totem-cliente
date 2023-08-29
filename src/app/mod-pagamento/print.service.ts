import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Pedido} from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  url : string = "http://localhost:8080/print";

  constructor(private httpClient: HttpClient) {}

  public imprimir(pedido : Pedido){
    return this.httpClient.post(this.url, pedido);
  }
}
