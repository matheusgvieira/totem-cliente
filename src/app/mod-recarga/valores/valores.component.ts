import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.css']
})
export class ValoresComponent implements OnInit {

  faAngleDoubleLeft = faAngleDoubleLeft;

  urls : any = {};

  logo:string;
  bglogo:string;
  valores:string[];
  selecionado:string;
  numero:string[] = [];
  posNumero:number=1;
  operadora:string;

  valoresM : any = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

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

    this.valoresM['phone']=['R$5,00','R$10,00','R$15,00','R$20,00','R$30,00','R$40,00'];
    this.valoresM['levelup'] = ['R$20,00','R$40,00'];
    this.valoresM['zuum'] = ['R$40,00','R$80,00','R$160,00','R$320,00','R$640,00'];
    this.valoresM['paymentez'] = ['R$5,00','R$10,00','R$15,00','R$25,00','R$45,00'];
    this.valoresM['sky'] = ['R$14,90','R$32,90','R$52,90','R$82,90'];
    this.valoresM['clarotv'] = ['R$39,90','R$44,90','R$49,90','R$79,90'];
    this.valoresM['googleplay'] = ['R$10,00','R$15,00','R$30,00','R$50,00','R$100,00'];
    this.valoresM['steam'] = ['R$20,00','R$50,00'];
    this.valoresM['netflix'] = ['R$30,00','R$40,00','R$70,00','R$150,00'];
    this.valoresM['vivo'] = this.valoresM['phone'];
    this.valoresM['claro'] = this.valoresM['phone'];
    this.valoresM['tim'] = this.valoresM['phone'];
    this.valoresM['oi'] = this.valoresM['phone'];
    this.valoresM['nextel'] = this.valoresM['phone'];

    this.route.params.subscribe( params => {
      this.logo = this.urls[params.operadora].img;
      this.bglogo = this.urls[params.operadora].color;
      this.valores = this.valoresM[params.operadora];
      this.operadora = params.operadora;
    });
  }

  selectPrice(price:string){
    this.selecionado = price;
    this.router.navigate(['./rvnumero', this.operadora, price]);
  }

  back() {
    this.router.navigate(['./rvoperadoras']);
  }

}
