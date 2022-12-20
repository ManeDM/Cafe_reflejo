import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';
import { CartWievService } from 'src/app/Services/cart-wiev.service';

@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.sass']
})
export class CarritoComponent implements OnInit {

  products=products;
  cart=new CartWievService();

  constructor() {}

  ngOnInit(): void {

  }

  addToCart(product: { id: number; name: string; price: number; weight: string; image: string; disponible: boolean; }) {
    this.cart.addToCart(product);
    window.alert('Producto agregado' + product.name + product.weight)
  }

}
