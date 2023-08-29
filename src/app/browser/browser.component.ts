import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  private url:SafeResourceUrl;
  urls : any = {};
  backUrl : string;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.backUrl = params.backUrl;
    });

    this.urls['riodepremios'] = 'https://www.riodepremios.com.br/';
    this.urls['loterj'] = 'http://www.loterj.rj.gov.br/';
    this.urls['detranrj'] = 'http://www.detran.rj.gov.br/';

    this.route.params.subscribe( params => {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.urls[params.url]);
    });
  }

}
