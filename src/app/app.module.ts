import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmbreveComponent } from './embreve/embreve.component';
import { AdsComponent } from './ads/ads.component';
import { BrowserComponent } from './browser/browser.component';
import { BackComponent } from './back/back.component';
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
import { NoticiasComponent } from './noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmbreveComponent,
    AdsComponent,
    BrowserComponent,
    BackComponent,
    TcacardComponent,
    UltragazComponent,
    AbbcComponent,
    SegurosComponent,
    LoteriasComponent,
    IngressoComponent,
    ContasComponent,
    OperadorasComponent,
    ValoresComponent,
    NumeroComponent,
    PagamentoComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
