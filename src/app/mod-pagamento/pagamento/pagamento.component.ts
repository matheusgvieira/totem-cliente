import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import { CartService } from '../../services/cart.service';
import { PosfacilService } from '../posfacil.service';
import { SitefService } from '../sitef.service';
import { PrintService } from '../print.service';
import { Pedido } from '../../model/pedido';
import { Item } from '../../model/item';
import { Mensagem } from '../../model/mensagem';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  faAngleDoubleLeft = faAngleDoubleLeft;

  showConfirmar : boolean = true;
  showCancelar : boolean = true;
  showMensagem : boolean = false;
  showAguarde : boolean = false;

  count : number;

  metodo : string = "credito";
  valor : string;
  mensagem : string;
  codigoMensagem : string;
  data: any = [];
  oMensagem: any = {};

  pedido: Pedido;

  constructor(private route: ActivatedRoute, private router: Router, private sitefService: SitefService, private posService: PosfacilService, private printService: PrintService, private cart: CartService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.valor = params.valor;
    });
    this.pedido = this.cart.getPedido();
    console.log(this.pedido);
  }

  confirmar() {
    this.showConfirmar = false;
    this.showMensagem = true;
    this.showAguarde = true;
    this.count = 1;
    this.iniciarPagamento();
    //this.consultarPagamento();
    //this.efetuarPagamento();
    setTimeout(() => this.atualizaStatus(), 500);
  }

  cancelar() {
    this.count = 99;
    this.router.navigate(['./']);
  }

  back() {
    this.router.navigate(['./']);
  }

  iniciarPagamento() {
    //this.posService.iniciarPagamento(12).subscribe((data)=>{});
    this.sitefService.iniciarPagamento(this.metodo, this.valor.replace("R$","").replace(",",".")).subscribe();
  }

  atualizaStatus(){
    this.sitefService.getStatus().subscribe((r:Mensagem) => {
      this.mensagem = r.mensagem;
      console.log(r.tipo + ' - ' + r.mensagem);

      if(!("CONCLUIDO" === r.tipo || "ENCERRADO" === r.tipo || "ERRO" === r.tipo)) {
        setTimeout(() => this.atualizaStatus(), 500);
      } else {
        this.showCancelar = false;
        this.showAguarde = false;
      }
    });
  }

  consultarPagamento() {
    try {
      this.count = this.count+1;
      this.posService.consultarPagamento().subscribe((data)=>{

        if(this.count <= 10)
          setTimeout(() => this.consultarPagamento(), 1000);
        else if(this.count > 10) {
          this.showCancelar = false;
          this.showMensagem = true;
          this.showAguarde = false;
          this.mensagem = '';
          this.imprimir();
        }

      }),(err) => {
        console.log("EEEERRRROOOOO "+err)
      };
    } catch (e){
      console.log("EEEERRRROOOOO "+e);
    }
  }

  imprimir() {
    this.printService.imprimir(this.pedido).subscribe((data)=>{
    });
  }
}
