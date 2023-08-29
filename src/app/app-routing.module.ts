import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmbreveComponent } from './embreve/embreve.component';
import { BrowserComponent } from './browser/browser.component';
import { TcacardComponent } from './tcacard/tcacard.component';
import { UltragazComponent } from './ultragaz/ultragaz.component';
import { AbbcComponent } from './abbc/abbc.component';
import { SegurosComponent } from './seguros/seguros.component';
import { LoteriasComponent } from './loterias/loterias.component';
import { IngressoComponent } from './ingresso/ingresso.component';
import { ContasComponent } from './contas/contas.component';
import { OperadorasComponent } from './mod-recarga/operadoras/operadoras.component';
import { ValoresComponent } from './mod-recarga/valores/valores.component';
import { NumeroComponent } from './mod-recarga/numero/numero.component';
import { PagamentoComponent } from './mod-pagamento/pagamento/pagamento.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'embreve/:backUrl', component: EmbreveComponent },
  { path: 'embreve', component: EmbreveComponent },
  { path: 'browser/:url', component: BrowserComponent },
  { path: 'browser/:url/:backUrl', component: BrowserComponent },
  { path: 'tcacard', component: TcacardComponent },
  { path: 'ultragaz', component: UltragazComponent },
  { path: 'abbcassociados', component: AbbcComponent },
  { path: 'seguros', component: SegurosComponent },
  { path: 'loterias', component: LoteriasComponent },
  { path: 'ingressos', component: IngressoComponent },
  { path: 'contas', component: ContasComponent },
  { path: 'rvoperadoras', component: OperadorasComponent },
  { path: 'rvvalores/:operadora', component: ValoresComponent },
  { path: 'rvnumero/:operadora/:price', component: NumeroComponent },
  { path: 'pagamento/:operadora/:valor/:numero', component: PagamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
