import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { SliderComponent } from './Shared/slider/slider.component';
import { AboutUsComponent } from './Shared/about-us/about-us.component';
import { FooterComponent } from './Shared/footer/footer.component';

import { HeroSectionComponent } from './Shared/hero-section/hero-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarritoComponent } from './Shared/carrito/carrito.component';
import { RoutingModule } from './app-routing.module';
import { ListCartComponent } from './Shared/list-cart/list-cart.component'
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AboutUsComponent,
    FooterComponent,
    HeroSectionComponent,
    
    CarritoComponent,
    ListCartComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    FormsModule,
    CommonModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
