import { Component, Input, OnInit } from '@angular/core';
import { TabelaCardapioComponent } from '../tabela-cardapio/tabela-cardapio.component';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
 
  badgeValue = '0';

  constructor(private productService: ProductService) {}

   
  ngOnInit(): void {
    this.productService.emitirTotalItens.subscribe(
      valor => {        
        this.badgeValue = valor
      }
    )
  }

  @Input('page-title') pageTitle: string | undefined;

}
