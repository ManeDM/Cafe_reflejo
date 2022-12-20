import { Injectable } from '@angular/core';
import { products } from 'src/app/products';


@Injectable({
  providedIn: 'root'
})
export class CartWievService {

  products=products;
  items: { id: number; name: string; price: number; weight: string; image: string; disponible: boolean; }[] = [];


  constructor() { }



  addToCart(product: { id: number; name: string; price: number; weight: string; image: string; disponible: boolean; }) {
    this.items.push(product);
  }

  RemoveToCart(){
    this.items=[];
    return this.items;
  }

  CartList(){
    return this.items
  }
}
