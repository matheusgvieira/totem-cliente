import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-operadoras',
  templateUrl: './operadoras.component.html',
  styleUrls: ['./operadoras.component.css']
})
export class OperadorasComponent implements OnInit {

  faAngleDoubleLeft = faAngleDoubleLeft;

  tiles = [
    {text: '', cols: 1, rows: 1, color: '#6e2a92', img:'../assets/img/recarga/vivo.png', url: 'vivo'},
    {text: '', cols: 1, rows: 1, color: '#d52b1e', img:'../assets/img/recarga/claro.png', url: 'claro'},
    {text: '', cols: 1, rows: 1, color: '#053b88', img:'../assets/img/recarga/tim.png', url: 'tim'},
    {text: '', cols: 1, rows: 1, color: '#f3eb91', img:'../assets/img/recarga/oi.png', url: 'oi'},
    {text: '', cols: 1, rows: 1, color: '#e05206', img:'../assets/img/recarga/nextel.png', url: 'nextel'},
    {text: '', cols: 1, rows: 1, color: '#dedede', img:'../assets/img/recarga/sky.png', url: 'sky'},
    {text: '', cols: 1, rows: 1, color: '#f01f22', img:'../assets/img/recarga/clarotv.png', url: 'clarotv'},
    {text: '', cols: 1, rows: 1, color: '#000000', img:'../assets/img/recarga/netflix.png', url: 'netflix'},
    {text: '', cols: 1, rows: 1, color: '#132e65', img:'../assets/img/recarga/steam.png', url: 'steam'},
    {text: '', cols: 1, rows: 1, color: '#000000', img:'../assets/img/recarga/levelup.png', url: 'levelup'},
    {text: '', cols: 1, rows: 1, color: '#00f076', img:'../assets/img/recarga/googleplay.png', url: 'googleplay'},
    {text: '', cols: 1, rows: 1, color: '#8832bb', img:'../assets/img/recarga/zuum.png', url: 'zuum'},
    {text: '', cols: 1, rows: 1, color: '#669933', img:'../assets/img/recarga/paymentez.png', url: 'paymentez'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(url:string) {
    this.router.navigate(['./rvvalores', url]);
  }

  back() {
    this.router.navigate(['./']);
  }
}
