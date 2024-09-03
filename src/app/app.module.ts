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
import { PagamentoComponent } from './pagamento/pagamento.component';
import { PagamentoModule } from './pagamento/pagamento.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    CardapioComponent,
    CarrinhoComprasComponent,
    PagamentoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BreadcrumbModule,
    PasswordModule,
    CardModule,
    FieldsetModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    CarrinhoComprasModule,
    PagamentoModule,
    RadioButtonModule,
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
