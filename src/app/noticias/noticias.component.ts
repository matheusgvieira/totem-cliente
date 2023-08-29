import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import {TimerService} from '../services/timer.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';
  private feeds: any = [];
  private icons : any = {};
  private feed: any = {
    title: "",
    source: "",
    thumbnail: ""
  };
  private pos = 0;

  private urls : any = [
    {site:"rssUol", url:"http%3A%2F%2Frss.home.uol.com.br%2Findex.xml"},
    {site:"rssUolNoticias", url:"http%3A%2F%2Frss.uol.com.br%2Ffeed%2Fnoticias.xml"},
    {site:"rssUolCinema", url:"http%3A%2F%2Frss.uol.com.br%2Ffeed%2Fcinema.xml"},
    {site:"rssG1", url:"http%3A%2F%2Fg1.globo.com%2Fdynamo%2Frss2.xml"},
    {site:"rssR7", url:"https%3A%2F%2Fnoticias.r7.com%2Ffeed.xml"},
    {site:"rssR7Esporte", url:"https%3A%2F%2Fesportes.r7.com%2Ffeed.xml"},
    {site:"rssValor", url:"https%3A%2F%2Fwww.valor.com.br%2Frss"},
  ];

  private urls2 : any = [
    {site:"rssUol", url:"http%3A%2F%2Frss.home.uol.com.br%2Findex.xml"},
  ];

  constructor(private httpClient: HttpClient, private timerService: TimerService) { }

  ngOnInit() {
    this.icons["UOL"] = "../assets/img/noticias/uol.png";
    this.icons["UOL Noticias"] = "../assets/img/noticias/uol.png";
    this.icons["UOL Cinema"] = "../assets/img/noticias/uol.png";
    this.icons["G1"] = "../assets/img/noticias/g1.png";
    this.icons["R7 - Notícias"] = "../assets/img/noticias/r7.png";
    this.icons["R7 - Esportes"] = "../assets/img/noticias/r7.png";
    this.icons["Valor Econômico - Últimas notícias"] = "../assets/img/noticias/valor.png";

    this.atualizarNoticias();
    let s = setInterval(() => this.atualizarNoticias(), 900000);
    this.timerService.registrarTimer("timerAtualizaRss", s);

    setTimeout(() => this.exibeNoticia(), 1000);
    let n = setInterval(() => this.exibeNoticia(), 10000);
    this.timerService.registrarTimer("timerNoticia", n);
  }

  private exibeNoticia() {
    this.feed = this.feeds[Math.floor(Math.random() * this.feeds.length)];
    //this.feed = this.feeds[this.pos];
    //this.pos++;
    //if(this.pos>=this.feeds.length)
    //  this.pos = 0;
  }

  private atualizarNoticias() {
    this.feeds = [];
    this.urls.forEach(entry => {
      this.httpClient.get(this.rssToJsonServiceBaseUrl +entry.url).subscribe(data => {
        let rssResp : any = data;
        rssResp.items.forEach(f1 => {
          f1.source = rssResp.feed.title
          if(!f1.thumbnail || ""===f1.thumbnail)
            f1.thumbnail = this.icons[f1.source];
        });
        this.feeds = this.feeds.concat(rssResp.items);
      });
    });
    //setTimeout(() => this.sort(), 15000);
  }

  private sort(){
    this.feeds = this.feeds.sort(function(){return Math.floor(Math.random()*100000)});
  }
}
