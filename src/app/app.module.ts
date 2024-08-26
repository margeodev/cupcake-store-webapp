import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CardapioComponent } from './cardapio/cardapio.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PageHeaderComponent } from './page-header/page-header.component';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TabelaCardapioComponent } from './tabela-cardapio/tabela-cardapio.component';
import { BadgeModule } from 'primeng/badge';


@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    CardapioComponent,
    PageHeaderComponent,
    TabelaCardapioComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BreadcrumbModule,
    ButtonModule,
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
