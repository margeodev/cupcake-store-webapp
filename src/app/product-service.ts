import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './domain/product';
    
@Injectable({
    providedIn: 'root'  // Isso garante que o serviço seja fornecido na raiz da aplicação
  })
export class ProductService {

    badgeValue = 0;

    getProductsData() {
        return [
            {
                id: '1',
                code: '001',
                quantity: 0,
                name: 'Cupcake Red Velvet',
                description: 'Um clássico irresistível com massa vermelha aveludada, cobertura de cream cheese e um toque de cacau.',
                image: 'cupcake_01.jpg',
                price: 10
            },
            {
                id: '2',
                code: '002',
                quantity: 0,
                name: 'Cupcake de Chocolate Belga:',
                description: 'Uma explosão de sabor com massa de chocolate intenso e cobertura de ganache de chocolate belga',
                image: 'cupcake_02.jpg',
                price: 15
            },
            {
                id: '3',
                code: '003',
                quantity: 0,
                name: 'Cupcake de Limão Siciliano',
                description: 'Refrescante e cítrico, com massa de limão e um toque de raspas de limão na cobertura',
                image: 'cupcake_03.jpg',
                price: 15
            },
            {
                id: '4',
                code: '004',
                quantity: 0,
                name: 'Cupcake de Caramelo Salgado',
                description: 'A combinação perfeita entre doçura e salinidade, com massa de caramelo e cobertura de creme de caramelo salgado',
                image: 'cupcake_04.jpg',
                price: 12
            },
            {
                id: '5',
                code: '005',
                quantity: 0,
                name: 'Cupcake de Morango com Chantilly',
                description: 'Leve e frutado, com massa de morango e uma generosa camada de chantilly por cima',
                image: 'cupcake_05.jpg',
                price: 15
            },
            {
                id: '6',
                code: '006',
                quantity: 0,
                name: 'Cupcake de Baunilha Bourbon',
                description: 'Delicado e aromático, com massa de baunilha enriquecida com um toque de bourbon',
                image: 'cupcake_06.jpg',
                price: 18
            },
            {
                id: '7',
                code: '007',
                quantity: 0,
                name: 'Cupcake de Amêndoa e Framboesa',
                description: 'Uma combinação sofisticada, com massa de amêndoa e uma geleia de framboesa no topo',
                image: 'cupcake_07.jpg',
                price: 20
            },
            {
                id: '8',
                code: '008',
                quantity: 0,
                name: 'Cupcake de Café com Chocolate',
                description: 'Para os amantes de café, com massa de café e uma ganache de chocolate amargo',
                image: 'cupcake_08.jpg',
                price: 20
            },
            {
                id: '9',
                code: '009',
                quantity: 0,
                name: 'Cupcake de Coco Tostado',
                description: 'Textura macia e sabor tropical, com massa de coco e um toque de coco tostado na cobertura',
                image: 'cupcake_09.jpg',
                price: 15
            }           
        ];
    }

    getProducts(): Observable<Product[]> {
        const products = this.getProductsData().slice(0, 9);
        return of(products);
    }

};