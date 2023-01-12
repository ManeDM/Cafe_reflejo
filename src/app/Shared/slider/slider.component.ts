import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";


import SwiperCore, { Navigation } from "swiper";


SwiperCore.use([Navigation]);

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass'],
  encapsulation: ViewEncapsulation.None,

})

export class SliderComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  
}
