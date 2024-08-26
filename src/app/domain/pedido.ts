import { Product } from "./product";

export interface Pedido {
    id?: string;
    produtos?: Product[];
}