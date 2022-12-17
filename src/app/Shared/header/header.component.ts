import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  menuButton: ElementRef;
  menu: ElementRef;

  constructor (private elementRef: ElementRef)

  ngOnInit() {
    this.menuButton = document.querySelector('menu-button');
    this.menu = document.querySelector('.list__items');
    this.menuButton.addEventListener('click', () => {
      this.menu.classList.toggle('.open');
    });
  }
}