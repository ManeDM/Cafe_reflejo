import { Component, OnInit } from '@angular/core';
import { CartWievService } from 'src/app/Services/cart-wiev.service';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.sass']
})
export class ListCartComponent implements OnInit{

  
  items:{ id: number; name: string; price: number; weight: string; image: string; amount: number; subtotal: number   }[]=[];
  totalPrice: number | undefined;
  constructor (public cart:CartWievService) {}

  ngOnInit(): void {
    this.items=this.cart.CartList();
    this.totalPrice = this.cart.totalPrice();
  }
  
  deleteProduct(product: { id: number; name: string; price: number; weight: string; image: string; amount: number; subtotal: number  }) {
    product.amount--;
    if (product.amount === 0) {
      this.items = this.items.filter((item) => item !== product);
    
  }
}
removeProduct(
  product: { id: number; name: string; price: number; weight: string; image: string; amount: number }
) {
  this.items = this.items.filter((item) => item.id !== product.id);
}
}