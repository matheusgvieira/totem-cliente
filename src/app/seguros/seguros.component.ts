import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.css']
})
export class SegurosComponent implements OnInit {

  tiles = [
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#033781', img:'../assets/img/seguros/allianz.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#0e589f', img:'../assets/img/seguros/azul.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#e6e7e8', img:'../assets/img/seguros/bradesco.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#e6e7e8', img:'../assets/img/seguros/brasilinsurance.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#e6e7e8', img:'../assets/img/seguros/hdi.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#e6e7e8', img:'../assets/img/seguros/itau.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#012772', img:'../assets/img/seguros/liberty.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#fc1702', img:'../assets/img/seguros/mapfre.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#e6e7e8', img:'../assets/img/seguros/porto.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#ebebeb', img:'../assets/img/seguros/sulamerica.png', url: 'embreve'},
    {text: '', cols: 1, rows: 1, tcolor: '#209869', color: '#00309e', img:'../assets/img/seguros/zurich.png', url: 'embreve'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(url:string) {
    this.router.navigate(['./', url, 'seguros']);
  }

}
