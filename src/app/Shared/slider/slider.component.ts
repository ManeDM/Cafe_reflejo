import { Component, OnInit,  } from "@angular/core";


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass'],

})

export class SliderComponent implements OnInit {
  slideIndex = 1;

  ngOnInit(): void {

    this.showSlides();
    setInterval(() => {
    const slides: NodeListOf<HTMLElement> = document.querySelectorAll('.slide');

      for (let i = 0; i < slides.length; i++) {
        if (slides[i].style.left === '0px') {
          if (i === slides.length - 1) {
            this.slideIndex = 1;
          } else {
            this.slideIndex = i + 2;
          }
          break;
        }
      }

      this.showSlides();
    }, 3000);
  }

  showSlides() {
    const slides: NodeListOf<HTMLElement> = document.querySelectorAll('.slide');
    const dots: NodeListOf<HTMLElement> = document.querySelectorAll('.dot');
  
    // Oculta todas las imágenes
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
  
    // Muestra la imagen seleccionada
    slides[this.slideIndex - 1].style.display = 'block';
  
    // Actualiza la clase 'active' del punto
    dots.forEach(dot => dot.classList.remove('active'));
    dots[this.slideIndex - 1].classList.add('active');
  
  }

  prevSlide() {
    this.slideIndex--;
    if (this.slideIndex < 1) {
      this.slideIndex = 3;
    }
    this.showSlides();
  }
  
  nextSlide() {
    this.slideIndex++;
    if (this.slideIndex > 3) {
      this.slideIndex = 1;
    }
    this.showSlides();
  }
}