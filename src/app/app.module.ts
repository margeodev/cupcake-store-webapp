import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CardapioComponent } from './cardapio/cardapio.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { CarrinhoComprasModule } from './carrinho-compras/carrinho-compras.module';
import { DataViewModule } from 'primeng/dataview';


@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    CardapioComponent,
    CarrinhoComprasComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BreadcrumbModule,
    ButtonModule,
    CarrinhoComprasModule,
    DataViewModule,
    RouterModule,
    BadgeModule,
    TooltipModule,
    TableModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
