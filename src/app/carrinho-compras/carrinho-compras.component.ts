import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from '../domain/pedido';
import { ProductService } from '../product-service';
import { Product } from '../domain/product';

@Component({
  selector: 'carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {
  
  pedido!: Pedido;
  badgeValue: string = '0';
  productosPedido!: Product[];
  valorTotal: number = 0;

  ngOnInit() {
    this.obterPedido();
    this.calcularValorTotal(this.pedido.produtos!);
    this.removeDuplicateProducts(this.pedido.produtos!);
  }

  obterPedido() {
    const pedidoString = localStorage.getItem('pedido');
    this.badgeValue = localStorage.getItem('badgeValue')!;

    if (pedidoString) {
      this.pedido = JSON.parse(pedidoString);
    }    
  }

  abrirOpcoesPagamento() {
    localStorage.setItem('valorTotal', this.valorTotal.toString());
  }

  removeDuplicateProducts(products: Product[]): void {
    const uniqueProducts = new Map<string, Product>();

    products.forEach(product => {
        if (product.id && !uniqueProducts.has(product.id)) {
            uniqueProducts.set(product.id, product);
        }
    });

    this.productosPedido = Array.from(uniqueProducts.values());    
  }

  calcularValorTotal(products: Product[]): void {
    this.valorTotal = products.reduce((total, product) => {
        const productTotal = (product.price || 0);
        return total + productTotal;
    }, 0);
  }

}
