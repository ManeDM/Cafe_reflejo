import { Injectable } from '@angular/core';
import { products } from 'src/app/products';


@Injectable({
  providedIn: 'root'
})
export class CartWievService {
  

  products=products;
  items: { id: number; name: string; price: number; weight: string; image: string; amount: number  }[] = [];
  


  constructor() { }



  addToCart(product: { id: number; name: string; price: number; weight: string; image: string; amount: number }) {
    let found = false
    
    this.items.forEach((element)=>{
      
      if(element.id==product.id){
       /*console.log("encontrado" + element.id)*/
       found=true;
       element.amount+=1
      }
    });

    if(!found)
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
