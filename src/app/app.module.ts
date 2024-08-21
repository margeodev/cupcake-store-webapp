import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CardapioComponent } from './cardapio/cardapio.component';


@NgModule({
  declarations: [
    AppComponent,
    CardapioComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
