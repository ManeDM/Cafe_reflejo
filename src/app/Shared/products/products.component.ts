import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product'; // Importar el modelo de Producto
import { CartService } from '../../Services/cart.service';  // Importar el servicio del carrito

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];  // Array de productos

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = [
      new Product(1, 'Producto 1', 10),
      new Product(2, 'Producto 2', 20),
      new Product(3, 'Producto 3', 30)
    ];
  }

  // Función para añadir un producto al carrito
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}