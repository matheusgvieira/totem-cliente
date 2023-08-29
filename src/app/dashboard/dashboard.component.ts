import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tiles = [
    { text: 'Pagamentos', cols: 1, rows: 1, tcolor: '#00773f', color: '#e3efe5', img: '../assets/img/contas/pagamento.png', url: 'contas', type: 'app' },
    { text: 'Recarga', cols: 1, rows: 1, color: '#fac711', img: '../assets/img/recarga/recargacelular.png', url: 'rvoperadoras', type: 'app' },
    { text: 'Ingressos', cols: 1, rows: 1, color: '#f14827', img: '../assets/img/ingresso/ingresso.png', url: 'ingressos', type: 'app' },
    { text: '', cols: 1, rows: 1, color: '#1a96b2', img: '../assets/img/loterias/logo.png', url: 'loterias', type: 'app' },
    { text: '', cols: 1, rows: 1, color: '#1e4e8e', img: '../assets/img/embreve/recargabilheteunico.png', url: 'embreve', type: 'app' },
    { text: 'Seguros', cols: 1, rows: 1, tcolor: '#427ec0', color: '#fbd000', img: '../assets/img/seguros/seguros.png', url: 'seguros', type: 'app' },
    { text: 'Detran RJ', cols: 1, rows: 1, tcolor: '#074470', color: '#d0e6f3', img: '../assets/img/browser/detranrj.png', url: 'detranrj', type: 'web' },
    { text: '', cols: 1, rows: 1, color: '#e3efe5', img: '../assets/img/abbc/abbcassociados.png', url: 'abbcassociados', type: 'app' },
    { text: '', cols: 1, rows: 1, color: '#e1aa22', img: '../assets/img/ultragaz/ultragaz.png', url: 'ultragaz', type: 'app' },
    { text: '', cols: 1, rows: 1, color: '#d9e003', img: '../assets/img/parcelamos/parcelamos.png', url: 'https://totem.parcelamostudo.com.br/inicial', type: 'link' },
    { text: '', cols: 1, rows: 1, color: '#ffdf2b', img: '../assets/img/browser/riodepremios.png', url: 'riodepremios', type: 'web' },
    { text: '', cols: 1, rows: 1, color: '#f3eb90', img: '../assets/img/tcacard/tca24horas.png', url: 'tcacard', type: 'app' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(tile) {
    if ('app' === tile.type)
      this.router.navigate(['./', tile.url]);
    if ('link' === tile.type)
      window.open(tile.url);
    else
      this.router.navigate(['./browser', tile.url]);
  }

}
