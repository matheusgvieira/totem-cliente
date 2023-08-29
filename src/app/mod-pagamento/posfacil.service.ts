import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosfacilService {

  urlIniciar : string = "http://facilpos.com.br/api/SendPaymentToPos?PosSerial=:posSerial&TotalAmount=:valor&PaymentQueueId=:queueId&format=json";
  urlConsultar : string = "http://facilpos.com.br/api/query/Transactions?PaymentQueueId=:queueId&format=json";
  posSerial : string = "68450588";
  queueId : string = "215585807";
  token : string = "bearer 29BMTiGyUyzkBIqVf0kwa95QXhgpc6Sg";

  constructor(private httpClient: HttpClient) { }

  public iniciarPagamento(valor : number){
    let header = {headers: new HttpHeaders().set('Authorization', this.token)};
    let url: string = this.urlIniciar;
    url = url.replace(":posSerial", this.posSerial);
    url = url.replace(":queueId", this.queueId);
    url = url.replace(":valor", valor+"");
    return this.httpClient.get(url, header);
  }

  public consultarPagamento(){
    let header = {headers: new HttpHeaders().set('Authorization', this.token)};
    let url: string = this.urlConsultar;
    url = url.replace(":queueId", this.queueId);
    return this.httpClient.get(url, header);
  }
}
