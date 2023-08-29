import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  @Input() label : string;
  @Input() backUrl : string;
  faAngleDoubleLeft = faAngleDoubleLeft;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.backUrl);
  }

  back() {
    console.log(this.backUrl);
    if(this.backUrl)
      this.router.navigate(['./', this.backUrl]);
    else
      this.router.navigate(['./']);
  }

}
