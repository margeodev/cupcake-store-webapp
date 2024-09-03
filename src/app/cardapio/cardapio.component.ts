import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service';
import { Pedido } from '../domain/pedido';
import { Product } from '../domain/product';
import { Operation } from '../domain/operation';
import { Router } from '@angular/router';

@Component({
  selector: 'cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  badgeValue = '0';
  pedido: Pedido = {};
  products!: Product[];
  isButtonDisabled: boolean = true;
  
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProducts();
  }

    //Obtém lista de produtos do cardápio
    getProducts(): void {
      const IMAGE_PATH = 'assets/images';
      this.productService.getProducts().subscribe((data) => {
        this.products = data;
        this.products = data.map(product => {
          product.image = `${IMAGE_PATH}/${product.image}`;
          return product;
        })
      });
    }

  removerProduto(produto: any) {
    this.removerProdutoPorId(produto.id);
    this.updateProductQuantityById(produto.id, Operation.REMOVE);
    if(this.badgeValue !== '0') {
      this.updateBadgeValue();
    }
    this.handleButtonFinalizarCompra();
  }

    //Atualiza quantidade do produto selecionado de acordo com a operação
    updateProductQuantityById(productId: string, operation: Operation): void {
      const productToUpdate = this.findProductById(productId);
      let valorAtual = productToUpdate?.quantity ? productToUpdate?.quantity : 0;
      if(operation === Operation.ADD) {
        productToUpdate.quantity = valorAtual += 1; 
      } 
      if(operation === Operation.REMOVE && productToUpdate.quantity! > 0) {
        productToUpdate.quantity = valorAtual -= 1;      
      }   
    }
  
    //Procura um produto por ID
    findProductById(productId: string): Product {
      return this.products.find(product => product.id === productId)!;
    }

    updateBadgeValue() {
      this.badgeValue = this.pedido.produtos?.length.toString()!;
    }

  removerProdutoPorId(id: string) {    
    const index = this.pedido.produtos?.findIndex(p => p.id === id);
    if (index !== undefined && index !== -1) {
        const produtoRemovido = this.pedido?.produtos?.splice(index, 1)[0];
    }    
  }

  adicionarProduto(produto: any) {
    if (!this.pedido.produtos) {
      this.pedido.produtos = [];
    }
    this.pedido.produtos.push(produto);
    this.updateProductQuantityById(produto.id, Operation.ADD);
    this.updateBadgeValue();
    this.handleButtonFinalizarCompra();
  }

  finalizarPedido() {
    localStorage.setItem('pedido', JSON.stringify(this.pedido));
    localStorage.setItem('badgeValue', this.badgeValue);
    this.router.navigate(['/carrinho']); 
  }

  handleButtonFinalizarCompra() {
    if(this.pedido.produtos?.length! > 0) {
      this.isButtonDisabled = false;      
    } else {
      this.isButtonDisabled = true;      
    }
  }
}
