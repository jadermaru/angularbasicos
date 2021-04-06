import { ContadorComponent } from './contador/contador/Contador.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { horoesmodule } from './heroes/horoes.modulo';
import { contadorModulo } from './contador/contador/contador.modulo';



@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    horoesmodule,
    contadorModulo

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
