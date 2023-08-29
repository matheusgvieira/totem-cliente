import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import {CartService} from '../../services/cart.service';
import {Item} from '../../model/item';

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.css']
})
export class NumeroComponent implements OnInit {

  faAngleDoubleLeft = faAngleDoubleLeft;

  urls : any = {};
  operadora : string;
  valor : string;

  logo:string;
  bglogo:string;
  valores:string[];
  selecionado:string;
  numero:string[] = [];
  posNumero:number=1;
  keyboard = [
    {text: '1', cols: 1, rows: 1},
    {text: '2', cols: 1, rows: 1},
    {text: '3', cols: 1, rows: 1},
    {text: '4', cols: 1, rows: 1},
    {text: '5', cols: 1, rows: 1},
    {text: '6', cols: 1, rows: 1},
    {text: '7', cols: 1, rows: 1},
    {text: '8', cols: 1, rows: 1},
    {text: '9', cols: 1, rows: 1},
    {text: '0', cols: 2, rows: 1},
    {text: '<', cols: 1, rows: 1},
    {text: 'Confirmar', cols: 3, rows: 1}
  ];

  constructor(private route: ActivatedRoute, private router: Router, private cart: CartService) { }

  ngOnInit() {
    this.urls['vivo'] = {color: '#6e2a92', img:'../assets/img/recarga/vivo.png'};
    this.urls['claro'] = {color: '#d52b1e', img:'../assets/img/recarga/claro.png'};
    this.urls['tim'] = {color: '#053b88', img:'../assets/img/recarga/tim.png'};
    this.urls['oi'] = {color: '#f3eb91', img:'../assets/img/recarga/oi.png'};
    this.urls['nextel'] = {color: '#e05206', img:'../assets/img/recarga/nextel.png'};
    this.urls['levelup'] = {color: '#000000', img:'../assets/img/recarga/levelup.png'};
    this.urls['zuum'] = {color: '#8832bb', img:'../assets/img/recarga/zuum.png'};
    this.urls['paymentez'] = {color: '#669933', img:'../assets/img/recarga/paymentez.png'};
    this.urls['sky'] = {color: '#dedede', img:'../assets/img/recarga/sky.png'};
    this.urls['clarotv'] = {color: '#f01f22', img:'../assets/img/recarga/clarotv.png'};
    this.urls['googleplay'] = {color: '#00f076', img:'../assets/img/recarga/googleplay.png'};
    this.urls['steam'] = {color: '#132e65', img:'../assets/img/recarga/steam.png'};
    this.urls['netflix'] = {color: '#000000', img:'../assets/img/recarga/netflix.png'};

    this.route.params.subscribe( params => {
      console.log(params.operadora);
      this.operadora = params.operadora;
      this.valor = params.price;
      this.logo = this.urls[params.operadora].img;
      this.bglogo = this.urls[params.operadora].color;
      this.selecionado = params.price;
    });
  }

  keypress(key:string) {
    if('Confirmar'===key){
      this.concluir();
    }else if('<'===key){
      this.numero[this.posNumero] = '';
      if(this.posNumero>1)
        this.posNumero--;
    }else{
      this.numero[this.posNumero] = key;
      if(this.posNumero<11)
        this.posNumero++;
    }
    console.log(key);
  }

  private concluir() {
    this.cart.novoPedido();
    let item: Item = {
      "foto": "",
      "descricao": "Recarga " + this.operadora + " " + this.numero,
      "valor": Number(this.valor.replace("R$","").replace(",",".")),
      "quantidade": 1
    };
    console.log(item);
    this.cart.addItem(item);
    this.router.navigate(['./pagamento', this.operadora, this.valor, this.numero.join('')]);
  }

  back() {
    this.router.navigate(['./rvvalores', this.operadora]);
  }
}
