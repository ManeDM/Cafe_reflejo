import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';  // Importar el servicio del carrito

@Component({
  selector: 'view-cart',
  templateUrl: './wiev-cart.component.html',
  styleUrls: ['./wiev-cart.component.sass']
})
export class ViewCartComponent implements OnInit {

  items: any[] = [];  // Array de productos del carrito

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Obtener los elementos del carrito al cargar el componente
    this.items = this.cartService.getItems();
  }
}