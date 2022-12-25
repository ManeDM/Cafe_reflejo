import { Component, OnInit } from '@angular/core';
import { CartWievService } from 'src/app/Services/cart-wiev.service';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.sass']
})
export class ListCartComponent implements OnInit{

  
  items:{ id: number; name: string; price: number; weight: string; image: string; amount: number  }[]=[];
  totalPrice: number | undefined;
  constructor (private cart:CartWievService) {}

  ngOnInit(): void {
    this.items=this.cart.CartList();
    this.totalPrice = this.cart.totalPrice();
  }
  
  deleteProduct(product: { id: number; name: string; price: number; weight: string; image: string; amount: number }) {
    this.cart.removeFromCart(product);
    
    
  }
}
