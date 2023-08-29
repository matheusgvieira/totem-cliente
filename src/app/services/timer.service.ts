import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private timers : any = {};

  constructor() { }

  public registrarTimer(nome: string, timer){
    if(this.timers[nome]){
      console.log("LIMPOU TIMER: "+nome);
      clearInterval(this.timers[nome]);
    }
    this.timers[nome] = timer;
  }

}
