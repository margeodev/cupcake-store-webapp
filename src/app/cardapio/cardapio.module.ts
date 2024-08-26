import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioRoutingModule } from './cardapio-routing.module';

import { ProductService } from '../product-service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardapioRoutingModule
  ],
  providers: [
    ProductService
  ]
})
export class CardapioModule { }
