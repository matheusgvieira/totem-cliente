import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-embreve',
  templateUrl: './embreve.component.html',
  styleUrls: ['./embreve.component.css']
})
export class EmbreveComponent implements OnInit {

  backUrl : string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.backUrl = params.backUrl;
    });
  }

}
