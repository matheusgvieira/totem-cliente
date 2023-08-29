import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {

  @ViewChild("barcode", {static: true}) barcode: ElementRef;

  constructor() { }

  ngOnInit() {
    this.barcode.nativeElement.focus();
  }

}
