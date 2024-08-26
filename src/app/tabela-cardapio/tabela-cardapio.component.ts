import { Component } from '@angular/core';
import { Product } from '../domain/product';
import { ProductService } from '../product-service';
import { Pedido } from '../domain/pedido';
import { Operation } from '../domain/operation';

@Component({
  selector: 'app-tabela-cardapio',
  templateUrl: './tabela-cardapio.component.html',
  styleUrls: ['./tabela-cardapio.component.css']
})
export class TabelaCardapioComponent {

  products!: Product[];
  meuPedido: Pedido = {};

  constructor(private productService: ProductService) {}

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

  adicionarProduto(produto: any) {
    if (!this.meuPedido.produtos) {
      this.meuPedido.produtos = [];
    }
    this.meuPedido.produtos.push(produto);
    this.updateProductQuantityById(produto.id, Operation.ADD);
    this.updateBadgeValue();    
  }

  removerProduto(produto: any) {
    this.removerProdutoPorId(produto.id);
    this.updateProductQuantityById(produto.id, Operation.REMOVE);
    this.updateBadgeValue();
  }

  removerProdutoPorId(id: string) {
    const index = this.meuPedido.produtos?.findIndex(p => p.id === id);
    if (index !== undefined && index !== -1) {
        const produtoRemovido = this.meuPedido?.produtos?.splice(index, 1)[0];
    }    
  }
  
  updateBadgeValue() {
    let value = this.meuPedido.produtos?.length.toString();
    this.productService.updateBadgeValue(value!);
  }

}
