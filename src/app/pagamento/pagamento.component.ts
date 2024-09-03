import { Component } from '@angular/core';
import { Pedido } from '../domain/pedido';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pagamento } from '../domain/pagamento';
import { Product } from '../domain/product';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent {

  badgeValue: string = '0';
  total: string = '0';
  pedido!: Pedido;
  ingredient!: string;
  tipoPagamentoForm!: FormGroup;
  creditoForm!: FormGroup;
  debitoForm!: FormGroup;
  isPagamentoCredito: boolean = false;
  isPagamentoDebito: boolean = false;
  isPagamentoPix: boolean = false;
  isPagamentoCash: boolean = false;
  imgSrc = 'assets/images/qrcode.png';
  isCompraFinalizada: boolean = false;
  produtosPedido: Product[] = [];


  ngOnInit() {
    this.iniciaTipoPagamentoFormGroup();
    this.obterPedido();
    this.removeDuplicateProducts();
    this.total = localStorage.getItem('valorTotal')!;
  }

  iniciaTipoPagamentoFormGroup() {
    this.tipoPagamentoForm = new FormGroup({
      tipoPagamento: new FormControl()
    });    
  }

  iniciaPagamentoCreditoForm() {
    this.creditoForm = new FormGroup({
      nome: new FormControl(null, Validators.required),
      numCartao: new FormControl(null, [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      cvc: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(4)]),
      numParcelas: new FormControl(null, Validators.required)
    });
    this.isPagamentoCredito = true;
    this.isPagamentoDebito = false;
    this.isPagamentoPix = false;
    this.isPagamentoCash = false;
  }

  iniciaPagamentoDebitoForm() {
    this.debitoForm = new FormGroup({
      nome: new FormControl(null, Validators.required),
      banco: new FormControl(null, Validators.required),
      agencia: new FormControl(null, Validators.required),
      conta: new FormControl(null, Validators.required),
      senha: new FormControl(null, [Validators.required, Validators.minLength(4)])
    });
    this.isPagamentoCredito = false;
    this.isPagamentoDebito = true;
    this.isPagamentoPix = false;
    this.isPagamentoCash = false;
  }

  iniciaPagamentoPix() {
    this.isPagamentoCredito = false;
    this.isPagamentoDebito = false;
    this.isPagamentoPix = true;
    this.isPagamentoCash = false;
  }

  iniciaPagamentoCash() {
    this.isPagamentoCredito = false;
    this.isPagamentoDebito = false;
    this.isPagamentoPix = false;
    this.isPagamentoCash = true;
  }

  categories: any[] = [
    { name: Pagamento.CREDITO, key: 'CREDITO' },
    { name: Pagamento.DEBITO, key: 'DEBITO' },
    { name: Pagamento.PIX, key: 'PIX' },
    { name: Pagamento.CASH, key: 'CASH' }
  ];

  selecionarTipoPagamento(tipoPagamento: any) {
    if(tipoPagamento.name === Pagamento.CREDITO) {
      this.iniciaPagamentoCreditoForm();
    }
    if(tipoPagamento.name === Pagamento.DEBITO) {
      this.iniciaPagamentoDebitoForm();
    }
    if(tipoPagamento.name === Pagamento.PIX) {
      this.iniciaPagamentoPix();
    }
    if(tipoPagamento.name === Pagamento.CASH) {
      this.iniciaPagamentoCash();
    }
    // this.iniciaPagamentoDebitoForm();
    // this.creditoForm.reset();
    // this.debitoForm.reset();
  }

  confirmarPagamento() {
    this.isCompraFinalizada = true;    
  }

  obterPedido() {
    const pedidoString = localStorage.getItem('pedido');
    this.badgeValue = localStorage.getItem('badgeValue')!;

    if (pedidoString) {
      this.pedido = JSON.parse(pedidoString);
    }    
  }

  removeDuplicateProducts(): void {
    const uniqueProducts = new Map<string, Product>();

    this.pedido.produtos?.forEach(product => {
        if (product.id && !uniqueProducts.has(product.id)) {
            uniqueProducts.set(product.id, product);
        }
    });

    this.produtosPedido = Array.from(uniqueProducts.values());    
  }
}
