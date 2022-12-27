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
  allProducts = products;
    
  selectedCategory: string = '';
 

  constructor(private cart:CartWievService) {
    
  }
    
  ngOnInit(): void {}


  addToCart(product: { id: number; name: string; price: number; weight: string; image: string; amount: number; subtotal: number;   }) {
  this.cart.addToCart(product);
  window.alert('Producto agregado' + product.name + product.weight)
}

filterProducts() {
  if (this.selectedCategory === '') {
    this.products = this.allProducts;
  } else {
    this.products = this.allProducts.filter(product => product.category === this.selectedCategory);
  }
}

}

