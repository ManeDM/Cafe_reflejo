import { Component, OnInit } from '@angular/core';
import { CartWievService } from 'src/app/Services/cart-wiev.service';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.sass']
})
export class ListCartComponent implements OnInit{

  
  items:{ id: number; name: string; price: number; weight: string; image: string; }[]=[];
  constructor (private cart:CartWievService) {}

  ngOnInit(): void {
    this.items=this.cart.CartList();
    console.log(this.items)
  }

}
