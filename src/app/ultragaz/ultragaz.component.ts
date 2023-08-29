import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ultragaz',
  templateUrl: './ultragaz.component.html',
  styleUrls: ['./ultragaz.component.css']
})
export class UltragazComponent implements OnInit {

  faAngleDoubleLeft = faAngleDoubleLeft;

  tiles = [
    {text: '2º Via do Boleto', cols: 1, rows: 1, tcolor: '#ffffff', color: '#074e8c', img:'../assets/img/ultragaz/2via.png', url: 'embreve'},
    {text: 'Solicitação de Abastecimento', cols: 1, rows: 1, tcolor: '#ffffff', color: '#074e8c', img:'../assets/img/ultragaz/abastecimento.png', url: 'embreve'},
    {text: 'Comprar Botijão', cols: 1, rows: 1, tcolor: '#ffffff', color: '#074e8c', img:'../assets/img/ultragaz/botijao.png', url: 'embreve'},
    {text: 'Seja um Revendedor', cols: 1, rows: 1, tcolor: '#ffffff', color: '#074e8c', img:'../assets/img/ultragaz/revenda.png', url: 'embreve'},
    {text: 'Trabalhe na Ultragaz', cols: 1, rows: 1, tcolor: '#ffffff', color: '#074e8c', img:'../assets/img/ultragaz/trabalhe.png', url: 'embreve'},
    {text: 'Seja um Cliente', cols: 1, rows: 1, tcolor: '#ffffff', color: '#074e8c', img:'../assets/img/ultragaz/cliente.png', url: 'embreve'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(url:string) {
    this.router.navigate(['./', url, 'ultragaz']);
  }

  back() {
    this.router.navigate(['./']);
  }

}
