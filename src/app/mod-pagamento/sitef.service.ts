import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SitefService {

  private urlPagamento : string = 'http://localhost:8080/pagamento';
  private urlStatus : string = 'http://localhost:8080/pagamento/status';

  constructor(private httpClient: HttpClient) { }

  public iniciarPagamento(metodo : string, valor : string){
    return this.httpClient.post(this.urlPagamento,{'metodo':metodo, 'valor':valor});
  }

  public getStatus(){
    return this.httpClient.post(this.urlStatus,{});
  }
  
}
