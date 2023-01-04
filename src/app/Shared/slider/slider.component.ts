import { Component, OnInit,  } from "@angular/core";


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass'],

})

export class SliderComponent implements OnInit {
  currentSlide = 0;

  slides = [
    'assets/property/property_01.jpeg',
    'assets/property/property_02.jpeg',
    'assets/property/property_01.jpeg',
    'assets/property/property_02.jpeg',
    'assets/property/property_01.jpeg',
    'assets/property/property_02.jpeg',    
    
  ];

  constructor() { }

  ngOnInit() {
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}