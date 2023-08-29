import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperadorasComponent } from './operadoras/operadoras.component';
import { ValoresComponent } from './valores/valores.component';
import { NumeroComponent } from './numero/numero.component';

@NgModule({
  declarations: [OperadorasComponent, ValoresComponent, NumeroComponent],
  imports: [
    CommonModule
  ]
})
export class ModRecargaModule { }
