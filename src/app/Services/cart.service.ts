import { Injectable } from '@angular/core';
import { Product } from '../product';  // Importar el modelo de Producto

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];  // Array de productos del carrito

  constructor() { }

  // Función para añadir un producto al carrito
  addToCart(product: Product) {
    this.items.push(product);
  }

  // Función para obtener los productos del carrito
  getItems() {
    return this.items;
  }

  // Función para vaciar el carrito
  clearCart() {
    this.items = [];
    return this.items;
  }
}