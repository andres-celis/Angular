import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.modulo';
import { ContadorComponent } from './contador/contador/contador.component';
import { contadorModulo } from './contador/contador.modulo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadorModulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
