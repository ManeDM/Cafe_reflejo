import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  menuButton: HTMLElement:
  menur: HTMLElement;

  ngOnInit() {
    this.menuButton = document.querySelector('menu-button');
    this.menu = document.querySelector('.list__items');
    this.menuButton.addEventListener('click', () => {
      this.menu.classList.toggle('.open');
    });
  }
}