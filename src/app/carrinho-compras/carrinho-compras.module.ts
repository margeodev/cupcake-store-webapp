import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComprasRoutingModule } from './carrinho-compras-routing.module';
import { ProductService } from '../product-service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarrinhoComprasRoutingModule
  ],
  providers: [
    ProductService
  ]
})
export class CarrinhoComprasModule { }
