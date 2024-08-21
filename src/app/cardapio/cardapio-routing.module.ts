import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardapioComponent } from './cardapio.component';

const routes: Routes = [
  { path: '', component: CardapioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardapioRoutingModule { }
