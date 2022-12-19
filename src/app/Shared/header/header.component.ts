import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  navClass: string = "menu-closed"; // Inicialmente, el menú está cerrado y se aplica la clase
  hidden: boolean = true; // Inicialmente, la lista de elementos del menú está oculta

  constructor() { }

  ngOnInit() { }

  toggleMenu() {
    this.navClass = this.navClass === "menu-closed" ? "" : "menu-closed";
    this.hidden = !this.hidden; // Al hacer clic en el botón, se muestra o se oculta la lista de elementos
  }
}