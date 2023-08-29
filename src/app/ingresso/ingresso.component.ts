import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresso',
  templateUrl: './ingresso.component.html',
  styleUrls: ['./ingresso.component.css']
})
export class IngressoComponent implements OnInit {

  tiles = [
    {text: '', cols: 1, rows: 1, color: '#afddec', img:'../assets/img/ingresso/aquariosp.png', url: 'embreve', type:'app'},
    {text: '', cols: 1, rows: 1, color: '#cc3644', img:'../assets/img/ingresso/cidadecrianca.png', url: 'embreve', type:'app'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(tile) {
    this.router.navigate(['./', tile.url, 'ingressos']);
  }
}
