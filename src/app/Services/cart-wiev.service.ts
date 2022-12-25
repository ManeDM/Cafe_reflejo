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

  removeFromCart(product: { id: number; name: string; price: number; weight: string; image: string; amount: number }) {
    const index = this.items.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.items[index].amount--;
      if (this.items[index].amount === 0) {
        this.items.splice(index, 1);
      }
    }
  }
 
  totalPrice() {
    return this.items.reduce((total, item) => total + item.price * item.amount, 0);
  }

  CartList(){
    return this.items
  }
}
