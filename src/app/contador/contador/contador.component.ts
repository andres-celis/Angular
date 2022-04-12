import {Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template : `<div>
    <h1> {{titulo}} </h1>
    
    
    <!--<input type="button" class="incremento" onclick="" 
    -->
    
    <h3>La base es: <strong>{{base}}</strong></h3>
    
    
    <button (click)="acumular(base)">+{{base}}</button>
    
    <h2>{{numero}} </h2>
    
    <button (click)="acumular(-base)">-{{base}}</button>
    </div>
    
    `

})
export class ContadorComponent{
    titulo = 'bases';
    numero: number = 10;
    base: number= 5;
  
    acumular(valor:number){
      this.numero +=valor;
    }
}