import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-abbc',
  templateUrl: './abbc.component.html',
  styleUrls: ['./abbc.component.css']
})
export class AbbcComponent implements OnInit {

  faAngleDoubleLeft = faAngleDoubleLeft;

  tiles2 = [
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/blank.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/sofisa.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/blank.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/daycoval.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/blank.png', url: 'embreve'},
  ];

  tiles = [

    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/renner.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/abc.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/agibank.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/alfa.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/andbank.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/arbi.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/b3.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/bcv.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/bmg.png', url: 'embreve'},
    {text: 'BOCOM BBM', cols: 1, rows: 1, tcolor: '#003b77', color: '#dedede', img:'../assets/img/abbc/bocom.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/bs2.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/capital.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/cedula.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/cetelem.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/cifra.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/citi.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/bancoob.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/sicredi.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/creditagricole.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/creditsuisse.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/brb.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/bdmg.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/banese.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/banpara.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/banrisul.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/fator.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/fibra.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/finaxis.png', url: 'embreve'},
    {text: 'Guanabara', cols: 1, rows: 1, tcolor: '#9b2823', color: '#dedede', img:'../assets/img/abbc/guanabara.png', url: 'embreve'},
    {text: 'Induscred', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/industrial.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/indusval.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/inter.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/jsafra.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/johndeere.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/jpmorgan.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/luso.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/maxima.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/mercantil.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/mizunho.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/modal.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/ole.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/original.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/ouroinvest.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/pan.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/paulista.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/pine.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/rendimento.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/ribeirao.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/rodobens.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/santander.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/semear.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/societe.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/topazio.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/triangulo.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/tricury.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/vr.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/western.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/barigui.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/brpartners.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/brk.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/caruana.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/ccb.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/cresol.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/unicred.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/coopavel.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/desenvolvesp.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/deutsche.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/facta.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/haitong.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/ing.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/lecca.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/nbc.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/omni.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/parana.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/portocred.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/santinvest.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/sorocred.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#dedede', img:'../assets/img/abbc/uniprime.png', url: 'embreve'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(url:string) {
    this.router.navigate(['./', url, 'abbcassociados']);
  }

  navigate(url:string) {
    this.router.navigate(['./browser', url]);
  }

  back() {
    this.router.navigate(['./']);
  }

}
