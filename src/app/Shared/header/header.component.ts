import { Component,
  OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
  
  @Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
  })
  export class HeaderComponent implements AfterViewInit {
  
  @ViewChild('menuButton', { static: true }) menuButton!: ElementRef;
  @ViewChild('menuItems', { static: true })  menu!: ElementRef;
  
  constructor() { }
  
  ngAfterViewInit() {
  this.menuButton.nativeElement.addEventListener('click', () => {
  this.menu.nativeElement.classList.toggle('open')
  });
  }
  }