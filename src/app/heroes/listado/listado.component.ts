import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Ironman','Hulk','Tor','carriela'];
  heroeborrado: string ="";

  public borrarHeroe(numero:  number){

    this.heroeborrado = this.heroes.shift() || "";
  

  }

}
