import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from '../domain/pedido';
import { ProductService } from '../product-service';

@Component({
  selector: 'carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {
  
  pedido!: Pedido;
  badgeValue: string = '0';

  ngOnInit() {
    this.obterPedido();
  }

  obterPedido() {
    const pedidoString = localStorage.getItem('pedido');
    if (pedidoString) {
      this.pedido = JSON.parse(pedidoString);
      console.log('Pedido recebido do localStorage: ', this.pedido);
    } else {
      console.log('Nenhum pedido recebido');
    }
  }

}
