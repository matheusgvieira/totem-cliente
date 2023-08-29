import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loterias',
  templateUrl: './loterias.component.html',
  styleUrls: ['./loterias.component.css']
})
export class LoteriasComponent implements OnInit {

  faAngleDoubleLeft = faAngleDoubleLeft;

  tiles = [
    {text: 'MEGA-SENA', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/loterias/megasena.png', url: 'embreve'},
    {text: 'LOTO FÁCIL', cols: 1, rows: 1, tcolor: '#930089', color: '#dedede', img:'../assets/img/loterias/lotofacil.png', url: 'embreve'},
    {text: 'QUINA', cols: 1, rows: 1, tcolor: '#260085', color: '#dedede', img:'../assets/img/loterias/quina.png', url: 'embreve'},
    {text: 'LOTOMANIA', cols: 1, rows: 1, tcolor: '#f78100', color: '#dedede', img:'../assets/img/loterias/lotomania.png', url: 'embreve'},
    {text: 'TIMEMANIA', cols: 1, rows: 1, tcolor: '#02ff02', color: '#dedede', img:'../assets/img/loterias/timemania.png', url: 'embreve'},
    {text: 'DUPLA SENA', cols: 1, rows: 1, tcolor: '#a61324', color: '#dedede', img:'../assets/img/loterias/duplasena.png', url: 'embreve'},
    {text: 'FEDERAL', cols: 1, rows: 1, tcolor: '#103099', color: '#dedede', img:'../assets/img/loterias/federal.png', url: 'embreve'},
    {text: 'LOTECA', cols: 1, rows: 1, tcolor: '#fb1f00', color: '#dedede', img:'../assets/img/loterias/loteca.png', url: 'embreve'},
    {text: 'LOTO GOL', cols: 1, rows: 1, tcolor: '#0086b7', color: '#dedede', img:'../assets/img/loterias/lotogol.png', url: 'embreve'},
    {text: 'DIA DE SORTE', cols: 1, rows: 1, tcolor: '#cb852b', color: '#dedede', img:'../assets/img/loterias/diadesorte.png', url: 'embreve'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(url:string) {
    this.router.navigate(['./', url, 'loterias']);
  }

  back() {
    this.router.navigate(['./']);
  }
}
