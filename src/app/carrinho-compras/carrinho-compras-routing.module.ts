import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComprasComponent } from './carrinho-compras.component';

const routes: Routes = [
  { path: 'carrinho', component: CarrinhoComprasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrinhoComprasRoutingModule { }
