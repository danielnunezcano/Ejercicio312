import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProwebAccodionCeldaComponent } from './proweb-accodion-celda/proweb-accodion-celda.component';


@NgModule({
  declarations: [
    AppComponent,
    ProwebAccodionCeldaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
